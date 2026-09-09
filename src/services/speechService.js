let recognition

export function startListening({ onResult, onStart, onEnd, onError } = {}) {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition
  if (!Recognition) {
    onError?.('unsupported')
    return null
  }
  recognition?.abort()
  recognition = new Recognition()
  recognition.continuous = false
  recognition.interimResults = false
  recognition.lang = 'en-IN'
  recognition.onstart = () => onStart?.()
  recognition.onresult = (event) => onResult?.(event.results[0][0].transcript.trim())
  recognition.onerror = (event) => onError?.(event.error || 'unknown')
  recognition.onend = () => onEnd?.()
  recognition.start()
  return recognition
}

export function stopListening() {
  recognition?.stop()
  recognition = null
}

export function speakText(text, onEnd) {
  if (!('speechSynthesis' in window)) {
    onEnd?.()
    return
  }
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'en-IN'
  utterance.rate = 0.95
  utterance.onend = () => onEnd?.()
  window.speechSynthesis.speak(utterance)
}

export function stopSpeaking() {
  window.speechSynthesis?.cancel()
}

export function replayText(text, onEnd) {
  speakText(text, onEnd)
}
