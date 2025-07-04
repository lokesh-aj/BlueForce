import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import VolunteerHomePage from './pages/VolunteerHomePage'
import EventEnroll from './pages/EventEnroll'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<VolunteerHomePage />} />
        {/* Change the path here to match the Link: /events/enroll/:id */}
        <Route path="/events/enroll/:id" element={<EventEnroll />} />
      </Routes>
    </Router>
  )
}

export default App
