import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { PageLoader } from './components/common/PageLoader';
import { ScrollToTop } from './components/common/ScrollToTop';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const JobsPage = lazy(() => import('./pages/JobsPage').then(module => ({ default: module.JobsPage })));
const CompaniesPage = lazy(() => import('./pages/CompaniesPage').then(module => ({ default: module.CompaniesPage })));
const TrainingPage = lazy(() => import('./pages/TrainingPage').then(module => ({ default: module.TrainingPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(module => ({ default: module.TermsPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(module => ({ default: module.PrivacyPage })));
const ComplaintsPage = lazy(() => import('./pages/ComplaintsPage').then(module => ({ default: module.ComplaintsPage })));
const HelpPage = lazy(() => import('./pages/HelpPage').then(module => ({ default: module.HelpPage })));
const LoginPage = lazy(() => import('./pages/LoginPage').then(module => ({ default: module.LoginPage })));
const RegisterPage = lazy(() => import('./pages/RegisterPage').then(module => ({ default: module.RegisterPage })));
const CompanyDashboard = lazy(() => import('./pages/CompanyDashboard').then(module => ({ default: module.CompanyDashboard })));
const WorkerDashboard = lazy(() => import('./pages/WorkerDashboard').then(module => ({ default: module.WorkerDashboard })));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/complaints" element={<ComplaintsPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
import { PrivateRoute } from './components/auth/PrivateRoute';

// ... (previous imports)

          <Route path="/dashboards" element={<Navigate to="/login" />} />
          <Route 
            path="/dashboard/company" 
            element={
              <PrivateRoute role="COMPANY">
                <CompanyDashboard />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/dashboard/worker" 
            element={
              <PrivateRoute role="WORKER">
                <WorkerDashboard />
              </PrivateRoute>
            } 
          />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
