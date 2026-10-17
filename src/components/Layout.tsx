import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import '../styles/portfolio.css';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        {children}
      </main>
      <footer className="pg-footer">
        <div
          className="max-w-7xl mx-auto px-6"
          style={{ paddingTop: 40, paddingBottom: 40, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px 32px' }}
        >
          <div>
            <p className="pg-footer__line">have an idea worth building or just wanna grab coffee? let's connect.</p>
            <p className="pg-footer__copy">© 2026 Alana Cassidy Stull</p>
          </div>
          <nav aria-label="Contact" style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            <a href="mailto:stull.alana@gmail.com">Email</a>
            <a href="https://linkedin.com/in/alanastull/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/alana-stull" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
