const labels = { idle: 'Ready to help', listening: 'Listening now', thinking: 'Searching the knowledge base', speaking: 'Speaking your answer', error: 'Voice input needs attention' }
export default function AvatarStatus({ state }) { return <div className="avatar-status"><span className={`status-dot ${state}`} />{labels[state]}</div> }
