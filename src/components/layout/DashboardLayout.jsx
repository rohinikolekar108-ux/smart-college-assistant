import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
export default function DashboardLayout() { const [open, setOpen] = useState(false); return <div className="app-shell"><Sidebar open={open} onClose={() => setOpen(false)} />{open && <button className="sidebar-scrim" onClick={() => setOpen(false)} aria-label="Close navigation" />}<div className="main-shell"><Topbar onMenu={() => setOpen(true)} /><main className="page-content"><Outlet /></main></div></div> }
