import ChatMessage from './ChatMessage'
import TypingIndicator from './TypingIndicator'
import { useCounselling } from '../../context/CounsellingContext'
export default function ChatWindow() { const { messages, processing } = useCounselling(); return <div className="chat-window" aria-live="polite">{messages.map((message) => <ChatMessage key={message.id} message={message} />)}{processing && <TypingIndicator />}</div> }
