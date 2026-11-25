// Content for the SpatialOS-style portfolio UI.
// Facts here follow what AIMAN has confirmed about himself; no invented
// metrics, clients, or credentials were added beyond what he has stated.

export const links = {
  github: 'https://github.com/aymnb7178',
  linkedin: 'https://www.linkedin.com/in/aiman-al-erwi-976b04400/',
  instagram: 'https://www.instagram.com/i1iair',
  telegram: 'https://t.me/IT_Tech_Pioneers_ENG',
  x: 'https://x.com/uqg_9',
  whatsapp: 'https://wa.me/966566065221',
  email: 'aymnb7178@gmail.com',
};

export const projects = [
  {
    id: 'jarvis',
    category: 'ai',
    tag: { en: 'AI · Productivity', ar: 'ذكاء اصطناعي · إنتاجية' },
    title: { en: 'J.A.R.V.I.S / SpatialOS', ar: 'J.A.R.V.I.S / SpatialOS' },
    description: {
      en: 'A spatial desktop experiment controlled through hand gestures and voice — camera-based 3D interaction, gesture recognition, and voice commands that launch Calculator, Notepad, and Terminal.',
      ar: 'تجربة سطح مكتب مكانية تُقاد بإيماءات اليد والصوت — تفاعل ثلاثي الأبعاد عبر الكاميرا، وتعرّف على الإيماءات، وأوامر صوتية تفتح الآلة الحاسبة والمفكرة والطرفية.',
    },
    stack: ['Python', 'OpenCV', 'MediaPipe', 'Voice UI'],
    url: 'https://github.com/aymnb7178/SpatialOS-JARVIS-Workstation',
  },
  {
    id: 'signbridge',
    category: 'cv',
    tag: { en: 'Computer Vision', ar: 'رؤية حاسوبية' },
    title: { en: 'SignBridge AI', ar: 'SignBridge AI' },
    description: {
      en: 'A non-commercial, rule-based prototype that recognizes a limited set of Arabic–English hand signs and turns them into readable sentences.',
      ar: 'نموذج أولي غير تجاري قائم على قواعد يتعرف على مجموعة محدودة من إشارات اليد عربي-إنجليزي ويحوّلها إلى جمل مقروءة.',
    },
    stack: ['Python', 'OpenCV', 'MediaPipe'],
    url: 'https://github.com/aymnb7178/SignBridge-AI',
  },
  {
    id: 'data-intel',
    category: 'data',
    tag: { en: 'Data Analytics', ar: 'تحليل بيانات' },
    title: { en: 'Data Analytics Dashboard', ar: 'لوحة تحليل بيانات' },
    description: {
      en: 'Practical data-cleaning and reporting work: pivot tables, Power Query, and dashboards built from spreadsheet and CSV sources.',
      ar: 'عمل عملي في تنظيف البيانات وإعداد التقارير: جداول محورية، Power Query، ولوحات مبنية من ملفات جداول بيانات وCSV.',
    },
    stack: ['Power BI', 'SQL', 'Excel'],
    url: 'https://github.com/aymnb7178/python-data-analysis',
  },
  {
    id: 'automation',
    category: 'automation',
    tag: { en: 'Automation', ar: 'أتمتة' },
    title: { en: 'Excel Automation Engine', ar: 'محرك أتمتة Excel' },
    description: {
      en: 'A workflow that merges, cleans, validates, and reports on Excel and CSV files, producing a before/after data-quality report.',
      ar: 'سير عمل يدمج وينظّف ويتحقق من ملفات Excel وCSV، وينتج تقرير جودة بيانات قبل/بعد المعالجة.',
    },
    stack: ['Python', 'pandas', 'openpyxl'],
    url: 'https://github.com/aymnb7178/excel-automation-engine',
  },
];

export const filters = [
  { id: 'all', en: 'All', ar: 'الكل' },
  { id: 'ai', en: 'AI & ML', ar: 'ذكاء اصطناعي' },
  { id: 'cv', en: 'Computer Vision', ar: 'رؤية حاسوبية' },
  { id: 'data', en: 'Data Analytics', ar: 'تحليل بيانات' },
  { id: 'automation', en: 'Automation', ar: 'أتمتة' },
];

export const skillGroups = [
  {
    title: { en: 'Programming & Development', ar: 'البرمجة والتطوير' },
    icon: 'Code2',
    items: ['Python', 'C++', 'JavaScript', 'SQL', 'Git', 'GitHub'],
  },
  {
    title: { en: 'Data & Analytics', ar: 'البيانات والتحليل' },
    icon: 'BarChart3',
    items: ['Excel', 'Power BI', 'SQL', 'Pandas'],
  },
  {
    title: { en: 'AI & Automation', ar: 'الذكاء الاصطناعي والأتمتة' },
    icon: 'Brain',
    items: ['OpenCV', 'MediaPipe', 'Gemini API', 'n8n'],
  },
  {
    title: { en: 'Tools & Others', ar: 'أدوات أخرى' },
    icon: 'Cloud',
    items: ['Linux CLI', 'Windows', 'Canva', 'Gamma'],
  },
];

export const certifications = {
  en: [
    'Google IT Support Professional Certificate',
    'Google Data Analytics Professional Certificate',
    'Advanced Excel Specialization',
    'ICDL',
  ],
  ar: [
    'شهادة Google IT Support الاحترافية',
    'شهادة Google Data Analytics الاحترافية',
    'تخصص Advanced Excel',
    'ICDL',
  ],
};

export const learningGoals = {
  en: ['NVIDIA AI Infrastructure Fundamentals', 'Growing Python & automation skills', 'AI systems in practice'],
  ar: ['أساسيات بنية الذكاء الاصطناعي من NVIDIA', 'تطوير مهارات Python والأتمتة', 'أنظمة الذكاء الاصطناعي عمليًا'],
};

export const timeline = [
  {
    icon: 'GraduationCap',
    title: { en: 'Midocean University', ar: 'جامعة Midocean' },
    body: { en: 'Bachelor of Information Technology — expected 2028', ar: 'بكالوريوس تقنية المعلومات — التخرج المتوقع 2028' },
  },
  {
    icon: 'Briefcase',
    title: { en: 'Freelance Developer & Digital Services', ar: 'مطوّر مستقل وخدمات رقمية' },
    body: { en: '2023 – present · 100+ clients across Excel, documents, design, and light automation', ar: '2023 – الآن · أكثر من 100 عميل في Excel والمستندات والتصميم وأتمتة خفيفة' },
  },
  {
    icon: 'Briefcase',
    title: { en: 'Data & Operations Assistant, Dar Al Baraka Hotel', ar: 'مساعد بيانات وعمليات، فندق دار البركة' },
    body: { en: 'Hajj season 2025 · guest, room, and booking records in Excel', ar: 'موسم حج 2025 · سجلات الضيوف والغرف والحجوزات في Excel' },
  },
  {
    icon: 'Rocket',
    title: { en: 'Techno Repos', ar: 'Techno Repos' },
    body: { en: 'General Supervisor of a 5,000–7,000-member tech community', ar: 'مشرف عام لمجتمع تقني يضم 5,000–7,000 عضو' },
  },
];

export const stats = {
  home: [
    { value: '6+', label: { en: 'Projects Built', ar: 'مشاريع منجزة' } },
    { value: '100+', label: { en: 'Clients Served', ar: 'عملاء تمت خدمتهم' } },
    { value: '5K+', label: { en: 'Community Members', ar: 'أعضاء المجتمع' } },
  ],
  about: [
    { value: '5th', label: { en: 'Semester of Study', ar: 'الفصل الدراسي' } },
    { value: '6+', label: { en: 'Major Projects', ar: 'مشاريع رئيسية' } },
    { value: '100+', label: { en: 'Clients Served', ar: 'عملاء تمت خدمتهم' } },
    { value: '20', label: { en: 'Moderators Led', ar: 'مشرفون تحت القيادة' } },
  ],
};
