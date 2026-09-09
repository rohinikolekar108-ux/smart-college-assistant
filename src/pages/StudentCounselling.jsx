import AIAvatar from '../components/avatar/AIAvatar'
import VoiceInput from '../components/voice/VoiceInput'
import ChatWindow from '../components/chat/ChatWindow'
import ChatInput from '../components/chat/ChatInput'
import QuickQuestions from '../components/counselling/QuickQuestions'
import LocationCard from '../components/counselling/LocationCard'
import CounsellingWelcome from '../components/counselling/CounsellingWelcome'
import { useCounselling } from '../context/CounsellingContext'
export default function StudentCounselling() { const { avatarState, currentLocation } = useCounselling(); return <div className="counselling-page"><CounsellingWelcome /><div className="counselling-grid"><section className="assistant-column"><AIAvatar state={avatarState} /><VoiceInput /></section><section className="conversation-column"><div className="conversation-header"><div><span className="section-kicker">LIVE CONVERSATION</span><h2>Your college guide</h2></div><span className="online-pill"><i />Online</span></div><ChatWindow /><LocationCard location={currentLocation} /><ChatInput /></section></div><QuickQuestions /></div> }
