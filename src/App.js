import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomeComponent/Home/Home';
import JobDetails from './Pages/HomeComponent/JobFeatures/JobDetails';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PostJob from './Pages/PostJob/PostJob';
import UpdateJob from './Pages/UpdateJob/UpdateJob';
import Dashboard from './Pages/HomeComponent/Dashboard/Dashboard';
import Jobs from './Pages/Jobs/Jobs';
import Resume from './Pages/Resume/Resume';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import About from './Pages/About/About';
import ApplyJobForm from './Pages/HomeComponent/JobFeatures/ApplyJobForm/ApplyJobForm';
import CompanyRegisterForm from './Pages/HomeComponent/RegisterCompany/CompanyRegisterForm';
import Company from './Pages/Company/Company';

function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/jobDetails" element={<JobDetails />} /> */}

          <Route path="/postJob" element={<PrivateRoute>
            <PostJob />
          </PrivateRoute>} />

          <Route path="/updateJob" element={<UpdateJob />} />

          <Route path="/updating/:id" element={<UpdateJob />} />

          <Route path="/dashboard" element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>} />

          <Route path="jobs" element={<Jobs />}></Route>

          <Route path="jobDetails/:id" element={<PrivateRoute>
            <JobDetails />
          </PrivateRoute>} />

          <Route path="/resumes" element={<Resume />} />
          <Route path="/apply/:id" element={<ApplyJobForm />} />
          <Route path="/company" element={<Company />} />
          <Route path="/registerCompany" element={<CompanyRegisterForm />} />


          <Route path="/team" element={<About />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/home" element={<Home></Home>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
