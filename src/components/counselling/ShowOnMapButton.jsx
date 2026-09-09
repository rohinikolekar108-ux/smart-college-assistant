import { MapPinned } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from '../common/Button'
export default function ShowOnMapButton({ location }) { const navigate = useNavigate(); return <Button className="map-button" onClick={() => navigate('/smart-college-map', { state: { location } })} aria-label="Show location on map"><MapPinned size={17} />Show on Map</Button> }
