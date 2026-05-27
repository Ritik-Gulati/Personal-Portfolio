import { Experience, Project, Skill, Education } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'fig-financial',
    company: 'Fig Financial',
    role: 'Software Engineer',
    duration: 'Dec 2023 – Present',
    location: 'Toronto, Canada',
    achievements: [
      'Built and maintained highly optimized ProductEligibilityService & LoanEligibilityService microservices, boosting operational efficiency.',
      'Processed ~1,500 daily loan applications reliably, ensuring minimal downtime and strict fault tolerance.',
      'Designed and documented scalable, secure, and performant REST APIs leveraging modern Java 17 and Spring Boot design patterns.',
      'Enhanced request-security by integrating enterprise Auth0 authentication standards paired with secure stateless JWT validation.',
      'Improved critical endpoint response times by 35% through robust caching strategies using Redis cache-aside caching model.',
      'Established streamlined CI/CD pipelines deploying directly via automated GitHub Actions workflows to AWS EC2 architectures.'
    ],
    techStack: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Redis', 'Auth0', 'JWT', 'React.js', 'AWS EC2', 'Docker', 'JUnit 5', 'Mockito', 'Swagger', 'GitHub Actions', 'YAML', 'REST API']
  },
  {
    id: 'netcreativemind',
    company: 'NetCreativeMind Solutions Pvt. Ltd',
    role: 'Software Developer',
    duration: 'Sept 2022 – June 2023',
    location: 'India',
    achievements: [
      'Developed essential resilient backend microservices for an high-volume government national-citizen portal.',
      'Designed secure RESTful web service endpoints featuring robust server-side validation & field filters.',
      'Optimized application performance & process pipelines, improving overall workflow processing workflow efficiency by 20%.',
      'Configured role-based access control (RBAC) schemas securing transactional customer actions.',
      'Optimized heavy PostgreSQL queries and redesigned index structures to dramatically reduce lookup overhead.'
    ],
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'PostgreSQL', 'Role-based Access Control', 'Apache Tomcat', 'Docker', 'GitHub Actions', 'JUnit']
  },
  {
    id: 'q2serves',
    company: 'Q2Serves Infotech',
    role: 'Web Developer Intern',
    duration: 'Feb 2022 – July 2022',
    location: 'India',
    achievements: [
      'Assisted senior web software engineer groups in constructing responsive components for web portals.',
      'Created elegant backend controllers, integration tests, and structured API feedback endpoints.',
      'Analyzed UI modules using modern responsive CSS/HTML principles to construct clean interactive dashboards.'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'MySQL', 'Git', 'Agile/Scrum', 'Web Application Development', 'System Integration', 'Debugging & Testing']
  },
  {
    id: 'hcl',
    company: 'HCL Technologies Ltd',
    role: 'Software Developer Intern',
    duration: 'Sept 2021 – Dec 2021',
    location: 'India',
    achievements: [
      'Built a WhatsApp Language Translator for HCL’s Bharat project using Twilio APIs and multilingual language packs.',
      'Developed AI/ML applications including facial recognition, number plate detection using CNN + Tesseract OCR, and a Google Assistant prototype.',
      'Automated data ingestion and SQL processing workflows using Python.',
      'Collaborated across teams to optimize translation performance and improve usability.'
    ],
    techStack: ['Python', 'Twilio API', 'AI/ML', 'CNN', 'Tesseract OCR', 'OpenCV', 'SQL', 'Database Management', 'NLP', 'Git', 'Agile/Scrum']
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    id: 'concordia',
    institution: 'Concordia University',
    degree: "Master’s in Applied Computer Science",
    duration: 'Sept 2023 – May 2025',
    achievements: [
      'Specialized in Advanced Database Systems, Distributed Computing Systems, and Machine Learning applications.',
      'Active researcher in automated predictive modeling models and advanced algorithmic design.'
    ]
  },
  {
    id: 'msit',
    institution: 'Mahavir Swami Institute of Technology (MSIT)',
    degree: 'Bachelor of Technology in Computer Science',
    duration: 'Sept 2019 – July 2023',
    achievements: [
      'Graduated with honors in Computer Science and Engineering.',
      'Core focus on Object-Oriented Software Design, Compiler Architecture, and Data Structures.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'compiler-dev',
    title: 'Compiler Development',
    description: 'A multi-phase optimizing compiler implemented in Java that translates a custom programming language into MOON assembly language.',
    detailedDescription: 'Developed an end-to-end multi-phase compiler system. Engineered a robust Lexizer (Lexical analysis) using token pattern-matching arrays. Architected a recursive-descent Parser generating rich Abstract Syntax Trees (AST). Built detailed Semantic Analysis code-blocks to resolve type scope checks, followed by the generation of MOON assembly instructions.',
    tech: ['Java', 'Compiler Design', 'AST', 'Assembly', 'Software Design'],
    githubUrl: 'https://github.com/Ritik-Gulati/java-compiler',
    liveUrl: '#',
    category: 'Backend'
  },
  {
    id: 'domination-game',
    title: 'Domination War Strategy Game',
    description: 'A robust, object-oriented console-based tactical strategy board game designed strictly with enterprise architectural patterns.',
    detailedDescription: 'Implemented a fully-featured war operations console game. Employed the behavioral State Pattern to manage complex phase cycles transition states, and the Command Pattern to manage user transactional actions with support for multiple undo/redo moves. Strictly maintained clean code architecture with unit tests.',
    tech: ['Java', 'OOP Principles', 'Design Patterns', 'JUnit 5'],
    githubUrl: 'https://github.com/Ritik-Gulati/domination-game',
    liveUrl: '#',
    category: 'Games'
  },
  {
    id: 'alzheimers-prediction',
    title: 'Alzheimer’s Disease Prediction Research',
    description: 'Co-authored a groundbreaking ML research paper published in the International Journal for Technological Research in Engineering.',
    detailedDescription: 'Designed an advanced predictive machine learning architecture to aid early-stage Alzheimer’s screening. Developed complex pre-processing pipelines over clinical metrics using Python libraries. Optimized classifier algorithms resulting in significantly higher diagnostics accuracy output score ranges.',
    tech: ['Python', 'Machine Learning', 'Research Paper', 'Pandas', 'Scikit-Learn'],
    githubUrl: 'https://github.com/Ritik-Gulati/alzheimers-prediction',
    liveUrl: 'https://www.ijtre.com/',
    category: 'Research'
  }
];

export const SKILLS: Skill[] = [
  // Programming Languages
  { name: 'Java', level: 98, category: 'Programming Languages' },
  { name: 'Python', level: 85, category: 'Programming Languages' },
  { name: 'SQL', level: 92, category: 'Programming Languages' },
  { name: 'JavaScript', level: 88, category: 'Programming Languages' },
  { name: 'C++', level: 75, category: 'Programming Languages' },

  // Backend & Frameworks
  { name: 'Spring Boot', level: 96, category: 'Backend & Frameworks' },
  { name: 'Spring Security', level: 88, category: 'Backend & Frameworks' },
  { name: 'Hibernate', level: 90, category: 'Backend & Frameworks' },
  { name: 'REST APIs', level: 95, category: 'Backend & Frameworks' },
  { name: 'Microservices', level: 92, category: 'Backend & Frameworks' },

  // Frontend
  { name: 'React.js', level: 82, category: 'Frontend' },
  { name: 'Next.js', level: 78, category: 'Frontend' },
  { name: 'HTML5', level: 90, category: 'Frontend' },
  { name: 'CSS3', level: 85, category: 'Frontend' },
  { name: 'JavaScript', level: 88, category: 'Frontend' },

  // Databases
  { name: 'PostgreSQL', level: 92, category: 'Databases' },
  { name: 'MySQL', level: 88, category: 'Databases' },
  { name: 'MongoDB', level: 80, category: 'Databases' },
  { name: 'Redis', level: 86, category: 'Databases' },
  { name: 'SQL Server', level: 84, category: 'Databases' },

  // Cloud & DevOps
  { name: 'AWS', level: 88, category: 'Cloud & DevOps' },
  { name: 'Docker', level: 90, category: 'Cloud & DevOps' },
  { name: 'Kubernetes', level: 75, category: 'Cloud & DevOps' },
  { name: 'Jenkins', level: 82, category: 'Cloud & DevOps' },
  { name: 'GitHub Actions', level: 88, category: 'Cloud & DevOps' },

  // Testing & Tools
  { name: 'JUnit 5', level: 92, category: 'Testing & Tools' },
  { name: 'Mockito', level: 90, category: 'Testing & Tools' },
  { name: 'Postman', level: 94, category: 'Testing & Tools' },
  { name: 'Git', level: 92, category: 'Testing & Tools' },
  { name: 'Maven', level: 90, category: 'Testing & Tools' }
];
