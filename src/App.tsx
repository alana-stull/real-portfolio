import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { HomeSimple } from './pages/HomeSimple';
import { Work } from './pages/Work';
import { About } from './pages/About';
import { Blyss } from './pages/case-studies/Blyss';
import { Crwn } from './pages/case-studies/Crwn';
import { NotedByNani } from './pages/case-studies/NotedByNani';
import { Sereniti } from './pages/case-studies/Sereniti';
import { MentorMeCollective } from './pages/case-studies/MentorMeCollective';
import { Rhythm } from './pages/case-studies/Rhythm';
import { DesignIntelligenceLab } from './pages/case-studies/DesignIntelligenceLab';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homesimple" element={<HomeSimple />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/blyss" element={<Blyss />} />
          <Route path="/crwn" element={<Crwn />} />
          <Route path="/noted-by-nani" element={<NotedByNani />} />
          <Route path="/sereniti" element={<Sereniti />} />
          <Route path="/mentor-me-collective" element={<MentorMeCollective />} />
          <Route path="/rhythm" element={<Rhythm />} />
          <Route path="/design-intelligence-lab" element={<DesignIntelligenceLab />} />
          {/* Old /case-studies/* links still work */}
          <Route path="/case-studies/:slug" element={<CaseStudyRedirect />} />
        </Routes>
      </Layout>
    </Router>
  );
}

/** Sends an old /case-studies/:slug link to its new top-level path. */
function CaseStudyRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/${slug ?? ''}`} replace />;
}
