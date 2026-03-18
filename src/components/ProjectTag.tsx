interface ProjectTagProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'accent';
}

export function ProjectTag({ children, variant = 'default' }: ProjectTagProps) {
  const styles = {
    default: 'bg-gray-100 text-gray-700',
    primary: 'bg-[var(--color-brown-primary)] text-white',
    accent: 'bg-[var(--color-tan-accent)] text-white'
  };

  return (
    <span className={`inline-block px-3 py-1.5 rounded-full text-body-small ${styles[variant]}`}>
      {children}
    </span>
  );
}
