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
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    fanta,
    codinghustle,
    foodcourt
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      title: "Frontend Development Learner",
      company_name: "Self-Educated",

      iconBg: "#F9A826",
      date: "Ongoing",
      points: [
        "Self-taught through online resources, tutorials, and courses in frontend development technologies.",
        "Building personal projects to apply theoretical knowledge and gain practical experience.",
        "Exploring fundamental concepts such as HTML, CSS, and JavaScript to establish a strong foundation.",
        "Seeking opportunities to collaborate on open-source projects and contribute to the developer community.",
      ],
    },
    {
      title: "BCA Student",
      company_name: "u--------",

      iconBg: "#5E63B6",
      date: "Expected Graduation: May 2025",
      points: [
        "Pursuing a degree in software engineering to gain formal education and hands-on experience.",
        "Studying computer science fundamentals, algorithms, and data structures to understand core principles.",
        "Participating in coding bootcamps, hackathons, and workshops to enhance practical skills and network with peers.",
        "Completing internships and co-op programs to gain industry exposure and prepare for entry-level roles.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Creating a stunning website was a breeze with Rick's expertise. I'm amazed by the results!",
      name: "Priya Patel",
      designation: "Project Manager",
      company: "XYZ Solutions",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Rick's dedication to our project was exceptional. His work truly made a difference for us.",
      name: "Rahul Gupta",
      designation: "Lead Developer",
      company: "PQR Tech",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Thanks to Rick's optimization, our website now performs better than ever before. Highly recommended!",
      name: "Sneha Sharma",
      designation: "Marketing Manager",
      company: "LMN Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];


  
  const projects = [
    {
      name: "Coding Shuttle Clone",
      description:
        "A web-based platform inspired by Anuj Bhaiya's website,Anuj Bhaiya is a popular web development teacher on YouTube, and this project serves as a homage to his teachings",
        tags: [
          {
            name: "HTML",
            color: "orange-text-gradient",
          },
          {
            name: "CSS",
            color: "blue-text-gradient",
          },
          {
            name: "JavaScript",
            color: "pink-text-gradient",
          },
        ],
      image: codinghustle,
      source_code_link: "https://github.com/Deepanshuu06/coding-shuttle-clone",
    },
    {
      name: "Fanta Frontend",
      description: "A visually stunning and interactive frontend interface inspired by the Fanta brand. This project showcases animated elements and engaging user interactions, providing an immersive experience for visitors.",
      tags: [
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: fanta,
      source_code_link: "https://github.com/Deepanshuu06/Fanta_fontend",
    },
    {
      name: "Food Court",
      description:
        "A food ordering website clone that utilizes the Swiggy live API to display food items and enable users to place orders seamlessly.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: foodcourt ,
      source_code_link: "https://github.com/Deepanshuu06/food-court-frontend/tree/main/optimizing%20app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };