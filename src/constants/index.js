import project3 from "../assets/projects/product_analyzer.png";
import project1 from "../assets/projects/credit_udaan.png";
import project2 from "../assets/projects/project-2.jpg"; // Placeholder for video
import project4 from "../assets/projects/getflix.png";
import project5 from "../assets/projects/deffy_funds.png";

const GAMING_CAFE_VIDEO = "https://private-user-images.githubusercontent.com/70696384/417813001-d5d4f21e-b091-4fe7-af9f-4773287756f8.mp4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjY3NjI1NzksIm5iZiI6MTc2Njc2MjI3OSwicGF0aCI6Ii83MDY5NjM4NC80MTc4MTMwMDEtZDVkNGYyMWUtYjA5MS00ZmU3LWFmOWYtNDc3MzI4Nzc1NmY4Lm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEyMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMjI2VDE1MTc1OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ3Y2M5ZTQ1NWQ3ZGQ4NTRlMmM2MDRjY2M1NzhhMjRmNzQxN2UzMjQ0OTUzZDliMzc5MmUwZWViMGQ4OGY1MzQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.tJY5j6xHYDxttND_R3zeijRyZMGzRxkUIC9-iUtSh-w";

export const HERO_CONTENT = `GenAI Engineer and Full-Stack AI/ML Developer with a Master's in Data Science from the University of Exeter. I specialize in building AI Agent monitoring platforms, HIPAA-compliant assistants, and real-time RAG systems. Passionate about leveraging cutting-edge AI to drive innovation and deliver impactful solutions.`;

export const EXPERIENCES = [
  {
    year: "April 2025 - Present",
    role: "GenAI Engineer",
    company: "NTT DATA, Mumbai",
    description: `Led team developing AI Agent monitoring platform with real-time performance tracking, reducing model debugging cycles. Architected HIPAA-compliant multi-agent assistant with Redis context management and hybrid retrieval, processing 10K+ regulatory queries with 98% accuracy.`,
    technologies: ["AI Agents", "Redis", "Hybrid Retrieval", "Python"],
  },
  {
    year: "April 2022 - Jun 2022",
    role: "ML Engineering Intern",
    company: "TCR Innovation, Mumbai",
    description: `Developed predictive retention model achieving 85% accuracy, preventing $50K monthly customer churn. Automated data processing pipelines with Python and SQL, reducing manual intervention by 60% and improving data quality.`,
    technologies: ["Python", "SQL", "Machine Learning", "Data Pipelines"],
  },
];

export const EDUCATION = [
  {
    year: "Sept 2023 - Sept 2024",
    degree: "Master of Science in Data Science with AI (Merit)",
    institution: "University of Exeter, England, UK",
    description: "Dissertation: Preventing confidential data leaks with NLP – achieved 40% reduction in data exposure. Advanced coursework: Machine Learning, Social Network Analysis, Text Processing with Python.",
  },
  {
    year: "June 2019 - May 2023",
    degree: "BE Electronics and Telecommunications Engineering (8.01/10 CGPA)",
    institution: "Xavier Institute of Engineering, Mumbai, IND",
    description: "Final-Year Project: Decentralised crowdfunding platform on Solana blockchain with smart contracts. Technical foundation: Data Structures (C++), Database Management (SQL), Deep Learning (Python).",
  },
];

export const PROJECTS = [
  {
    title: "AI-Powered Product Analyzer",
    subtitle: "Gen-AI E-Commerce Listing Generator",
    image: project3,
    description: "This generative AI tool transforms raw social media content into polished e-commerce listings in seconds, eliminating hours of manual product description writing.",
    features: [
      "Built an intelligent Instagram post analyzer using OpenAI Vision API for automated product feature extraction",
      "Integrated DALL-E image generation to produce photorealistic product variations from source content",
      "Engineered a multi-modal pipeline combining image analysis and natural language generation",
      "Deployed a Streamlit interface enabling drag-and-drop image uploads and URL-based content ingestion",
      "Optimized prompt engineering for consistent, high-quality e-commerce copy generation"
    ],
    techStack: ["Streamlit", "OpenAI API", "DALL-E", "GPT Vision", "Python"],
    deepDive: "The system implements a two-stage RAG-inspired pipeline: Stage 1 uses GPT-4 Vision to analyze images. Stage 2 feeds this structured context into a fine-tuned prompt template.",
    link: "https://github.com/krishkpatil/llms"
  },
  {
    title: "Gaming Cafe Management System",
    subtitle: "Full-Stack Operations Suite for Gaming Centers",
    image: GAMING_CAFE_VIDEO,
    isVideo: true,
    description: "This enterprise-grade management platform eliminates manual tracking chaos in gaming cafes by automating session billing and real-time machine monitoring.",
    features: [
      "Developed real-time session tracking with automated billing calculations based on machine type and hourly rates",
      "Implemented JWT-based authentication with role-based access control for Admin and User portals",
      "Designed a dual-dashboard architecture enabling administrators to manage inventory while users track balances",
      "Built RESTful APIs with Flask and SQLAlchemy ORM for efficient database operations",
      "Styled the frontend with Chakra UI for a polished, accessible user interface"
    ],
    techStack: ["Flask", "SQLAlchemy", "SQLite", "React.js", "Chakra UI", "JWT"],
    deepDive: "The backend employs SQLAlchemy's session management with optimistic locking to handle concurrent session updates. JWT tokens are signed with HS256 and include refresh token rotation for enhanced security.",
    link: "https://github.com/krishkpatil/gaming-cafe"
  },
  {
    title: "Deffy Funds",
    subtitle: "Deffy: Decentralized Solana Crowdfunding Ecosystem",
    image: project5,
    description: "Empowers creators to launch fundraising campaigns with 100% transparency while giving backers a trustless environment for global contributions.",
    features: [
      "Permissionless Campaign Creation: Users can architect and deploy custom fundraising campaigns directly to the blockchain",
      "Trustless Contributions: Implements secure fund handling where backers can contribute SOL directly to campaign program addresses",
      "Real-time Campaign Discovery: Features a dynamic dashboard for exploring active campaigns and tracking progress metrics",
      "Wallet Integration: Seamless connection with Solana-compatible wallets (like Phantom) for one-click transactions"
    ],
    techStack: ["Solana", "Rust (Anchor)", "React.js", "Tailwind CSS", "Node.js"],
    deepDive: "Built using Rust to manage campaign states as individual accounts on the Solana ledger. Leverages Anchor to simplify the interaction between the React frontend and on-chain programs.",
    link: "https://github.com/SiddheshZagade/finaldeffy"
  },
  {
    title: "Credit Udaan",
    subtitle: "AI-Powered Credit Intelligence for India",
    image: project1,
    description: "Credit Udaan democratizes financial literacy by predicting credit scores with neural network precision and eliminating socioeconomic bias through fairness-optimized algorithms.",
    features: [
      "Engineered a PyTorch-based neural network achieving high-accuracy credit score predictions (300-900 range)",
      "Implemented fairness optimization algorithms to minimize demographic and socioeconomic bias in predictions",
      "Integrated OpenAI GPT-4o with Structured Outputs for generating step-by-step personalized financial improvement plans",
      "Architected a responsive React frontend with TailwindCSS for seamless mobile-first user experiences",
      "Deployed Flask REST APIs with robust input validation and error handling"
    ],
    techStack: ["PyTorch", "OpenAI GPT-4o", "Flask", "React", "TailwindCSS"],
    deepDive: "The platform leverages a multi-layer perceptron (MLP) architecture trained on Indian credit bureau patterns, with custom loss functions incorporating fairness constraints to reduce bias.",
    link: "https://github.com/krishkpatil/CreditUdaan"
  },
  {
    title: "GetFlix Movie Discovery",
    subtitle: "High-Performance Movie Discovery Engine",
    image: project4,
    description: "GetFlix delivers a blazing-fast, visually stunning movie discovery experience with zero framework overhead.",
    features: [
      "Architected a vanilla JavaScript application with optimized DOM manipulation for sub-100ms render times",
      "Implemented real-time search filtering with debounced API calls to TMDb for efficient data fetching",
      "Designed a responsive CSS architecture with native dark/light mode toggle using CSS custom properties",
      "Built lazy-loading image optimization for improved Core Web Vitals and user experience",
      "Engineered modular JavaScript patterns for scalability without framework dependencies"
    ],
    techStack: ["JavaScript (ES6+)", "TMDb API", "CSS3", "HTML5", "REST API"],
    deepDive: "The application employs event delegation for efficient DOM event handling and uses the Intersection Observer API for lazy-loading movie posters.",
    link: "https://github.com/krishkpatil/getflix"
  }
];

export const CERTIFICATIONS = [
  {
    title: "Microsoft Certified: Azure Data Scientist Associate (DP-100)",
    date: "June 2025",
  },
  {
    title: "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
    date: "July 2025",
  },
];

export const CONTACT = {
  address: "Mumbai, India",
  phoneNo: "+91 8779787558",
  email: "patilkkrish@gmail.com",
};
