interface CaseStudySectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function CaseStudySection({ title, children, className = '' }: CaseStudySectionProps) {
  return (
    <section className={`mb-16 ${className}`}>
      {title && <h2 className="text-heading-2 mb-6 uppercase">{title}</h2>}
      {children}
    </section>
  );
}

interface CaseStudyTextBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function CaseStudyTextBlock({ children, className = '' }: CaseStudyTextBlockProps) {
  return (
    <div className={`text-body-large space-y-4 ${className}`}>
      {children}
    </div>
  );
}
