import { Blocks, BookOpen, BriefcaseBusiness, Building2, BusFront, GraduationCap, House, MapPin, WalletCards } from 'lucide-react'
import { quickQuestions } from '../../data/quickQuestions'
import { useCounselling } from '../../context/CounsellingContext'
const icons = { Building2, GraduationCap, BookOpen, MapPin, WalletCards, Blocks, House, BusFront, BriefcaseBusiness }
export default function QuickQuestions() { const { askQuestion } = useCounselling(); return <div className="quick-section"><div className="section-kicker">Start with a topic</div><div className="quick-grid">{quickQuestions.map((item) => { const Icon = icons[item.icon]; return <button className="quick-question" key={item.label} onClick={() => askQuestion(item.question)}><Icon size={17} /><span>{item.label}</span></button> })}</div></div> }
