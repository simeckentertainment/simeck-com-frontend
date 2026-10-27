import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import { AuthProvider } from './contexts/AuthContext';
import { Home } from './pages/Home';
import {FatButters} from './pages/FatButters';
import {SpiteCastle} from './pages/SpiteCastle';
import {CatchOfTheNight} from './pages/CatchOfTheNight';
import {MonsterMall} from './pages/MonsterMall';
import {BestestBear} from './pages/BestestBear';
import {AboutUs} from './pages/AboutUs';
import {ContactUs} from './pages/ContactUs';
// import {Careers} from './pages/Careers';
import { OtherWorks } from './pages/OtherWorks';
import { BlogPost } from './pages/BlogPost';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Dashboard } from './pages/admin/Dashboard';
import { BlogList } from './pages/admin/BlogList';
import { BlogForm } from './pages/admin/BlogForm';
import { ProfileUpdate } from './pages/admin/ProfileUpdate';
import { UserManagement } from './pages/admin/UserManagement';
import { ProtectedRoute } from './components/ProtectedRoute';
import {NotFound} from './pages/NotFound';


function App() {

  return (
      <AuthProvider>
        <Router>
          <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/games"> */}
              <Route path="/fat-butters" element={<FatButters />} />
              <Route path="/spite-castle" element={<SpiteCastle />} />
              <Route path='/catch-night' element={<CatchOfTheNight />} />
            {/* </Route>
            <Route path='/comics'> */}
              <Route path='/monster-mall' element={<MonsterMall />} />
              <Route path='/bestest-bear' element={<BestestBear />} />
            {/* </Route> */}

            <Route path='/other-works' element={<OtherWorks />} />
            <Route path='/blog/:id' element={<BlogPost />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            
            {/* Admin Routes - Protected */}
            <Route path='/admin/dashboard' element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path='/admin/blogs' element={
              <ProtectedRoute>
                <BlogList />
              </ProtectedRoute>
            } />
            <Route path='/admin/blogs/create' element={
              <ProtectedRoute>
                <BlogForm />
              </ProtectedRoute>
            } />
            <Route path='/admin/blogs/edit/:id' element={
              <ProtectedRoute>
                <BlogForm />
              </ProtectedRoute>
            } />
            <Route path='/admin/profile' element={
              <ProtectedRoute>
                <ProfileUpdate />
              </ProtectedRoute>
            } />
            <Route path='/admin/users' element={
              <ProtectedRoute>
                <UserManagement />
              </ProtectedRoute>
            } />
            
            <Route path='/about' element={<AboutUs />} />
            <Route path='/contact' element={<ContactUs />} />

            {/* <Route path='/careers' element={<Careers />} /> */}
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
        </Router>
      </AuthProvider>
  );
}

export default App
