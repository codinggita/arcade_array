import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Home from "./components/Home.jsx"; 
import Home1 from "./components/Home1.jsx";
import Friends from "./components/Friends.jsx";
import Notifications from "./components/Notification.jsx";
import Catagory from "./components/Catagory.jsx";

// Optional: Create a simple NotFound component
const NotFound = () => <h2>Page Not Found</h2>;

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/home1" element={<Home1 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/catagory" element={<Catagory />} />
            <Route path="*" element={<NotFound />} /> {/* ✅ Fix 404 errors */}
        </Routes>
    );
}

export default App;
