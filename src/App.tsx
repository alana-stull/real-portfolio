import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { HomeSimple } from './pages/HomeSimple';
import { About } from './pages/About';
import { Blyss } from './pages/case-studies/Blyss';
import { NotedByNani } from './pages/case-studies/NotedByNani';
import { Sereniti } from './pages/case-studies/Sereniti';
import { MentorMeCollective } from './pages/case-studies/MentorMeCollective';
import { Rhythm } from './pages/case-studies/Rhythm';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homesimple" element={<HomeSimple />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies/blyss" element={<Blyss />} />
          <Route path="/case-studies/noted-by-nani" element={<NotedByNani />} />
          <Route path="/case-studies/sereniti" element={<Sereniti />} />
          <Route path="/case-studies/mentor-me-collective" element={<MentorMeCollective />} />
          <Route path="/case-studies/rhythm" element={<Rhythm />} />
        </Routes>
      </Layout>
    </Router>
  );
}