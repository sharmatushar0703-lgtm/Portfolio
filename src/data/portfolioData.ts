export interface Project {
  id: string;
  title: string;
  category: 'Analytics' | 'CRM' | 'MIS' | 'Web Platform';
  tagline: string;
  description: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
  technologies: string[];
  challenges: string;
  solution: string;
  impact: string;
  color: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  badge?: string;
  summary: string;
  bulletPoints: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
  accent: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
  description: string;
  badge: string;
}

export const PERSONAL_INFO = {
  name: 'Tushar Sharma',
  headline: 'System Executive | CRM Operations | Data Analyst | MIS & Reporting',
  subHeadline: 'Translating complex operational and admissions datasets into structured reporting logic, 3D analytical dashboards, and executive scorecards.',
  email: 'sharma.tushar0703@gmail.com',
  phone: '+91 88140 50806',
  location: 'Vadodara, Gujarat, India',
  github: 'https://github.com/sharmatushar0703',
  linkedin: 'https://linkedin.com',
  availableFor: [
    'System Executive',
    'Business Analyst',
    'Data Analyst',
    'MIS Analyst',
    'CRM Analyst',
    'Operations Analyst',
    'Reporting & Analytics'
  ],
  stats: [
    { label: 'Years of Experience', value: '5+', sub: 'Since Sep 2019' },
    { label: 'Parul University Tenure', value: '3+ Yrs', sub: 'System Executive' },
    { label: 'Operational Records Managed', value: '150K+', sub: 'Cleaned & Reconciled' },
    { label: 'Reporting Accuracy', value: '99.8%', sub: 'SOP & Audit Verified' },
  ],
  about: "System Executive with 3+ years of experience at Parul University and overall professional experience beginning in 2019, specializing in CRM operations, operational data analytics, MIS & management reporting, admissions workflows, and process optimization. Proven expertise in translating complex operational datasets into structured reporting logic, executive dashboards, and web analytical tools. Adept at cross-functional coordination, data validation, and process improvement to empower executive decision-making."
};

export const PROJECTS: Project[] = [
  {
    id: 'admissions-analytics',
    title: 'University Admissions & Enrollment Intelligence Platform',
    category: 'Web Platform',
    tagline: 'Interactive 3D web platform converting complex multi-channel admissions data into real-time executive dashboards.',
    description: 'Designed and engineered a centralized data visualization architecture that eliminates spreadsheet dependency across university leadership and department heads.',
    metrics: [
      { label: 'Report Turnaround', value: '85% Faster' },
      { label: 'Data Accuracy', value: '99.8%' },
      { label: 'Spreadsheet Redundancy', value: 'Zero' },
    ],
    highlights: [
      'Implemented robust business logic for candidate-level drilldowns, dynamic filtering, status reconciliation, and Year-over-Year (YoY) comparative growth tracking.',
      'Engineered multi-dimensional analytical views covering campus-wise, program-wise, source attribution, publisher ROI, and geographical state distribution heatmaps.',
      'Significantly reduced institutional reliance on manual spreadsheet updates, enhancing data accessibility, reporting turnaround, and executive decision-making.',
      'Built automated anomaly detection and deduplication pipelines across high-volume applicant records.'
    ],
    technologies: ['React', 'Three.js', 'JavaScript', 'Data Visualization', 'Business Logic', 'REST APIs'],
    challenges: 'High volume of disparate applicant sources, inconsistent channel formatting, and slow turnaround of manual spreadsheet reconciliations during peak admissions cycles.',
    solution: 'Engineered a unified web analytics engine with automated data transformation, dynamic drilldown views, and real-time YoY comparison matrices.',
    impact: 'Transformed daily reporting operations from hours of manual collation to instantaneous, validated executive insights.',
    color: '#0ea5e9'
  },
  {
    id: 'crm-pipeline',
    title: 'Enterprise CRM & Contact Center Data Operations',
    category: 'CRM',
    tagline: 'End-to-end operational pipeline overseeing leads, registrations, and complete student admissions lifecycle.',
    description: 'Management and optimization of the university in-house CRM ecosystem, standardizing multi-touchpoint data capture and eliminating operational bottlenecks.',
    metrics: [
      { label: 'Lifecycle Stages', value: '6 Stages' },
      { label: 'Deduplication Rate', value: '100%' },
      { label: 'Pipeline Visibility', value: 'Real-time' },
    ],
    highlights: [
      'Analyzed high-volume CRM datasets across leads, candidate registrations, applications, fee submissions, and final admissions.',
      'Performed continuous data validation, cleansing, filtering, deduplication, and reconciliation across disparate contact center channels.',
      'Formulated structured reporting methodologies and key performance metrics to provide leadership with actionable intelligence.',
      'Streamlined communication workflows between telephonic contact center teams, campus counselors, and senior administration.'
    ],
    technologies: ['CRM Ecosystems', 'Data Cleansing', 'Deduplication Logic', 'Workflow Automation', 'Lead Management'],
    challenges: 'Disparate lead sources producing duplicate entries, inconsistent follow-up tracking, and non-standardized conversion status updates.',
    solution: 'Designed strict validation rules, deduplication mechanisms, and standard operating procedures (SOPs) for data capture and contact center agent logging.',
    impact: 'Increased lead conversion traceability by 40% and established a pristine single source of truth for university admissions leadership.',
    color: '#10b981'
  },
  {
    id: 'mis-reporting',
    title: 'Executive MIS & Strategic Performance Scorecards',
    category: 'MIS',
    tagline: 'Automated executive MIS suite delivering comparative performance analyses and leadership presentation decks.',
    description: 'Comprehensive management reporting architecture providing deep visibility into conversion funnels, intake variations, and channel effectiveness.',
    metrics: [
      { label: 'Scorecards Delivered', value: '50+ / Mo' },
      { label: 'Data Reconciled', value: '100%' },
      { label: 'Executive Adoption', value: 'Leadership' },
    ],
    highlights: [
      'Designed and maintained recurring MIS reports, performance scorecards, and leadership presentation decks for senior management.',
      'Conducted in-depth comparative and trend analyses to identify intake trends, channel effectiveness, and conversion variations.',
      'Applied advanced Excel modeling, lookup mechanisms, and validation rules to ensure error-free data aggregation and presentation consistency.',
      'Partnered with cross-functional leadership to translate business expansion targets into measurable KPIs.'
    ],
    technologies: ['Advanced Excel', 'Data Modeling', 'Pivot Intelligence', 'Lookup Mechanisms', 'KPI Scorecards'],
    challenges: 'Senior executives required rapid comparative insights across campuses, programs, and marketing channels without sorting through raw spreadsheets.',
    solution: 'Created automated executive summary scorecards featuring trend indicators, variance alerts, and high-level KPI rollups.',
    impact: 'Empowered weekly strategy meetings with accurate, presentation-ready metrics and strategic growth forecasts.',
    color: '#a855f7'
  },
  {
    id: 'skill-development-ops',
    title: 'National Skill Development Operations & Portal Governance',
    category: 'Analytics',
    tagline: 'Multi-state MPR tracking, candidate lifecycle management, and government project compliance at Sofcon India.',
    description: 'Direction of center operations, government portal reporting on DDU-GKY MPR, and structured candidate assessment and placement governance.',
    metrics: [
      { label: 'Compliance Rate', value: '100% SOP' },
      { label: 'Batches Monitored', value: 'National Scale' },
      { label: 'OJT Governance', value: 'Verified' },
    ],
    highlights: [
      'Directed center operations, MIS reporting, and national project execution across government and skill development programs.',
      'Managed end-to-end MIS reporting and candidate lifecycle tracking on the DDU-GKY MPR portal, overseeing batch creation, trainee documentation, assessments, and placement verification.',
      'Prepared comprehensive state-level skill-gap analysis presentations and project proposals for new project bidding and operational expansion.',
      'Governed candidate dossier maintenance, structured on-the-job training (OJT) records, placement drives, and strict SOP audit adherence.'
    ],
    technologies: ['DDU-GKY MPR Portal', 'Government Compliance', 'Skill-Gap Analysis', 'SOP Governance', 'MIS Tracking'],
    challenges: 'Strict statutory compliance deadlines, complex candidate verification standards, and multi-agency auditing requirements.',
    solution: 'Instituted rigorous internal auditing checkpoints, standardized trainee dossier workflows, and real-time batch milestone trackers.',
    impact: 'Achieved 100% audit clearance on government portal evaluations and successfully executed key skill development initiatives.',
    color: '#f59e0b'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Parul University',
    role: 'System Executive — Central Contact Center',
    period: '10 May 2023 – Present',
    location: 'Vadodara, Gujarat, India',
    badge: 'Current Primary Role',
    summary: 'Leading CRM operations, operational analytics, admissions workflows, and executive MIS architecture for one of India’s premier private universities.',
    bulletPoints: [
      'Manage and optimize the university’s in-house CRM ecosystem, overseeing end-to-end operational and admissions workflows covering leads, registrations, applications, and student lifecycle data.',
      'Architect and deliver recurring MIS reports, executive dashboards, comparative performance analyses, and analytical presentations for university leadership and department heads.',
      'Perform rigorous data validation, cleansing, reconciliation, deduplication, and anomaly detection across high-volume operational datasets to ensure high reporting accuracy and integrity.',
      'Partner with senior leadership and cross-functional teams to translate complex business objectives into structured technical reporting logic, identifying bottlenecks and eliminating manual reporting redundancies.',
      'Engineered structured reporting logic and front-end data visualization architecture for university admission summary reporting, enabling real-time drilldowns and YoY comparative growth tracking.'
    ],
    technologies: ['CRM Systems', 'MIS Dashboards', 'Data Cleansing', 'Deduplication', 'Comparative Analytics', 'Cross-functional Leadership']
  },
  {
    company: 'Sofcon India Pvt. Ltd.',
    role: 'Center Head — Operations & MIS',
    period: 'September 2019 – April 2023',
    location: 'India',
    summary: 'Managed national government skill development projects, candidate lifecycles, and state-level analytical research presentations.',
    bulletPoints: [
      'Executive Operations: Directed center operations, MIS reporting, and national project execution across government and skill development programs.',
      'MIS & Portal Operations: Managed end-to-end MIS reporting and candidate lifecycle tracking on the DDU-GKY MPR portal, overseeing batch creation, trainee documentation, assessments, and placement verification.',
      'Research & State Analysis: Prepared comprehensive state-level skill-gap analysis presentations and project proposals for new project bidding and operational expansion.',
      'Placement & SOP Governance: Governed candidate dossier maintenance, structured on-the-job training (OJT) records, placement drives, and strict SOP audit adherence.'
    ],
    technologies: ['Operations Management', 'DDU-GKY Portal', 'MIS Reporting', 'Skill-Gap Analysis', 'SOP Governance']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Data Analytics & MIS',
    color: '#0ea5e9',
    accent: 'from-cyan-500/20 to-blue-500/10',
    skills: [
      'Data Analytics',
      'Data Cleansing',
      'Data Validation',
      'Data Reconciliation',
      'Anomaly Detection',
      'Trend & Variance Analysis',
      'Advanced Excel Modeling',
      'MIS Dashboards',
      'Year-over-Year (YoY) Tracking'
    ]
  },
  {
    title: 'CRM & Operations',
    color: '#10b981',
    accent: 'from-emerald-500/20 to-teal-500/10',
    skills: [
      'CRM Ecosystem Management',
      'Lead Lifecycle Management',
      'Registration Operations',
      'Admissions Funnel Optimization',
      'Workflow Automation',
      'Data Quality Governance',
      'Contact Center Operations',
      'Deduplication Mechanisms'
    ]
  },
  {
    title: 'Reporting & Strategy',
    color: '#a855f7',
    accent: 'from-purple-500/20 to-indigo-500/10',
    skills: [
      'Executive Reporting',
      'Leadership Presentation Decks',
      'Performance Scorecards',
      'Comparative Trend Analysis',
      'Data Visualization Architecture',
      'Cross-functional Coordination',
      'Process Improvement',
      'Stakeholder Alignment'
    ]
  },
  {
    title: 'Technology & Tools',
    color: '#f59e0b',
    accent: 'from-amber-500/20 to-orange-500/10',
    skills: [
      'Microsoft Excel (Advanced)',
      'CRM Systems & Portals',
      'Python (Data Processing)',
      'JavaScript / TypeScript',
      'Three.js / WebGL',
      'React & Web Dashboards',
      'Git / GitHub',
      'Firebase'
    ]
  }
];

export const EDUCATION = [
  {
    degree: 'Bachelor of Commerce (B.Com.)',
    institution: 'Dronacharya Government College',
    location: 'Gurgaon, Haryana',
    year: 'Graduated: 2019',
    description: 'Foundation in commerce, financial accounting, business statistics, and analytical management.'
  },
  {
    degree: 'Higher Secondary Certificate (10+2)',
    institution: 'Government Senior Secondary School',
    location: 'Kosli, Rewari, Haryana',
    year: '2016 • Score: 70%',
    description: 'Completed higher secondary education with strong focus on commerce and mathematics.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Advanced Excel – Data Analysis & Modelling',
    issuer: 'Finexcel Academy',
    badge: 'Data Modeling',
    description: 'Advanced data modeling, lookup functions, statistical calculations, pivot reporting, and workflow automation.'
  },
  {
    title: 'DDU-GKY Master Level E-SoP Certification',
    issuer: 'DDU-GKY Project (Ministry of Rural Development)',
    badge: 'Government Compliance',
    description: 'Cleared all three Master Level E-SoP modules for project execution, MIS data compliance, and operational SOP adherence.'
  }
];
