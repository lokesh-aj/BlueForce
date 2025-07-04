import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import VolunteerHomePage from './pages/VolunteerHomePage'
import VolunteerDashboard from './pages/VolunteerDashboard'
import AllEnrolledEvent from './pages/AllEnrolledEvent'
import CreateEvent from './pages/admin/CreateEvent'
import LogWaste from './pages/LogWaste'
import ScanQR from './pages/ScanQR'
import CreateQR from './pages/CreateQR'
import EventEnroll from './pages/EventEnroll'
import './App.css'
import EventEnroll from './pages/EventEnroll'

function App() {
  return (
    <Router>
      <div id="root">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<VolunteerHomePage />} />
          <Route path="/events/:id" element={<EventEnroll />} />
          <Route path="/volunteerProfile" element={<VolunteerDashboard />} />
          <Route path="/allEnrolledEvent" element={<AllEnrolledEvent />} />
          <Route path="/admin/createEvent" element={<CreateEvent />} />
          <Route path="/scan-qr" element={<ScanQR />} />
          <Route path="/log-waste" element={<LogWaste />} />
          <Route path="/create-qr" element={<CreateQR />} />
          <Route path="/event/:id" element={<EventEnroll />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
