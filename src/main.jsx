import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Home,
  LayoutGrid,
  Code2,
  User,
  Mail,
  Moon,
  Sun,
  ArrowUpRight,
  ArrowRight,
  ArrowUp,
  Github,
  Linkedin,
  Send,
  Instagram,
  Twitter,
  MapPin,
  GraduationCap,
  Briefcase,
  Rocket,
  CheckCircle2,
  TrendingUp,
  Brain,
  Camera,
  BarChart3,
  Cloud,
  Menu,
  X,
  ExternalLink,
  Download,
  Sparkles,
} from 'lucide-react';
import './styles.css';
import { links, projects, filters, skillGroups, certifications, learningGoals, timeline, stats } from './data.js';

const ICONS = { Code2, BarChart3, Brain, Cloud, GraduationCap, Briefcase, Rocket };

const NAV = [
  { id: 'overview', icon: Home, en: 'Home', ar: 'الرئيسية' },
  { id: 'work', icon: LayoutGrid, en: 'Projects', ar: 'المشاريع' },
  { id: 'expertise', icon: Code2, en: 'Expertise', ar: 'الخبرات' },
  { id: 'about', icon: User, en: 'About', ar: 'نبذة' },
  { id: 'contact', icon: Mail, en: 'Contact', ar: 'تواصل' },
];

const T = {
  en: {
    brandName: 'SpatialOS',
    brandCaption: 'Portfolio',
    connect: "Let's Connect",
    hero: {
      badge: 'Available for Opportunities',
      name1: 'Aymen',
      name2: 'Abdurabu Al Erwi',
      titleA: 'Building intelligent experiences',
      titleB: 'at the intersection of',
      titleHighlight1: 'AI',
      titleMid: ', ',
      titleHighlight2: 'data',
      titleEnd: ' & innovation.',
      body: "I'm an IT student and builder focused on AI, data analytics, automation, computer vision, and data-driven products.",
      primary: 'Explore My Projects',
      secondary: 'Get In Touch',
      chips: [
        { icon: Brain, label: 'AI & Machine Learning' },
        { icon: Camera, label: 'Computer Vision' },
        { icon: BarChart3, label: 'Data Analytics' },
        { icon: Code2, label: 'Python & Automation' },
      ],
      stage: 'DREAM · BUILD · INNOVATE',
    },
    skills: 'My Skills',
    cta: { line1: 'Turning Ideas', line2: 'Into Impact' },
    featured: { kicker: 'Featured Projects', all: 'View All Projects' },
    viewProject: 'View Project',
    work: {
      badge: 'My Projects',
      title: 'Innovative Projects Built with Passion',
      body: 'A collection of projects that showcase my skills in AI, data, and software development.',
      banner: 'Explore more projects on my GitHub',
      bannerBody: 'Check out my complete work and contributions.',
      visitGithub: 'Visit GitHub',
    },
    expertise: {
      badge: 'My Expertise',
      title: 'Technical Skills & Core Competencies',
      body: 'A growing foundation in modern technologies with a continuous passion for learning.',
      certifications: 'Certifications',
      learningGoals: 'Learning Goals',
      banner: 'Always learning... always improving.',
    },
    about: {
      badge: 'About Me',
      role: 'IT Student · Builder · Freelancer',
      bio: "I'm Aymen — an IT student and independent digital builder. I focus on data analytics, automation, and computer vision, turning ideas into working prototypes.",
      download: 'Download CV',
      contactMe: 'Contact Me',
      journey: 'My Journey',
      quote: 'Technology is not just about code, but about creating a better future.',
    },
    contact: {
      badge: 'Get in Touch',
      title: "Let's Work Together",
      body: "Have a project in mind, a question, or just want to connect? I'd love to hear from you.",
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Location',
      locationValue: 'Makkah, Saudi Arabia',
      name: 'Your Name',
      emailField: 'Your Email',
      subject: 'Subject',
      message: 'Your Message',
      send: 'Send Message',
    },
    footer: { tagline: 'Dream · Build · Innovate' },
    menu: 'Menu', close: 'Close', theme: 'Theme', language: 'Language',
  },
  ar: {
    brandName: 'سبيشال أو إس',
    brandCaption: 'معرض الأعمال',
    connect: 'لنتواصل',
    hero: {
      badge: 'متاح لفرص عمل',
      name1: 'أيمن',
      name2: 'عبدربه العروي',
      titleA: 'أبني تجارب ذكية',
      titleB: 'عند تقاطع',
      titleHighlight1: 'الذكاء الاصطناعي',
      titleMid: '، ',
      titleHighlight2: 'البيانات',
      titleEnd: ' والابتكار.',
      body: 'طالب تقنية معلومات ومطوّر أركّز على الذكاء الاصطناعي وتحليل البيانات والأتمتة والرؤية الحاسوبية والمنتجات القائمة على البيانات.',
      primary: 'استعرض مشاريعي',
      secondary: 'تواصل معي',
      chips: [
        { icon: Brain, label: 'ذكاء اصطناعي وتعلّم آلي' },
        { icon: Camera, label: 'رؤية حاسوبية' },
        { icon: BarChart3, label: 'تحليل بيانات' },
        { icon: Code2, label: 'بايثون وأتمتة' },
      ],
      stage: 'احلم · ابنِ · ابتكر',
    },
    skills: 'مهاراتي',
    cta: { line1: 'تحويل الأفكار', line2: 'إلى أثر حقيقي' },
    featured: { kicker: 'مشاريع مختارة', all: 'عرض كل المشاريع' },
    viewProject: 'عرض المشروع',
    work: {
      badge: 'مشاريعي',
      title: 'مشاريع مبتكرة بُنيت بشغف',
      body: 'مجموعة من المشاريع التي تعرض مهاراتي في الذكاء الاصطناعي والبيانات وتطوير البرمجيات.',
      banner: 'استكشف المزيد من مشاريعي على GitHub',
      bannerBody: 'اطّلع على كامل أعمالي ومساهماتي.',
      visitGithub: 'زيارة GitHub',
    },
    expertise: {
      badge: 'خبراتي',
      title: 'المهارات التقنية والكفاءات الأساسية',
      body: 'أساس متنامٍ في التقنيات الحديثة مع شغف مستمر بالتعلم.',
      certifications: 'الشهادات',
      learningGoals: 'أهداف التعلّم',
      banner: 'أتعلّم دائمًا... وأتطوّر دائمًا.',
    },
    about: {
      badge: 'نبذة عني',
      role: 'طالب تقنية معلومات · باني حلول · مستقل',
      bio: 'أنا أيمن — طالب تقنية معلومات وصانع حلول رقمية مستقل. أركّز على تحليل البيانات والأتمتة والرؤية الحاسوبية، وأحوّل الأفكار إلى نماذج عملية.',
      download: 'تحميل السيرة الذاتية',
      contactMe: 'تواصل معي',
      journey: 'مسيرتي',
      quote: 'التقنية ليست مجرد برمجة، بل أداة لصنع مستقبل أفضل.',
    },
    contact: {
      badge: 'تواصل معي',
      title: 'لنعمل معًا',
      body: 'لديك مشروع أو سؤال أو ترغب بالتواصل فقط؟ يسعدني أن أسمع منك.',
      email: 'البريد الإلكتروني',
      linkedin: 'لينكدإن',
      github: 'جيت هب',
      location: 'الموقع',
      locationValue: 'مكة المكرمة، السعودية',
      name: 'اسمك',
      emailField: 'بريدك الإلكتروني',
      subject: 'الموضوع',
      message: 'رسالتك',
      send: 'إرسال الرسالة',
    },
    footer: { tagline: 'احلم · ابنِ · ابتكر' },
    menu: 'القائمة', close: 'إغلاق', theme: 'المظهر', language: 'اللغة',
  },
};

function Logo({ size = 40 }) {
  return (
    <span className="av-mark" style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 40 40" width="100%" height="100%">
        <path d="M9 30 L18 10 L22 10 L31 30 L26 30 L23.2 23.5 H16.8 L14 30 Z M18.3 19.3 H21.7 L20 15.3 Z" fill="url(#g)" />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f4f6fb" />
            <stop offset="1" stopColor="#6382ff" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
}

function App() {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState(() => (typeof localStorage !== 'undefined' && localStorage.getItem('sos-theme')) || 'dark');
  const [view, setView] = useState(() => (typeof window !== 'undefined' && window.location.hash.replace('#', '')) || 'overview');
  const [filter, setFilter] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);

  const t = T[lang];
  const rtl = lang === 'ar';
  const validViews = useMemo(() => new Set(NAV.map((n) => n.id)), []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    try { localStorage.setItem('sos-theme', theme); } catch (e) { /* ignore */ }
  }, [lang, rtl, theme]);

  useEffect(() => {
    const onHash = () => {
      const next = window.location.hash.replace('#', '');
      setView(validViews.has(next) ? next : 'overview');
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [validViews]);

  const goTo = (id) => {
    window.location.hash = id;
    setView(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const visibleProjects = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const subject = encodeURIComponent(form.get('subject') || 'Portfolio contact');
    const body = encodeURIComponent(
      `Name: ${form.get('name') || ''}\nEmail: ${form.get('email') || ''}\n\n${form.get('message') || ''}`,
    );
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="shell">
      <header className="topbar">
        <button className="brand" onClick={() => goTo('overview')} aria-label="Home">
          <Logo size={44} />
          <span className="brand-text">
            <span className="brand-name">{t.brandName}</span>
            <span className="brand-caption">{t.brandCaption}</span>
          </span>
        </button>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          {NAV.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={`nav-pill ${view === item.id ? 'active' : ''}`}
                onClick={() => goTo(item.id)}
              >
                <Icon size={16} /> {item[lang]}
              </button>
            );
          })}
        </nav>

        <div className="top-actions">
          <button className="icon-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={t.theme} title={t.theme}>
            {theme === 'dark' ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <div className="lang-switch" role="group" aria-label={t.language}>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
            <span>/</span>
            <button className={lang === 'ar' ? 'active' : ''} onClick={() => setLang('ar')}>AR</button>
          </div>
          <button className="button button-primary connect-btn" onClick={() => goTo('contact')}>
            {t.connect} <ArrowRight size={15} />
          </button>
          <button className="icon-button menu-button" onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? t.close : t.menu}>
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </header>

      <main className="page-view" key={view}>
        {view === 'overview' && (
          <OverviewView t={t} lang={lang} goTo={goTo} />
        )}
        {view === 'work' && (
          <WorkView t={t} lang={lang} filter={filter} setFilter={setFilter} visibleProjects={visibleProjects} />
        )}
        {view === 'expertise' && <ExpertiseView t={t} lang={lang} />}
        {view === 'about' && <AboutView t={t} lang={lang} goTo={goTo} />}
        {view === 'contact' && <ContactView t={t} lang={lang} onSubmit={handleContactSubmit} />}
      </main>

      <footer className="footer">
        <div className="footer-main">
          <button className="brand" onClick={() => goTo('overview')}>
            <Logo size={34} />
            <span className="brand-text">
              <span className="brand-name">{t.brandName}</span>
              <span className="brand-caption">{t.footer.tagline}</span>
            </span>
          </button>
          <div className="socials">
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href={links.x} target="_blank" rel="noreferrer" aria-label="X"><Twitter size={17} /></a>
            <a href={links.telegram} target="_blank" rel="noreferrer" aria-label="Telegram"><Send size={17} /></a>
            <a href={links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Aymen Abdurabu Al Erwi</span>
          <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </footer>
    </div>
  );
}

function SectionBadge({ children }) {
  return <span className="section-badge"><span className="dot" />{children}</span>;
}

function OverviewView({ t, lang, goTo }) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <SectionBadge>{t.hero.badge}</SectionBadge>
          <h1>
            <span className="hero-name">{t.hero.name1} <em>{t.hero.name2}</em></span>
          </h1>
          <h2 className="hero-tagline">
            {t.hero.titleA} {t.hero.titleB} <em>{t.hero.titleHighlight1}</em>{t.hero.titleMid}<em>{t.hero.titleHighlight2}</em>{t.hero.titleEnd}
          </h2>
          <p className="hero-body">{t.hero.body}</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => goTo('work')}>{t.hero.primary} <ArrowRight size={16} /></button>
            <button className="button button-quiet" onClick={() => goTo('contact')}><Mail size={16} /> {t.hero.secondary}</button>
          </div>
          <div className="chip-row">
            {t.hero.chips.map(({ icon: Icon, label }) => (
              <span className="chip" key={label}><Icon size={15} /> {label}</span>
            ))}
          </div>
        </div>
        <div className="hero-stage">
          <div className="stage-ring ring-a" />
          <div className="stage-ring ring-b" />
          <Logo size={160} />
          <span className="stage-caption">{t.hero.stage}</span>
        </div>
      </section>

      <section className="stats-row">
        {stats.home.map((s) => (
          <div className="stat-tile" key={s.label.en}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label[lang]}</span>
          </div>
        ))}
      </section>

      <section className="section-block">
        <div className="section-heading">
          <h2><span className="bar" />{t.featured.kicker}</h2>
          <button className="inline-link" onClick={() => goTo('work')}>{t.featured.all} <ArrowUpRight size={15} /></button>
        </div>
        <div className="card-grid">
          {projects.slice(0, 3).map((project) => (
            <a className="project-card" key={project.id} href={project.url} target="_blank" rel="noreferrer">
              <div className="card-tag">{project.tag[lang]}</div>
              <div className="card-icon"><Brain size={22} /></div>
              <h3>{project.title[lang]}</h3>
              <p>{project.description[lang]}</p>
              <span className="view-link">{t.viewProject} <ArrowUpRight size={14} /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="skills-band">
        <div className="skills-list">
          <h3>{t.skills}</h3>
          <div className="skill-icon-row">
            {['Python', 'SQL', 'Power BI', 'Excel', 'OpenCV', 'GitHub', 'Linux'].map((s) => (
              <span className="skill-pill" key={s}>{s}</span>
            ))}
          </div>
        </div>
        <button className="cta-banner" onClick={() => goTo('contact')}>
          <span>{t.cta.line1} <em>{t.cta.line2}</em></span>
          <span className="cta-arrow"><ArrowRight size={18} /></span>
        </button>
      </section>
    </>
  );
}

function WorkView({ t, lang, filter, setFilter, visibleProjects }) {
  return (
    <section className="view-pad">
      <div className="view-head">
        <SectionBadge>{t.work.badge}</SectionBadge>
        <h2>{t.work.title}</h2>
        <p>{t.work.body}</p>
      </div>

      <div className="filter-row">
        {filters.map((f) => (
          <button key={f.id} className={`filter-pill ${filter === f.id ? 'active' : ''}`} onClick={() => setFilter(f.id)}>
            {f[lang]}
          </button>
        ))}
      </div>

      <div className="card-grid two-col">
        {visibleProjects.map((project) => (
          <a className="project-card wide" key={project.id} href={project.url} target="_blank" rel="noreferrer">
            <div className="card-row">
              <div className="card-icon"><Code2 size={20} /></div>
              <span className="card-tag">{project.tag[lang]}</span>
              <ExternalLink size={15} className="ext-icon" />
            </div>
            <h3>{project.title[lang]}</h3>
            <p>{project.description[lang]}</p>
            <div className="stack-row">{project.stack.map((s) => <span key={s}>{s}</span>)}</div>
            <span className="view-link">{t.viewProject} <ArrowUpRight size={14} /></span>
          </a>
        ))}
      </div>

      <div className="banner-card">
        <div>
          <strong>{t.work.banner}</strong>
          <p>{t.work.bannerBody}</p>
        </div>
        <a className="button button-quiet" href={links.github} target="_blank" rel="noreferrer">
          <Github size={16} /> {t.work.visitGithub}
        </a>
      </div>
    </section>
  );
}

function ExpertiseView({ t, lang }) {
  return (
    <section className="view-pad">
      <div className="view-head">
        <SectionBadge>{t.expertise.badge}</SectionBadge>
        <h2>{t.expertise.title}</h2>
        <p>{t.expertise.body}</p>
      </div>

      <div className="expertise-grid">
        <div className="expertise-main">
          {skillGroups.map((group) => {
            const Icon = ICONS[group.icon] || Code2;
            return (
              <div className="skill-group" key={group.title.en}>
                <h3><Icon size={18} /> {group.title[lang]}</h3>
                <div className="skill-icon-row">
                  {group.items.map((item) => <span className="skill-pill" key={item}>{item}</span>)}
                </div>
              </div>
            );
          })}
        </div>
        <div className="expertise-side">
          <div className="side-card">
            <h3><CheckCircle2 size={18} /> {t.expertise.certifications}</h3>
            <ul>{certifications[lang].map((c) => <li key={c}><CheckCircle2 size={14} /> {c}</li>)}</ul>
          </div>
          <div className="side-card">
            <h3><TrendingUp size={18} /> {t.expertise.learningGoals}</h3>
            <ul>{learningGoals[lang].map((c) => <li key={c}><CheckCircle2 size={14} /> {c}</li>)}</ul>
          </div>
        </div>
      </div>

      <div className="banner-card center">
        <TrendingUp size={18} /> <strong>{t.expertise.banner}</strong>
      </div>
    </section>
  );
}

function AboutView({ t, lang, goTo }) {
  return (
    <section className="view-pad">
      <div className="about-grid">
        <div className="about-copy">
          <SectionBadge>{t.about.badge}</SectionBadge>
          <h2>Aymen Abdurabu Al Erwi</h2>
          <p className="about-role">{t.about.role}</p>
          <p className="hero-body">{t.about.bio}</p>
          <div className="hero-actions">
            <a className="button button-quiet" href={`mailto:${links.email}?subject=${encodeURIComponent('CV request')}`}><Download size={16} /> {t.about.download}</a>
            <button className="button button-primary" onClick={() => goTo('contact')}>{t.about.contactMe} <ArrowRight size={16} /></button>
          </div>
        </div>
        <div className="hero-stage small">
          <div className="stage-ring ring-a" />
          <Logo size={110} />
        </div>
      </div>

      <div className="stats-row four">
        {stats.about.map((s) => (
          <div className="stat-tile" key={s.label.en}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label[lang]}</span>
          </div>
        ))}
      </div>

      <h3 className="journey-title">{t.about.journey}</h3>
      <div className="timeline">
        {timeline.map((item) => {
          const Icon = ICONS[item.icon] || Rocket;
          return (
            <div className="timeline-item" key={item.title.en}>
              <span className="timeline-icon"><Icon size={16} /></span>
              <h4>{item.title[lang]}</h4>
              <p>{item.body[lang]}</p>
            </div>
          );
        })}
      </div>

      <blockquote className="quote-card">
        <Sparkles size={18} />
        <p>{t.about.quote}</p>
        <span>— Aymen</span>
      </blockquote>
    </section>
  );
}

function ContactView({ t, lang, onSubmit }) {
  return (
    <section className="view-pad">
      <div className="view-head">
        <SectionBadge>{t.contact.badge}</SectionBadge>
        <h2>{t.contact.title}</h2>
        <p>{t.contact.body}</p>
      </div>

      <div className="contact-grid">
        <div className="contact-cards">
          <a className="contact-card" href={`mailto:${links.email}`}>
            <Mail size={18} /><div><span>{t.contact.email}</span><strong>{links.email}</strong></div>
          </a>
          <a className="contact-card" href={links.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} /><div><span>{t.contact.linkedin}</span><strong>/in/aiman-al-erwi</strong></div>
          </a>
          <a className="contact-card" href={links.github} target="_blank" rel="noreferrer">
            <Github size={18} /><div><span>{t.contact.github}</span><strong>/aymnb7178</strong></div>
          </a>
          <div className="contact-card">
            <MapPin size={18} /><div><span>{t.contact.location}</span><strong>{t.contact.locationValue}</strong></div>
          </div>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-row">
            <input name="name" placeholder={t.contact.name} required />
            <input name="email" type="email" placeholder={t.contact.emailField} required />
          </div>
          <input name="subject" placeholder={t.contact.subject} />
          <textarea name="message" placeholder={t.contact.message} rows={6} required />
          <button className="button button-primary" type="submit">{t.contact.send} <ArrowRight size={16} /></button>
        </form>
      </div>
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);
