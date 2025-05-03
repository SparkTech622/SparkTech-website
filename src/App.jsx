import About from "./Components/About"
import Contact from "./Components/Contact"
import DemoSites from "./Components/DemoSites"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Pricing from "./Components/Pricing"
import Services from "./Components/Services"
import Testimonials from "./Components/Testimonials"
import Lesson from "./Components/DigitalM/Lesson"
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import SignUp from "./Components/DigitalM/Auth/Sign"
import LogIn from "./Components/DigitalM/Auth/LogIn"
import Dashboard from "./Components/DigitalM/Dashboard"
import PrivateRoute from "./Components/PrivateRoute"
import { AuthProvider } from "./Context/AuthProvider"
import Course from "./Components/DigitalM/Course"
import ScrollToTop from "./Components/ScroolltoTop"
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
// import DataInitializer from "./Components/DataInit"









function App() {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY); 
  }, []);

  return (
    <AuthProvider>
    <Router>
    <ScrollToTop /> 
    <Navbar/>
      <Routes>
      <Route path="/" element={<Hero />} />
        <Route path="/online-services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/demo-sites" element={<DemoSites />} />
        <Route path="/website-pricing" element={<Pricing />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact-us" element={<Contact />} />
        
        <Route path="/signUp&signIn" element={<SignUp />} />
        <Route path="/signUp&signIn/login" element={<LogIn />} />
        <Route path="/dashboard/course/:id/lesson/:id" element={
          <PrivateRoute>
            <Lesson />
          </PrivateRoute>
          } />
        <Route path="/dashboard/course/:id" element={
          <PrivateRoute>
          <Course />
          </PrivateRoute>
          } />
        <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
      </Routes>
   <Footer/>
    {/* {import.meta.env.DEV && <DataInitializer />}  */}
   </Router>
    </AuthProvider>
  )
}

export default App
