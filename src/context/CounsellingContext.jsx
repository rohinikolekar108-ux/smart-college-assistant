import { createContext, useContext, useState } from 'react'
import { askCounsellingQuestion } from '../services/counsellingService'
import { replayText, speakText, startListening, stopListening, stopSpeaking } from '../services/speechService'
import { AVATAR_STATES } from '../constants'

const CounsellingContext = createContext(null)

export function CounsellingProvider({ children }) {
  const [messages, setMessages] = useState([])
  const [transcript, setTranscript] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState('')
  const [currentAnswer, setCurrentAnswer] = useState(null)
  const [currentLocation, setCurrentLocation] = useState(null)
  const [avatarState, setAvatarState] = useState(AVATAR_STATES.IDLE)
  const [listening, setListening] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [speaking, setSpeaking] = useState(false)
  const [error, setError] = useState('')

  const handleSpeechError = (reason) => {
    setListening(false)
    setAvatarState(AVATAR_STATES.ERROR)
    const message = reason === 'unsupported' ? 'Voice input is not supported in this browser. Please type your question instead.' : reason === 'not-allowed' ? 'Microphone permission is required for voice counselling.' : "I couldn't hear your question. Please try again."
    setError(message)
    setTimeout(() => setAvatarState(AVATAR_STATES.IDLE), 2200)
  }

  const startVoiceInput = () => {
    setError('')
    setTranscript('')
    setListening(true)
    setAvatarState(AVATAR_STATES.LISTENING)
    startListening({
      onStart: () => setListening(true),
      onResult: (text) => { setTranscript(text); setListening(false); askQuestion(text) },
      onError: handleSpeechError,
      onEnd: () => setListening(false),
    })
  }

  const stopVoiceInput = () => { stopListening(); setListening(false); setAvatarState(AVATAR_STATES.IDLE) }

  const askQuestion = (question) => {
    const cleanQuestion = question.trim()
    if (!cleanQuestion) { handleSpeechError('empty'); return }
    stopListening()
    setCurrentQuestion(cleanQuestion)
    setMessages((items) => [...items, { id: `${Date.now()}-user`, role: 'user', text: cleanQuestion, timestamp: new Date().toISOString() }])
    setProcessing(true)
    setAvatarState(AVATAR_STATES.THINKING)
    setError('')
    window.setTimeout(() => {
      const result = askCounsellingQuestion(cleanQuestion)
      const assistantMessage = { id: `${Date.now()}-assistant`, role: 'assistant', text: result.answer, timestamp: new Date().toISOString(), location: result.location }
      setCurrentAnswer(result)
      setCurrentLocation(result.location)
      setMessages((items) => [...items, assistantMessage])
      setProcessing(false)
      setSpeaking(true)
      setAvatarState(AVATAR_STATES.SPEAKING)
      speakText(result.answer, () => { setSpeaking(false); setAvatarState(AVATAR_STATES.IDLE) })
    }, 650)
  }

  const replayAnswer = () => { if (currentAnswer?.answer) { setSpeaking(true); setAvatarState(AVATAR_STATES.SPEAKING); replayText(currentAnswer.answer, () => { setSpeaking(false); setAvatarState(AVATAR_STATES.IDLE) }) } }
  const stopAnswer = () => { stopSpeaking(); setSpeaking(false); setAvatarState(AVATAR_STATES.IDLE) }

  return <CounsellingContext.Provider value={{ messages, transcript, currentQuestion, currentAnswer, currentLocation, avatarState, listening, processing, speaking, error, startVoiceInput, stopVoiceInput, askQuestion, replayAnswer, stopAnswer }}>{children}</CounsellingContext.Provider>
}

export function useCounselling() {
  return useContext(CounsellingContext)
}
