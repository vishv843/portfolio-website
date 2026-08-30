export const profile = {
  name: 'Vishv Joshi',
  title: 'Software Engineer | Full-Stack Developer | AI Enthusiast',
  headline:
    'I build robust, human-centered software systems that blend product thinking, cloud architecture, and practical AI experiences.',
  location: 'Richmond, VA',
  phone: '+1 (716) 609-2152',
  email: 'vishvjoshi2001@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/vishv-joshi',
  github: 'https://github.com/vishv843',
  resumeUrl: 'https://drive.google.com/file/d/1wZoVDA_x2RYA1uIJZk0Ao64hbcKTW1K4/view?usp=sharing',
  summary:
    'Software engineer with experience across AI-driven tooling, cloud-native backend systems, and end-to-end product development. I enjoy building reliable applications that simplify workflows, improve user outcomes, and scale with real-world demand.'
};

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' }
];

export const quickStats = [
  { label: 'Experience', value: '1+ years' },
  { label: 'Focus', value: 'Cloud + AI' },
  { label: 'Education', value: 'MS CS at UVA' }
];

export const education = [
  {
    school: 'University of Virginia',
    degree: 'MS Computer Science',
    period: 'Aug 2025 – Dec 2026',
    location: 'Charlottesville, VA',
    details: ['Coursework: Cloud Computing, Reinforced Learning, 3D Computer Vision, Security of AI']
  },
  {
    school: 'Dhirubhai Ambani Institute of Information and Communication Technology',
    degree: 'B.Tech (Hons.), ICT with Minor in Computational Science',
    period: 'Aug 2019 – May 2023',
    location: 'Gandhinagar, India',
    details: []
  }
];

export const skills = {
  languages: ['Python', 'Java', 'Dart', 'JavaScript', 'C', 'C++', 'SQL', 'PartiQL', 'HTML/CSS'],
  technologies: [
    'FastAPI',
    'React',
    'Spring Boot',
    'Spring Cloud',
    'Flutter',
    'TensorFlow',
    'Keras',
    'AWS',
    'Git',
    'JUnit',
    'Feign',
    'Reactive Feign',
    'MongoDB',
    'DynamoDB',
    'Firebase',
    'Elasticsearch',
    'Mockito',
    'Kafka',
    'Gradle',
    'Maven',
    'WebFlux',
    'Docker'
  ],
  certifications: [
    'AWS Certified Solutions Architect – Associate',
    'Deep Learning Specialization'
  ]
};

export const experience = [
  {
    company: 'Hexaware Technologies',
    role: 'Python Full Stack Engineer - Associate',
    period: 'July 2025 – Sept 2025',
    location: 'Richmond, VA',
    stack: ['Python', 'React', 'GenAI', 'Azure'],
    highlights: [
      'Engineered an AI agent to automate generation of detailed request forms for hiring candidates using Job Descriptions, Statements of Work, and contextual user inputs, achieving a 20% boost in HR productivity.',
      'Authored the technical design document, defined user stories, and structured application architecture while continuously engaging with end users to refine requirements.',
      'Integrated OpenAI APIs to deliver a context-aware continuous chat feature for data analysis, editing generated forms, and answering user queries.',
      'Implemented a scalable Azure Blob file store structure and APIs to perform CRUD operations on files.',
      'Developed interactive chat and file upload, preview, and download components for the frontend.',
      'Instituted an authentication flow to ensure secure, role-based access to Azure Blob storage files.'
    ]
  },
  {
    company: 'Urban Food Alliance',
    role: 'Full-Stack Developer',
    period: 'Oct 2024 – Jan 2025',
    location: 'Richmond, VA',
    stack: ['Dart', 'Flutter', 'Firebase'],
    highlights: [
      'Developed an unemployment assistance mobile app with recruiter outreach, resume curation, and job search optimization features.',
      'Designed and implemented a user profile feature with auto-save triggers for personalized preferences and resume details.',
      'Constructed a job application tracking system with performance metrics, enabling users to manage multiple job entries.'
    ]
  },
  {
    company: 'Tekion Corp',
    role: 'Associate Software Engineer',
    period: 'Jan 2023 – Sept 2023',
    location: 'Bengaluru, India',
    stack: ['Java', 'Spring Boot', 'Spring Cloud', 'DynamoDB', 'MongoDB', 'Kafka'],
    highlights: [
      'Engineered a high-performance payment gateway service in Spring Boot, optimized token generation, and leveraged DynamoDB for secure, scalable payment data storage.',
      'Built a Spring Boot service integrated with Kafka for pusher notifications, used MongoDB for efficient storage, and monitored performance with rigorous unit testing.',
      'Implemented a reactive gateway in Spring Cloud for non-blocking API calls, introduced ReactiveFeign clients with robust error handling, achieving a 40% latency reduction.',
      'Devised an HTTP callout service in Spring Boot to integrate external APIs using OkHttp3 with retries, timeouts, and fault tolerance.'
    ]
  }
];

export const projects = [
  {
    name: 'Plasma Density Model',
    period: 'Sept 2022 – Feb 2023',
    category: 'Research',
    stack: ['Python', 'TensorFlow', 'Keras'],
    summary: 'Supervisor: Prof. Bhaskar Chaudhury',
    highlights: [
      'Developed a U-Net-based deep learning model to predict plasma density from electromagnetic wave profiles, trained on 8000 images with varied data sparsities.',
      'Published findings in Journal of Physics D: Applied Physics, Volume 57.'
    ]
  }
];
