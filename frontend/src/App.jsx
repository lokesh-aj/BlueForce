import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import VolunteerHomePage from './pages/VolunteerHomePage'
import EventEnroll from './pages/EventEnroll'
import './App.css'

function App() {
  return (
    <Router>
      <div id="root">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/volunteer" element={<VolunteerHomePage />} />
          <Route path="/events/enroll/:id" element={<EventEnroll />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
