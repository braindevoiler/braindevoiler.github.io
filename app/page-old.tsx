import Navigation from '@/components/Navigation';
import BlogCard from '@/components/BlogCard';
import { profileData } from '@/data/profile';
import { gateNotes } from '@/data/gateNotes';
import { blogPosts } from '@/data/blog';
import styles from './page.module.css';

export default function Home() {
  const { personal, about, stats, experience, education, skills, projects, achievements, testimonials } = profileData;

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span className={styles.greeting}>Hi, I'm</span>
              <span className={styles.name}>{personal.fullName}</span>
            </h1>
            <p className={styles.heroSubtitle}>{personal.title}</p>
            <p className={styles.heroDescription}>
              Specializing in System Design, Microservices Architecture, and Cloud-Native Applications
            </p>

            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{stats.experience}</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{stats.followers}</span>
                <span className={styles.statLabel}>LinkedIn Followers</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{stats.gateRank}</span>
                <span className={styles.statLabel}>GATE CS 2012</span>
              </div>
            </div>

            <div className={styles.heroButtons}>
              <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>
                Get in Touch
              </a>
              <a href="#experience" className={`${styles.btn} ${styles.btnSecondary}`}>
                View Work
              </a>
            </div>

            <div className={styles.socialLinks}>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href={personal.website} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Website">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <span></span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className="container">
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p className={styles.lead}>{about.summary}</p>
              <p>{about.description}</p>
            </div>
            <div className={styles.aboutHighlights}>
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>💼</div>
                <h3>Current Role</h3>
                <p>Staff Software Engineer at project44</p>
              </div>
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>🎓</div>
                <h3>Education</h3>
                <p>M.E. from Indian Institute of Science</p>
              </div>
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>🏆</div>
                <h3>Achievement</h3>
                <p>GATE CS 2012 - All India Rank 54</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={styles.experience}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Professional Experience</h2>
          <div className={styles.timeline}>
            {experience.map((exp, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <h3>{exp.title}</h3>
                    <span className={styles.company}>{exp.company}</span>
                  </div>
                  <p className={styles.timelinePeriod}>{exp.period} · {exp.duration}</p>
                  <p className={styles.timelineLocation}>{exp.location}</p>
                  {exp.description.length > 0 && (
                    <ul className={styles.timelineAchievements}>
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.skills}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <div className={styles.skillsGrid}>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className={styles.skillCategory}>
                <h3>{category}</h3>
                <div className={styles.skillTags}>
                  {skillList.map((skill) => (
                    <span key={skill} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.projects}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <h3>{project.name}</h3>
                <p className={styles.projectPeriod}>{project.period}</p>
                {project.institution && (
                  <p className={styles.projectInstitution}>{project.institution}</p>
                )}
                <p className={styles.projectDescription}>{project.description}</p>
                {project.achievements && (
                  <ul className={styles.projectAchievements}>
                    {project.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
                {project.skills && (
                  <div className={styles.projectSkills}>
                    {project.skills.map((skill) => (
                      <span key={skill} className={styles.skillBadge}>
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={styles.education}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.educationGrid}>
            {education.map((edu, index) => (
              <div key={index} className={styles.educationCard}>
                <div className={styles.educationIcon}>🎓</div>
                <h3>{edu.degree}</h3>
                <p className={styles.educationField}>{edu.field}</p>
                <p className={styles.educationSchool}>{edu.institution}</p>
                <p className={styles.educationPeriod}>{edu.period}</p>
                <div className={styles.educationSkills}>
                  {edu.skills.map((skill) => (
                    <span key={skill} className={styles.skillBadge}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className={styles.achievements}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Achievements & Recognition</h2>
          <div className={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <div key={index} className={styles.achievementCard}>
                <div className={styles.achievementIcon}>{achievement.icon}</div>
                <h3>{achievement.title}</h3>
                <p className={styles.achievementDetail}>{achievement.detail}</p>
                <p className={styles.achievementOrg}>{achievement.organization}</p>
                <p className={styles.achievementDate}>{achievement.date}</p>
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.achievementLink}
                  >
                    View →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GATE Notes Section */}
      <section id="gate-notes" className={styles.gateNotes}>
        <div className="container">
          <h2 className={styles.sectionTitle}>GATE CS Notes</h2>
          <p className={styles.sectionSubtitle} style={{textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)', fontSize: '1.1rem'}}>
            Comprehensive handwritten notes covering all 10 subjects for GATE Computer Science preparation
          </p>
          <div className={styles.gateNotesGrid}>
            {gateNotes.map((note) => (
              <div key={note.id} className={styles.gateNoteCard}>
                <div className={styles.gateNoteIcon}>{note.icon}</div>
                <h3>{note.subject}</h3>
                <p className={styles.gateNoteDescription}>{note.description}</p>
                <div className={styles.gateNoteTopics}>
                  {note.topics.slice(0, 4).map((topic) => (
                    <span key={topic} className={styles.topicTag}>
                      {topic}
                    </span>
                  ))}
                </div>
                <a
                  href={note.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                  download
                >
                  <svg className={styles.downloadIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className={styles.blog}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Blog</h2>
          <p className={styles.sectionSubtitle} style={{textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)', fontSize: '1.1rem'}}>
            Tips, strategies, and insights for GATE preparation and career guidance
          </p>
          <div className={styles.blogGrid}>
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={styles.testimonials}>
        <div className="container">
          <h2 className={styles.sectionTitle}>What People Say</h2>
          <div className={styles.testimonialsGrid}>
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <p className={styles.testimonialText}>"{testimonial.text}"</p>
                <div className={styles.testimonialAuthor}>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.title}</span>
                  <span className={styles.testimonialDate}>{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.contactSubtitle}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3>Email</h3>
              <a href={`mailto:${personal.email}`} className={styles.contactLink}>
                {personal.email}
              </a>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <h3>LinkedIn</h3>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                in/ankurcsa
              </a>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3>GitHub</h3>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                braindevoiler
              </a>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3>Website</h3>
              <a href={personal.website} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                ankurgupta.net
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <p>&copy; 2026 Ankur Gupta. All rights reserved.</p>
          <p className={styles.footerTagline}>Building scalable solutions, one line of code at a time.</p>
        </div>
      </footer>
    </main>
  );
}
