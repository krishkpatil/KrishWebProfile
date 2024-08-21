import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Hi, I'm Krish, a recent Data Science graduate from the University of Exeter. I specialize in data analysis, statistical modeling, and machine learning. With hands-on experience in Python and SQL, I'm passionate about leveraging my technical skills to drive innovation and deliver impactful solutions.`;

export const EXPERIENCES = [
  {
    year: "March 2022 - Sept 2022",
    role: "Data Science Intern",
    company: "TCR Innovations",
    description: `Collaborated closely with internal stakeholders to define project requirements and develop a predictive model focused on enhancing customer retention strategies. Utilized Python and SQL to analyze customer data, leading to a significant improvement in prediction accuracy. Streamlined data processing workflows using Python, automating repetitive tasks such as data cleaning, transformation, and integration, which increased efficiency and reduced manual intervention.`,
    technologies: ["Python", "SQL", "Power BI", "Data Science"],
  }
];


export const PROJECTS = [
  {
    title: "Preventing Confidential Data Leaks through Nudging",
    image: project1, // Replace with actual image path
    description: `Developed an NLP model designed to detect and prevent confidential data leaks by triggering nudges when sensitive information is identified. Leveraged the BERT transformer to enhance accuracy in identifying sensitive data, hosted on a cloud-based platform for real-time interaction and monitoring.`,
    technologies: ["Python", "NLP", "BERT", "Cloud"],
  },
  {
    title: "Optimising Genetic Algorithms for Complex Problems",
    image: project2, // Replace with actual image path
    description: `Contributed to the development and refinement of mutation strategies within Genetic Algorithms, enhancing solutions for complex multi-objective problems using large benchmark datasets. Analyzed datasets using Python to identify key trends and improve algorithm performance.`,
    technologies: ["Python", "Genetic Algorithms", "NumPy", "Pandas"],
  },
  {
    title: "COVID-19 Tracker Project",
    image: project3, // Replace with actual image path
    description: `Developed a COVID-19 tracking tool that integrated real-time data from the disease.sh API, enabling accurate monitoring of global COVID-19 trends and statistics. Implemented key features like interactive maps and data visualizations.`,
    technologies: ["JavaScript", "API Integration", "Data Visualization", "Python"],
  },
  {
    title: "Crowdfunding Dapp based on Solana Blockchain",
    image: project4, // Replace with actual image path
    description: `Co-created a decentralized crowdfunding platform on the Solana blockchain, addressing challenges like transparency, security, and anti-fraud. Developed and maintained backend infrastructure using Rust and contributed to front-end development using React.js.`,
    technologies: ["Solana", "Rust", "React.js", "Blockchain"],
  },
];


export const CONTACT = {
  address: "Exeter, United Kingdom",
  phoneNo: "+44 (0) 7774601784",
  email: "patilkkrish@gmail.com",
};
