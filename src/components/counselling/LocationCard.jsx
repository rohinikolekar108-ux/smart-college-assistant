import { MapPin } from 'lucide-react'
import Card from '../common/Card'
import ShowOnMapButton from './ShowOnMapButton'
export default function LocationCard({ location }) { if (!location) return null; return <Card className="location-card"><div className="location-heading"><MapPin size={18} /><strong>{location.name}</strong></div><dl><div><dt>Building</dt><dd>{location.building}</dd></div><div><dt>Floor</dt><dd>{location.floor}</dd></div><div><dt>Room</dt><dd>{location.room}</dd></div></dl><ShowOnMapButton location={location} /></Card> }
