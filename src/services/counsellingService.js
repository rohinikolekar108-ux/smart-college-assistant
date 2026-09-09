import { counsellingKnowledgeBase } from '../data/counsellingKnowledgeBase'
import { detectCategory } from '../utils/categoryDetector'
import { detectLocation } from '../utils/locationDetector'

const normalize = (value) => value.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim()

export function askCounsellingQuestion(question) {
  const normalized = normalize(question)
  const category = detectCategory(normalized)
  let bestMatch = null
  let bestScore = 0
  counsellingKnowledgeBase.forEach((entry) => {
    const score = entry.keywords.reduce((total, keyword) => total + (normalized.includes(keyword) ? 1 : 0), 0)
    if (score > bestScore) {
      bestScore = score
      bestMatch = entry
    }
  })
  const locationResult = detectLocation(normalized)
  if (!bestMatch || bestScore === 0) {
    return { answer: "I'm sorry, I couldn't find that information in the college knowledge base.", category, confidence: 0, location: null, found: false }
  }
  const confidence = Math.min(0.98, 0.55 + bestScore * 0.12)
  return { answer: bestMatch.answer, category: bestMatch.category, confidence, location: locationResult.location, found: true }
}
