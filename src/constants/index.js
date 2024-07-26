import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  redriver,
  achieve,
  multi,
  wikitech,
  kape,
  vstim,
  client,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Network Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Network Engineer",
    company_name: "Achieve Without Borders Inc",
    icon: achieve, 
    iconBg: "#383E56",
    date: "June 2019 - July 2020",
    points: [
      "Completed three critical Globe Telco link hops, ensuring reliable network connectivity for high-priority corporate projects.",
      "Conducted Project Acceptance Tests (PAT) and Technical Site Survey Reports (TSSR), facilitating project success and client satisfaction.",
      "Provided exceptional client support, solving end-user and client concerns, and enhancing client relationships through effective communication.",
      "Designed effective heat maps for corporate Wi-Fi structures using Ubiquiti devices, optimizing network performance and coverage.",
      "Upgraded data network equipment to the latest firmware releases, ensuring system security and operational efficiency.",
      "Conducted vulnerability scanning and addressed potential threats proactively, maintaining a secure and reliable network environment.",
    ],
  },
  {
    title: "Computer System & Network Administrator",
    company_name: "Multisys Technologies Corporation",
    icon: multi, 
    iconBg: "#E6DEDD",
    date: "July 2020 - June 2022",
    points: [
      "Provided comprehensive support for Microsoft 0365, addressing concerns and promoting a seamless workflow for 200+ users.",
      "Successfully installed and managed EDR (Crowdstrike), significantly improving the company’s cybersecurity posture.",
      "Streamlined the data integrity process by efficiently backing up files of resigned users using GDRIVE, ensuring no data loss.",
      "Optimized onboarding and offboarding processes for end-users, enhancing productivity and reducing process time by 25%.",
      "Monitored and maintained network performance and integrity, swiftly resolving issues to maintain continuous network availability.",
    ],
  },
  {
    title: "IT Helpdesk Specialist / Engineer",
    company_name: "WikiTech Services Inc.",
    icon: wikitech, 
    iconBg: "#383E56",
    date: "October 2022 - March 2023",
    points: [
      "Efficiently resolved 2nd and 3rd-level end-user issues utilizing Jira Atlassian, achieving swift ticket resolution and enhancing user satisfaction.",
      "Streamlined server role administration via Active Directory Domain Services and Group Policies, optimizing system performance for a diverse user base.",
      "Administered and maintained Virtual Desktop Infrastructure (VDI) servers, ensuring reliable and secure remote access for users, improving overall productivity and flexibility.",
      "Implemented a seamless account creation process for new employees, facilitating smooth onboarding and reducing setup time by 30%.",
      "Managed the English IT Helpdesk Hotline, providing timely and expert assistance to users, significantly improving resolution times.",
      "Enhanced security protocols through biometric account registration for new employees, bolstering system access security.",
      "Executed computer setup migrations, cloning, and imaging projects, minimizing downtime and enhancing operational efficiency.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "ACE Project Space, Red River College Polytechnic",
    icon: redriver, 
    iconBg: "#E6DEDD",
    date: "April 2024 - Present",
    points: [
      "Developing and maintaining web applications using MERN (MongoDB, Express.js, React, Node.js) stack.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ecommerce Project",
    description:
      "A web-based e-commerce platform built using Ruby on Rails, which allows users to browse products, add items to a cart, and complete purchases through a streamlined checkout process using stripe.",
    tags: [
      {
        name: "ruby-on-rails",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: kape,
    source_code_link: "https://github.com/cfontelar22/E-Commerce-Project",
  },
  {
    name: "VStim Project",
    description:
      "A session treatment platform for stroke patients, leveraging Electron.js to provide detailed session summaries and performance metrics, enhancing patient rehabilitation.",
    tags: [
      {
        name: "electronjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
    ],
    image: vstim,
    source_code_link: "https://github.com/bitprojectspace/VStim-wristband",
  },
  {
    name: "Client Portal",
    description:
      "A comprehensive client portal for Red River College, developed as part of a co-op term, facilitating project submissions and client interactions through a modern web interface powered by Supabase.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: client,
    source_code_link: "https://github.com/bitprojectspace/Client-Portal",
  },
];

export { services, technologies, experiences, testimonials, projects };
