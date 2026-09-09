import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CounsellingProvider } from './context/CounsellingContext'
import DashboardLayout from './components/layout/DashboardLayout'
import Dashboard from './pages/Dashboard'
import StudentCounselling from './pages/StudentCounselling'
import CareerRecommendation from './pages/CareerRecommendation'
import SmartCollegeMap from './pages/SmartCollegeMap'
import NotFound from './pages/NotFound'

export default function App() {
  return <BrowserRouter><CounsellingProvider><Routes><Route element={<DashboardLayout />}><Route path="/" element={<Navigate to="/student-counselling" replace />} /><Route path="/dashboard" element={<Dashboard />} /><Route path="/student-counselling" element={<StudentCounselling />} /><Route path="/career-recommendation" element={<CareerRecommendation />} /><Route path="/smart-college-map" element={<SmartCollegeMap />} /></Route><Route path="*" element={<NotFound />} /></Routes></CounsellingProvider></BrowserRouter>
}
