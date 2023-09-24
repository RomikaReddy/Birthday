import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminEventForm from '../components/AdminEventForm';
// import BirthdayList from '../components/Birthdays';
import Birthdays from '../components/Birthdays';

export const Routing = () => {
    return (
      <Router>
        <Routes>
          {/* <Route path="/" element={<Signin />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/form" element={<AdminEventForm />} />
          <Route path="/birthday" element={<Birthdays/>}/>
          {/* <Route path="/admindashboard" element={<AdminDashboard />} /> */}
        </Routes>
      </Router>
    );
  };

