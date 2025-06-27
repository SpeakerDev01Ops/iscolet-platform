import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import CreateGig from './pages/CreateGig';
import BrowseGigs from './pages/BrowseGigs'; // ✅ New import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-gig" element={<CreateGig />} />
        <Route path="/browse-gigs" element={<BrowseGigs />} /> {/* ✅ New route */}
      </Routes>
    </Router>
  );
}

export default App;
