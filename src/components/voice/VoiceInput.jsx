import { Mic, MicOff } from 'lucide-react'
import Button from '../common/Button'
import VoiceWaveform from './VoiceWaveform'
import SpeechStatus from './SpeechStatus'
import { useCounselling } from '../../context/CounsellingContext'
export default function VoiceInput() { const { listening, startVoiceInput, stopVoiceInput, error } = useCounselling(); return <div className="voice-control"><Button className={`mic-button ${listening ? 'listening' : ''}`} onClick={listening ? stopVoiceInput : startVoiceInput} aria-label={listening ? 'Stop listening' : 'Start microphone'}>{listening ? <MicOff size={27} /> : <Mic size={27} />}<span>{listening ? 'Listening...' : 'Tap to Speak'}</span></Button><VoiceWaveform active={listening} /><SpeechStatus listening={listening} error={error} /></div> }
