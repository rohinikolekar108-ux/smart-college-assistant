import { Mic2 } from 'lucide-react'
export default function SpeechStatus({ listening, error }) { if (error) return <p className="speech-error">{error}</p>; return <p className={`speech-status ${listening ? 'is-listening' : ''}`}><Mic2 size={14} />{listening ? 'Listening...' : 'Voice input is ready'}</p> }
