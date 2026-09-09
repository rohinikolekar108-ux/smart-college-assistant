import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowUp, Bot, RotateCcw, Sparkles, UserRound } from 'lucide-react'
import {
  BRANCH_INTERESTS,
  EXAM_LABELS,
  FUTURE_SCOPE,
  FEE_STRUCTURE,
  formatNumber,
  generateTopRecommendations,
  getCutoff,
  getEligibleBranches,
} from '../services/recommenderService'
import './CareerRecommendation.css'

const initialMessages = [
  {
    id: 'welcome',
    role: 'assistant',
    text: 'Hi! I can help you find an engineering branch at SVPM based on your entrance exam result and your interests.',
  },
  {
    id: 'exam-question',
    role: 'assistant',
    text: 'Which entrance exam did you take?',
    choices: [
      { label: 'MHT-CET', value: 'MHTCET' },
      { label: 'JEE Main', value: 'JEEMAIN' },
      { label: 'Maharashtra JEE', value: 'MAHAJEE' },
    ],
  },
]

function Message({ message, onSelectRecommendation }) {
  const isAssistant = message.role === 'assistant'
  const selectedRecommendation = message.selectedRecommendation || (message.recommendations?.[0] ?? null)
  return (
    <article className={`recommend-message ${message.role}`}>
      <div className="recommend-avatar">
        {isAssistant ? <Bot size={16} /> : <UserRound size={16} />}
      </div>
      <div className="recommend-message-body">
        <div className="recommend-meta">
          <strong>{isAssistant ? 'SVPM Assistant' : 'You'}</strong>
          <span>{message.time}</span>
        </div>
        <p>{message.text}</p>
        {message.branches?.length > 0 && (
          <div className="eligible-list">
            {message.branches.map((branch) => <span key={branch}>{branch}</span>)}
          </div>
        )}

        {message.recommendations?.length > 0 && (
          <div className="recommendation-card-list">
            {message.recommendations.map((recommendation, index) => (
              <button
                key={recommendation.branch}
                type="button"
                className={`recommendation-result-row ${message.selectedRecommendation?.branch === recommendation.branch ? 'active' : ''}`}
                onClick={() => onSelectRecommendation?.(recommendation)}
              >
                <span className="recommendation-rank">{index + 1}</span>
                <span className="recommendation-result-content">
                  <span className="recommendation-result-title">{recommendation.branch}</span>
                  <span className="recommendation-result-meta">Match: {recommendation.match}%</span>
                </span>
                <Sparkles size={14} />
              </button>
            ))}

            {selectedRecommendation && (
              <div className="recommendation-detail-panel">
                <div className="recommendation-detail-header">
                  <span className="section-kicker">DETAILS</span>
                  <span className="detail-match">Match {selectedRecommendation.match}%</span>
                </div>
                <h3>{selectedRecommendation.branch}</h3>
                <p className="recommendation-why">{selectedRecommendation.whyRecommended}</p>

                <div className="recommendation-detail-metrics">
                  <div><span>Interest match</span><strong>{selectedRecommendation.interestMatch}%</strong></div>
                  <div><span>Academic match</span><strong>{selectedRecommendation.academicMatch}%</strong></div>
                  <div><span>Skill match</span><strong>{selectedRecommendation.skillMatch}%</strong></div>
                  <div><span>Career match</span><strong>{selectedRecommendation.careerMatch}%</strong></div>
                  <div><span>Eligibility</span><strong>✓ Eligible</strong></div>
                  <div><span>Future scope</span><strong>{selectedRecommendation.futureScope}%</strong></div>
                </div>

                <div className="recommendation-detail-columns">
                  <div className="recommendation-detail-block">
                    <span className="detail-label">Required skills</span>
                    <ul className="detail-list">
                      {(selectedRecommendation.requiredSkills || []).map((skill) => <li key={skill}>{skill}</li>)}
                    </ul>
                  </div>

                  <div className="recommendation-detail-block">
                    <span className="detail-label">Skill gaps</span>
                    <ul className="detail-list skill-gap-list">
                      {(selectedRecommendation.skillGaps || []).map((gap) => (
                        <li key={gap.skill}><span>{gap.skill}</span><span>{gap.level}% {gap.status}</span></li>
                      ))}
                    </ul>
                  </div>

                  <div className="recommendation-detail-block">
                    <span className="detail-label">Career opportunities</span>
                    <ul className="detail-list">
                      {(selectedRecommendation.careerOpportunities || []).map((career) => <li key={career}>{career}</li>)}
                    </ul>
                  </div>

                  <div className="recommendation-detail-block">
                    <span className="detail-label">Recommended projects</span>
                    <ul className="detail-list">
                      {(selectedRecommendation.recommendedProjects || []).map((project) => <li key={project}>{project}</li>)}
                    </ul>
                  </div>

                  <div className="recommendation-detail-block">
                    <span className="detail-label">Learning roadmap</span>
                    <div className="roadmap-list">
                      {Object.entries(selectedRecommendation.learningRoadmap || {}).map(([year, items]) => (
                        <div className="roadmap-year" key={year}>
                          <span>{year}:</span>
                          <div>{items.join(' + ')}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="recommendation-detail-foot">
                  <span><strong>Eligibility:</strong> ✅ Eligible</span>
                  <span><strong>Cutoff used:</strong> {selectedRecommendation.cutoffLabel}</span>
                  <span><strong>Estimated fee:</strong> {FEE_STRUCTURE.default.total} ({FEE_STRUCTURE.default.duration})</span>
                  <span><strong>Future scope:</strong> {FUTURE_SCOPE[selectedRecommendation.branch]}</span>
                  <small>{FEE_STRUCTURE.default.note}</small>
                </div>
              </div>
            )}
          </div>
        )}
        {message.choices?.length > 0 && (
          <div className="recommend-choices">
            {message.choices.map((choice) => (
              <button key={choice.value} type="button" onClick={() => message.onChoice?.(choice.value)} disabled={message.disabled}>
                {choice.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default function CareerRecommendation() {
  const [messages, setMessages] = useState(initialMessages)
  const [exam, setExam] = useState(null)
  const [score, setScore] = useState('')
  const [lastScore, setLastScore] = useState(null)
  const [eligible, setEligible] = useState([])
  const [interests, setInterests] = useState('')
  const [stage, setStage] = useState('exam')
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)

  const interestSuggestions = useMemo(() => {
    if (!eligible.length) return []
    const seen = new Set()
    eligible.forEach((branch) => BRANCH_INTERESTS[branch].forEach((item) => seen.add(item)))
    return [...seen].slice(0, 8)
  }, [eligible])

  useEffect(() => {
    const node = scrollRef.current
    if (node) node.scrollTop = node.scrollHeight
  }, [messages, typing])

  const stamp = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  const addMessage = (role, text, extra = {}) => {
    setMessages((current) => [...current, { id: `${Date.now()}-${Math.random()}`, role, text, time: stamp(), ...extra }])
  }

  const botReply = (text, extra = {}, nextStage) => {
    setTyping(true)
    window.setTimeout(() => {
      setTyping(false)
      addMessage('assistant', text, extra)
      if (nextStage) setStage(nextStage)
    }, 350)
  }

  const chooseExam = (value) => {
    if (stage !== 'exam') return
    setExam(value)
    addMessage('user', EXAM_LABELS[value])
    botReply(
      value === 'MHTCET'
        ? 'Great. What is your MHT-CET percentile?'
        : `Great. What is your ${value === 'JEEMAIN' ? 'JEE Main' : 'Maharashtra JEE Main'} rank?`,
      {},
      'score',
    )
  }

  const handleRecommendationSelection = (messageId, recommendation) => {
    setMessages((current) => current.map((message) => (
      message.id === messageId
        ? { ...message, selectedRecommendation: recommendation }
        : message
    )))
  }

  const submitScore = () => {
    const numeric = Number(score)
    if (!Number.isFinite(numeric) || score.trim() === '') {
      addMessage('assistant', exam === 'MHTCET' ? 'Please enter a valid percentile, for example 78.5.' : 'Please enter a valid rank, for example 45000.')
      return
    }
    if (exam === 'MHTCET' && (numeric < 0 || numeric > 100)) {
      addMessage('assistant', 'MHT-CET percentile should be between 0 and 100. Please try again.')
      return
    }
    if (exam !== 'MHTCET' && numeric < 1) {
      addMessage('assistant', 'Rank should be a positive whole number. Please try again.')
      return
    }

    const branches = getEligibleBranches(exam, numeric)
    setEligible(branches)
    setLastScore({ exam, value: numeric })
    addMessage('user', exam === 'MHTCET' ? `Percentile: ${numeric}` : `Rank: ${formatNumber(numeric)}`)
    setScore('')

    if (!branches.length) {
      botReply(
        'Based on the entered result, you may not get any of the listed branches at SVPM this year. Every engineering field is useful for society and its development.',
        {},
        'done',
      )
      return
    }

    botReply(
      'Based on your result, these are the branches you are likely eligible for at SVPM. Now tell me what interests you most.',
      { branches },
      'interests',
    )
  }

  const submitInterests = (value = input) => {
    const cleaned = value.split(',').map((item) => item.trim()).filter(Boolean)
    if (!cleaned.length) {
      addMessage('assistant', 'Tell me at least one interest, such as coding, AI, robotics, hardware, design, or mechanical.')
      return
    }

    setInterests(cleaned.join(', '))
    addMessage('user', cleaned.join(', '))

    if (!lastScore || !lastScore.exam || !lastScore.value) {
      addMessage('assistant', 'Please enter your exam result before choosing an interest.')
      return
    }

    const recommendations = generateTopRecommendations(lastScore.exam, lastScore.value, cleaned, eligible)

    const topResults = recommendations.map((item) => {
      const cutoff = getCutoff(lastScore.exam, item.branch)
      return {
        ...item,
        cutoffLabel: lastScore.exam === 'MHTCET' ? `${cutoff} percentile` : `Rank ${formatNumber(cutoff)} or better`,
      }
    })

    const selected = topResults[0]
    const message = {
      id: `recommend-${Date.now()}`,
      role: 'assistant',
      text: `Based on your ${EXAM_LABELS[lastScore.exam]} result and interests, these are the top career recommendations:`,
      time: stamp(),
      recommendations: topResults,
      selectedRecommendation: selected,
    }

    setMessages((current) => [...current, message])
    setMessages((current) => current.map((entry) => entry.id === message.id ? { ...entry, selectedRecommendation: selected } : entry))
    setInput('')
    setStage('done')
  }

  const reset = () => {
    setMessages(initialMessages)
    setExam(null)
    setScore('')
    setEligible([])
    setInterests('')
    setStage('exam')
    setInput('')
    setTyping(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (stage === 'score') submitScore()
    else if (stage === 'interests') submitInterests()
  }

  const placeholder = stage === 'score'
    ? exam === 'MHTCET' ? 'Enter percentile, e.g. 78.5' : 'Enter rank, e.g. 45000'
    : stage === 'interests' ? 'e.g. coding, AI, web'
      : 'Choose an exam above'

  return (
    <div className="recommendation-page">
      <div className="recommendation-heading">
        <span className="eyebrow">SVPM • SMART GUIDANCE</span>
        <div className="recommendation-heading-row">
          <div>
            <h1>Career Recommendation</h1>
            <p>Chat with the assistant to find an engineering branch that matches your result and interests.</p>
          </div>
          <button className="recommend-reset" type="button" onClick={reset} title="Start a new recommendation">
            <RotateCcw size={16} /> New recommendation
          </button>
        </div>
      </div>

      <section className="recommendation-shell">
        <div className="recommendation-chat-header">
          <div>
            <span className="section-kicker">CAREER BOT</span>
            <h2>SVPM Engineering Branch Recommender</h2>
          </div>
          <span className="recommend-online"><i /> Online</span>
        </div>

        <div className="recommendation-chat" ref={scrollRef}>
          {messages.map((message) => (
            <Message key={message.id} message={message} onSelectRecommendation={(recommendation) => handleRecommendationSelection(message.id, recommendation)} />
          ))}
          {typing && <div className="recommend-typing"><i /><i /><i /> Thinking...</div>}
        </div>

        {stage === 'exam' && (
          <div className="recommend-quick-actions">
            {initialMessages[1].choices.map((choice) => (
              <button key={choice.value} type="button" onClick={() => chooseExam(choice.value)}>
                {choice.label}
              </button>
            ))}
          </div>
        )}

        {stage === 'interests' && interestSuggestions.length > 0 && (
          <div className="interest-suggestions">
            <span>Quick interests:</span>
            {interestSuggestions.map((interest) => (
              <button key={interest} type="button" onClick={() => {
                const next = input ? `${input}, ${interest}` : interest
                setInput(next)
              }}>
                {interest}
              </button>
            ))}
          </div>
        )}

        <form className="recommend-input" onSubmit={handleSubmit}>
          <input
            value={stage === 'score' ? score : stage === 'interests' ? input : ''}
            onChange={(event) => stage === 'score' ? setScore(event.target.value) : setInput(event.target.value)}
            placeholder={placeholder}
            disabled={stage === 'exam' || stage === 'done' || typing}
            aria-label={placeholder}
          />
          <button type="submit" disabled={stage === 'exam' || stage === 'done' || typing || !((stage === 'score' ? score : input).trim())} aria-label="Send">
            <ArrowUp size={18} />
          </button>
        </form>

        {stage === 'done' && (
          <div className="recommend-finished">
            <span>Recommendation complete.</span>
            <button type="button" onClick={reset}>Start again</button>
          </div>
        )}
      </section>

      {eligible.length > 0 && (
        <div className="recommendation-summary">
          <div>
            <span>Eligible branches</span>
            <strong>{eligible.length}</strong>
          </div>
          <div>
            <span>Exam</span>
            <strong>{EXAM_LABELS[exam]}</strong>
          </div>
          {interests && (
            <div>
              <span>Your interests</span>
              <strong>{interests}</strong>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
