import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// Data for each case study
const caseStudiesData = {
  '1': {
    title: 'Case Study 1 Title',
    subtitle: 'Brief tagline or subtitle for the project',
    year: '2024',
    role: 'Your Role',
    duration: '3 months',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    overview: 'A comprehensive overview of the project, including the context, your role, and what was achieved. This should give readers a clear understanding of what the project was about.',
    challenge: 'Describe the main challenge or problem that this project addressed. What were the pain points? What needed to be solved?',
    solution: 'Explain your approach and the solution you implemented. What methods did you use? How did you tackle the challenge?',
    impact: 'What were the results and impact of your work? Include metrics, feedback, or outcomes that demonstrate the success of the project.',
    learnings: 'What did you learn from this project? What would you do differently? What skills did you develop?',
  },
  '2': {
    title: 'Case Study 2 Title',
    subtitle: 'Brief tagline or subtitle for the project',
    year: '2024',
    role: 'Your Role',
    duration: '4 months',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    overview: 'A comprehensive overview of the project, including the context, your role, and what was achieved.',
    challenge: 'Describe the main challenge or problem that this project addressed.',
    solution: 'Explain your approach and the solution you implemented.',
    impact: 'What were the results and impact of your work?',
    learnings: 'What did you learn from this project?',
  },
  '3': {
    title: 'Case Study 3 Title',
    subtitle: 'Brief tagline or subtitle for the project',
    year: '2023',
    role: 'Your Role',
    duration: '6 months',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    overview: 'A comprehensive overview of the project, including the context, your role, and what was achieved.',
    challenge: 'Describe the main challenge or problem that this project addressed.',
    solution: 'Explain your approach and the solution you implemented.',
    impact: 'What were the results and impact of your work?',
    learnings: 'What did you learn from this project?',
  },
  '4': {
    title: 'Case Study 4 Title',
    subtitle: 'Brief tagline or subtitle for the project',
    year: '2023',
    role: 'Your Role',
    duration: '5 months',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    overview: 'A comprehensive overview of the project, including the context, your role, and what was achieved.',
    challenge: 'Describe the main challenge or problem that this project addressed.',
    solution: 'Explain your approach and the solution you implemented.',
    impact: 'What were the results and impact of your work?',
    learnings: 'What did you learn from this project?',
  },
  '5': {
    title: 'Case Study 5 Title',
    subtitle: 'Brief tagline or subtitle for the project',
    year: '2022',
    role: 'Your Role',
    duration: '3 months',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    overview: 'A comprehensive overview of the project, including the context, your role, and what was achieved.',
    challenge: 'Describe the main challenge or problem that this project addressed.',
    solution: 'Explain your approach and the solution you implemented.',
    impact: 'What were the results and impact of your work?',
    learnings: 'What did you learn from this project?',
  },
  '6': {
    title: 'Case Study 6 Title',
    subtitle: 'Brief tagline or subtitle for the project',
    year: '2022',
    role: 'Your Role',
    duration: '4 months',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    overview: 'A comprehensive overview of the project, including the context, your role, and what was achieved.',
    challenge: 'Describe the main challenge or problem that this project addressed.',
    solution: 'Explain your approach and the solution you implemented.',
    impact: 'What were the results and impact of your work?',
    learnings: 'What did you learn from this project?',
  },
};

export function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? caseStudiesData[id as keyof typeof caseStudiesData] : null;

  if (!caseStudy) {
    return <Navigate to="/work" replace />;
  }

  return (
    <div>
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Work
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <span className="text-gray-500 mb-4 block">{caseStudy.year}</span>
        <h1 className="text-gray-900 mb-4">
          {caseStudy.title}
        </h1>
        <p className="text-gray-600 text-xl mb-8">
          {caseStudy.subtitle}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {caseStudy.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-lg">
          <div>
            <p className="text-gray-500 mb-1">Role</p>
            <p className="text-gray-900">{caseStudy.role}</p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Duration</p>
            <p className="text-gray-900">{caseStudy.duration}</p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Year</p>
            <p className="text-gray-900">{caseStudy.year}</p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
          <ImageWithFallback
            src={`https://via.placeholder.com/1200x675?text=Project+${id}`}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Content Sections */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="space-y-16">
          {/* Overview */}
          <div>
            <h2 className="text-gray-900 mb-4">
              Overview
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>

          {/* Challenge */}
          <div>
            <h2 className="text-gray-900 mb-4">
              The Challenge
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Image placeholder for process/wireframes */}
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <ImageWithFallback
              src={`https://via.placeholder.com/1200x675?text=Process+Image`}
              alt="Process"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-gray-900 mb-4">
              The Solution
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>

          {/* Image grid placeholder */}
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <ImageWithFallback
                src={`https://via.placeholder.com/600x600?text=Detail+1`}
                alt="Detail 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <ImageWithFallback
                src={`https://via.placeholder.com/600x600?text=Detail+2`}
                alt="Detail 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Impact */}
          <div>
            <h2 className="text-gray-900 mb-4">
              Impact & Results
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {caseStudy.impact}
            </p>
          </div>

          {/* Learnings */}
          <div>
            <h2 className="text-gray-900 mb-4">
              Key Learnings
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {caseStudy.learnings}
            </p>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Next Project</p>
          <Link
            to={`/case-study/${parseInt(id || '1') % 6 + 1}`}
            className="text-gray-900 hover:text-gray-600 transition-colors inline-flex items-center gap-2"
          >
            View Next Case Study →
          </Link>
        </div>
      </section>
    </div>
  );
}
