import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { ProjectTag } from '../../components/ProjectTag';
import { CaseStudySection, CaseStudyTextBlock } from '../../components/CaseStudySection';

// Import Figma assets
import img31 from 'figma:asset/fa92f644e9c6315506c360bd4f3aa26f0fa847f8.png';
import imgOfficialPage11 from 'figma:asset/f1046575f7bb7fe01684368b059eba2aeaf0ea63.png';
import imgOctoberFlyers71 from 'figma:asset/72df61409b8c1dfefa56455065d753e9d9369a5f.png';
import img101 from 'figma:asset/c7843424098edf623f945ed967faea8e15ddc01c.png';
import imgInsideTheCollective1 from 'figma:asset/d89bf06bae660a598ca9390a0069483c7428c46f.png';
import imgOfficialSeptemberFlyers1 from 'figma:asset/389c222e7c32a1ad44b027fdcf96a41dfb77bf78.png';
import imgAugustFlyersGlow1 from 'figma:asset/0c5af731f3c537114903b0a07d7b2428ada74cf4.png';
import imgPerson2FrontNatural1 from 'figma:asset/20de1f0673718a68b168812551a76e1271135548.png';
import img3FrontBackExplorationExposure1 from 'figma:asset/d373838214adf89cef2e0c0a4861c68899ee7ad5.png';
import img18Aa05F08Af743FeBdf3566B69Afd8F31105C1 from 'figma:asset/a947738e89d05c608c6e5dff119a4806fade8bce.png';
import imgCoreCollection11 from 'figma:asset/25a6ec06e7111d0bdfa68352885f6ca1969347fc.png';
import imgOnboardingGuide from 'figma:asset/54804266c2697b39bf37bf98f1de336e5108a98a.png';
import imgMentorshipHandbook from 'figma:asset/036824062e42b6cabb74fe18635a3c5facb166d8.png';

export function MentorMeCollective() {
  return (
    <div className="min-h-screen bg-white">      
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <div className="mb-6">
              <p className="mb-4 text-heading-4 uppercase" style={{ color: 'var(--color-gray-text)' }}>
                CONTENT & INSTRUCTIONAL DESIGN WITH
              </p>
            </div>
            
            <h1 className="mb-8" style={{
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: '1.1',
              color: '#5e7f5b'
            }}>
              Mentor Me Collective
            </h1>

            <h2 className="mb-8 pt-6" style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              fontWeight: 'var(--font-weight-semibold)',
              color: '#5e7f5b',
              textTransform: 'uppercase'
            }}>
              Empowering the Next Generation of Tech.
            </h2>

            <p className="text-body-large" style={{ color: 'var(--color-gray-text)' }}>
              Mentor Me Collective empowers students and young professionals through mentorship, equity, and access in tech. 
              I create cohesive digital content, branded merchandise, and instructional materials that support MMC's mission—helping 
              the community engage, learn, and grow.
            </p>
          </div>

          {/* Right Column - Overlapping Images */}
          <div className="relative h-[600px]">
            <div className="absolute top-0 left-0 w-[70%] aspect-[3/4] rounded-lg overflow-hidden shadow-lg mt-4" style={{ transform: 'rotate(-8deg)', zIndex: 2 }}>
              <img 
                src={imgOfficialPage11} 
                alt="MMC Official Page" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-12 right-0 w-[70%] aspect-[3/4] rounded-lg overflow-hidden shadow-lg" style={{ transform: 'rotate(8deg)', zIndex: 1 }}>
              <img 
                src={img31} 
                alt="MMC Digital Domination Magazine" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Details Row */}
      <div className="max-w-6xl mx-auto px-6 py-12 border-b border-gray-200">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="text-heading-4 mb-3">Role:</h3>
            <p className="text-body mb-2">
              Content Designer
            </p>
          </div>

          <div>
            <h3 className="text-heading-4 mb-3">Timeline:</h3>
            <p className="text-body text-sm">
              July 2024 - Present
            </p>
          </div>

          <div>
            <h3 className="text-heading-4 mb-3">Skills:</h3>
            <p className="text-body text-sm">
              Branding + Visual Design • Content Design • Instructional Design •
              UX Writing
            </p>
          </div>

          <div>
            <h3 className="text-heading-4 mb-3">
              Languages + Softwares:
            </h3>
            <p className="text-body text-sm">
              Canva • Figma • HTML/CSS • JavaScript • Jira • Slack
            </p>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        
        {/* Content Design Section */}
        <CaseStudySection className="mt-8" title="CONTENT DESIGN (SOCIAL MEDIA)">
          <CaseStudyTextBlock>
            <p>
              Create cohesive, trend-aware digital content that advances MMC's mission of equity, mentorship, and access in tech. 
              Design posts, campaigns, and graphics to maintain brand consistency and drive engagement across platforms.
            </p>
          </CaseStudyTextBlock>

          {/* Workshop Wednesday Series */}
          <div className="mt-12">
            <h3 className="text-heading-3 mb-4" style={{ textTransform: 'uppercase' }}>
              Workshop Wednesday Series
            </h3>
            <p className="text-body mb-6" style={{ color: 'var(--color-gray-text)' }}>
              Promotional content for weekly virtual speaker series, organized around monthly themes.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={imgOctoberFlyers71} 
                  alt="Workshop Wednesday - Rx for Disruption" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={img101} 
                  alt="Workshop Wednesday - Speaker Feature" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Inside the Collective Series */}
          <div className="mt-12">
            <h3 className="text-heading-3 mb-4" style={{ textTransform: 'uppercase' }}>
              Inside the Collective Series
            </h3>
            <p className="text-body mb-6" style={{ color: 'var(--color-gray-text)' }}>
              Highlight features spotlighting team members, mentors, and mentees to celebrate community impact.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={imgInsideTheCollective1} 
                  alt="Inside the Collective - Alana Stull" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={imgOfficialSeptemberFlyers1} 
                  alt="Inside the Collective Feature" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </CaseStudySection>

        {/* Merchandise Design Section */}
        <CaseStudySection title="MERCHANDISE DESIGN">
          <CaseStudyTextBlock>
            <p>
              Design and produce branded merchandise via Printify and Etsy to extend MMC's visual identity and mission into tangible items. 
              Ensure consistency with digital content while creating appealing, usable products for the community.
            </p>
          </CaseStudyTextBlock>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Tote Bag and T-shirt */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={imgPerson2FrontNatural1} 
                alt="MMC Tote Bag and T-shirt Mockup" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* T-shirt Design Exploration */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={img3FrontBackExplorationExposure1} 
                alt="T-shirt Front and Back Design Exploration" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Additional Merchandise */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={img18Aa05F08Af743FeBdf3566B69Afd8F31105C1} 
                alt="Black T-shirt Design Mockup" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Core Collection */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={imgCoreCollection11} 
                alt="Core Collection Cards" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </CaseStudySection>

        {/* Instructional Design Section */}
        <CaseStudySection title="INSTRUCTIONAL DESIGN">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left - Large Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={imgOnboardingGuide} 
                alt="Mentorship Onboarding Guide" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right - Content */}
            <div>
              <CaseStudyTextBlock>
                <p>
                  Develop onboarding materials for mentorship program (both mentees and mentors). Design templates, profiles, 
                  and documentation that clarify expectations, streamline processes, and support mentorship program success.
                </p>
              </CaseStudyTextBlock>

              {/* Links */}
              <ul className="mt-6 space-y-3 text-body">
                <li>
                  <a 
                    href="https://mmcmentorhandbook.my.canva.site/mentorship-onboarding-guide" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#5e7f5b] underline hover:opacity-70 transition-opacity"
                  >
                    Mentorship Onboarding Guide
                  </a>
                </li>
                <li>
                  <a 
                    href="https://mmcmentorhandbook.my.canva.site/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#5e7f5b] underline hover:opacity-70 transition-opacity"
                  >
                    Mentor Handbook
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.canva.com/design/DAG0rbj7b3M/-x-LfMScmxuPuaAZnawdWg/view?utm_content=DAG0rbj7b3M&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h87c3d2929b" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#5e7f5b] underline hover:opacity-70 transition-opacity"
                  >
                    Mentee Handbook
                  </a>
                </li>
              </ul>

              {/* Mentorship Handbook Image */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={imgMentorshipHandbook} 
                  alt="Mentorship Handbook 2025" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </CaseStudySection>

        {/* Impact Section */}
        <CaseStudySection title="Impact">
          {/* Social Media Metrics */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 bg-gray-50 rounded-lg p-8">
            {/* LinkedIn */}
            <div className="text-center">
              <div className="mb-2" style={{
                fontSize: 'clamp(3rem, 5vw, 4rem)',
                fontWeight: 'var(--font-weight-bold)',
                color: '#5e7f5b',
                lineHeight: '1'
              }}>
                35k+
              </div>
              <p className="text-body" style={{ color: 'var(--color-gray-text)' }}>
                LinkedIn
              </p>
            </div>

            {/* Instagram */}
            <div className="text-center">
              <div className="mb-2" style={{
                fontSize: 'clamp(3rem, 5vw, 4rem)',
                fontWeight: 'var(--font-weight-bold)',
                color: '#5e7f5b',
                lineHeight: '1'
              }}>
                5k+
              </div>
              <p className="text-body" style={{ color: 'var(--color-gray-text)' }}>
                Instagram Followers
              </p>
            </div>

            {/* YouTube */}
            <div className="text-center">
              <div className="mb-2" style={{
                fontSize: 'clamp(3rem, 5vw, 4rem)',
                fontWeight: 'var(--font-weight-bold)',
                color: '#5e7f5b',
                lineHeight: '1'
              }}>
                5k+
              </div>
              <p className="text-body" style={{ color: 'var(--color-gray-text)' }}>
                YouTube Subscribers
              </p>
            </div>
          </div>

          <CaseStudyTextBlock>
            <p>
              Through consistent branding and engaging content, I helped Mentor Me Collective strengthen their digital presence 
              and community engagement. The merchandise line extended the brand into physical spaces, creating tangible connections 
              between MMC and its community members.
            </p>
          </CaseStudyTextBlock>
        </CaseStudySection>

      </div>

      {/* Footer Navigation */}
      <div className="border-t border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link 
            to="/"
            className="group flex items-center justify-between hover:opacity-70 transition-opacity"
          >
            <div>
              <p className="text-label mb-2">View All</p>
              <h3 className="text-heading-2">Back to Home</h3>
            </div>
            <ArrowLeft size={32} className="rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}