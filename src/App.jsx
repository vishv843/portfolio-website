import { useMemo, useState } from 'react';
import { SectionTitle } from './components/SectionTitle';
import { SkillBadge } from './components/SkillBadge';
import {
  education,
  experience,
  navigation,
  profile,
  projects,
  skills
} from './data/resumeData';

const filterOptions = ['All', 'Research', 'Product'];

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [darkMode, setDarkMode] = useState(true);

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className={`app-shell ${darkMode ? 'theme-dark' : 'theme-light'}`}>
      <header className="topbar">
        <div className="container nav-wrap">
          <a href="#top" className="brand" aria-label="Vishv Joshi home">
            {profile.name}
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="theme-toggle"
            onClick={() => setDarkMode((previousTheme) => !previousTheme)}
            aria-label="Toggle color theme"
          >
            {darkMode ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-text">
                <p className="eyebrow">Available for software engineering roles</p>

                <h1>{profile.name}</h1>
                <p className="title-line">{profile.title}</p>

                <p className="summary">{profile.summary}</p>

                <div className="cta-row">
                  <a className="primary-button" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                    Download resume
                  </a>
                  <a className="secondary-button" href={profile.linkedIn} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a className="secondary-button" href={profile.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>

                <ul className="contact-list" aria-label="Contact details">
                  <li>
                    <span className="label">Phone</span>
                    <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
                  </li>
                  <li>
                    <span className="label">Email</span>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </li>
                </ul>
              </div>

              <div className="hero-photo-card">
                <img
                  src="photo.png"
                  alt="Vishv Joshi"
                  className="hero-photo"
                />
              </div>
            </div>

            
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <SectionTitle eyebrow="About" title="Building software that solves real problems" />
            <div className="story-card">
              <p>
                I’m a software engineer focused on backend systems, cloud-native services, AI-assisted
                workflows, and polished front-end experiences. My work sits at the intersection of
                system design, product development, and automation with a strong emphasis on
                writing maintainable code and shipping features users actually rely on. My research and professional 
                experience has revolved around building robust, human-centered software systems that 
                blend product thinking, cloud architecture, and practical AI experiences.'
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <SectionTitle eyebrow="Experience" title="Career highlights" />

            <div className="timeline">
              {experience.map((role) => (
                <article key={`${role.company}-${role.role}`} className="timeline-item">
                  <div className="timeline-marker" aria-hidden="true" />
                  <div className="timeline-content">
                    <div className="role-head">
                      <div>
                        <h3>{role.role}</h3>
                        <p className="company-name">{role.company}</p>
                      </div>
                      <div className="meta-block">
                        <span>{role.period}</span>
                        <span>{role.location}</span>
                      </div>
                    </div>

                    <div className="stack-row">
                      {role.stack.map((tool) => (
                        <SkillBadge key={`${role.company}-${tool}`} label={tool} />
                      ))}
                    </div>

                    <ul className="bullet-list">
                      {role.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <SectionTitle eyebrow="Projects" title="Selected work" />

            <div className="filter-row" aria-label="Project filters">
              {filterOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={activeFilter === option ? 'filter-button active' : 'filter-button'}
                  onClick={() => setActiveFilter(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="project-grid">
              {visibleProjects.map((project) => (
                <article
                  key={project.name}
                  className={project.link ? 'project-card project-card--clickable' : 'project-card'}
                  onClick={() => {
                    if (project.link) {
                      window.open(project.link, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  onKeyDown={(event) => {
                    if ((event.key === 'Enter' || event.key === ' ') && project.link) {
                      event.preventDefault();
                      window.open(project.link, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  tabIndex={project.link ? 0 : -1}
                  role={project.link ? 'link' : undefined}
                  aria-label={project.link ? `Open ${project.name} project` : undefined}
                >
                  <div className="project-header">
                    <div>
                      <h3>{project.name}</h3>
                      <p>{project.summary}</p>
                    </div>
                    <span className="project-period">{project.period}</span>
                  </div>

                  <div className="stack-row">
                    {project.stack.map((tool) => (
                      <SkillBadge key={`${project.name}-${tool}`} label={tool} />
                    ))}
                  </div>

                  <ul className="bullet-list compact">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <SectionTitle eyebrow="Education" title="Academic background" />

            <div className="education-grid">
              {education.map((item) => (
                <article key={item.school} className="education-card">
                  <p className="education-period">{item.period}</p>
                  <h3>{item.school}</h3>
                  <p className="degree-name">{item.degree}</p>
                  <p className="location-line">{item.location}</p>
                  {item.details.length > 0 && (
                    <ul className="bullet-list compact">
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <SectionTitle eyebrow="Skills" title="Tools and technologies" />

            <div className="skill-columns">
              <div className="skill-card">
                <h3>Languages</h3>
                <div className="badge-wrap">
                  {skills.languages.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                  ))}
                </div>
              </div>

              <div className="skill-card">
                <h3>Frameworks & tools</h3>
                <div className="badge-wrap">
                  {skills.technologies.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                  ))}
                </div>
              </div>

              <div className="skill-card">
                <h3>Certifications</h3>
                <div className="badge-wrap">
                  {skills.certifications.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
