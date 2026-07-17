import { Experience, Project, Certificate, Service, BlogPost, QuickStat } from './types';

export const QUICK_STATS: QuickStat[] = [
  { label: 'Years of Experience', value: '5', suffix: '+', iconName: 'Briefcase' },
  { label: 'Projects Completed', value: '50', suffix: '+', iconName: 'CheckCircle' },
  { label: 'Technologies Mastered', value: '15', suffix: '+', iconName: 'Cpu' },
  { label: 'Client Satisfaction', value: '100', suffix: '%', iconName: 'Users' }
];

export const CLIENT_LOGOS = [
  { name: 'PITB', role: 'Intern / Plan9 Incubee', logoStyle: 'border-yellow-500/30 text-yellow-500' },
  { name: 'Upmark', role: 'Mobile App Developer', logoStyle: 'border-blue-400/30 text-blue-400' },
  { name: 'SG-Educate', role: 'Web Developer Developer', logoStyle: 'border-green-400/30 text-green-400' },
  { name: 'Meta Logix Tech', role: 'Front-End Developer', logoStyle: 'border-purple-400/30 text-purple-400' }
];

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    icon: 'Globe',
    shortDescription: 'Custom, high-performance, and responsive experiences tailored to business requirements.',
    bulletPoints: [
      'Engineered with React, TypeScript, HTML5, CSS3, and JavaScript',
      'PHP backends, WordPress custom theme, and database setups',
      'E-commerce stores, real-time dashboards, and secure SaaS portals',
      'Optimized Core Web Vitals with <3s loading speeds'
    ]
  },
  {
    id: 'flutter-dev',
    title: 'Flutter App Development',
    icon: 'Smartphone',
    shortDescription: 'Scalable and highly animated cross-platform mobile apps with pixel-perfect designs.',
    bulletPoints: [
      'Single codebase delivery for iOS and Android platforms',
      'State Management using Bloc, Provider, or Riverpod',
      'Custom API integration, JSON serialization, and PHP backends',
      'Native-grade transition velocities and offline local persistence'
    ]
  },
  {
   id: 'ui-ux',
    title: '3D Visualization & WebAR',
    icon: 'Sparkles',
    shortDescription: 'We transform physical products into photorealistic 3D assets and deploy WebAR frameworks, enabling customers to instantly visualize products in their physical environment via a simple QR scan.',
    bulletPoints: [
      'Hyper-realistic, photorealistic 3D product modeling and optimized material texturing',
      'Interactive "Place in Your Space" WebAR integration with absolute scale accuracy',
      'Seamless QR-code based instant AR triggers that operate without external applications',
      'Optimized performance assets (.GLB/.USDZ) for zero lag and rapid mobile load times'
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI & Business Automation',
    icon: 'Cpu',
    shortDescription: 'Workflow optimization with intelligent integrations to maximize operational velocity.',
    bulletPoints: [
      'AI-powered CRM workflow automations and analytics setups',
      'E-commerce process automation and dynamic pipeline routing',
      'Automated scraper and content generation engine pipelines',
      'Digital business consulting focused on scalable online architectures'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'sg-educate',
    name: 'SG Educate Website',
    category: 'Web',
    techStack: ['React', 'HTML5', 'Tailwind CSS', 'PHP', 'Directus CMS'],
    description: 'A multi-page custom education portal that connects students with courses, tutors, and dynamic scheduling boards. Features high-velocity page transitioning and intuitive curriculum filters.',
    keyAchievement: 'Served 10K+ monthly active pages with page speeds scoring 98 on PageSpeed Insights.'
  },
  {
    id: 'shopnova',
    name: 'ShopNova (Modern E-Commerce Platform)',
    category: 'E-commerce',
    techStack: ['WordPress', 'Elementor Pro', 'WooCommerce', 'PHP', 'Custom Plugins'],
    description: 'An interactive e-commerce and learning management system platform built for medical aspirants. Facilitates premium subscription models, automated quiz portals, and secure payment checkout routing.',
    keyAchievement: 'Optimized checkouts to support 45% reduction in cart abandonment rate.'
  },
  {
    id: 'nexora',
    name: 'Nexora Solutions (Corporate Business Website)',
    category: 'Web',
    techStack: ['React', 'Framer Motion', 'Tailwind CSS', 'Node.js', 'Express'],
    description: 'A cutting-edge corporate presentation layout built to highlight digital business consulting services. Incorporates horizontal fluid layout grids and interactive telemetry models.',
    keyAchievement: 'Improved lead generation by 150% through high-intent CTA funneling.'
  },
  {
    id: 'cartfusion',
    name: 'CartFusion (Premium Online Shopping App Store)',
    category: 'E-commerce',
    techStack: ['WordPress', 'WooCommerce', 'Tailwind CSS', 'Stripe Plugin'],
    description: 'A visual-focused lifestyle feline accessories e-commerce storefront with complex stock variant filters, interactive shopping bags, and visual layout systems.',
    keyAchievement: 'Configured and scale-tested backend systems with 5,000+ catalog SKUs.'
  },
  {
    id: 'genzy-events',
    name: 'Event Management (Genzy Events)',
    category: 'Web',
    techStack: ['React', 'Framer Motion', 'Tailwind CSS', 'Node.js'],
    description: 'A high-fidelity dynamic platform managing corporate corporate event scheduling, seat reservations, and instant virtual ticketing.',
    keyAchievement: 'Rendered massive reservation matrices under 12ms with responsive layout state.'
  },
  {
    id: 'upmark-apps',
    name: 'Flutter Apps at Upmark',
    category: 'Flutter',
    techStack: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'REST APIs'],
    description: 'A cascade of cross-platform applications delivered for international startup clients, ranging from workflow assistants to real-world fitness companion tools.',
    keyAchievement: 'Created smooth gesture controls running at solid 120 FPS across all mobile devices.'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Flutter App Development Specialist',
    issuer: 'PITB / Plan9',
    issueDate: 'Jan 2026',
    credentialId: 'PITB-FL-2026-9081',
    category: 'Flutter Development',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'cert-2',
    title: 'React & Modern Frontend Engineering',
    issuer: 'Coursera / Google Web Tech',
    issueDate: 'Nov 2025',
    credentialId: 'GGL-RE-99238',
    category: 'Web Development',
    imageUrl: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'cert-3',
    title: 'AI-Driven Business Automation Architect',
    issuer: 'Udemy / Tech Academy',
    issueDate: 'Aug 2025',
    credentialId: 'AI-AUTO-UDM-88',
    category: 'AI & Automation',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'cert-4',
    title: 'Advanced Interaction & UI/UX Design',
    issuer: 'Meta Logix Tech Professional Series',
    issueDate: 'May 2024',
    credentialId: 'MLT-UI-0112',
    category: 'UI/UX Design',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'cert-5',
    title: 'Tech Incubation and Startup Scaling Program',
    issuer: 'PITB Plan9 Incubator',
    issueDate: 'Nov 2024',
    credentialId: 'PLAN9-COHORT-24',
    category: 'Internships & Training',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'cert-6',
    title: 'Certified Digital Business & Scaling Consultant',
    issuer: 'Strategy & Enterprise Alliance',
    issueDate: 'Mar 2026',
    credentialId: 'SEA-BIZ-CONSULT-482',
    category: 'Business Consulting',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Founder',
    company: 'FurqanBiz',
    location: 'Sahiwal, Pakistan (Remote)',
    period: '2026 - Present',
    description: [
      'Established FurqanBiz as a specialized boutique development firm targeting workflow automation and high-end digital system architecture.',
      'Designed and deployed customized AI-augmented systems and enterprise software assets for client organizations.',
      'Expanded corporate networks across Web and Flutter consulting domains.'
    ],
    techStack: ['React', 'Flutter', 'AI Automation', 'Node.js', 'Consulting']
  },
  {
    id: 'exp-2',
    role: 'Mobile Application Developer',
    company: 'Upmark',
    location: 'Sahiwal, Pakistan',
    period: '2026 - Present',
    description: [
      'Lead Flutter architectures to construct high-speed, secure mobile solutions with rich micro-frontends and customizable API integrations.',
      'Formed state patterns that minimized rendering lag, boosting touch layouts and user sentiment core scores.',
      'Built native-bridge components interfacing device parameters safely.'
    ],
    techStack: ['Flutter', 'Dart', 'BLoC', 'REST APIs', 'Firebase Suite']
  },
  {
    id: 'exp-3',
    role: 'Freelance Web & Flutter Developer',
    company: 'Upwork / Fiverr Developer',
    location: 'Remote',
    period: '2025 - Present',
    description: [
      'Contracted directly with multiple US and EU clients to create digital storefronts, landing modules, and customized mobile utility tools.',
      'Maintained a stellar 100% Client Satisfaction rate across diverse design requests.',
      'Optimized legacy PHP & WordPress systems to improve interaction speeds.'
    ],
    techStack: ['React', 'WordPress', 'WooCommerce', 'Flutter', 'Tailwind CSS']
  },
  {
    id: 'exp-4',
    role: 'Intern',
    company: 'PITB / Plan9 Incubator',
    location: 'Lahore, Pakistan',
    period: '2024 - Present',
    description: [
      'Accelerated professional growth under the premier Punjab Information Technology Board startup incubation cohort.',
      'Developed essential prototypes for pitching and localized web panels for client interaction tests.',
      'Refined knowledge under industry mentors specializing in scalable business design systems.'
    ],
    techStack: ['Product Launching', 'Venture Testing', 'UI UX Prototyping']
  },
  {
    id: 'exp-5',
    role: 'Web Developer',
    company: 'SG-Educate',
    location: 'Remote Workspace',
    period: '2024',
    description: [
      'Spearheaded the design and front-to-back integration of the multi-page educational web resource SG-Educate.',
      'Integrated dynamic lesson registration tools, interactive payment portals, and a structured database backend.',
      'Reduced initial render-blocking times by lazy loading asset components.'
    ],
    techStack: ['React', 'Tailwind CSS', 'PHP', 'Directus CMS']
  },
  {
    id: 'exp-6',
    role: 'Front-End Developer',
    company: 'Meta Logix Tech',
    location: 'Onsite Development',
    period: '2023 - 2024',
    description: [
      'Developed responsive UI views following strict layouts and user flow constraints.',
      'Collaborated close with UX testing teams to deliver robust interactive animation controls.',
      'Ensured full browser compatibility and accessibility (WCAG compliance).'
    ],
    techStack: ['HTML5', 'CSS3/Sass', 'JavaScript ES6', 'Vite', 'GSAP']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Building Scalable Apps: Why Flutter & Bloc is a Match Made in Heaven',
    excerpt: 'State management can make or break your mobile application scalability. Let’s dive deep into our customized Bloc enterprise pattern that ensures 120 FPS velocities.',
    readTime: '5 min read',
    date: 'May 12, 2026',
    tags: ['Flutter', 'Bloc', 'Mobile Architecture'],
    content: 'Developing high-performance utility applications requires decoupling logic from layout. Bloc provides reactive flows of data representation state, keeping Flutter widgets simple and stateless. Combined with clean dependency injections, we can write unit test covers for our logic in record times, rendering layouts with absolute certainty.'
  },
  {
    id: 'blog-2',
    title: 'AI Automation: Scaling Lead Generations with Smarter CRM Hooks',
    excerpt: 'Discover the exact step-by-step webhook structures built under FurqanBiz to route incoming traffic pipelines automatically into personalized CRM engines.',
    readTime: '7 min read',
    date: 'Apr 28, 2026',
    tags: ['AI Builder', 'Automation', 'CRM Hooks'],
    content: 'Static landing pages represent lost potentials. With the integration of AI classifiers, incoming inquiries are immediately parsed for intent, tagged, and routed. This cuts manual response actions down by 80%, raising client booking conversions instantly with minimal operational expenses.'
  },
  {
    id: 'blog-3',
    title: 'Optimizing Core Web Vitals for React/Tailwind Multi-Page Portals',
    excerpt: 'Lighthouse scoring 100 on mobile is completely possible. Here are three crucial optimization tricks we successfully implemented over the SG Educate custom release.',
    readTime: '4 min read',
    date: 'Mar 15, 2026',
    tags: ['React', 'Tailwind CSS', 'Web Performance'],
    content: 'To achieve elite page render performance, we deployed modern image formats, stripped redundant layouts, and decoupled heavy tracking scripts. Setting conditional, priority-based async actions ensured visual content painted immediately, and layouts stabilized under 50ms.'
  }
];
