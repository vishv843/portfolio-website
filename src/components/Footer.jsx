import { profile } from '../data/resumeData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      id: 'home',
      label: profile.name,
      href: '#top',
      isExternal: false,
      ariaLabel: 'Vishv Joshi home',
      isName: true,
    },
    {
      id: 'email',
      label: 'Email',
      href: `mailto:${profile.email}`,
      isExternal: false,
      value: profile.email,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: profile.linkedIn,
      isExternal: true,
      value: 'LinkedIn',
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {currentYear} <a href={footerLinks[0].href} className="brand" aria-label={footerLinks[0].ariaLabel}>{footerLinks[0].label}</a>
        </p>
        <p className="footer-text footer-links">
          {footerLinks.slice(1).map((link, index) => (
            <span key={link.id}>
              <a 
                href={link.href} 
                {...(link.isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {link.value}
              </a>
              {index < footerLinks.length - 2 && ' • '}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
