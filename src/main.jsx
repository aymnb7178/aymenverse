import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  Check,
  Code2,
  Globe2,
  Mail,
  Menu,
  Moon,
  Send,
  Sun,
  X,
  Zap,
} from 'lucide-react';
import './styles.css';

const links = {
  github: 'https://github.com/aymnb7178',
  linkedin: 'https://www.linkedin.com/in/aiman-al-erwi-976b04400/',
  instagram: 'https://www.instagram.com/i1iair',
  telegram: 'https://t.me/IT_Tech_Pioneers_ENG',
  email: 'mailto:aymnb7178@gmail.com',
};

const content = {
  en: {
    nav: { overview: 'Overview', work: 'Work', focus: 'Focus', story: 'Story', contact: 'Contact' },
    hero: {
      eyebrow: 'Independent builder · Makkah, Saudi Arabia',
      title: <>I build <em>useful</em> systems for ideas that want to move.</>,
      body: 'A personal field guide to Aymen Abdurabu Al Erwi — exploring software, data, automation, and AI through hands-on work.',
      primary: 'Explore the work',
      secondary: 'Start a conversation',
      badge: 'Available for thoughtful collaborations',
    },
    signal: { label: 'CURRENT SIGNAL', title: 'Curious by default.', body: 'Systems, interfaces, and the small decisions that make technology feel human.', status: 'ONLINE / LEARNING IN PUBLIC' },
    intro: { kicker: '01 / A POINT OF VIEW', title: 'Technology is not the destination. It is the instrument.', body: 'I am Aymen — an IT student and independent digital builder. I work at the intersection of software, data, automation, and carefully considered interfaces. This is where experiments become clearer, more useful things.', cta: 'More about the journey' },
    work: { kicker: '02 / SELECTED WORK', title: 'Small systems. Real questions.', body: 'A selection of practical builds and prototypes. Each one starts with a question, not a template.', all: 'All work', code: 'Code', ai: 'AI + vision', data: 'Data + automation', open: 'Open project' },
    focus: { kicker: '03 / WHAT I EXPLORE', title: 'The craft lives between disciplines.', body: 'The best work is rarely just one thing. It is the connection between a clear question, a reliable system, and a considerate experience.', items: [
      ['01', 'Software', 'Python, web interfaces, APIs, and small tools that remove friction.'],
      ['02', 'Data', 'Cleaning, querying, analyzing, and shaping information into decisions.'],
      ['03', 'Automation', 'Workflows that connect services and make recurring work lighter.'],
      ['04', 'AI experiments', 'Computer vision, language tools, and human-in-the-loop prototypes.'],
    ] },
    story: { kicker: '04 / THE LONG VIEW', title: 'Still learning. Already building.', body: 'A timeline of the work, study, and communities shaping how I think.', items: [
      ['NOW', 'BSc in Information Technology', 'Continuing my studies at Midocean University while building a practical foundation across computing and systems.'],
      ['NOW', 'Independent digital work', 'Working on practical solutions across data, reports, automation, and lightweight digital products.'],
      ['2023 — PRESENT', 'Techno Repos', 'Contributing to the leadership of a growing technical community through coordination, workshops, and shared learning.'],
      ['COMPLETED', 'Google IT Support Certificate', 'A foundation in technical support, networking, and structured troubleshooting.'],
    ] },
    contact: { kicker: '05 / OPEN CHANNEL', title: <>Have a good question?<br /><em>Let’s find the useful version.</em></>, body: 'For a project, a collaboration, or a thoughtful exchange about technology — reach out through the channel that fits.', send: 'Send an email', github: 'Browse GitHub', social: 'Elsewhere on the web' },
    footer: 'Built with curiosity, restraint, and a bias toward useful things.', switch: 'العربية', theme: 'Theme', menu: 'Menu', close: 'Close', language: 'Language', availability: 'Currently open to selected conversations', back: 'Back to top', copy: 'Copy email', copied: 'Email copied', privacy: 'No tracking. No noise.',
  },
  ar: {
    nav: { overview: 'البداية', work: 'الأعمال', focus: 'المجالات', story: 'المسيرة', contact: 'تواصل' },
    hero: {
      eyebrow: 'صانع مستقل · مكة المكرمة، السعودية',
      title: <>أبني أنظمة <em>مفيدة</em> للأفكار التي تريد أن تتحرك.</>,
      body: 'مساحة شخصية لأيمن عبدربه العروي — أستكشف البرمجيات والبيانات والأتمتة والذكاء الاصطناعي من خلال العمل والتجربة.',
      primary: 'استكشف الأعمال',
      secondary: 'ابدأ محادثة',
      badge: 'متاح لتعاونات مختارة',
    },
    signal: { label: 'الإشارة الحالية', title: 'الفضول هو نقطة البداية.', body: 'أنظمة وواجهات وقرارات صغيرة تجعل التقنية أقرب للإنسان.', status: 'متصل / أتعلم علنًا' },
    intro: { kicker: '01 / وجهة نظر', title: 'التقنية ليست الوجهة. إنها الأداة.', body: 'أنا أيمن — طالب تقنية معلومات وصانع حلول رقمية بشكل مستقل. أعمل عند تقاطع البرمجيات والبيانات والأتمتة والواجهات المدروسة. هنا تتحول التجارب إلى أشياء أوضح وأكثر فائدة.', cta: 'تعرّف على المسيرة' },
    work: { kicker: '02 / أعمال مختارة', title: 'أنظمة صغيرة. أسئلة حقيقية.', body: 'مجموعة من المشاريع العملية والنماذج الأولية. كل مشروع يبدأ بسؤال، لا بقالب جاهز.', all: 'كل الأعمال', code: 'برمجة', ai: 'ذكاء ورؤية', data: 'بيانات وأتمتة', open: 'فتح المشروع' },
    focus: { kicker: '03 / ما أستكشفه', title: 'الحرفة تعيش بين المجالات.', body: 'أفضل الأعمال لا تنتمي إلى مجال واحد فقط؛ إنها صلة بين سؤال واضح ونظام موثوق وتجربة تراعي الإنسان.', items: [
      ['01', 'البرمجيات', 'Python وواجهات الويب وواجهات API وأدوات صغيرة تقلل الاحتكاك.'],
      ['02', 'البيانات', 'تنظيف البيانات والاستعلام عنها وتحليلها وتحويلها إلى قرارات.'],
      ['03', 'الأتمتة', 'سير عمل يربط الخدمات ويجعل المهام المتكررة أخف.'],
      ['04', 'تجارب الذكاء الاصطناعي', 'رؤية حاسوبية وأدوات لغوية ونماذج أولية بوجود الإنسان في الحلقة.'],
    ] },
    story: { kicker: '04 / النظرة البعيدة', title: 'ما زلت أتعلم. وأبني بالفعل.', body: 'محطات من العمل والدراسة والمجتمعات التي تصنع طريقة تفكيري.', items: [
      ['الآن', 'بكالوريوس تقنية المعلومات', 'أواصل دراستي في جامعة ميدأوشن وأبني أساسًا عمليًا في الحوسبة والأنظمة.'],
      ['الآن', 'عمل رقمي مستقل', 'أعمل على حلول عملية في البيانات والتقارير والأتمتة والمنتجات الرقمية الخفيفة.'],
      ['2023 — الآن', 'Techno Repos', 'أساهم في قيادة مجتمع تقني متنامٍ عبر التنسيق والورش والتعلم المشترك.'],
      ['مكتملة', 'شهادة Google IT Support', 'أساس في الدعم التقني والشبكات واستكشاف المشكلات بطريقة منظمة.'],
    ] },
    contact: { kicker: '05 / قناة مفتوحة', title: <>لديك سؤال جيد؟<br /><em>لنعثر على نسخته المفيدة.</em></>, body: 'لمشروع أو تعاون أو حوار هادئ حول التقنية — اختر القناة التي تناسبك.', send: 'أرسل بريدًا', github: 'تصفح GitHub', social: 'أماكن أخرى على الويب' },
    footer: 'بُني بفضول واتزان وانحياز نحو الأشياء المفيدة.', switch: 'English', theme: 'المظهر', menu: 'القائمة', close: 'إغلاق', language: 'اللغة', availability: 'متاح حاليًا لمحادثات مختارة', back: 'العودة للأعلى', copy: 'نسخ البريد', copied: 'تم نسخ البريد', privacy: 'لا تتبع. لا ضجيج.',
  },
};

const projects = [
  { id: 'jarvis', kind: 'ai', number: '01', title: 'J.A.R.V.I.S / SpatialOS', arTitle: 'J.A.R.V.I.S / SpatialOS', description: 'A spatial desktop experiment controlled through hand gestures and voice — exploring camera input, 3D objects, and system actions.', arDescription: 'تجربة سطح مكتب مكانية تتحكم بها إيماءات اليد والصوت، وتستكشف الكاميرا والمجسمات ثلاثية الأبعاد وأوامر النظام.', stack: 'Python · OpenCV · Voice UI', url: 'https://github.com/aymnb7178' },
  { id: 'signbridge', kind: 'ai', number: '02', title: 'SignBridge AI', arTitle: 'SignBridge AI', description: 'A non-commercial prototype for recognizing supported hand signs in Arabic and English contexts, then translating them into readable text and sound.', arDescription: 'نموذج غير تجاري للتعرف على إشارات يد مدعومة في سياقات عربية وإنجليزية وتحويلها إلى نص وصوت.', stack: 'Python · MediaPipe · Computer Vision', url: 'https://github.com/aymnb7178' },
  { id: 'nira', kind: 'code', number: '03', title: 'Nira Personal AI Agent', arTitle: 'Nira Personal AI Agent', description: 'A Telegram assistant built around workflows, useful services, and a clear approval step before actions are taken.', arDescription: 'مساعد عبر تيليجرام مبني حول سير العمل والخدمات المفيدة وخطوة موافقة واضحة قبل تنفيذ الإجراءات.', stack: 'n8n · Gemini · Telegram', url: 'https://github.com/aymnb7178' },
  { id: 'sales', kind: 'data', number: '04', title: 'Sales Intelligence Platform', arTitle: 'منصة ذكاء المبيعات', description: 'A practical analytics project for sales signals, RFM segmentation, retention, and forecasting with synthetic data.', arDescription: 'مشروع تحليلي لمؤشرات المبيعات وتقسيم RFM والاحتفاظ والتنبؤ باستخدام بيانات اصطناعية.', stack: 'Python · pandas · SQLite · Power BI', url: 'https://github.com/aymnb7178/sales-intelligence-platform' },
  { id: 'arabic', kind: 'data', number: '05', title: 'Arabic Knowledge Assistant', arTitle: 'مساعد المعرفة العربي', description: 'Bilingual document retrieval using TF-IDF and BM25 with cited answers, without relying on an LLM.', arDescription: 'بحث عربي وإنجليزي داخل المستندات باستخدام TF-IDF وBM25 مع إجابات مقتبسة، دون الاعتماد على LLM.', stack: 'Python · BM25 · TF-IDF', url: 'https://github.com/aymnb7178/arabic-ai-knowledge-assistant' },
  { id: 'quality', kind: 'code', number: '06', title: 'Excel Automation Engine', arTitle: 'محرك أتمتة Excel', description: 'A data-quality workflow for merging, cleaning, validating, and reporting on Excel and CSV files.', arDescription: 'سير عمل لجمع وتنظيف والتحقق من ملفات Excel وCSV وإنتاج تقرير جودة قبل وبعد.', stack: 'Python · pandas · openpyxl', url: 'https://github.com/aymnb7178/excel-automation-engine' },
];

function App() {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState(() => localStorage.getItem('aymen-theme') || 'light');
  const [filter, setFilter] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const t = content[lang];
  const rtl = lang === 'ar';

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    localStorage.setItem('aymen-theme', theme);
  }, [lang, rtl, theme]);

  const visibleProjects = useMemo(() => filter === 'all' ? projects : projects.filter((project) => project.kind === filter), [filter]);

  const toggleLanguage = () => {
    setLang((current) => current === 'en' ? 'ar' : 'en');
    setMenuOpen(false);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('aymnb7178@gmail.com');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch (error) {
      window.location.href = links.email;
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="scroll-line" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#overview" aria-label="Aymen Abdurabu home" onClick={closeMenu}>
          <span className="brand-mark">AA<span>.</span></span>
          <span className="brand-caption">DIGITAL SYSTEMS</span>
        </a>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {Object.entries(t.nav).map(([key, label]) => <a key={key} href={`#${key}`} onClick={closeMenu}>{label}</a>)}
          <button className="mobile-action" onClick={toggleLanguage}>{t.switch}</button>
        </nav>
        <div className="top-actions">
          <button className="text-button language-button" onClick={toggleLanguage} aria-label={t.language}><Globe2 size={15} /> {t.switch}</button>
          <button className="icon-button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={`${t.theme}: ${theme}`} title={t.theme}>
            {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.close : t.menu}>
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-pad" id="overview">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="eyebrow-dot" /> {t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p className="hero-body">{t.hero.body}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">{t.hero.primary}<ArrowUpRight size={16} /></a>
              <a className="button button-quiet" href="#contact">{t.hero.secondary}<span className="button-arrow">↗</span></a>
            </div>
            <div className="availability"><span className="pulse" /> {t.hero.badge}</div>
          </div>
          <div className="signal-card reveal reveal-delay" aria-label={t.signal.title}>
            <div className="signal-top"><span>{t.signal.label}</span><span className="signal-index">A / 01</span></div>
            <div className="orbital-art" aria-hidden="true"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="orbit orbit-three" /><span className="signal-core"><Zap size={26} /></span><span className="red-node" /></div>
            <div className="signal-copy"><h2>{t.signal.title}</h2><p>{t.signal.body}</p></div>
            <div className="signal-status"><span className="status-bars"><i /><i /><i /><i /><i /></span>{t.signal.status}</div>
          </div>
        </section>

        <section className="signal-strip"><div>SOFTWARE</div><div>DATA</div><div>AUTOMATION</div><div>AI / HUMAN LOOP</div><div className="strip-note">EST. THROUGH PRACTICE</div></section>

        <section className="intro section-pad split-section" id="focus">
          <div className="section-label"><span>{t.intro.kicker}</span><span className="section-line" /></div>
          <div className="intro-content"><h2>{t.intro.title}</h2><p>{t.intro.body}</p><a className="inline-link" href="#story">{t.intro.cta}<ArrowUpRight size={15} /></a></div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-heading"><div><p className="eyebrow">{t.work.kicker}</p><h2>{t.work.title}</h2></div><p>{t.work.body}</p></div>
          <div className="filter-row" role="toolbar" aria-label="Project filters">
            {[['all', t.work.all], ['code', t.work.code], ['ai', t.work.ai], ['data', t.work.data]].map(([key, label]) => <button key={key} className={`filter-button ${filter === key ? 'active' : ''}`} onClick={() => setFilter(key)}>{label}</button>)}
          </div>
          <div className="project-grid">
            {visibleProjects.map((project, index) => <a className={`project-card project-${index % 3}`} key={project.id} href={project.url} target="_blank" rel="noreferrer">
              <div className="project-visual"><span className="project-number">{project.number}</span><span className="visual-cross">+</span><span className="visual-orbit" /><span className="visual-bar" /><span className="project-kind">{project.kind === 'ai' ? 'AI / VISION' : project.kind === 'data' ? 'DATA / OPS' : 'SYSTEM / CODE'}</span></div>
              <div className="project-meta"><span>{project.stack}</span><ArrowUpRight size={16} /></div>
              <h3>{rtl ? project.arTitle : project.title}</h3><p>{rtl ? project.arDescription : project.description}</p><span className="project-link">{t.work.open} <ArrowUpRight size={14} /></span>
            </a>)}
          </div>
        </section>

        <section className="focus-section section-pad">
          <div className="focus-intro"><p className="eyebrow">{t.focus.kicker}</p><h2>{t.focus.title}</h2><p>{t.focus.body}</p></div>
          <div className="focus-list">{t.focus.items.map(([number, title, body]) => <div className="focus-item" key={number}><span className="focus-number">{number}</span><div><h3>{title}</h3><p>{body}</p></div><ArrowUpRight size={17} /></div>)}</div>
        </section>

        <section className="story section-pad" id="story">
          <div className="section-heading"><div><p className="eyebrow">{t.story.kicker}</p><h2>{t.story.title}</h2></div><p>{t.story.body}</p></div>
          <div className="timeline">{t.story.items.map(([date, title, body]) => <div className="timeline-item" key={title}><div className="timeline-date">{date}</div><div className="timeline-dot" /><div className="timeline-content"><h3>{title}</h3><p>{body}</p></div></div>)}</div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-marker"><span className="marker-line" /><span>AA / 05</span></div>
          <div className="contact-content"><p className="eyebrow">{t.contact.kicker}</p><h2>{t.contact.title}</h2><p>{t.contact.body}</p><div className="contact-actions"><a className="button button-primary" href={links.email}>{t.contact.send}<Mail size={16} /></a><a className="button button-quiet" href={links.github} target="_blank" rel="noreferrer">{t.contact.github}<Code2 size={16} /></a></div><button className="copy-button" onClick={copyEmail}>{copied ? <Check size={15} /> : <Mail size={15} />} {copied ? t.copied : 'aymnb7178@gmail.com'} <span>{t.copy}</span></button></div>
          <div className="contact-orbit" aria-hidden="true"><span /><span /><span /></div>
        </section>
      </main>

      <footer className="footer section-pad"><div className="footer-main"><a className="brand" href="#overview"><span className="brand-mark">AA<span>.</span></span><span className="brand-caption">DIGITAL SYSTEMS</span></a><p>{t.footer}</p><a className="back-top" href="#overview">{t.back}<ArrowUpRight size={15} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Aymen Abdurabu Al Erwi</span><span>{t.privacy}</span><div className="socials"><a href={links.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Code2 size={16} /></a><a href={links.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><BriefcaseBusiness size={16} /></a><a href={links.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><Camera size={16} /></a><a href={links.telegram} aria-label="Telegram" target="_blank" rel="noreferrer"><Send size={16} /></a></div></div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
