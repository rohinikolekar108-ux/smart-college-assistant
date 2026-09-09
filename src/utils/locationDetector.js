import { locations } from '../data/locations'

export function detectLocation(question = '') {
  const normalized = question.toLowerCase()
  const isLocationQuery = /\b(where|location|located|find)\b/.test(normalized)
  const location = locations.find((item) => item.aliases.some((alias) => normalized.includes(alias)))
  return { isLocationQuery, location: isLocationQuery ? location ?? null : null }
}
