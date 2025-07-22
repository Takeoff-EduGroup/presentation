import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import {
  FaPython,
  FaDatabase,
  FaBolt,
  FaMicrochip,
  FaProjectDiagram,
  FaChartLine,
  FaCode,
  FaGraduationCap,
  FaPenFancy,
  FaBrain,
  FaCloud,
  FaChalkboardTeacher,
  FaBook,
  FaFileAlt,
  FaUsers,
  FaBriefcase,
  FaArrowRight,
  FaCheckCircle,
  FaQuoteLeft,
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaShieldAlt,
  FaLaptopCode,
  FaJava,
  FaChartBar,
  FaChartPie,
  FaFileWord,
  FaStar,
  FaTimes,
  FaCloudUploadAlt,
  FaChevronLeft,
  FaChevronRight,
  FaGooglePlay,
  FaApple,
  FaWhatsapp,
  FaPaperPlane,
  FaHome,
  FaServer,
  FaHeadset,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { FaLaptopFile, FaVenusMars } from "react-icons/fa6";

const TakeoffPortfolio = () => {
  const [loading, setLoading] = useState(true);
  const [activeService, setActiveService] = useState("all");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [activeMilestone, setActiveMilestone] = React.useState(0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInUpDelayed = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    show: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    show: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const pathAnimation = {
    hidden: { pathLength: 0, opacity: 0 },
    show: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const steps = [
    {
      title: "1. Problem Identification",
      text: "Understanding and defining the core problem to solve by analyzing current challenges and setting clear objectives.",
    },
    {
      title: "2. Requirement Analysis",
      text: "Gathering and analyzing what the system should do based on stakeholder needs and constraints.",
    },
    {
      title: "3. System Design",
      text: "Architecting the system and planning development through technical diagrams and flowcharts.",
    },
    {
      title: "4. Implementation",
      text: "Building the actual components of the system based on the planned design.",
    },
    {
      title: "5. Testing and Validation",
      text: "Ensuring the system functions as expected through various test cases and quality checks.",
    },
    {
      title: "6. Deployment",
      text: "Delivering the final product to the production environment for real-world use.",
    },
    {
      title: "7. Documentation",
      text: "Recording all aspects of the project including system architecture, usage, and troubleshooting.",
    },
    {
      title: "8. Presentation",
      text: "Demonstrating the final product to stakeholders and end-users to showcase outcomes.",
    },
  ];

  const products = [
    {
      name: "PetroSoft",
      description:
        "India's No.1 Petrol Pump Accounting Software, featuring stock maintenance, employee management, sales & purchase tracking, auto SMS, data backup, and comprehensive dashboards & reports for seamless fuel station operations.",
      url: "https://petrolbunksoftware.com/",
      iconImg:
        "https://petrolbunksoftware.com/assets/images/petrosoftLogo-white-new.webp",
    },
    {
      name: "Restaurant Software Management",
      description:
        "A powerful restaurant POS and inventory management solution, offering kitchen inventory tracking, raw material stock updates, and streamlined back-of-house operations to control food costs and boost efficiency.",
      url: "https://restaurantsoftwaremanagement.com/",
      iconImg:
        "https://restaurantsoftwaremanagement.com/wp-content/uploads/al_opt_content/IMAGE/restaurantsoftwaremanagement.com/wp-content/uploads/2024/02/RestosoftIN-616-x-84-px-2.png.webp?bv_host=restaurantsoftwaremanagement.com&bv-resized-infos=bv_resized_mobile%3A480%2A65%3Bbv_resized_ipad%3A616%2A84%3Bbv_resized_desktop%3A616%2A84",
    },
    {
      name: "LPG Software",
      description:
        "LPG Gas Software that helps you run your gas agency smoothly. You can check cylinder deliveries, staff tasks, customer payment Methods & daily business reports — all in one easy dashboard, anytime on Your Finger Tip.",
      url: "https://lpgsoftindia.com/",
      iconImg:
        "https://lpg.ymtsindia.com/wp-content/uploads/2024/01/LPG-logo.png",
    },
  ];

  const countries = [
    { name: "India", flag: "https://flagcdn.com/w320/in.png" },
    { name: "Philippines", flag: "https://flagcdn.com/w320/ph.png" },
    { name: "Zambia", flag: "https://flagcdn.com/w320/zm.png" },
    { name: "Sri Lanka", flag: "https://flagcdn.com/w320/lk.png" },
    { name: "South Africa", flag: "https://flagcdn.com/w320/za.png" },
  ];

  const milestones = [
    {
      year: "2007",
      title: "Global Education Center",
      color: "from-blue-400 to-blue-600",
      textColor: "text-blue-300",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      image:
        "https://img.freepik.com/premium-vector/e-learning-innovative-online-education-technology-concept_127544-834.jpg", // Replace with your image path
      description:
        "Founded as a premier education center focused on delivering quality training and academic excellence.",
    },
    {
      year: "2009",
      title: "Takeoff Edu Group",
      color: "from-green-400 to-green-600",
      textColor: "text-green-300",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      image:
        "https://takeoffprojects.com/assets/images/intern/internship-poster.webp", // Replace with your image path
      description:
        "Launched our flagship project mentoring platform to support final-year students with hands-on guidance.",
    },
    {
      year: "2014",
      title: "Young Minds Technology Solution Private Limited",
      color: "from-purple-400 to-purple-600",
      textColor: "text-purple-300",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      image: "https://ymtsindia.com/assets/img/maitinance-service.jpg",
      description:
        "Established as a full-fledged software company delivering innovative IT solutions and products.",
    },
    {
      year: "2022",
      title: "Takeoff UpSkill",
      color: "from-yellow-400 to-yellow-600",
      textColor: "text-yellow-300",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      image: "https://takeoffupskill.com/assets/images/about1.webp", // Replace with your image path
      description:
        "Takeoff upskill No.1 IT Software Training Courses Institute in INDIA, Best Online & Offline IT Courses with Certificate.",
    },
  ];

  const clients = [
    {
      name: "DIXON",
      icon: "https://www.dixoninfo.com/img/logo.jpg?v=1.0",
      url: "https://www.dixoninfo.com/",
      description:
        "Dixon Technologies (India) Limited has been leading the electronic manufacturing services(EMS) space in India.",
    },
    {
      name: "Amara Raja",
      icon: "https://ymtsindia.com/assets/img/clients/amara.webp",
      url: "https://www.amararaja.com/",
      description: "Power solutions and batteries leader.",
    },
    {
      name: "TTD",
      icon: "https://www.tirumala.org/NewImages/TTD-Logo.png",
      url: "https://www.tirumala.org/",
      description: "Power solutions and batteries leader.",
    },
  ];

  const pdlcImages = [
    {
      url: "/pdlc.png",
    },
  ];

  const departments = [
    {
      name: "CSE – AI/ML & Data Science",
      bgImage:
        "https://img.freepik.com/free-photo/artificial-intelligence-neural-network-visualization_23-2151977482.jpg",
      bgImageFallback: "https://via.placeholder.com/2070x1380?text=AI+ML",
      description:
        "This specialization in CSE – AI/ML & Data Science provides an in-depth foundation in Artificial Intelligence, Machine Learning, Deep Learning, and advanced Data Science methodologies. Students gain expertise in designing intelligent systems, building neural networks, training large-scale models, and developing real-time AI solutions for varied industries. The curriculum integrates tools such as Python, TensorFlow, Keras, PyTorch, and AWS to equip learners for real-world problem-solving. Emphasis is placed on domains like Natural Language Processing, Computer Vision, Generative AI, and MLOps, making graduates industry-ready for roles in AI development, data-driven decision-making, and advanced research. This path fosters a deep understanding of ethical AI practices, deployment pipelines, and big data analytics. Graduates are empowered to innovate across sectors such as healthcare, autonomous systems, financial services, and more.",
      jobs: [
        "AI/ML Engineer",
        "Data Scientist",
        "Computer Vision Engineer",
        "NLP Engineer",
        "Generative AI Developer",
        "AI Research Scientist",
        "Deep Learning Engineer",
        "Machine Learning Architect",
        "Data Engineer",
        "AI Product Manager",
      ],
      learningOutcomes: [
        "Build and train ML/DL models using TensorFlow and PyTorch",
        "Apply supervised and unsupervised learning algorithms",
        "Develop AI solutions for vision, NLP, and predictive systems",
        "Leverage cloud-based AI tools like AWS SageMaker",
        "Use data analysis and visualization techniques",
        "Implement MLOps pipelines for production deployment",
        "Work with big data technologies for AI applications",
        "Understand ethical considerations in AI development",
      ],
      keyProjects: [
        "Mental Health Analyzer Using Voice Input",
        "Deepfake Detection Using CNN + Transformer",
        "AI-Powered Job Recommendation System",
        "Autonomous Vehicle Perception System",
        "Healthcare Diagnosis with Deep Learning",
        "Real-Time Emotion Detection from Video",
        "Smart Farming with AI Crop Disease Detection",
        "Stock Market Trend Prediction Using LSTM",
        "Face Recognition Attendance System",
        "Automatic News Categorization Using NLP",
        "Speech-to-Text Translation with Transformers",
        "Fake News Detection Using BERT",
        "AI-Driven Personal Finance Assistant",
        "Intelligent Resume Screening System",
        "Smart Home Energy Optimization with AI",
        "Chatbot for Mental Health Counseling",
        "AI-Powered Language Translator",
        "Music Genre Classification with CNN",
        "Autonomous Drone Navigation with AI",
        "AI-Based Plant Disease Classification",
      ],
      toolsUsed: [
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          url: "https://www.python.org/",
        },
        {
          name: "TensorFlow",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
          url: "https://www.tensorflow.org/",
        },
        {
          name: "Keras",
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
          url: "https://keras.io/",
        },
        {
          name: "PyTorch",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
          url: "https://pytorch.org/",
        },
        {
          name: "AWS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          url: "https://aws.amazon.com/",
        },
      ],
      industryApplications: [
        "Artificial Intelligence",
        "Healthcare Diagnostics",
        "Autonomous Systems",
        "Natural Language Processing",
        "Generative AI",
        "Financial Forecasting",
        "Recommendation Systems",
      ],
      galleryImages: [
        {
          src: "https://www.naukri.com/campus/career-guidance/wp-content/uploads/2024/07/what-is-machine-learning.jpg",
          caption: "Machine Learning in Action",
          fallback: "https://via.placeholder.com/2070x1380?text=ML+Models",
        },
        {
          src: "https://fikti.umsu.ac.id/wp-content/uploads/2023/04/deep-learning.png",
          caption: "Deep Learning Architectures",
          fallback: "https://via.placeholder.com/2070x1380?text=Deep+Learning",
        },
        {
          src: "https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/852.jpg?itok=zwVrki4c",
          caption: "AI Applications",
          fallback:
            "https://via.placeholder.com/2070x1380?text=AI+Applications",
        },
      ],
      icon: <FaLaptopCode className="text-2xl text-[#34B3AA]" />,
      latestProjects: [
        {
          title: "AI-Powered Medical Diagnosis",
          media: {
            type: "video",
            src: "https://youtu.be/TMYLWOWqxs8?si=yGbXieYZ3gs4m4Mh",
            fallback: "https://via.placeholder.com/2070x1380?text=Medical+AI",
          },
          description:
            "Deep learning system for early disease detection using medical imaging",
          link: "https://takeoffprojects.com/projects/medical-ai",
        },
        {
          title: "Smart Traffic Management",
          media: {
            type: "image",
            src: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2070&auto=format&fit=crop",
            fallback: "https://via.placeholder.com/2070x1380?text=Traffic+AI",
          },
          description:
            "Computer vision system for real-time traffic analysis and optimization",
          link: "https://takeoffprojects.com/projects/traffic-ai",
        },
      ],
      LatestProjects: [
        "AI-Based Fraud Detection in Financial Transactions",
        "Personalized Learning Recommendation System",
        "Predictive Maintenance for Industrial Equipment",
        "Automated Customer Support Chatbot",
        "AI-Powered Content Moderation System",
        "Autonomous Drone Surveillance System",
        "Voice-Based Virtual Assistant for the Visually Impaired",
        "AI-Based Legal Document Summarizer",
        "Real-Time Face Mask Detection System",
        "AI-Driven Sales Forecasting Model",
        "AI-Based Road Accident Detection",
        "Smart Farming with IoT and AI",
        "Personal Finance Tracker with ML",
        "Healthcare Chatbot for Symptom Analysis",
        "AI-Powered Resume Ranking System",
        "Multilingual Real-Time Translator App",
        "Energy Consumption Forecasting Using ML",
        "AI-Enabled Credit Scoring Engine",
        "AI-Based Earthquake Prediction System",
        "Intelligent Traffic Violation Detector",
        "Emotion Recognition from Voice Samples",
        "AI Chatbot for College Admissions",
        "AI-Based Career Path Predictor",
        "Plant Disease Detection Using CNN",
        "Retail Product Recommendation Engine",
        "AI-Based Loan Approval Prediction",
        "Sports Analytics using ML",
        "Intelligent Document OCR with NLP",
        "Fake Review Detection System",
        "Air Quality Prediction Using Deep Learning",
      ],
    },
    {
      name: "CSE – Full Stack & Application Development",
      bgImage:
        "https://img.freepik.com/premium-photo/devops-conce…gramming-technologyconcept_1296497-4107.jpg?w=900",
      bgImageFallback:
        "https://via.placeholder.com/2070x1380?text=Full+Stack+Dev",
      description:
        "This domain equips students with the skills to build scalable web and mobile applications. It covers full stack technologies like MERN, Java Spring Boot, and Python Django, along with Android development using Kotlin and Java. Learners build real-time apps, RESTful APIs, and integrate MongoDB, MySQL, and Firebase. The program emphasizes DevOps tools like Docker and GitHub Actions, cloud deployment on AWS/GCP, microservices, and modern UI/UX design. Through industry-inspired projects in e-commerce, EdTech, and fintech, students gain practical experience. Graduates are prepared for roles in full-stack, Android, and DevOps, ready to deliver end-to-end software solutions in agile environments.",
      jobs: [
        "Full Stack Developer",
        "Web Developer",
        "Mobile App Developer",
        "Java Developer",
        "Cloud Architect",
        "DevOps Engineer",
        "Product Manager",
        "System Architect",
        "UI/UX Developer",
        "Technical Lead",
        "Android Developer",
      ],
      learningOutcomes: [
        "Develop full-stack apps using MERN, Java, Python",
        "Build Android apps using Kotlin and Java",
        "Integrate REST APIs, databases, and UI libraries",
        "Use Docker and CI/CD pipelines for deployment",
        "Deploy and scale apps on AWS and GCP",
        "Build responsive and performant UI/UX",
        "Implement authentication and authorization systems",
        "Optimize performance, scalability, and security",
        "Design and deploy microservices architecture",
      ],
      keyProjects: [
        "MERN Stack E-Learning App with Progress Tracker",
        "Java Spring Boot CRM with Admin Analytics Panel",
        "Augmented Reality Virtual Store Experience",
        "Real-Time Collaboration Platform",
        "Microservices-Based E-Commerce System",
        "Mobile Banking App with React Native & Firebase",
        "Online Examination Portal using Django",
        "Dockerized Inventory Management App",
        "Multi-Tenant Blogging Platform",
        "Real-Time Chat App with Socket.IO",
        "Cloud-Based Resume Builder",
        "IoT Device Management Dashboard",
        "DevOps Monitoring Dashboard with Prometheus & Grafana",
        "Job Hiring Portal with Video Resume Upload",
        "AI-Powered Interview Bot",
        "Food Delivery App with Rider Tracking",
        "Learning Management System with Admin & Student Modules",
        "Online Marketplace with Wallet Integration",
        "Health Tracker App with Node.js Backend",
        "Subscription-Based Video Streaming Platform",
        "Smart Attendance App for Android using Face Recognition",
        "Android-Based Emergency Alert App with Location Sharing",
      ],
      toolsUsed: [
        {
          name: "Java",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          url: "https://www.java.com/",
        },
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          url: "https://www.python.org/doc/",
        },
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          url: "https://reactjs.org/",
        },
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          url: "https://nodejs.org/",
        },
        {
          name: "MongoDB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          url: "https://www.mongodb.com/",
        },
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          url: "https://www.docker.com/",
        },
        {
          name: "Android",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
          url: "https://developer,android.com/",
        },
        {
          name: "Kotlin",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
          url: "https://kotlinlang.org/",
        },
        {
          name: "Firebase",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
          url: "https://firebase.google.com/",
        },
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          url: "https://www.mysql.com/",
        },
      ],
      industryApplications: [
        "E-Commerce Platforms",
        "EdTech Solutions",
        "Enterprise Software",
        "SaaS Development",
        "Mobile Applications",
        "Social Media Platforms",
        "FinTech Applications",
        "Smart Home & IoT Android Apps",
      ],
      galleryImages: [
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYY6Dr1mIH4pKIehuXeYWCOE2KxSeR81SdXQ0kzxUda8_K8wSNMmbqK43PLqGjuZVuSX4&usqp=CAU",
          caption: "Full Stack Development",
          fallback: "https://via.placeholder.com/2070x1380?text=Full+Stack",
        },
        {
          src: "https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18383.jpg?ga=GA1.1.276921981.1751864510&semt=ais_hybrid&w=740",
          caption: "Web Applications",
          fallback: "https://via.placeholder.com/2070x1380?text=Web+Apps",
        },
        {
          src: "https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-b7b1dec/www.aalpha.net/wp-content/uploads/2019/10/Python-programming-india.jpg",
          caption: "Backend Development",
          fallback: "https://via.placeholder.com/2070x1380?text=Backend",
        },
      ],
      icon: <FaLaptopCode className="text-2xl text-[#34B3AA]" />,
      latestProjects: [
        {
          title: "E-Commerce Platform",
          media: {
            type: "video",
            src: "https://www.youtube.com/embed/example2",
            fallback: "https://via.placeholder.com/2070x1380?text=E-Commerce",
          },
          description:
            "Full-featured online shopping platform with payment integration",
          link: "https://takeoffprojects.com/projects/ecommerce",
        },
        {
          title: "Task Management System",
          media: {
            type: "image",
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
            fallback: "https://via.placeholder.com/2070x1380?text=Task+App",
          },
          description:
            "Collaborative project management tool with real-time updates",
          link: "https://takeoffprojects.com/projects/task-manager",
        },
      ],
      LatestProjects: [
        "Serverless Job Portal with AWS Lambda & DynamoDB",
        "AI Chatbot for Career Guidance Using GPT API",
        "Cloud-Based Smart Attendance System with Face Recognition",
        "MERN Stack Freelance Hiring Platform with Wallet Integration",
        "Multi-Vendor E-Commerce Platform with Admin Dashboard",
        "Flutter Mobile Banking App with Razorpay Integration",
        "Healthcare Management System with Appointment Booking",
        "AI-Powered Resume Shortlisting Tool",
        "Digital Portfolio Builder using Next.js",
        "Virtual Event Hosting Platform with Live Streaming",
        "Secure File Storage System with End-to-End Encryption",
        "Online Voting System with Fingerprint Authentication",
        "Restaurant Ordering System with QR Menu",
        "Food Donation App with Geo-based Matching",
        "Augmented Reality Based Real Estate App",
        "Customer Feedback Sentiment Analyzer",
        "Real-Time Cab Booking App",
        "Task Automation Tool with Python Backend",
        "EdTech LMS with Video Content & Quiz Engine",
        "Stock Market Dashboard with TradingView API",
        "SaaS-based HRMS Solution",
        "DevOps CI/CD Demo using GitHub Actions & Docker",
        "Online Examination System with Plagiarism Detection",
        "Dynamic News Aggregator using React & Node",
        "Mobile Expense Tracker App",
        "Library Management System with Barcode Scan",
        "Virtual Internship Portal",
        "Personal Finance Budgeting Tool",
        "IoT Dashboard for Smart Appliances",
        "Android Health Monitoring App with Bluetooth Sensors",
      ],
    },
    {
      name: "Blockchain Development",
      bgImage:
        "https://img.freepik.com/free-photo/3d-rendering-blockchain-technology_23-2151480202.jpg",
      bgImageFallback:
        "https://via.placeholder.com/2070x1380?text=Blockchain+Dev",
      description:
        "This domain equips students with the skills to build decentralized applications (DApps) and smart contracts for blockchain ecosystems. It covers blockchain fundamentals, smart contract development using Solidity, and integration with Ethereum and Web3.js. Learners explore decentralized finance (DeFi), NFT platforms, and blockchain-based identity and voting systems. The program includes hands-on projects like certificate verification and decentralized voting apps, along with tools like Truffle, Hardhat, and IPFS for development and deployment. Graduates are prepared for roles in blockchain development, ready to innovate in decentralized technologies and contribute to secure, transparent systems.",
      jobs: [
        "Blockchain Developer",
        "Smart Contract Engineer",
        "DeFi Developer",
        "NFT Developer",
        "Blockchain Architect",
        "Crypto Protocol Engineer",
      ],
      learningOutcomes: [
        "Develop blockchain DApps using Solidity and Web3.js",
        "Design and deploy smart contracts on Ethereum",
        "Integrate blockchain with front-end and back-end systems",
        "Implement secure and gas-efficient smart contracts",
        "Use Truffle and Hardhat for blockchain development",
        "Leverage IPFS for decentralized storage",
        "Build DeFi and NFT-based applications",
        "Ensure blockchain security and audit smart contracts",
      ],
      keyProjects: [
        "Blockchain-Based Certificate Verification System",
        "Decentralized Voting App using Ethereum & Solidity",
        "NFT Marketplace with Minting and Trading",
        "DeFi Lending Platform with Smart Contracts",
        "Blockchain-Based Supply Chain Tracker",
        "Decentralized Identity Management System",
      ],
      toolsUsed: [
        {
          name: "Solidity",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
          url: "https://soliditylang.org/",
        },
        {
          name: "Ethereum",
          logo: "https://img.freepik.com/premium-vector/simple-ethereum-logo-isolated-white_117142-853.jpg?w=900",
          url: "https://ethereum.org/",
        },
        {
          name: "Web3.js",
          logo: "https://img.freepik.com/free-vector/geometric-logo-design_53876-116037.jpg",
          url: "https://web3js.readthedocs.io/",
        },
        {
          name: "Truffle",
          logo: "https://archive.trufflesuite.com/assets/logo.png",
          url: "https://archive.trufflesuite.com/docs/",
        },
        {
          name: "IPFS",
          logo: "https://icommunity.io/wp-content/uploads/2020/08/IPFS.jpg",
          url: "https://docs.ipfs.tech/",
        },
      ],
      industryApplications: [
        "Blockchain-Based Identity & Voting",
        "Decentralized Finance (DeFi)",
        "NFT Platforms",
        "Supply Chain Management",
        "Cryptocurrency Exchanges",
        "Digital Asset Management",
      ],
      galleryImages: [
        {
          src: "https://img.freepik.com/free-photo/3d-rendering-blockchain-technology_23-2151480176.jpg",
          caption: "Blockchain Development",
          fallback: "https://via.placeholder.com/2070x1380?text=Blockchain",
        },
        {
          src: "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041866.jpg",
          caption: "Smart Contract Development",
          fallback:
            "https://via.placeholder.com/2070x1380?text=Smart+Contracts",
        },
        {
          src: "https://media.istockphoto.com/id/1271613373/photo/global-communication-network.jpg?b=1&s=612x612&w=0&k=20&c=3ziJoLkDVsH3Pr-C9xZzcvXSofmc86k-IR8XnFS4Yic=",
          caption: "Decentralized Applications",
          fallback: "https://via.placeholder.com/2070x1380?text=DApps",
        },
      ],
      icon: <FaLaptopCode className="text-2xl text-[#34B3AA]" />,
      latestProjects: [
        {
          title: "Blockchain-Enabled Voting System",
          media: {
            type: "video",
            src: "https://www.youtube.com/embed/example3",
            fallback:
              "https://via.placeholder.com/2070x1380?text=Voting+System",
          },
          description:
            "Secure voting platform using Ethereum and React frontend",
          link: "https://takeoffprojects.com/projects/blockchain-voting",
        },
        {
          title: "Decentralized Certificate Storage",
          media: {
            type: "image",
            src: "https://img.freepik.com/premium-photo/blockchain-technology-background_1276406-306.jpg?w=740",
            fallback:
              "https://via.placeholder.com/2070x1380?text=Certificate+Storage",
          },
          description:
            "Certificate verification system using IPFS and Ethereum",
          link: "https://takeoffprojects.com/projects/certificate-storage",
        },
      ],
      LatestProjects: [
        "Blockchain-Enabled Voting System with React Frontend",
        "Decentralized Certificate Storage using IPFS & Ethereum",
        "NFT Art Gallery with Minting and Auction",
        "DeFi Yield Farming Platform",
        "Blockchain-Based Supply Chain Transparency System",
        "Smart Contract-Based Escrow Service",
        "Crypto Wallet with Multi-Chain Support",
        "Decentralized Crowdfunding Platform",
        "Blockchain-Powered Digital Identity Verification",
        "Tokenized Real Estate Investment Platform",
      ],
    },
    {
      name: "CSE – Cybersecurity & Cloud Technologies",
      bgImage:
        "https://img.freepik.com/free-photo/cybersecurity-concept-collage-design_23-2151877153.jpg?t=st=1752920121~exp=1752923721~hmac=152057ab8db8ac5bee40b396f0529190240c67c75ff7a578e490c33e0004fca9&w=900",
      bgImageFallback:
        "https://via.placeholder.com/2070x1380?text=Cybersecurity+Cloud",
      description:
        "This specialization empowers students to become experts in defending digital ecosystems, covering vital domains like cybersecurity, cloud security, cryptography, and blockchain. Students gain hands-on experience in ethical hacking, penetration testing, cloud infrastructure setup, and security monitoring tools. They explore secure software development, decentralized systems, zero-trust architecture, and regulatory compliance. With access to real-world tools like Kali Linux, AWS, and Docker, they build robust skills in managing, detecting, and mitigating cyber threats in modern organizations. From securing APIs and containers to building encrypted file systems and blockchain-based solutions, learners are trained to create resilient systems. This track ensures graduates are well-prepared for high-demand roles in a constantly evolving digital world.",
      jobs: [
        "Cybersecurity Specialist",
        "Cloud Security Engineer",
        "DevSecOps Engineer",
        "Blockchain Developer",
        "Ethical Hacker",
        "Network Engineer",
        "Cloud Admin",
        "Security Analyst",
        "Penetration Tester",
        "Cryptography Engineer",
      ],
      learningOutcomes: [
        "Understand network protocols and attack prevention",
        "Use tools for ethical hacking and penetration testing",
        "Implement cloud and API security best practices",
        "Develop secure apps using encryption techniques",
        "Design decentralized apps with blockchain",
        "Configure and manage secure cloud infrastructure",
        "Perform vulnerability assessments and security audits",
        "Implement zero-trust security architectures",
      ],
      keyProjects: [
        "Cloud-Based File Encryption with ECC",
        "Blockchain-Enabled Voting System",
        "Real-Time Cyber Threat Intelligence Dashboard",
        "Secure Authentication System",
        "Network Intrusion Detection System",
        "Decentralized Certificate Verification System",
        "Penetration Testing Automation Suite",
        "Secure Messaging App with AES Encryption",
        "Zero Trust Network Simulator",
        "IoT Security Framework",
        "Smart Contract Vulnerability Detector",
        "Ransomware Attack Simulation & Defense",
        "Cloud Resource Access Logging & Analysis",
        "AI-Based Phishing URL Detector",
        "Kubernetes Cluster Hardening Demo",
        "End-to-End Encrypted Video Conferencing",
        "Secure API Gateway Using JWT",
        "Cyber Forensics Case Simulator",
        "Multi-Factor Authentication System with OTP",
        "Incident Response Workflow Management",
      ],
      toolsUsed: [
        {
          name: "AWS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          url: "https://aws.amazon.com/",
        },
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          url: "https://www.docker.com/",
        },
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          url: "https://www.mysql.com/",
        },
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          url: "https://nodejs.org/",
        },
        {
          name: "Kali Linux",
          logo: "https://www.kali.org/images/kali-logo.svg",
          url: "https://www.kali.org/",
        },
      ],
      industryApplications: [
        "Cloud Security & Infrastructure",
        "Cyber Forensics & Investigation",
        "Blockchain & Smart Contracts",
        "Data Privacy & Compliance",
        "Zero Trust Architectures",
        "Network Security",
        "Secure Software Development",
      ],
      galleryImages: [
        {
          src: "https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/852.jpg?itok=zwVrki4c",
          caption: "Cybersecurity Defense",
          fallback: "https://via.placeholder.com/2070x1380?text=Cybersecurity",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1685086785131-e65690faa5bb?q=80&w=2070&auto=format&fit=crop",
          caption: "Cloud Security",
          fallback: "https://via.placeholder.com/2070x1380?text=Cloud+Security",
        },
        {
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
          caption: "Blockchain Technology",
          fallback: "https://via.placeholder.com/2070x1380?text=Blockchain",
        },
      ],
      icon: <FaLaptopCode className="text-2xl text-[#34B3AA]" />,
      latestProjects: [
        {
          title: "Secure File Storage",
          media: {
            type: "video",
            src: "https://www.youtube.com/embed/example3",
            fallback:
              "https://via.placeholder.com/2070x1380?text=Secure+Storage",
          },
          description:
            "Encrypted cloud storage solution with blockchain verification",
          link: "https://takeoffprojects.com/projects/secure-storage",
        },
        {
          title: "Network Security Monitor",
          media: {
            type: "image",
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
            fallback:
              "https://via.placeholder.com/2070x1380?text=Network+Security",
          },
          description:
            "Real-time network intrusion detection and prevention system",
          link: "https://takeoffprojects.com/projects/network-security",
        },
      ],
      LatestProjects: [
        "Real-Time Cyber Threat Intelligence Dashboard",
        "ML-Based Personal Health Risk Predictor",
        "DL-Powered Plant Disease Detection App Using CNN",
        "AI-Powered Food Recommender with MERN",
        "Secure File Upload with Java, JWT, and AWS S3",
        "Phishing Website Classifier using XGBoost",
        "Blockchain-Based Academic Records System",
        "Facial Biometric Attendance System",
        "Healthcare Chatbot with Symptom Analysis",
        "Cyberbullying Detection System using NLP",
        "Secure Voting App using Flutter + Blockchain",
        "AI-Powered Resume Classifier",
        "Hybrid Cloud Backup Encryption System",
        "IoT Botnet Attack Detector with SVM",
        "Encrypted Chat App with React & Firebase",
        "Kubernetes Access Control Analyzer",
        "EHR Data Leak Prevention Tool",
        "Personal Password Vault with Encryption",
        "Multi-Tenant SaaS Security Auditor",
        "Serverless Log Integrity with Blockchain",
        "Cryptographic Key Management API",
        "Dark Web Threat Monitoring Dashboard",
        "Android App Analyzer for Malware",
        "OAuth2.0 Based Auth System in Microservices",
        "Medical IoT Device Vulnerability Tracker",
        "AI Assistant for Security Alerts",
        "Face Recognition-Based Secure Login",
        "Browser Extension for Phishing Detection",
        "Supply Chain Tracker with Blockchain",
        "Decentralized File System with IPFS",
      ],
    },
    {
      name: "Electrical",
      bgImage:
        "https://media.istockphoto.com/id/950365224/photo/high-pressure-wire-tower-at-sunset-at-dusk.jpg?s=612x612&w=0&k=20&c=pmb2sv0kjbGRMDYpruihs49ApYWaoZy8yjoXKCPxiUg=",
      bgImageFallback: "https://via.placeholder.com/2070x1380?text=Electrical",
      description:
        "The Electrical and Electronics Engineering (EEE) department in Takeoff aims to develop skilled professionals by providing a strong foundation in core electrical subjects and practical simulation skills. The program begins with essential topics like power systems, electrical machines, power electronics, control systems, and electric vehicles. To bridge the gap between theory and practice, the department emphasizes simulation-based learning using tools like MATLAB Simulink. Students work on real-time projects such as load flow analysis, MPPT control for solar energy systems, grid-connected inverters, battery management systems, wireless power transfer systems, electric vehicle charging station and smart grid simulations. These hands-on projects help students understand system modeling, analysis, and optimization in real-world scenarios. To further enhance learning, the department conducts workshops, internships, offers domain-specific mentorship, and provides guidance in writing technical papers. By the end of the course, students are well-prepared for job roles such as matlab Simulink Engineer, Power System Analyst, Control System Engineer, and Renewable Energy Consultant. The EEE department ensures that every student is ready to contribute effectively in both industry and research by combining academic knowledge with practical exposure.",
      keyProjects: [
        "Smart Grid with Renewable Energy Integration",
        "Electric Vehicle Charging Station with Load Management",
        "Fault Detection and Protection System in Transmission Lines",
        "Wireless Power Transfer System for Electric Vehicle Charging",
        "Power Quality Improvement Using Shunt Active Power Filter",
        "Solar - Powered Electric Vehicle Charging Station",
        "Wind - Solar Hybrid System with Grid Backup",
        "Fast Charging Station Using Multilevel Converter",
        "Hybrid Solar - Wind EV Charging Station with Backup Battery",
        "Solar - Wind Based Battery Management System with Bidirectional Converter",
      ],
      jobs: [
        "Matlab Simulink Engineer",
        "Model Based Design Engineer",
        "Electrical Systems Engineer",
        "Simulation Engineer",
        "Power Electronics Design Engineer",
        "EV Charging / Powertrain Engineer",
        "Automation & Control Systems Engineer",
      ],
      learningOutcomes: [
        "Design and simulate power systems and converters using MATLAB & Simulink",
        "Analyse and manage smart grid, load flow, and protection systems",
        "Develop control strategies using Fuzzy, ANN, and AI-based controllers",
        "Work on EV charging infrastructure, Battery Management Systems, and renewable integration",
        "Gain core knowledge in renewable energy sources, power electronics, drives, and electric vehicles",
      ],
      toolsUsed: [
        {
          name: "MATLAB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
          url: "https://www.mathworks.com/products/matlab.html",
        },
        {
          name: "Simulink",
          logo: "https://vskconsultants.com/wp-content/uploads/2023/04/Simulink-668x321.png",
          url: "https://www.mathworks.com/products/simulink.html",
        },
      ],
      industryApplications: [
        "Power Generation, Transmission & Distribution",
        "Renewable Energy (Solar, Wind, Hybrid Systems)",
        "Electric Vehicles and Charging Infrastructure",
        "Industrial Automation & Process Control",
        "Smart Grid and Energy Management Systems",
      ],
      galleryImages: [
        {
          src: "https://www.dvmarketresearch.com/wp-content/uploads/2024/03/UAE-Clean-Energy-Market-Size.jpg",
          caption: "Solar Panel Installation",
          fallback: "https://via.placeholder.com/2070x1380?text=Solar+Panels",
        },
        {
          src: "https://cdn.vectorstock.com/i/750p/74/02/isometric-electricity-composition-vector-19937402.avif",
          caption: "Electrical Systems",
          fallback:
            "https://via.placeholder.com/2070x1380?text=Electrical+Systems",
        },
        {
          src: "https://www.aceongroup.com/wp-content/uploads/2022/12/413-1024x732.jpg",
          caption: "Renewable Energy",
          fallback:
            "https://via.placeholder.com/2070x1380?text=Renewable+Energy",
        },
        {
          src: "https://www.etc-expo.com/wp-content/uploads/2021/05/Solar-Inverter-battery-700x393.jpg",
          caption: "",
          fallback:
            "https://via.placeholder.com/2070x1380?text=Renewable+Energy",
        },
      ],
      icon: <FaBolt className="text-2xl text-[#34B3AA]" />,
      LatestProjects: [
        "Adaptive Energy Management Strategy for Hybrid PV-Wind Systems Integrated with Smart Grid Support",
        "Multi-Level Bidirectional Converter Design for Grid-to-Vehicle (G2V) and Vehicle-to-Grid (V2G) Applications",
        "Hybrid Renewable System for EV Charging Stations with Smart Energy Management and Load Forecasting",
        "Design of a Solar-Assisted Wireless Power Transfer System for Off-Grid EV Charging in Rural Areas",
        "Modelling and Simulation of a BLDC Motor Drive for Electric Vehicle Applications",
        "Design of a Decentralized EV Charging Hub Powered by Solar PV and Integrated with Microgrid",
        "Grid Fault Ride-Through Enhancement Using Advanced Control of Solar PV Inverter System",
        "Design and Control of a Grid-Tied Solar Inverter with Harmonic Compensation and Power Factor Correction",
        "Solar PV-Powered Water Pumping System with BLDC Motor Drive and Energy Storage Optimization",
        "Power Quality Enhancement in Grid-Connected Wind Systems Using STATCOM and DFIG Control",
        "Control of Permanent Magnet Synchronous Generator (PMSG) in Standalone Wind Energy Systems",
        "Design and Simulation of a Regenerative Braking System in Electric Vehicles Using Bidirectional DC-DC Converter",
        "Design and Development of a Solar-Powered Multi-Port EV Charging Station with Load Sharing Control",
        "Design of a Bidirectional DC-DC Converter for Vehicle-to-Vehicle Power Transfer in EV Networks",
        "Optimization of EV Powertrain Using Genetic Algorithm for Improved Range and Efficiency",
        "Design and Implementation of a Solar-Wind-Battery Hybrid Energy System with Smart Load Management",
        "ANFIS-Based Power Flow Control in Grid-Connected Hybrid Renewable Energy Systems",
        "Optimized Sizing and Control of PV-Wind-Battery Systems Using Particle Swarm Optimization (PSO)",
      ],
      latestProjects: [
        {
          title: "Solar Energy Monitoring",
          media: {
            type: "video",
            src: "https://www.youtube.com/embed/4rR0wA2H7Zs?autoplay=1&mute=1&controls=1",
            fallback:
              "https://via.placeholder.com/2070x1380?text=Solar+Monitoring",
          },
          description:
            "A system to monitor and optimize solar energy output in real-time.",
          link: "https://takeoffprojects.com/projects/solar-monitoring",
        },
        {
          title: "Smart Grid Controller",
          media: {
            type: "image",
            src: "https://images.unsplash.com/photo-1517420704959-59240f766499?q=80&w=2070&auto=format&fit=crop",
            fallback: "https://via.placeholder.com/2070x1380?text=Smart+Grid",
          },
          description:
            "An IoT-based controller for efficient energy distribution.",
          link: "https://takeoffprojects.com/projects/smart-grid",
        },
      ],
    },
    {
      name: "Embedded Systems",
      bgImage:
        "https://img.freepik.com/premium-photo/abstract-closeup-intricate-circuit-board-with-glowing-components-representing-technological-innovation-digital-connectivity-modern-electronics_1373637-12780.jpg?ga=GA1.1.276921981.1751864510&amp",
      bgImageFallback:
        "https://via.placeholder.com/2070x1380?text=Embedded+Systems",
      description:
        "The Embedded Systems career path begins with a foundation in ECE, EEE, or CSE, advancing through M.Tech/M.S. in Embedded Systems, IoT, or Robotics. Students gain hands-on experience with microcontrollers, embedded C/C++, sensors, and communication protocols using platforms like Arduino, ESP32, Raspberry Pi, and STM32. Projects involve IoT platforms (ThingSpeak, Blynk, Adafruit IO), wireless modules (LoRa, ZigBee, GSM), GPS tracking, and machine learning models (Random Forest, LSTM, YOLO) for edge intelligence using TensorFlow and OpenCV. Practical skills include analog design, PCB layout, and hardware-software integration. Integration with Android apps, Google Assistant, and web control systems enables automation. Development uses tools like Arduino IDE, Python, and VNC Viewer. Entry-level roles include Embedded Software Engineer, IoT Developer, and Firmware Developer. With experience, professionals advance to Embedded Architect, IoT Solutions Architect, or Product Development Engineer, specializing in automotive, medical, or industrial systems, leading to roles such as Tech Lead, R&D Engineer, or Embedded AI Developer.",
      projects: {
        AI: ["Edge AI", "TinyML", "AI-powered Robotics"],
        Application: [
          "IoT Solutions",
          "Automotive Systems",
          "Industrial Automation",
        ],
      },
      learningOutcomes: [
        "Master embedded C/C++ and microcontroller programming",
        "Develop firmware for ARM, AVR, and PIC architectures",
        "Implement embedded Linux systems and device drivers",
        "Optimize for low power consumption and memory efficiency",
        "Use tools like Keil, STM32CubeIDE, and MPLAB for embedded development",
        "Interface embedded systems with cloud platforms and mobile apps",
        "Understand PCB design basics and hardware-software co-design",
      ],
      jobs: [
        "Embedded Systems Engineer",
        "IoT Firmware Developer",
        "Hardware-Software Integration Engineer",
        "Microcontroller Programmer",
        "Embedded AI Engineer",
        "Automotive Embedded Developer",
        "Wireless Protocol Stack Developer",
        "Embedded Linux Developer",
        "Low-Power Systems Engineer",
        "Bare-metal Firmware Engineer",
        "Robotics Control Systems Engineer",
        "Medical Device Firmware Engineer",
      ],

      keyProjects: [
        "Smart Home IoT Device",
        "Autonomous Drone",
        "Wearable Health Monitor",
        "Smart Health Monitoring System",
        "Plant Disease Detection with YOLO",
        "Soil Moisture Monitoring + Auto Irrigation with IoT & SMS Alert",
        "Bone Fracture Detection using CNN + GUI Upload System",
        "Face + Voice Controlled Smart Door using Google Assistant",
        "AI-based Smart Dustbin (YOLO + Servo + Ultrasonic)",
      ],
      toolsUsed: [
        {
          name: "C/C++",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
          url: "https://isocpp.org/",
        },
        {
          name: "Arduino",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
          url: "https://www.arduino.cc/",
        },
        {
          name: "Raspberry Pi",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
          url: "https://www.raspberrypi.org/",
        },
        {
          name: "RTOS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
          url: "https://www.freertos.org/",
        },
      ],
      industryApplications: [
        "Automotive Systems (ADAS, ECU, Infotainment, EV BMS)",
        "Healthcare Devices (Wearables, Portable Monitors, Smart Implants)",
        "Consumer Electronics (Smart TVs, Smart Home Devices, Wearables)",
        "Aerospace and Defense (Drones, Navigation, Avionics)",
        "Telecommunications (IoT Gateways, Routers, Edge Devices)",
        "Agriculture (Smart Irrigation, Soil Sensors, Crop Monitoring)",
        "Smart Cities (Traffic Management, Waste Management, Smart Lighting)",
        "Energy and Utilities (Smart Meters, Grid Monitoring, Solar Inverters)",
        "Retail and Logistics (RFID Systems, Smart Shelves, Inventory Trackers)",
        "Robotics (Autonomous Navigation, Actuator Control, Path Planning)",
        "Environmental Monitoring (Air/Water Quality Sensors, Weather Stations)",
        "Home Automation (Voice Assistants, Security Systems, Smart Thermostats)",
        "Marine Systems (Autonomous Submersibles, Water Quality Systems)",
      ],
      galleryImages: [
        {
          src: "https://www.simplilearn.com/ice9/free_resources_article_thumb/iot_devices.jpg",
          caption: "IoT Devices",
          fallback: "https://via.placeholder.com/2070x1380?text=IoT+Devices",
        },
        {
          src: "https://advcloudfiles.advantech.com/cms/eb8a1623-8acf-40dc-ad94-f1c537260749/Resources%20Featured%20Image%20for%20Detail%20Page/modified_image.jpg",
          caption: "Embedded Systems Lab",
          fallback: "https://via.placeholder.com/2070x1380?text=Embedded+Lab",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8x5Xe2iBIcJ49jGs2fvREpi2KKFrh_16EA&s",
          caption: "Robotics Development",
          fallback: "https://via.placeholder.com/2070x1380?text=Robotics",
        },
      ],
      icon: <FaMicrochip className="text-2xl text-[#34B3AA]" />,
      latestProjects: [
        {
          title: "Smart Home IoT Device",
          media: {
            type: "video",
            src: "https://youtu.be/pMjed-2p18Q",
            fallback: "https://via.placeholder.com/2070x1380?text=IoT+Device",
          },
          description: "A smart IoT device for home automation and monitoring.",
          link: "https://takeoffprojects.com/projects/iot-device",
        },
        {
          title: "Autonomous Drone",
          media: {
            type: "image",
            src: "https://youtu.be/4d5CWcM9V6k",
            fallback: "https://via.placeholder.com/2070x1380?text=Drone",
          },
          description: "An AI-powered autonomous drone for surveillance.",
          link: "https://takeoffprojects.com/projects/drone",
        },
      ],
      LatestProjects: [
        "Gender & Emotion Based Smart Mirror with Sensor Dashboard",
        "Plant Disease Detection with YOLO",
        "Bone Fracture Detection using CNN + GUI Upload System",
        "Face + Voice Controlled Smart Door using Google Assistant",
        "AI-based Smart Dustbin (YOLO + Servo + Ultrasonic)",
        "Android App Controlled Home Automation via Bluetooth & Wi-Fi",
        "Smart Medicine Reminder Box with Buzzer + LCD + RTC",
        "Power Theft Monitoring System using CT Sensor + ESP8266",
        "Biometric + Face Based Attendance System with GUI Interface",
        "Automated Pet Feeder with Weight Sensor + RTC + Servo Motor",
        "IoT Air Quality Monitoring with Blynk & LCD",
        "Single/Double Layer PCB Designs for Sensor Boards",
        "Vehicle Tracking System using GPS + GSM + Google Maps",
        "NPK-Based Smart Crop Recommendation System with ML Model",
        "Smart Irrigation and Crop Suggestion using NPK Sensors + LoRa",
        "LiFi-based Data Transfer System for Secure Communication",
        "LSTM-Based Weather Prediction for Agricultural Automation",
        "ZigBee-Based Smart Agriculture Monitoring System",
        "LoRa-Based Smart Village Monitoring with Remote Dashboard",
        "Intrusion Detection with Location Alert using GPS + GSM",
        "LSTM-Based Power Load Forecasting and Device Scheduling",
      ],
    },
    {
      name: "VLSI",
      bgImage: "https://takeoffprojects.com/assets/images/intern/vlsi1.png",
      bgImageFallback: "https://via.placeholder.com/2070x1380?text=VLSI",
      description:
        "The Very Large Scale Integration (VLSI) department is dedicated to developing next-generation chip designers and hardware engineers through a robust blend of theory and practical exposure. The curriculum emphasizes semiconductor fundamentals, digital and analog circuit design, RTL coding, ASIC/FPGA development, verification methodologies, and low-power system design. Students gain deep technical insight into CMOS technology, HDL programming (Verilog/VHDL), and industry-standard EDA tools like Cadence, Synopsys, Tanner, ModelSim, and Xilinx Vivado.\n\nThrough hands-on projects such as low-power ASIC design, reconfigurable FPGA architectures, ADC/DAC systems, and cryptographic hardware modules, learners bridge the gap between academic knowledge and real-world chip-level applications. The department fosters strong industry collaboration and mentorship to prepare students for cutting-edge roles in the semiconductor ecosystem.\n\nGraduates emerge with the skills required for roles such as RTL Design Engineer, Physical Design Engineer, FPGA Developer, DFT Engineer, Verification Engineer, and Mixed-Signal Design Specialist. Career paths evolve into senior roles like SoC Architect, Technical Lead, and EDA Tool Developer. With a strong emphasis on innovation and precision, the VLSI department enables students to thrive in sectors like consumer electronics, AI hardware, IoT chipsets, and biomedical circuits.",
      jobs: [
        "RTL Design Engineer",
        "Design Verification Engineer",
        "DFT Engineer (Design for Testability)",
        "Formal Verification Engineer",
        "EDA Tool Developer",
        "Physical Design Engineer",
        "STA Engineer (Static Timing Analysis)",
        "Layout Design Engineer",
        "Analog Layout Engineer",
        "Analog Design Engineer",
        "Mixed-Signal Design Engineer",
        "AMS Verification Engineer",
        "FPGA Design Engineer",
        "FPGA Verification Engineer",
        "Embedded VLSI Engineer",
        "SoC Architect",
        "Low-Power Design Engineer",
        "IP Design Engineer",
        "Post-Silicon Validation Engineer",
        "Packaging & Signal Integrity Engineer",
        "Circuit Design Engineer",
        "Timing Closure Engineer",
        "Memory Design Engineer",
        "Library Characterization Engineer",
        "Custom IC Layout Engineer",
        "EDA Support/Application Engineer",
        "RISC-V Core Design Engineer",
        "Semiconductor Process Integration Engineer",
        "ASIC Design Engineer",
        "Digital IC Design Engineer",
        "Mixed-Signal SoC Verification Engineer",
      ],
      projects: {
        AI: ["AI Accelerators", "Neuromorphic Computing", "ML for Chip Design"],
        Application: [
          "ASIC Design",
          "FPGA Implementation",
          "VLSI Testing",
          "Low-Power Amplifier for Biomedical Applications",
          "RISC-V Processors",
          "Reconfigurable Cache Memory",
          "Cryptography Design",
          "2D DCT/IDCT for Image Applications",
          "Protocols Design (SPI/I2C/UART/AHP/AXI/APB)",
        ],
      },
      learningOutcomes: [
        "Understand the fundamentals of semiconductor physics and CMOS technology.",
        "Design combinational and sequential digital circuits using logic gates.",
        "Develop RTL designs using Verilog and VHDL for ASIC and FPGA systems.",
        "Apply synthesis, simulation, and verification techniques to digital designs.",
        "Gain hands-on experience with industry-standard EDA tools such as Cadence, Synopsys, ModelSim, and Vivado.",
        "Implement low-power and high-speed digital systems with optimized area and performance.",
        "Analyze and verify VLSI circuits through static timing analysis and formal verification.",
        "Design, simulate, and layout analog and mixed-signal circuits including ADCs, DACs, and PLLs.",
        "Integrate and validate digital IP cores using FPGA prototyping platforms.",
        "Understand the complete ASIC design flow from RTL to GDSII tape-out.",
        "Apply Design for Testability (DFT) techniques like scan chains and built-in self-test (BIST).",
        "Explore advanced topics like RISC-V processor design, cryptographic hardware, and neuromorphic circuits.",
        "Work collaboratively on real-time chip design projects and develop technical documentation.",
        "Interpret fabrication constraints and packaging considerations in IC design.",
        "Prepare for careers in the semiconductor industry with a strong portfolio of design and verification projects.",
      ],
      LatestProjects: [
        "Edge-AI Enabled RISC-V Processor with Low-Power Accelerators",
        "Energy-Efficient FPGA-Based Deep Learning Inference Engine",
        "Neural Network Hardware Accelerator using Reversible Logic",
        "Design of AI-Compatible SRAM with Write Assist Techniques",
        "Low-Power 8-bit Flash ADC for Biomedical Wearable Devices",
        "VLSI Implementation of Lightweight Encryption for IoT Devices",
        "FPGA-based Real-Time Object Detection Engine using YOLOv4-Tiny",
        "Design of Hardware Architecture for Image Super-Resolution using DWT + CNN",
        "Secure AXI Bus Protocol with Hardware Trojans Detection",
        "Design of Dual-Mode PLL for 5G and IoT Clocking Applications",
        "High-Speed Multiplier Design using Modified Booth Encoding and GDI Logic",
        "Quantum-Dot Cellular Automata (QCA) based Cryptographic Circuit",
        "FPGA Implementation of Biometric Authentication using ECG Signal",
        "ASIC Design of Reconfigurable LFSR-Based Random Number Generator",
        "Hardware Accelerator for Post-Quantum Cryptography (e.g., Lattice-based)",
      ],
      keyProjects: [
        "Low-Power ASIC Design",
        "FPGA-based AI Accelerator",
        "VLSI Verification Suite",
        "16-bit SAR ADC Design",
        "GDI-based Vedic Multiplier",
        "SRAM 6T/8T/10T",
        "Flash + SAR ADC Hybrid Architecture",
        "Multipliers using Reversible Logic",
        "DWT/IDWT for Image Applications",
        "Image Processing for Security Applications",
        "Amplifier & Oscillator Architectures",
      ],
      toolsUsed: [
        {
          name: "Verilog",
          logo: "https://www.verilog.com/img/verilog.gif",
          url: "https://www.verilog.com/",
        },
        {
          name: "VHDL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          url: "https://www.mentor.com/products/fpga/hdl-design",
        },
        {
          name: "Tanner EDA",
          logo: "https://www.techonline.com/wp-content/uploads/media-1251146-TannerEDA.bmp?w=300",
          url: "https://www.mentor.com/eda/tanner",
        },
        {
          name: "ModelSim",
          logo: "https://tse3.mm.bing.net/th/id/OIP.IsdsG_83Smq41gBvtV74egHaHa?w=474&h=474&c=7",
          url: "https://www.intel.com/content/www/us/en/software/programmable/quartus-prime/model-sim.html",
        },
        {
          name: "Xilinx Vivado",
          logo: "https://toppng.com/uploads/preview/xilinx-vector-logo-free-download-11574199011ctpnuszrlh.png",
          url: "https://www.xilinx.com/products/design-tools/vivado.html",
        },
        {
          name: "Matlab",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
          url: "https://www.mathworks.com/products/matlab.html",
        },
      ],
      industryApplications: [
        "Semiconductors",
        "AI Hardware",
        "Consumer Electronics",
        "IoT Devices",
        "Biomedical Circuits",
      ],
      galleryImages: [
        {
          src: "https://media.istockphoto.com/id/800884122/photo/single-board-computer.jpg?s=612x612&w=0&k=20&c=z8U_zaMAA4ajWaahckzJE0Lq_J0TVTi_GOzKT6TFp1c=",
          caption: "VLSI Design Lab",
          fallback: "https://via.placeholder.com/2070x1380?text=VLSI+Lab",
        },
        {
          src: "https://img.freepik.com/premium-photo/replacing-computer-central-processor_94046-2787.jpg",
          caption: "Chip Fabrication",
          fallback:
            "https://via.placeholder.com/2070x1380?text=Chip+Fabrication",
        },
        {
          src: "https://img.freepik.com/free-vector/modern-cpu-background-with-linear-style_23-2147966220.jpg?t=st=1752819039~exp=1752822639~hmac=7a84c3cd3414bd5bf202d6ec7c6e693d5ebca4851df5385c498115d6ced2acb1&w=826",
          caption: "Circuit Design",
          fallback: "https://via.placeholder.com/2070x1380?text=Circuit+Design",
        },
      ],
      icon: <FaProjectDiagram className="text-2xl text-[#34B3AA]" />,
      latestProjects: [
        {
          title:
            "A Novel Ultra-Low-Voltage Level Shifter Featuring Re-Configurable Logic and Time-Borrowing Latch",
          media: {
            type: "video",
            src: "https://www.youtube.com/watch?v=F7uJYgyqeQA",
            fallback: "https://via.placeholder.com/2070x1380?text=ASIC+Design",
          },
          description: "A low-power ASIC for energy-efficient computing.",
          link: "https://takeoffprojects.com/projects/asic-design",
        },
        {
          title:
            "Design and Optimization of a Fault-Tolerant LFSR for Low-Power Systems",
          media: {
            type: "video",
            src: "https://youtu.be/nNAuX0GbLNg",
            fallback: "https://via.placeholder.com/2070x1380?text=FPGA+AI",
          },
          description: "An FPGA-based accelerator for AI workloads.",
          link: "https://takeoffprojects.com/projects/fpga-ai",
        },
      ],
      careerPath:
        "The career path in VLSI (Very Large Scale Integration) typically begins with a strong educational foundation in Electronics and Communication Engineering (ECE), Electrical and Electronics Engineering (EEE), or Computer Science Engineering (CSE). Pursuing a postgraduate degree like M.Tech or M.S in VLSI Design, Embedded Systems, or Microelectronics can further enhance expertise. During academic training, students gain essential knowledge in digital logic design, CMOS technology, semiconductor physics, and hardware description languages (HDL) such as Verilog and VHDL.\n\nSkill development is crucial at this stage, focusing on RTL design, ASIC/FPGA design flow, timing analysis, design for testability (DFT), and low-power design techniques. Proficiency in industry-standard tools such as Cadence Virtuoso, Tanner EDA, Synopsys tools, ModelSim, and Xilinx Vivado, along with scripting languages like TCL, Python, or Perl, is highly valued.\n\nInitial experience is often gained through academic projects or internships that offer hands-on exposure to RTL coding, simulation, synthesis, and layout design. Entry-level roles include positions such as RTL Design Engineer, FPGA Developer, Physical Design Engineer, DFT Engineer, Verification Engineer, and Analog Layout Engineer.\n\nWith experience, professionals can grow into mid-level roles like SoC Design Engineer, Senior Verification Engineer, or Analog/Mixed-Signal Design Engineer. As they progress, engineers can specialize further or transition into advanced roles such as Technical Lead, Design Verification Lead, Senior Layout Engineer, or EDA Tool Developer. Some may choose specific tracks such as analog vs. digital IC design, ASIC vs. FPGA, or focus on low-power design for AI, biomedical, or IoT applications. Continuous learning, project contributions, tool mastery, and domain specialization are key to a successful long-term career in VLSI.",
      keywords: [
        "VLSI Design",
        "RTL Design",
        "ASIC Flow",
        "FPGA Prototyping",
        "Low Power High Speed Circuits VLSI",
        "CMOS",
        "Semiconductor Technology",
        "Digital Design",
        "Analog Design",
      ],
    },
    {
      name: "Matlab",
      bgImage:
        "https://miro.medium.com/v2/resize:fit:700/1*6xUiWmw-tS9kItoDd1hlwQ.png",
      bgImageFallback: "https://via.placeholder.com/2070x1380?text=MATLAB",
      description:
        "Takeoff Projects offers a wide range of innovative MATLAB-based academic projects across domains such as Digital Image Processing (DIP), Digital Signal Processing (DSP), Wireless Communication and IoT. Their MATLAB projects include real-time simulations and implementations involving image enhancement, segmentation, feature extraction, signal filtering, classification, and communication system modeling using toolboxes like Image Processing, Signal Processing, and Communication System Toolboxes. Projects range from basic mini projects to advanced PhD-level research, covering topics like brain tumor detection using U-Net, ECG signal classification, WSN routing simulation, OFDM/NOMA system modeling, and MATLAB-based IoT applications. The platform supports integration with Simulink, GUI development, and hardware interfacing (Arduino/Raspberry Pi), offering full documentation, live training, and expert mentorship—making it an ideal choice for students and researchers aiming to develop hands-on, algorithm-driven, and publication-ready MATLAB projects.",
      projects: {
        AI: [
          "AI-based Signal Processing",
          "Neural Networks",
          "Predictive Modeling",
        ],
        Application: ["Image Processing", "Simulation"],
      },
      jobs: [
        " Signal & Image Processing Engineer",
        "AI / ML Engineer",
        "Embedded Systems Developer",
        "Biomedical Data Analyst",
        "Wireless Network Engineer",
        "R & D Scientist ",
      ],
      learningOutcomes: [
        " Master MATLAB, Python, and Simulink for simulations and modeling",
        "Develop algorithms for image and signal processing",
        "Build real-time applications using DSP and WSN protocols",
        "Design and deploy AI/ML/DL models for smart sensing and prediction",
        "Analyze biomedical signals like ECG, EEG using modern techniques",
        "Understand end-to-end systems from sensor to cloud",
      ],
      keyProjects: [
        "Medical Image Analysis",
        "Control System Simulator",
        "Signal Processing Toolkit",
      ],
      LatestProjects: [
        "Signal Classification System using MATLAB and Deep Learning",
        "Biomedical Image Analysis using CNNs in MATLAB",
        "Wireless Sensor Network Simulator with MATLAB GUI",
        "ECG Signal Noise Removal using FIR/IIR Filters",
        "AI-Powered Tumor Detection from MRI using MATLAB",
        "Smart Traffic Light System using DIP and MATLAB Simulink",
        "Real-Time Speech Recognition using DSP Toolbox in MATLAB",
        "Heart Disease Prediction using ML Models in MATLAB",
        "Digital Watermarking System using Image Processing",
        "MATLAB-Based Smart Prosthetic Limb Signal Classifier",
        "Brainwave Emotion Classifier using EEG and Deep Learning",
        "Remote Sensing Data Analysis using Image Segmentation",
        "AI-Powered Communication Error Correction in MATLAB",
        "Gait Analysis System for Patient Monitoring using Video Processing",
        "Object Tracking in Video Streams using MATLAB",
        "MATLAB + Arduino-Based Biomedical Sensing System",
        "Multimodal Biometric Authentication using MATLAB",
        "Face Mask Detection System using Deep Learning Toolbox",
        "Hand Gesture Controlled Virtual Mouse in MATLAB",
        "Pneumonia Detection from Chest X-rays using CNN in MATLAB",
        "MATLAB Simulink-Based Wireless Communication Analyzer",
        "Drowsiness Detection using Eye Aspect Ratio and MATLAB GUI",
      ],

      toolsUsed: [
        {
          name: "MATLAB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
          url: "https://www.mathworks.com/products/matlab.html",
        },
        {
          name: "Simulink",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
          url: "https://www.mathworks.com/products/simulink.html",
        },
        {
          name: "Signal Processing Toolbox",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
          url: "https://www.mathworks.com/products/signal.html",
        },
      ],
      industryApplications: [
        "Aerospace",
        "Automotive",
        "Medical Imaging",
        "Wearable Devices",
        "Robotics & Automation",
      ],
      galleryImages: [
        {
          src: "https://lumenci.com/wp-content/uploads/2024/03/Digital-Image-Processing-Banner-1024x576.webp",
          caption: "DIP Vibes: Pixels, Filters & Beyond",
          fallback:
            "https://via.placeholder.com/2070x1380?text=Digital+Image+Processing",
        },
        {
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
          caption: "Signal Flow Season: DSP in Action",
          fallback:
            "https://via.placeholder.com/2070x1380?text=Digital+Signal+Processing",
        },
        {
          src: "https://www.shutterstock.com/image-illustration/cloud-architecture-platform-internet-infrastructure-260nw-1748437547.jpg",
          caption: "Wireless Matrix: WSN x Real-Time Sensing",
          fallback:
            "https://via.placeholder.com/2070x1380?text=Wireless+Sensor+Networks",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDHFimq9BpOYcp__AlplWtDJMu4UwLlgaTCw&s",
          caption: "Deep Learn & Deploy: MATLAB Style",
          fallback:
            "https://via.placeholder.com/2070x1380?text=ML+DL+with+MATLAB",
        },
        {
          src: "https://cdn.prod.website-files.com/6682a87aa5eed3159baaa77e/6819f05a5af397580d424be6_types%20of%20biosignals.png",
          caption: "BioSignal Lab: ECGs, EEGs & MATLAB Magic",
          fallback:
            "https://via.placeholder.com/2070x1380?text=Biomedical+Engineering",
        },
        {
          src: "https://gridxmatrix.com/wp-content/uploads/2025/02/MATLAB-Dashboards-GUIs-for-Insights-1024x576.png",
          caption: "Simulate & Dominate: MATLAB GUI Dashboards",
          fallback:
            "https://via.placeholder.com/2070x1380?text=MATLAB+GUI+Simulations",
        },
      ],
      icon: <FaLaptopFile className="text-2xl text-[#34B3AA]" />,
      latestProjects: [
        {
          title: "Medical Image Analysis",
          media: {
            type: "video",
            src: "https://www.youtube.com/embed/0U1d5k8E7zQ?autoplay=1&mute=1&controls=1",
            fallback:
              "https://via.placeholder.com/2070x1380?text=Medical+Imaging",
          },
          description: "Advanced image processing for medical diagnostics.",
          link: "https://takeoffprojects.com/projects/medical-imaging",
        },
        {
          title: "Control System Simulator",
          media: {
            type: "image",
            src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
            fallback:
              "https://via.placeholder.com/2070x1380?text=Control+Systems",
          },
          description: "A simulator for designing and testing control systems.",
          link: "https://takeoffprojects.com/projects/control-simulator",
        },
      ],
    },
    {
      name: "Cloud Computing",
      bgImage:
        "https://plus.unsplash.com/premium_photo-1685086785131-e65690faa5bb?q=80&w=2070&auto=format&fit=crop",
      bgImageFallback:
        "https://via.placeholder.com/2070x1380?text=Cloud+Computing",
      description:
        "The Cloud Computing department in a college focuses on equipping students with the skills to design, manage, and optimize scalable cloud-based solutions. The curriculum blends theoretical knowledge with practical implementation, covering essential areas like cloud architecture, infrastructure as a service (IaaS), platform as a service (PaaS), software as a service (SaaS), virtualization, containerization, and cloud security. Students work on hands-on projects such as deploying applications on AWS, Azure, and Google Cloud, building serverless architectures, and managing cloud-native applications using Docker and Kubernetes. The department emphasizes industry-standard tools like AWS, Microsoft Azure, Google Cloud Platform (GCP), Docker, Kubernetes, and Terraform, preparing students for roles like Cloud Architect, Cloud Engineer, DevOps Engineer, and Cloud Security Analyst. With a strong focus on industry partnerships, the department provides internships, industry projects, and placement opportunities, ensuring students are well-prepared for the rapidly evolving cloud technology landscape. Extracurricular activities such as cloud hackathons, workshops on emerging cloud technologies, and cloud certifications further enhance students' practical skills and collaborative abilities, positioning the Cloud Computing department as a stepping stone for a successful career in cloud services and infrastructure management.",
      projects: {
        AI: [
          "AI Model Deployment",
          "Serverless AI",
          "Cloud-based ML Pipelines",
        ],
        Application: [
          "Cloud Infrastructure",
          "Serverless Applications",
          "Big Data Processing",
        ],
      },
      jobs: [
        "Cloud Architect",
        "Cloud Engineer",
        "Cloud Security Engineer",
        "DevOps Engineer",
        "Cloud Solutions Architect",
        "Cloud Developer",
        "Cloud Systems Administrator",
        "Cloud Consultant",
        "Cloud Operations Engineer",
        "Site Reliability Engineer (SRE)",
        "Cloud Migration Specialist",
        "Cloud Project Manager",
        "Cloud Infrastructure Engineer",
        "Cloud Automation Engineer",
        "Platform Engineer",
      ],
      learningOutcomes: [
        "Master cloud platforms such as AWS, Azure, and Google Cloud",
        "Design and deploy scalable cloud-based applications",
        "Understand and implement cloud security best practices",
        "Gain proficiency in containerization and orchestration using Docker and Kubernetes",
        "Implement serverless architectures and microservices on the cloud",
        "Develop automation scripts using Terraform and CloudFormation",
        "Optimize cloud resource management and cost-efficiency",
        "Build and manage cloud-native applications",
        "Work with cloud databases, storage, and networking services",
        "Collaborate on real-world cloud infrastructure projects and deployments",
      ],
      LatestProjects: [
        "Multi-Cloud Management Platform for Enterprise Applications",
        "Serverless AI Model Deployment on AWS Lambda and Google Cloud Functions",
        "Cloud-Native IoT Data Processing and Analytics System",
        "Cloud-Based Disaster Recovery System with Real-Time Backups",
        "AI-Powered Cloud Security Operations Center (SOC)",
        "Blockchain-Powered Cloud Storage System with Decentralized Security",
        "Cloud Infrastructure Automation Using Terraform and Ansible",
        "Edge Computing for Real-Time Data Processing in Cloud Environments",
        "Cloud-Based Healthcare Management System with HIPAA Compliance",
        "AI-Driven Cloud Resource Optimization with Auto-Scaling and Cost Efficiency",
        "Hybrid Cloud Data Lake Architecture for Big Data Analytics",
        "Real-Time Collaborative Cloud Platform for Remote Teams",
        "Cloud-Based Smart Home System with Device Integration and Automation",
        "Cloud-Powered Virtual Desktop Infrastructure (VDI) Solution",
        "Cloud-Based Video Streaming Platform with Adaptive Bitrate Streaming",
        "Cloud-Enabled Continuous Integration/Continuous Deployment (CI/CD) Pipeline",
        "Cloud-Native E-Commerce Platform with Serverless Backend",
        "Automated Cloud Monitoring and Logging System Using ELK Stack",
        "Cloud-Powered AI for Predictive Analytics in Finance",
        "SaaS-Based Cloud Compliance Monitoring and Reporting System",
      ],
      keyProjects: [
        "Scalable ML Pipeline",
        "Serverless Web App",
        "Cloud Data Warehouse",
      ],
      toolsUsed: [
        {
          name: "AWS",
          logo: "https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png",
          url: "https://aws.amazon.com/",
        },
        {
          name: "Azure",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
          url: "https://azure.microsoft.com/",
        },
        {
          name: "Google Cloud",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
          url: "https://cloud.google.com/",
        },
        {
          name: "Kubernetes",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
          url: "https://kubernetes.io/",
        },
        {
          name: "Terraform",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
          url: "https://www.terraform.io/",
        },
      ],
      industryApplications: [
        "Cloud Services",
        "Cloud-Native Applications",
        "Serverless Computing",
        "Cloud Security",
        "Hybrid Cloud Solutions",
        "Cloud Data Storage & Backup",
        "Cloud-Based AI & Machine Learning",
      ],
      galleryImages: [
        {
          src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
          caption: "Cloud Infrastructure",
          fallback:
            "https://via.placeholder.com/2070x1380?text=Cloud+Infrastructure",
        },
        {
          src: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?q=80&w=2070&auto=format&fit=crop",
          caption: "Serverless Computing",
          fallback:
            "https://via.placeholder.com/2070x1380?text=Serverless+Computing",
        },
        {
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
          caption: "Data Centers",
          fallback: "https://via.placeholder.com/2070x1380?text=Data+Centers",
        },
      ],
      icon: <FaCloudUploadAlt className="text-2xl text-[#34B3AA]" />,
      latestProjects: [
        {
          title: "Beyond Life",
          media: {
            type: "video",
            src: "/BeYondLife-DEMO.mkv",
            fallback: "/BeYondLife-DEMO.mkv",
          },
          description:
            "Beyond Life is a secure web-based digital will management system built with the MERN stack. It enables users to create encrypted digital wills, assign beneficiaries, and manage permissions using advanced cryptographic techniques for confidentiality, integrity, and transparency.",
          link: "https://takeoffprojects.com/project-details/beyond_life--19587",
        },
      ],
    },
  ];

  const courses = [
    {
      title: "Java Full Stack",
      description:
        "Master Java, Spring Boot, React, and full stack development with real-world projects",
      duration: "12 Weeks",
      level: "Advanced",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      bgImage:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "https://takeoffupskill.com/fullstack-java-course",
      outline: [
        {
          module: "Module 1: Java Fundamentals",
          topics: [
            "Introduction to Java and JVM",
            "Data Types, Variables, and Operators",
            "Control Structures and Loops",
            "Object-Oriented Programming Concepts",
          ],
        },
        {
          module: "Module 2: Advanced Java",
          topics: [
            "Exception Handling",
            "Collections Framework",
            {
              subheading: "Multithreading",
              items: ["Threads and Synchronization", "Concurrent Utilities"],
            },
            "Java I/O and Networking",
          ],
        },
        {
          module: "Module 3: Spring Boot",
          topics: [
            "Spring Framework Overview",
            "Spring Boot Setup and Configuration",
            "RESTful APIs with Spring Boot",
            {
              subheading: "Database Integration",
              items: ["Spring Data JPA", "Hibernate ORM"],
            },
          ],
        },
        {
          module: "Module 4: Frontend with React",
          topics: [
            "React Basics and JSX",
            "Components and Props",
            "State and Lifecycle",
            {
              subheading: "Advanced React",
              items: ["React Hooks", "Redux for State Management"],
            },
          ],
        },
        {
          module: "Module 5: Full Stack Projects",
          topics: [
            "Building a CRUD Application",
            "E-Commerce Platform Development",
            "Deploying Full Stack Apps",
          ],
        },
      ],
    },
    {
      title: "Python Full Stack",
      description:
        "Learn Django, Flask, React and build complete web applications with Python",
      duration: "10 Weeks",
      level: "Advanced",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      bgImage:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "https://takeoffupskill.com/fullstack-python-course",
      outline: [
        {
          module: "Module 1: Python Basics",
          topics: [
            "Python Syntax and Semantics",
            "Data Structures (Lists, Dictionaries, Sets)",
            "Functions and Modules",
          ],
        },
        {
          module: "Module 2: Django Framework",
          topics: [
            "Django Setup and Project Structure",
            "Models, Views, and Templates",
            {
              subheading: "Django ORM",
              items: ["Database Migrations", "QuerySets and Filters"],
            },
            "User Authentication",
          ],
        },
        {
          module: "Module 3: Flask Framework",
          topics: [
            "Flask Basics and Routing",
            "REST APIs with Flask",
            "Template Rendering with Jinja2",
          ],
        },
        {
          module: "Module 4: React Frontend",
          topics: [
            "React Components and Props",
            "State Management with Hooks",
            {
              subheading: "API Integration",
              items: [
                "Fetching Data with Axios",
                "Handling Asynchronous Operations",
              ],
            },
          ],
        },
        {
          module: "Module 5: Capstone Projects",
          topics: [
            "Blog Application with Django and React",
            "Task Management System",
            "Deployment to Heroku or AWS",
          ],
        },
      ],
    },
    {
      title: "C Programming",
      description:
        "Master the fundamentals of C programming language with hands-on projects",
      duration: "6 Weeks",
      level: "Beginner",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      bgImage:
        "https://knowledgewit.wordpress.com/wp-content/uploads/2020/05/c-pogramming-language-of-2019_tiobe.jpg?w=1200&h=688&crop=1",
      link: "https://takeoffupskill.com/c-course",
      outline: [
        {
          module: "Module 1: Introduction to C",
          topics: [
            "C Language Overview",
            "Variables and Data Types",
            "Input/Output Operations",
          ],
        },
        {
          module: "Module 2: Control Structures",
          topics: [
            "Conditional Statements (if, switch)",
            "Loops (for, while, do-while)",
            "Break and Continue",
          ],
        },
        {
          module: "Module 3: Functions and Pointers",
          topics: [
            "Function Declaration and Definition",
            {
              subheading: "Pointers",
              items: ["Pointer Arithmetic", "Pointers and Arrays"],
            },
          ],
        },
        {
          module: "Module 4: Advanced Concepts",
          topics: [
            "Structures and Unions",
            "File Handling",
            "Dynamic Memory Allocation",
          ],
        },
        {
          module: "Module 5: Projects",
          topics: ["Simple Calculator", "File-based Student Management System"],
        },
      ],
    },
    {
      title: "C++ Programming",
      description:
        "Learn object-oriented programming with C++ and modern C++ features",
      duration: "8 Weeks",
      level: "Intermediate",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      bgImage:
        "https://camo.githubusercontent.com/8e77e2cdcb07a8ea5e713e42bdc0a21d2e20f26d2fc74268c19d02887283587c/68747470733a2f2f77616c6c7061706572636176652e636f6d2f77702f7770343030393931352e6a7067",
      link: "https://takeoffupskill.com/cpp-course",
      outline: [
        {
          module: "Module 1: C++ Basics",
          topics: [
            "C++ Syntax and Structure",
            "Variables, Data Types, and Operators",
            "Input/Output with iostream",
          ],
        },
        {
          module: "Module 2: Object-Oriented Programming",
          topics: [
            "Classes and Objects",
            "Inheritance and Polymorphism",
            {
              subheading: "Encapsulation",
              items: ["Access Specifiers", "Data Hiding"],
            },
          ],
        },
        {
          module: "Module 3: Modern C++",
          topics: [
            "Smart Pointers",
            "Lambda Expressions",
            "STL Containers and Algorithms",
          ],
        },
        {
          module: "Module 4: Projects",
          topics: ["Inventory Management System", "Game Development with C++"],
        },
      ],
    },
    {
      title: "Data Science",
      description:
        "Master Python, Pandas, ML algorithms and data visualization techniques",
      duration: "14 Weeks",
      level: "Advanced",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      bgImage:
        "https://contentstatic.techgig.com/thumb/msid-88387467,width-800,height-600,resizemode-4/88387467.jpg",
      link: "https://takeoffupskill.com/data-science-course",
      outline: [
        {
          module: "Module 1: Python for Data Science",
          topics: [
            "Python Basics and Libraries",
            "NumPy for Numerical Computing",
            "Pandas for Data Manipulation",
          ],
        },
        {
          module: "Module 2: Data Visualization",
          topics: [
            "Matplotlib and Seaborn",
            {
              subheading: "Interactive Visualizations",
              items: ["Plotly", "Bokeh"],
            },
          ],
        },
        {
          module: "Module 3: Machine Learning",
          topics: [
            "Supervised Learning (Regression, Classification)",
            "Unsupervised Learning (Clustering, PCA)",
            "Model Evaluation and Hyperparameter Tuning",
          ],
        },
        {
          module: "Module 4: Advanced Topics",
          topics: [
            "Deep Learning with TensorFlow",
            "Natural Language Processing Basics",
          ],
        },
        {
          module: "Module 5: Capstone Projects",
          topics: [
            "Predictive Modeling for Sales",
            "Sentiment Analysis on Social Media Data",
          ],
        },
      ],
    },
    {
      title: "Data Analytics",
      description:
        "Learn SQL, Excel, Power BI and Tableau for business intelligence",
      duration: "8 Weeks",
      level: "Intermediate",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-original.svg",
      bgImage:
        "https://miro.medium.com/v2/resize:fill:320:214/1*SdVNOD-2kKiGC88s9VkLqQ.jpeg",
      link: "https://takeoffupskill.com/data-analytics-course",
      outline: [
        {
          module: "Module 1: Introduction to Data Analytics",
          topics: [
            "Overview of Business Intelligence",
            "Data Analytics Workflow",
          ],
        },
        {
          module: "Module 2: SQL for Data Analysis",
          topics: ["SQL Queries and Joins", "Aggregations and Subqueries"],
        },
        {
          module: "Module 3: Excel for Analytics",
          topics: ["Pivot Tables and Charts", "Advanced Excel Functions"],
        },
        {
          module: "Module 4: Visualization Tools",
          topics: [
            {
              subheading: "Power BI",
              items: ["Data Modeling", "DAX Functions"],
            },
            {
              subheading: "Tableau",
              items: ["Dashboards", "Data Storytelling"],
            },
          ],
        },
        {
          module: "Module 5: Projects",
          topics: [
            "Sales Dashboard Creation",
            "Customer Segmentation Analysis",
          ],
        },
      ],
    },
    {
      title: "Java Programming",
      description:
        "Core Java concepts with OOP principles and advanced features",
      duration: "6 Weeks",
      level: "Beginner",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      bgImage:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQO77RBbXOu2_oSEOAe6-90Nr2G1yh9L667SNn9yC63eXWxMXsn",
      link: "https://takeoffupskill.com/java-programming-course",
      outline: [
        {
          module: "Module 1: Java Basics",
          topics: [
            "Introduction to Java",
            "Variables and Data Types",
            "Control Flow Statements",
          ],
        },
        {
          module: "Module 2: Object-Oriented Programming",
          topics: [
            "Classes and Objects",
            "Inheritance and Polymorphism",
            "Encapsulation and Abstraction",
          ],
        },
        {
          module: "Module 3: Projects",
          topics: ["Simple Banking Application", "Basic GUI Application"],
        },
      ],
    },
    {
      title: "Python Programming",
      description:
        "Fundamentals to advanced Python concepts with practical exercises",
      duration: "5 Weeks",
      level: "Beginner",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      bgImage:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "https://takeoffupskill.com/python-course",
      outline: [
        {
          module: "Module 1: Python Fundamentals",
          topics: [
            "Python Syntax and Variables",
            "Data Types and Structures",
            "Control Flow and Loops",
          ],
        },
        {
          module: "Module 2: Advanced Python",
          topics: [
            "Functions and Modules",
            "File Handling",
            {
              subheading: "Error Handling",
              items: ["Try-Except Blocks", "Custom Exceptions"],
            },
          ],
        },
        {
          module: "Module 3: Projects",
          topics: ["To-Do List Application", "Simple Data Analysis Script"],
        },
      ],
    },
    {
      title: "SQL Programming",
      description:
        "Master database concepts and SQL queries with hands-on practice",
      duration: "4 Weeks",
      level: "Beginner",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      bgImage:
        "https://media.licdn.com/dms/image/v2/D4D12AQFxYDoVKTuE0g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1724079506057?e=2147483647&v=beta&t=sXt5xtAATI7ThAGmQEpvB0wo-_CCjSejFgvk3krGCUw",
      link: "https://takeoffupskill.com/sql-course",
      outline: [
        {
          module: "Module 1: Database Fundamentals",
          topics: ["Introduction to Databases", "Relational Database Concepts"],
        },
        {
          module: "Module 2: SQL Basics",
          topics: ["SELECT, INSERT, UPDATE, DELETE", "Joins and Subqueries"],
        },
        {
          module: "Module 3: Advanced SQL",
          topics: ["Indexes and Views", "Stored Procedures"],
        },
        {
          module: "Module 4: Projects",
          topics: ["Inventory Database Design", "Sales Data Analysis"],
        },
      ],
    },
    {
      title: "MS Office",
      description:
        "Master Word, Excel, PowerPoint and Outlook for professional use",
      duration: "4 Weeks",
      level: "Beginner",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      bgImage:
        "https://www.shutterstock.com/image-vector/microsoft-office-365-logo-word-260nw-2279064797.jpg",
      link: "https://takeoffupskill.com/ms-office-course",
      outline: [
        {
          module: "Module 1: Microsoft Word",
          topics: ["Document Creation and Formatting", "Tables and Graphics"],
        },
        {
          module: "Module 2: Microsoft Excel",
          topics: [
            "Spreadsheets and Formulas",
            {
              subheading: "Data Analysis",
              items: ["Pivot Tables", "Charts"],
            },
          ],
        },
        {
          module: "Module 3: PowerPoint and Outlook",
          topics: ["Creating Presentations", "Email Management in Outlook"],
        },
      ],
    },
    {
      title: "Web Development",
      description: "Learn HTML, CSS, JavaScript and build responsive websites",
      duration: "8 Weeks",
      level: "Beginner",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      bgImage:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "https://takeoffupskill.com/web-development-course",
      outline: [
        {
          module: "Module 1: HTML and CSS",
          topics: [
            "HTML Structure and Semantics",
            "CSS Styling and Layouts",
            "Responsive Design with Flexbox and Grid",
          ],
        },
        {
          module: "Module 2: JavaScript Basics",
          topics: [
            "JavaScript Syntax and DOM Manipulation",
            "Events and Event Handling",
          ],
        },
        {
          module: "Module 3: Advanced Web Development",
          topics: [
            {
              subheading: "Frontend Frameworks",
              items: ["Introduction to React", "Basic Component Creation"],
            },
          ],
        },
        {
          module: "Module 4: Projects",
          topics: ["Portfolio Website", "Interactive Web Application"],
        },
      ],
    },
    {
      title: "VLSI Design",
      description:
        "Learn Very Large Scale Integration design concepts and tools",
      duration: "10 Weeks",
      level: "Advanced",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg",
      bgImage:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "https://takeoffupskill.com/vlsi-course",
      outline: [
        {
          module: "Module 1: VLSI Fundamentals",
          topics: [
            "Introduction to VLSI Design",
            "CMOS Technology",
            "Digital Logic Design",
          ],
        },
        {
          module: "Module 2: Design Tools",
          topics: ["EDA Tools (Cadence, Synopsys)", "Verilog and VHDL Basics"],
        },
        {
          module: "Module 3: Projects",
          topics: ["Simple Circuit Design", "ASIC Design Flow"],
        },
      ],
    },
    {
      title: "Oracle Database",
      description:
        "Master Oracle database administration and PL/SQL programming",
      duration: "8 Weeks",
      level: "Intermediate",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      bgImage:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "https://takeoffupskill.com/oracle-course",
      outline: [
        {
          module: "Module 1: Oracle Fundamentals",
          topics: [
            "Oracle Database Architecture",
            "Installation and Configuration",
          ],
        },
        {
          module: "Module 2: PL/SQL Programming",
          topics: ["PL/SQL Syntax and Procedures", "Triggers and Packages"],
        },
        {
          module: "Module 3: Administration",
          topics: ["Backup and Recovery", "Performance Tuning"],
        },
      ],
    },
    {
      title: "Software Testing",
      description:
        "Learn manual and automated testing techniques with Selenium",
      duration: "6 Weeks",
      level: "Intermediate",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
      bgImage:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "https://takeoffupskill.com/software-testing-course",
      outline: [
        {
          module: "Module 1: Testing Fundamentals",
          topics: [
            "Introduction to Software Testing",
            "Testing Types and Levels",
          ],
        },
        {
          module: "Module 2: Manual Testing",
          topics: ["Test Case Design", "Defect Tracking"],
        },
        {
          module: "Module 3: Automated Testing",
          topics: [
            "Selenium WebDriver Basics",
            {
              subheading: "Test Automation Frameworks",
              items: ["TestNG", "Cucumber"],
            },
          ],
        },
        {
          module: "Module 4: Projects",
          topics: ["Web Application Testing", "Automation Script Development"],
        },
      ],
    },
    {
      title: "Digital Marketing",
      description:
        "Master SEO, social media marketing, and online advertising strategies",
      duration: "6 Weeks",
      level: "Beginner",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      bgImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "https://takeoffupskill.com/digital-marketing-course",
      outline: [
        {
          module: "Module 1: Digital Marketing Basics",
          topics: [
            "Introduction to Digital Marketing",
            "Market Research and Strategy",
          ],
        },
        {
          module: "Module 2: SEO and SEM",
          topics: ["On-Page and Off-Page SEO", "Google Ads and PPC Campaigns"],
        },
        {
          module: "Module 3: Social Media Marketing",
          topics: [
            {
              subheading: "Platforms",
              items: ["Facebook, Instagram, LinkedIn", "Content Creation"],
            },
          ],
        },
        {
          module: "Module 4: Projects",
          topics: ["SEO Audit for a Website", "Social Media Campaign"],
        },
      ],
    },
    {
      title: "Embedded Course",
      description:
        "Learn Very Large Scale Integration (VLSI) design concepts and tools. Gain hands-on experience with embedded systems, circuit design, and hardware-software integration.",
      duration: "10 Weeks",
      level: "Advanced",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg",
      bgImage:
        "https://img.freepik.com/free-photo/home-made-robot-desk_23-2148863420.jpg?ga=GA1.1.276921981.1751864510&semt=ais_hybrid&w=740",
      link: "https://takeoffupskill.com/",
      outline: [
        {
          module: "Module 1: Basic Electronics & Circuit Fundamentals",
          topics: [
            "Introduction to Electronics",
            "Circuit Analysis & Design",
            "Passive & Active Components",
          ],
        },
        {
          module: "Module 2: Arduino Programming & Interfacing",
          topics: [
            "Introduction to Arduino (Uno, Nano, Mega)",
            "Arduino IDE Setup & Programming Basics",
            "Digital & Analog I/O (LED, Buttons, Potentiometer)",
            {
              subheading: "Communication Protocols",
              items: [
                "UART, I2C, SPI",
                "Interfacing Sensors (Ultrasonic, IR, Temperature)",
              ],
            },
            "Motor Control & Actuators",
            "Wireless Communication",
          ],
        },
        {
          module: "Module 3: Raspberry Pi & Linux Basics",
          topics: [
            "Introduction to Raspberry Pi (Pi 4/Zero W)",
            "OS Setup (Raspberry Pi OS)",
            "Linux Commands & Python Programming",
            {
              subheading: "Interfacing Peripherals",
              items: [
                "Camera Module (OpenCV Basics)",
                "RFID, NFC, and Touchscreens",
              ],
            },
            {
              subheading: "Networking & Remote Access",
              items: ["SSH, VNC, MQTT Protocol"],
            },
          ],
        },
        {
          module: "Module 4: IoT (Internet of Things) Development",
          topics: [
            {
              subheading: "IoT Fundamentals",
              items: [
                "Cloud Platforms (Blynk, ThingSpeak)",
                "MQTT & HTTP Protocols",
              ],
            },
          ],
        },
        {
          module: "Module 5: Robotics & Automation",
          topics: [
            {
              subheading: "Introduction to Robotics",
              items: [
                "Types of Robots (Mobile, Arm)",
                "Line Follower & Obstacle Avoidance",
              ],
            },
          ],
        },
        {
          module: "Module 6: AI & ML for Embedded Systems",
          topics: [
            "Edge AI with Raspberry Pi & Arduino",
            "TensorFlow Lite & OpenCV for Object Detection",
            "TinyML (Microcontrollers with AI)",
            {
              subheading: "Computer Vision Applications",
              items: [
                "Face Recognition (Haar Cascades)",
                "QR Code & Barcode Scanning",
              ],
            },
          ],
        },
        {
          module: "Module 7: Projects",
          topics: [
            "Smart Agriculture System (IoT + Sensors)",
            "Home Security Robot (Raspberry Pi + AI)",
            "Gesture-Controlled Robotic Arm (Arduino + IMU)",
          ],
        },
      ],
    },
    {
      title: "MATLAB",
      description:
        "Complete MATLAB learning path from basics to advanced research projects",
      duration: "Beginner to Expert",
      level: "All Levels",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
      bgImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYrYV_b32IItGkwE_qgpzUy4CKJ8URZTpjSA&s",
      link: "https://takeoffupskill.com/",
      subCourses: [
        {
          title: "Wireless Communication Systems",
          duration: "45 Days",
          level: "Beginner",
          outline: [
            {
              module: "Module 1: Communication Foundations",
              topics: [
                "Analog vs Digital Communication",
                "Modulation Techniques (ASK, FSK, PSK)",
                "Wireless Channels (Path Loss, Fading, Interference)",
              ],
            },
            {
              module: "Module 2: MATLAB Simulation of Wireless Systems",
              topics: [
                "Communication Toolbox Basics",
                "MIMO and OFDM Systems in MATLAB",
                "Protocol Stack and BER Analysis",
              ],
            },
            {
              module: "Module 3: IoT and SDR Integration",
              topics: [
                "WSN and IoT Protocols (ZigBee, LoRa)",
                "ThingSpeak & Cloud Integration",
                "SDR and Cognitive Radio Concepts",
              ],
            },
            {
              module: "Module 4: Capstone Mini Project",
              topics: [
                "Wireless System Simulation",
                "BER, Throughput, and Channel Metrics",
                "Final Report, Peer Review & Certification",
              ],
            },
          ],
        },
        {
          title: "Signal Processing using MATLAB",
          duration: "45 Days",
          level: "Intermediate",
          outline: [
            {
              module: "Module 1: Signal Fundamentals & Operations",
              topics: [
                "Signal Types & Representation",
                "Basic Signal Operations",
                "Fourier Analysis in MATLAB",
              ],
            },
            {
              module: "Module 2: Filtering and Enhancement",
              topics: [
                "FIR & IIR Filters",
                "Noise Removal Techniques",
                "Signal Enhancement Methods",
              ],
            },
            {
              module: "Module 3: Biomedical & Real-Time Analysis",
              topics: [
                "ECG & EEG Signal Processing",
                "Feature Extraction & Classification",
                "Real-Time Biomedical Case Studies",
              ],
            },
            {
              module: "Module 4: Mini Project & ML for Signals",
              topics: [
                "Signal Classification with ML",
                "Speech & Audio Signal Case Study",
                "Final Project, Demo & Certification",
              ],
            },
          ],
        },
        {
          title: "Image Processing with Deep Learning",
          duration: "45 Days",
          level: "Advanced",
          outline: [
            {
              module: "Module 1: Image Processing Fundamentals",
              topics: [
                "Image Reading, Preprocessing, Filtering",
                "Edge Detection & Enhancement",
                "Image Transformation Techniques",
              ],
            },
            {
              module: "Module 2: Deep Learning Essentials",
              topics: [
                "CNN Structure and Layers",
                "Transfer Learning (AlexNet, VGG)",
                "Model Evaluation and Tuning",
              ],
            },
            {
              module: "Module 3: Explainability and Deployment",
              topics: [
                "Explainable AI (Grad-CAM, Saliency)",
                "Image Segmentation & Object Detection",
                "Model Optimization & Real-Time Integration",
              ],
            },
            {
              module: "Module 4: Capstone Mini Project",
              topics: [
                "Project Design to Deployment",
                "Explainability & Evaluation",
                "Presentation, Peer Review & Certificate",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "EEE – MATLAB/SIMULINK Course",
      description:
        "Master circuit simulation, power electronics, and advanced project modeling using MATLAB/SIMULINK across beginner to expert levels.",
      level: "All Levels",
      logo: "https://vskconsultants.com/wp-content/uploads/2023/04/Simulink-668x321.png",
      bgImage:
        "https://vskconsultants.com/wp-content/uploads/2023/04/Simulink-668x321.png",
      link: "https://takeoffupskill.com/",
      outline: [
        {
          module: "Beginner: Basic Circuit Simulation",
          topics: [
            "Overview of MATLAB & Simulink",
            "Exploring the Simulink Interface",
            "How to Create, Save & Manage Model Files",
            "Using Simulink Library Browser",
            "Selecting Electrical Components",
            "Wire Connections and Signal Flow",
            "Series and Parallel RLC Circuits",
            "Simulation Controls and Output Analysis",
          ],
        },
        {
          module: "Intermediate: Power Electronics Design",
          topics: [
            "Working with MOSFET, IGBT, Diode Blocks",
            "Setting Up Pulse Generator for Gating",
            "Controlling Duty Cycle and Frequency",
            "Simulation of Buck, Boost, Buck-Boost Converters",
            "Single-phase Half and Full-Bridge Inverter",
            "Multi-level Inverter Fundamentals",
            "Controlled and Uncontrolled Rectifiers",
            "Filtering Output Ripple and Scope Analysis",
          ],
        },
        {
          module: "Advanced: Mini Project Implementation",
          topics: [
            "Understanding Project Requirements",
            "Designing Circuit Diagrams",
            "PI/PID Controllers Implementation",
            "Closed-Loop Control Systems",
            "Speed Control of DC Motor Using Buck Converter",
            "Solar Battery Charging with Boost Converter",
            "Load Frequency Control of Power System",
            "Output Waveform Analysis and Stability Tuning",
          ],
        },
        {
          module: "Expert: IEEE-Based Major Projects",
          topics: [
            "Reading and Mapping IEEE Simulation Logic",
            "Smart Grid with Renewable Integration",
            "Bidirectional Converter for EV (G2V & V2G)",
            "MPPT Algorithms (P&O / INC)",
            "ANFIS-Based Load Frequency Control",
            "Fuzzy Logic and ANFIS Controller Design",
            "Using Simscape Electrical",
            "Project Finalization, Demo & Peer Review",
          ],
        },
      ],
    },
  ];

  // Services data
  const services = [
    {
      title: "Custom Project Development",
      description:
        "From concept to deployment, we develop complete projects tailored to your academic requirements with industry best practices.",
      icon: <FaCode className="text-4xl text-[#34B3AA]" />,
      category: "projects",
    },
    {
      title: "Hands-on Training",
      description:
        "Intensive, project-based training programs in cutting-edge technologies with practical implementation guidance.",
      icon: <FaChalkboardTeacher className="text-4xl text-[#34B3AA]" />,
      category: "training",
    },
    {
      title: "Research Implementation",
      description:
        "Complete technical implementation support for PhD and Master's research papers with documentation.",
      icon: <FaBook className="text-4xl text-[#34B3AA]" />,
      category: "support",
    },
    {
      title: "Documentation & Reports",
      description:
        "Professional documentation services including project reports, thesis writing, and research papers.",
      icon: <FaFileAlt className="text-4xl text-[#34B3AA]" />,
      category: "projects",
    },
    {
      title: "Workshops",
      description:
        "On-campus and online workshops on emerging technologies with hands-on project experience.",
      icon: <FaUsers className="text-4xl text-[#34B3AA]" />,
      category: "training",
    },
    {
      title: "Internships",
      description:
        "Industry-relevant internship programs with live project experience and mentorship.",
      icon: <FaBriefcase className="text-4xl text-[#34B3AA]" />,
      category: "support",
    },
    // New services added
    {
      title: "PhD Project Support",
      description:
        "Expert guidance for PhD students to help with research methodologies, data analysis, and project execution.",
      icon: <FaGraduationCap className="text-4xl text-[#34B3AA]" />,
      category: "support",
    },
    {
      title: "Research Paper Writing",
      description:
        "Assistance in writing research papers, reviews, and technical articles for publication in top journals.",
      icon: <FaFileAlt className="text-4xl text-[#34B3AA]" />,
      category: "projects",
    },
    {
      title: "Paper Publication Assistance",
      description:
        "Help with submitting papers to journals and conferences, including formatting and submission processes.",
      icon: <FaPenFancy className="text-4xl text-[#34B3AA]" />,
      category: "support",
    },
    {
      title: "Faculty Development Program",
      description:
        "Empowering faculty through specialized training, research guidance, and support for publishing in reputed journals and conferences.",
      icon: <FaChalkboardTeacher className="text-4xl text-[#34B3AA]" />,
      category: "education",
    },
  ];

  const testimonials = [
    {
      reviewer: "Vinay Kumar",
      rating: "★★★★★",
      date: "3 weeks ago",
      comment:
        "The quality of service delivered by takeoff projects met my expectations. Timely delivery of milestones, Adherence to quality standards and project requirements, Well-documented and structured outputs, Effective communication. The mainly quick response from the team and provides an clarifications project doubts/ problems on time.",
      role: "B.Tech CSE",
    },
    {
      reviewer: "Janu Janu",
      rating: "★★★★★",
      date: "a week ago",
      comment:
        "I collected my project from Takeoff Projects, and I had a really positive experience with the entire team. They made me feel very comfortable throughout the process. The team supported me not only during working hours but even for tasks beyond the regular scope...",
      role: "M.Tech ECE",
    },
    {
      reviewer: "Rashmi Suresh",
      rating: "★★★★★",
      date: "4 weeks ago",
      comment:
        "The 'Takeoff Edu group' project institute provided excellent guidance and a well-structured approach to learning. The mentors, developer was very helpful and gave a detailed explanation of our base paper...",
      role: "B.Tech EEE",
    },
    {
      reviewer: "Anitha Sri Gayathri Matta",
      rating: "★★★★★",
      date: "a month ago",
      comment:
        "Project working condition is very good. The project is working same as the way we expected. Results are excellent and accurate...",
      role: "M.Tech CSE",
    },
    {
      reviewer: "Sivamani K",
      rating: "★★★★★",
      date: "2 months ago",
      comment:
        "I had a wonderful experience working with TakeOff. They created an excellent project presentation (PPT) and detailed documentation for me, which made the entire process smooth and easy to follow...",
      role: "B.Tech IT",
    },
    {
      reviewer: "Yashasvi Linga Reddy",
      rating: "★★★★★",
      date: "6 months ago",
      comment:
        "The developer I was connected with had helped me a lot with my project idea, development and execution...",
      role: "M.Tech VLSI",
    },
    {
      reviewer: "Taukir Khan",
      rating: "★★★★★",
      date: "11 months ago",
      comment:
        "My experience with Take Off Projects was outstanding. The project we received was of excellent quality and affordably priced...",
      role: "B.Tech Mech",
    },
    {
      reviewer: "Uika Praveen",
      rating: "★★★★★",
      date: "10 months ago",
      comment:
        "I first time in online internship excellent experience. The team was professional, and they delivered on their promises...",
      role: "B.Tech Civil",
    },
  ];

  // Generate image paths
  const imagePaths = Array.from(
    { length: 30 },
    (_, i) => `/review-${i + 1}.jpeg`
  );

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigate images in modal
  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
  };

  const prevImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + imagePaths.length) % imagePaths.length
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setIsModalOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation trigger
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 flex justify-center items-center z-50"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
            }}
            className="mb-8"
          >
            <img
              src="https://takeoffprojects.com/assets/images/logotakeoff3new1.webp"
              alt="Takeoff Projects"
              className="w-48 mx-auto"
            />
          </motion.div>
          <div className="w-64 h-1 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-indigo-500 to-blue-500"
            ></motion.div>
          </div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl font-medium text-black"
          >
            Loading your Journey... next stop: Success!
          </motion.h3>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full top-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="relative overflow-hidden">
          {/* Navbar Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://takeoffprojects.com/assets/images/logotakeoff3new1.webp"
                  alt="Takeoff Projects"
                  className={`transition-all ${scrolled ? "h-10" : "h-12"}`}
                />
              </Link>

              {/* Hamburger Menu */}
              <button
                className="md:hidden text-gray-800 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <div className="space-y-1.5">
                  <span
                    className={`block w-8 h-0.5 bg-gray-800 transition-transform duration-300 ${
                      menuOpen ? "transform rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`block w-8 h-0.5 bg-gray-800 transition-opacity duration-300 ${
                      menuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block w-8 h-0.5 bg-gray-800 transition-transform duration-300 ${
                      menuOpen ? "transform -rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Nav Links */}
              <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: menuOpen ? 1 : 0,
                  y: menuOpen ? 0 : -20,
                }}
                className={`md:flex ${
                  menuOpen ? "block" : "hidden"
                } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300`}
              >
                <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  {[
                    { name: "Home", path: "/" },
                    { name: "Services", path: "/services" },
                    { name: "Projects", path: "/projects" },
                    { name: "Courses", path: "/courses" },
                    { name: "Workshops", path: "/workshops" },
                    { name: "Success Stories", path: "/testimonials" },
                    { name: "Contact", path: "/contact" },
                  ].map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Link
                        to={item.path}
                        className="text-gray-800 hover:text-[#34B3AA] font-medium transition relative group"
                      >
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#34B3AA] transition-all group-hover:w-full"></span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="https://takeoffprojects.com/"
                  className="hidden md:block bg-[#34B3AA] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#2a8f88] transition shadow-lg"
                >
                  Explore Us!
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>
      <br />

      {/* Hero Slider */}
      <section className="relative pt-16 h-screen min-h-[600px] w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="h-full w-full"
        >
          {[
            {
              bg: "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=612x612&w=0&k=20&c=2GLUy6eqCSr0NFRO8CHm8_PUMy9Qc8ryqcsRoe0DEYM=",
              title: "Transform Your Academic Ideas Into Reality",
              text: "From concept to implementation, we bring your academic projects to life with cutting-edge technology and expert guidance.",
              button1: "Explore Services",
              button2: "Start Project",
            },
            {
              bg: "https://media.istockphoto.com/id/2173915109/photo/skill-competency-development-concept-up-new-ability-skill-training-for-technology-evolution.webp?a=1&b=1&s=612x612&w=0&k=20&c=rL50nnTUg3LkA5rPZOsI_TWc4G3n3xETibUmPfCWBUo=",
              title: "Industry-Ready Skill Development",
              text: "Our intensive training programs bridge the gap between academia and industry requirements.",
              button1: "View Courses",
              button2: "Join Workshop",
            },
            {
              bg: "https://img.freepik.com/free-vector/people-starting-business-project_23-2148866842.jpg?ga=GA1.1.276921981.1751864510&semt=ais_hybrid&w=740",
              title: "Comprehensive Project Development",
              text: "End-to-end project solutions for all engineering disciplines with complete documentation.",
              button1: "Browse Projects",
              button2: "Get Quote",
            },
            {
              bg: "https://media.istockphoto.com/id/1979289147/photo/data-analysis-science-and-big-data-with-ai-technology-analyst-or-scientist-uses-a-computer.jpg?s=612x612&w=0&k=20&c=vmC-jVG6PNPRQtgtBp2y1caApEGYjt-fDrm0VzRgvK8=",
              title: "Research Implementation Support",
              text: "Expert guidance and technical implementation for your PhD and Master's research work.",
              button1: "Research Support",
              button2: "Contact Experts",
            },
          ].map((slide, index) => (
            <SwiperSlide key={index} className="relative w-full h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.bg})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
              </div>

              <div className="relative h-full flex items-center justify-center text-center px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-4xl mx-auto"
                >
                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {slide.text}
                  </motion.p>
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={
                          index === 0
                            ? "https://takeoffprojects.com/"
                            : index === 1
                            ? "https://takeoffupskill.com/"
                            : index === 2
                            ? "https://takeoffprojects.com/"
                            : "https://takeoffprojects.com/"
                        }
                        className="bg-[#34B3AA] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2a8f88] transition shadow-lg"
                      >
                        {slide.button1}
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block"
            >
              Who We Are
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#34B3AA]"></span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 mt-4 max-w-2xl mx-auto"
            >
              Your premier destination for academic project development and
              skill enhancement with industry-aligned training
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <img
                src="/images.png"
                alt="Takeoff Team"
                className="rounded-lg shadow-xl w-full"
                style={{ height: "450px" }}
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 bg-[#34B3AA] text-white p-4 rounded-lg shadow-lg"
              >
                <span className="block text-2xl font-bold">15+</span>
                <p>Years Experience</p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Empowering Students Across All Academic Levels
              </h3>
              <p className="text-gray-600 mb-4">
                Takeoff Projects is a premier academic project development and
                training organization dedicated to transforming student ideas
                into fully functional, industry-relevant projects.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of industry experts and academic professionals provides
                end-to-end project solutions, ensuring your project meets the
                highest technical and academic standards.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "100% Custom Project Development",
                  "Complete Documentation & Implementation Support",
                  "Industry Expert Mentorship",
                  "Hands-on Training with Real Projects",
                  "Research Paper Implementation",
                  "Placement-focused Skill Development",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <FaCheckCircle className="text-[#34B3AA] mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="py-20 bg-gradient-to-r from-[#34B3AA]/10 to-[#34B3AA]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block"
            >
              What We Provide
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#34B3AA]"></span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 mt-4 max-w-2xl mx-auto"
            >
              Comprehensive solutions tailored to your academic and career needs
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Project Implementation",
                description:
                  "Complete development of academic projects from concept to deployment with industry best practices",
                icon: <FaCode className="text-4xl text-[#34B3AA]" />,
              },
              {
                title: "Research Support",
                description:
                  "Technical implementation and guidance for PhD and Master's research with publication support",
                icon: <FaBook className="text-4xl text-[#34B3AA]" />,
              },
              {
                title: "Technical Training",
                description:
                  "Project-based workshops and courses on cutting-edge technologies with hands-on experience",
                icon: (
                  <FaChalkboardTeacher className="text-4xl text-[#34B3AA]" />
                ),
              },
              {
                title: "Documentation",
                description:
                  "Professional project reports, thesis writing, and research papers with plagiarism checks",
                icon: <FaFileAlt className="text-4xl text-[#34B3AA]" />,
              },
              {
                title: "Internship Programs",
                description:
                  "Industry-relevant internships with live project experience and mentorship",
                icon: <FaBriefcase className="text-4xl text-[#34B3AA]" />,
              },
              {
                title: "Career Guidance",
                description:
                  "Technical interview preparation and placement support for students",
                icon: <FaUsers className="text-4xl text-[#34B3AA]" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-[#34B3AA]/10 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Final Year Projects Are Crucial Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block"
            >
              Why Final Year Projects Are Crucial for Students
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#34B3AA]"></span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 mt-4 max-w-2xl mx-auto"
            >
              Final year projects are a cornerstone of academic and professional
              growth, bridging theoretical knowledge with real-world
              applications.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                title: "Practical Skill Development",
                description:
                  "Gain hands-on experience in coding, problem-solving, and project management, preparing you for industry challenges.",
                image:
                  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
              },
              {
                title: "Career Readiness",
                description:
                  "Showcase your technical expertise to potential employers through a well-executed project portfolio.",
                image:
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
              },
              {
                title: "Innovation and Creativity",
                description:
                  "Explore innovative solutions and contribute to advancements in your field through unique project ideas.",
                image:
                  "https://plus.unsplash.com/premium_photo-1672759360872-791a5ba6e2cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JlYXRpdml0eXxlbnwwfHwwfHx8MA%3D%3D",
              },
              {
                title: "Research and Analytical Thinking",
                description:
                  "Develop the ability to conduct in-depth research, evaluate technologies, and make data-driven decisions that support your project goals.",
                image:
                  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
              },
              {
                title: "Confidence Building",
                description:
                  "Boost your confidence by solving real-world problems and presenting your work, preparing you for interviews and future leadership roles.",
                image:
                  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
              },
              {
                title: "Bridge Between Academics and Industry",
                description:
                  "Apply theoretical knowledge in practical settings, creating a seamless transition from academic learning to industry expectations.",
                image:
                  "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1527146579/1527146466.jpg",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all relative overflow-hidden group"
              >
                <div className="h-40 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="min-h-screen py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-black relative mb-12"
        >
          Project Development Life Cycle
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#34B3AA]"></span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="max-w-3xl mx-auto text-lg sm:text-xl text-center mb-16 leading-relaxed"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          The Project Development Life Cycle (PDLC) is a structured framework
          consisting of key stages involved in building a successful product or
          system. It ensures smooth progression from understanding the problem
          to deploying the final solution, covering analysis, design,
          implementation, testing, documentation, and stakeholder presentation.
        </motion.p>

        {/* Image block */}
        <div className="max-w-4xl mx-auto mb-20">
          {pdlcImages.map((img, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-500 bg-white"
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-auto object-contain"
              />
              <p className="absolute bottom-4 left-4 text-2xl text-white font-semibold bg-black bg-opacity-50 px-3 py-1 rounded">
                {img.alt}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stepwise Breakdown */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-[#34B3AA] bg-opacity-90 backdrop-blur-md p-6 rounded-2xl border border-[#34B3AA] shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-white leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="min-h-screen py-16 px-4 sm:px-6 md:px-12 lg:px-24 flex items-center justify-center bg-[#34B3AA]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#34B3AA] to-white relative"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our Journey
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
          </motion.h2>

          <motion.div
            className="bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50 shadow-2xl mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.p
              className="text-lg sm:text-xl text-gray-300 leading-relaxed"
              variants={fadeInUpDelayed}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Established in{" "}
              <span className="font-bold text-blue-400">2007</span> as a Global
              Education Center, our journey began with a strong commitment to
              academic excellence and student empowerment. In the early years,
              we focused on delivering quality training and continuously
              evolving our approach to meet the growing needs of students. By{" "}
              <span className="font-bold text-blue-400">2009</span>, we launched{" "}
              <span className="font-bold text-blue-400">
                "Takeoff Edu Group"
              </span>
              , a dedicated platform to support final-year students with
              real-time academic projects, technical mentoring, and hands-on
              guidance. Through this initiative, we gained extensive experience
              across diverse domains and worked closely with thousands of
              students, understanding their academic challenges and project
              requirements.
              <br />
              <br />
              Over the years, this rich experience and deep industry exposure
              helped us refine our technical expertise and organizational
              vision. The valuable insights we acquired through{" "}
              <span className="font-bold text-blue-400">
                "Takeoff Edu Group"
              </span>{" "}
              shaped our belief that academic projects could be a powerful
              foundation for innovation and entrepreneurship. Driven by this
              conviction, we took the next big step in{" "}
              <span className="font-bold text-blue-400">2014</span> and founded{" "}
              <span className="font-bold text-purple-400">
                Young Minds Technology Solutions Private Limited
              </span>
              —a software company built on the knowledge and innovation nurtured
              through academic projects.
              <br />
              <br />
              Since its inception,{" "}
              <span className="font-bold text-purple-400">
                Young Minds Technology Solutions Private Limited
              </span>{" "}
              has expanded its offerings and diversified its product portfolio
              across industries. We have built several impactful digital
              solutions and steadily grown our client base, earning trust and
              recognition for our quality and commitment. With every product, we
              brought in the passion and insights gained from our academic
              journey, allowing us to bridge the gap between academia and the IT
              industry.
              <br />
              <br />
              To further empower students and share this knowledge, we launched{" "}
              <span className="font-bold text-blue-400">Takeoff Upskill</span>,
              an advanced learning initiative focused on equipping students with
              practical, job-ready skills. Through this program, we not only
              train students on real-time technologies but also identify
              exceptional talent and provide them with opportunities to work on
              live projects and even join our team. This entire evolution—from
              academic support to a full-fledged tech company—has been built
              upon the foundation of education, innovation, and the desire to
              make a lasting impact.
            </motion.p>
          </motion.div>

          <motion.h3
            className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-white"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our Milestones
          </motion.h3>

          {/* Wavy Timeline with Image/Content Split */}
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Left Side - Image */}
            <div className="lg:w-1/2 relative rounded-2xl overflow-hidden flex items-center justify-center">
              <motion.div
                className=" max-w-[1500px] max-h-[500px] rounded-2xl overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                key={`image-${activeMilestone}`}
              >
                <img
                  src={milestones[activeMilestone].image}
                  alt={milestones[activeMilestone].title}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      {milestones[activeMilestone].year}
                    </h4>
                    <p className="text-blue-200 font-medium">
                      {milestones[activeMilestone].title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Content with Wavy Timeline */}
            <div className="lg:w-1/2">
              <div className="relative h-full">
                {/* Wavy Timeline */}
                <svg
                  className="w-full h-full absolute top-0 left-0"
                  viewBox="0 0 100 400"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M20,0 Q30,50 20,100 Q10,150 20,200 Q30,250 20,300 Q10,350 20,400"
                    stroke="url(#wavyGradient)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <defs>
                    <linearGradient
                      id="wavyGradient"
                      x1="20%"
                      y1="20%"
                      x2="0%"
                      y2="20%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Timeline Items */}
                <div className="relative h-full flex flex-col justify-between pl-16 z-10">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      className={`py-8 transition-all duration-300 ${
                        activeMilestone === index ? "scale-105" : "opacity-70"
                      }`}
                      onClick={() => setActiveMilestone(index)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{
                        opacity: activeMilestone === index ? 1 : 0.7,
                        x: 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-6 h-6 rounded-full mt-1 flex-shrink-0 border-2 ${
                            activeMilestone === index
                              ? "border-blue-400 bg-blue-500"
                              : "border-gray-500"
                          }`}
                        />
                        <div>
                          <h4
                            className={`text-xl font-bold ${
                              activeMilestone === index
                                ? milestone.textColor
                                : "text-gray-400"
                            }`}
                          >
                            {milestone.year}
                          </h4>
                          <h5
                            className={`text-lg font-semibold mb-2 ${
                              activeMilestone === index
                                ? "text-white"
                                : "text-gray-400"
                            }`}
                          >
                            {milestone.title}
                          </h5>
                          <p
                            className={`text-sm ${
                              activeMilestone === index
                                ? "text-gray-300"
                                : "text-gray-500"
                            }`}
                          >
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-24">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-clip-text text-black bg-gradient-to-r from-blue-400 to-purple-500 relative"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Products & Clients
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#34B3AA]"></span>
        </motion.h2>

        {/* Products Section */}
        <motion.div
          className="w-full py-12 overflow-hidden"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-[#34B3AA]">
              Our Products
            </h3>
          </div>

          <div className="relative">
            {/* Gradient masks */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

            <motion.div
              className="flex gap-6 py-2"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...products, ...products].map((product, i) => (
                <motion.div
                  key={`${i}-${product.name}`}
                  className="flex-shrink-0 w-[400px] bg-[#34B3AA] backdrop-blur-md p-6 rounded-2xl border border-[#34B3AA] shadow-lg hover:shadow-xl transition-shadow duration-300"
                  custom={i % products.length}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={product.iconImg}
                      alt={product.name}
                      className={`h-12 w-auto object-contain max-w-[120px] ${
                        product.name === "LPG Software"
                          ? "bg-white p-2 rounded-lg"
                          : ""
                      }`}
                    />
                    <h4 className="text-xl font-bold text-white">
                      {product.name}
                    </h4>
                  </div>
                  <p className="text-white leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white hover:text-blue-100 font-semibold transition-colors duration-200 group"
                  >
                    Learn More
                    <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Clients Section */}
        <motion.div
          className="w-full overflow-hidden mb-16 px-4 py-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#34B3AA]">
            Our Happy Clients
          </h3>
          <p className="max-w-3xl mx-auto text-center text-gray-600 mb-10">
            At YoungMinds Technology Solutions, we believe that our success is
            defined by our client&apos;s satisfaction. We proudly serve a
            diverse range of clients across industries by offering tailored
            software development solutions that generate real value.
          </p>

          <motion.div
            className="grid gap-8 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"
            variants={fadeInUp}
          >
            {clients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="bg-[#34B3AA] p-6 rounded-2xl border border-[#34B3AA] shadow-xl hover:shadow-2xl transition-shadow duration-300"
                variants={scaleIn}
                whileHover={{ y: -8 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white rounded-full p-2 shadow-md flex items-center justify-center mb-4">
                    <img
                      src={client.icon}
                      alt={client.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    {client.name}
                  </h4>
                  <p className="text-white text-sm my-2">
                    {client.description}
                  </p>
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-200 font-semibold mt-2"
                  >
                    Visit Website →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Industries Section */}
        <motion.div
          className="max-w-5xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-[#34B3AA]">
            Industries We Serve
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Education",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
              },
              {
                name: "Real-Estate",
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
              },
              {
                name: "Construction",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2  0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              },
              {
                name: "Petroleum",
                icon: "M15 8a3 3 0 10-2.097-2.144M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              },
              {
                name: "Food Industry",
                icon: "M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 2c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-8C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z",
              },
              {
                name: "Retail",
                icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
              },
            ].map((industry, i) => (
              <motion.div
                key={i}
                className="bg-[#34B3AA] backdrop-blur-md p-4 rounded-2xl border border-[#34B3AA] shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-4"
                custom={i}
                variants={scaleIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={industry.icon}
                  />
                </svg>
                <p className="text-lg font-semibold text-gray-300">
                  {industry.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="w-full mx-auto p-6 rounded-xl transition-all duration-300">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#34B3AA] tracking-wide">
            <strong>OUR ASSOCIATIONS</strong>
          </h1>
          {/* Logo Grid - Horizontal Scroll on Mobile */}
          <div className="w-full overflow-x-auto pb-4">
            <div className="flex flex-nowrap gap-6 px-2 w-max mx-auto">
              {[
                "iso",
                "msme",
                "anniversary",
                "skillindia",
                "cii",
                "nasscom",
                "tcop",
                "iete",
                "apsche",
              ].map((img, index) => (
                <img
                  key={index}
                  loading="lazy"
                  className="w-24 h-48 min-w-[80px] object-contain transform hover:scale-110 transition-transform duration-300 opacity-90 hover:opacity-100"
                  src={`https://ymtsindia.com/assets/img/landing/${img}.webp`}
                  alt={`${img} certification logo`}
                />
              ))}
              <img
                loading="lazy"
                className="w-22 h-48 object-contain transform hover:scale-105 transition-transform duration-300"
                src="data:image/jpeg;base64,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"
                alt="AICTE"
              />
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="w-full py-12 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-[#34B3AA]">
            Countries We Serve
          </h3>
        </div>

        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            className="flex gap-8 py-2"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...countries, ...countries].map((country, i) => (
              <motion.div
                key={`${i}-${country.name}`}
                className="flex-shrink-0 w-[200px] h-[160px] bg-opacity-20 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 flex flex-col items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-50 h-50 rounded-md object-cover mb-2"
                />
                <p className="text-[#34B3AA] font-semibold">{country.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

     <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden z-10">
  {/* Decorative elements */}
  <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-teal-100/20 blur-3xl"></div>
  <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-teal-100/10 blur-3xl"></div>

  <div className="max-w-6xl mx-auto relative z-10">
    {/* Section Header */}
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
        From the <span className="text-teal-600">Founder's Desk</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Words of wisdom for aspiring technologists
      </p>
    </motion.div>

    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Content (80% width) */}
      <motion.div
        className="w-full lg:w-4/5"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg duration-300 border border-gray-100">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
            <p className="text-lg font-medium text-teal-600">Dear Students,</p>
            
            <p>
              When we began in 2007, we witnessed countless students struggling—not from lack of talent, but from absence of proper guidance during their crucial final-year projects.
            </p>
            
            <div className="relative pl-6 border-l-4 border-teal-400 italic bg-teal-50/50 p-4 rounded-r-lg">
              <p>
                That's why we created <strong className="font-semibold text-teal-700">Takeoff Edu Group</strong>—to provide real project mentorship that fosters growth, not just grades.
              </p>
            </div>
            
            <p>
              This academic support evolved into <strong className="font-semibold">Young Minds Technology Solutions</strong>, a full-fledged software company. Remarkably, it all began with those very college projects many underestimate. These projects became our training ground for innovation, problem-solving, and product development.
            </p>
            
            <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
              <p className="font-medium text-teal-800">
                Every product we've built, every client served, and every student we've hired traces back to those foundational project experiences.
              </p>
            </div>
            
            <p className="text-lg font-semibold text-gray-800">
              My earnest advice: <span className="text-teal-600">Treat your academic project as your first startup</span>, not a formality. This is your launchpad—explore boldly, experiment fearlessly, and evolve continuously.
            </p>
            
            <p>
              Your professional future doesn't begin after graduation—it starts with what you build today.
            </p>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600">
                <em>
                  With faith in your potential,
                  <br />
                  <span className="font-semibold text-gray-800">— A. Vinay</span>, CEO & Founder
                </em>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Image (20% width) */}
      <motion.div
  className="w-full lg:w-[25%] flex flex-col items-center lg:items-end gap-4 lg:sticky lg:top-20 z-10"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
>
  <div className="relative w-45 h-72 sm:w-60 sm:h-80 rounded-2xl overflow-hidden shadow-lg group">
    <img
      src="https://ymtsindia.com/assets/img/vinay.png"
      alt="A. Vinay, CEO"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0"></div>
  </div>

  <div className="text-center lg:text-right">
    <h3 className="text-2xl font-bold text-gray-800">A. Vinay</h3>
    <p className="text-teal-600 font-medium">Founder & CEO</p>
    <p className="text-sm text-gray-500 mt-1 max-w-[180px]">
      Young Minds Technology Solutions
    </p>
  </div>
</motion.div>

    </div>
  </div>
</section>

      {/* Stats Section */}
      <section ref={ref} className="py-20 bg-[#34B3AA] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            {[
              { count: 30000, label: "Projects Completed" },
              { count: 1200, label: "Students Trained" },
              { count: 200, label: "Workshops Conducted" },
              { count: 300, label: "Expert Mentors" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 rounded-lg p-6 transition transform hover:-translate-y-2 backdrop-blur-sm"
              >
                <motion.div
                  className="text-4xl font-bold text-white mb-2"
                  initial={{ number: 0 }}
                  animate={{ number: stat.count }}
                  transition={{ duration: 2, delay: index * 0.2 }}
                >
                  {Math.floor(stat.count)}+
                </motion.div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block"
            >
              Our Comprehensive Services
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#34B3AA]"></span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 mt-4 max-w-2xl mx-auto"
            >
              End-to-end solutions for all your academic and research needs
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {["all", "projects", "training", "support"].map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeService === tab
                    ? "bg-[#34B3AA] text-white"
                    : "bg-transparent border-2 border-[#34B3AA] text-[#34B3AA] hover:bg-[#34B3AA] hover:text-white"
                }`}
                onClick={() => setActiveService(tab)}
              >
                {tab.charAt(0).toUpperCase() +
                  tab.slice(1).replace("all", "All Services")}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services
              .filter(
                (service) =>
                  activeService === "all" || service.category === activeService
              )
              .map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-[#34B3AA] opacity-0 group-hover:opacity-10 transition"></div>
                  <div className="relative">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#34B3AA]/10 to-[#2a8f88]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 relative inline-block"
            >
              Project Domains We Cover
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-[#34B3AA] rounded-full"></span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-gray-700 mt-4 max-w-3xl mx-auto px-2"
            >
              Discover innovative projects across engineering disciplines,
              designed to empower your career with industry-standard solutions.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all group"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={dept.bgImage}
                    alt={dept.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => (e.target.src = dept.bgImageFallback)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 text-[#34B3AA] p-3 rounded-full shadow-md">
                    {dept.icon}
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 text-center">
                    {dept.name}
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-center"
                  >
                    <button
                      onClick={() => setSelectedDepartment(dept)}
                      className="inline-flex items-center bg-[#34B3AA] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-[#2a8f88] transition-all shadow-lg"
                    >
                      Explore Now
                      <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {selectedDepartment && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedDepartment(null)}
        >
          <motion.div
            className="bg-white rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDepartment(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-[#34B3AA] text-3xl z-10 transition-colors"
            >
              <FaTimes />
            </button>
            <div className="bg-gradient-to-r from-[#34B3AA] to-[#2a8f88] p-8 rounded-t-3xl">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                {selectedDepartment.name}
              </h3>
            </div>
            <div className="p-8">
              <div className="w-full overflow-x-auto">
                <div className="flex flex-wrap sm:flex-nowrap border-b border-gray-200 mb-6 space-x-2 min-w-max sm:min-w-0">
                  {[
                    "Overview",
                    "Projects & Tools",
                    "Career Path",
                    "Latest Ideas",
                    "Resources",
                    "Trending Now",
                  ].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 text-sm sm:text-base font-semibold whitespace-nowrap rounded-t-lg transition-all ${
                        activeTab === tab
                          ? "bg-[#34B3AA] text-white"
                          : "text-gray-600 hover:text-[#34B3AA] hover:bg-gray-100"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <motion.div
                key={activeTab}
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                className="min-h-[400px]"
              >
                {activeTab === "Overview" && (
                  <div>
                    <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                      About the Department
                    </h4>
                    <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                      {selectedDepartment.description}
                    </p>
                    <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                      Gallery
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {selectedDepartment.galleryImages.map((image, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="relative overflow-hidden rounded-xl shadow-lg"
                        >
                          <img
                            src={image.src}
                            alt={image.caption}
                            className="w-full h-56 object-cover transition-transform duration-300"
                            loading="lazy"
                            onError={(e) => (e.target.src = image.fallback)}
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-sm p-3 text-center">
                            {image.caption}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "Projects & Tools" && (
                  <div>
                    <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                      Key Projects
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                      {selectedDepartment.keyProjects.map((project, index) => (
                        <li key={index} className="text-base">
                          {project}
                        </li>
                      ))}
                    </ul>
                    {selectedDepartment.projects && (
                      <>
                        <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                          AI Projects
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                          {selectedDepartment.projects.AI.map(
                            (project, index) => (
                              <li key={index} className="text-base">
                                {project}
                              </li>
                            )
                          )}
                        </ul>
                        <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                          Application Projects
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                          {selectedDepartment.projects.Application.map(
                            (project, index) => (
                              <li key={index} className="text-base">
                                {project}
                              </li>
                            )
                          )}
                        </ul>
                      </>
                    )}
                    <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                      Tools & Technologies
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {selectedDepartment.toolsUsed.map((tool, index) => (
                        <motion.a
                          key={index}
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center bg-[#34B3AA]/10 p-4 rounded-xl shadow-sm hover:shadow-md transition"
                        >
                          <img
                            src={tool.logo}
                            alt={tool.name}
                            className="w-10 h-10 mr-3 object-contain"
                            loading="lazy"
                            onError={(e) =>
                              (e.target.src =
                                "https://via.placeholder.com/40x40?text=Logo")
                            }
                          />
                          <span className="text-gray-800 font-medium">
                            {tool.name}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "Career Path" && (
                  <div>
                    {selectedDepartment.jobs && (
                      <>
                        <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                          Career Opportunities
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                          {selectedDepartment.jobs.map((job, index) => (
                            <li key={index} className="text-base">
                              {job}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    {selectedDepartment.learningOutcomes && (
                      <>
                        <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                          What You'll Learn
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                          {selectedDepartment.learningOutcomes.map(
                            (outcome, index) => (
                              <li key={index} className="text-base">
                                {outcome}
                              </li>
                            )
                          )}
                        </ul>
                      </>
                    )}
                    <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                      Industry Applications
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                      {selectedDepartment.industryApplications.map(
                        (app, index) => (
                          <li key={index} className="text-base">
                            {app}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {activeTab === "Latest Ideas" && (
                  <div>
                    <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                      Latest Project Ideas
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedDepartment.latestProjects.map(
                        (project, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-gray-50 rounded-xl shadow-lg overflow-hidden"
                          >
                            <div className="relative h-48 overflow-hidden">
                              {project.media.type === "video" ? (
                                <iframe
                                  src={project.media.src}
                                  title={project.title}
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                  className="w-full h-full object-cover"
                                  onError={(e) =>
                                    (e.target.src = project.media.fallback)
                                  }
                                ></iframe>
                              ) : (
                                <img
                                  src={project.media.src}
                                  alt={project.title}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                  loading="lazy"
                                  onError={(e) =>
                                    (e.target.src = project.media.fallback)
                                  }
                                />
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            <div className="p-6">
                              <h3 className="text-lg font-bold text-gray-900 mb-2">
                                {project.title}
                              </h3>
                              <p className="text-gray-700 mb-4 text-sm">
                                {project.description}
                              </p>
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center bg-[#34B3AA] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#2a8f88] transition shadow-md group"
                                >
                                  Learn More
                                  <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                                </a>
                              </motion.div>
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {activeTab === "Resources" && (
                  <div>
                    <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                      Guidance Video
                    </h4>
                    <div className="relative mb-6">
                      <iframe
                        src="https://www.youtube.com/embed/bfMjnXcoJsg?autoplay=1&mute=1&controls=1"
                        title="Project Guidance"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-80 rounded-xl shadow-lg"
                        onError={(e) =>
                          (e.target.src =
                            "https://via.placeholder.com/2070x1380?text=Video+Not+Found")
                        }
                      ></iframe>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Watch our expert-guided video to learn how to choose,
                      plan, and execute your final year project effectively.
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a
                        href="https://takeoffprojects.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-[#34B3AA] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#2a8f88] transition shadow-lg group"
                      >
                        Get Started
                        <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                      </a>
                    </motion.div>
                  </div>
                )}

                {activeTab === "Trending Now" && (
                  <div>
                    <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                      Trending Now
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                      {selectedDepartment?.LatestProjects?.map(
                        (project, index) => (
                          <li key={index} className="text-base">
                            {project}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block"
            >
              Training And Placement
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-2 left-0 w-full h-1 bg-[#34B3AA] origin-left"
              />
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 mt-4 max-w-2xl mx-auto"
            >
              Industry-relevant skill development programs with hands-on
              project-based learning
            </motion.p>
          </div>

          {/* Marquee Section */}
          <div className="mb-12 overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[
                {
                  name: "Java Full Stack",
                  icon: <FaJava className="text-3xl text-[#34B3AA]" />,
                },
                {
                  name: "Python Full Stack",
                  icon: <FaPython className="text-3xl text-[#34B3AA]" />,
                },
                {
                  name: "Java Programming",
                  icon: <FaJava className="text-3xl text-[#34B3AA]" />,
                },
                {
                  name: "Python Programming",
                  icon: <FaPython className="text-3xl text-[#34B3AA]" />,
                },
                {
                  name: "C Programming",
                  icon: <FaCode className="text-3xl text-[#34B3AA]" />,
                },
                {
                  name: "C++ Programming",
                  icon: <FaCode className="text-3xl text-[#34B3AA]" />,
                },
                {
                  name: "Data Structures & Algorithms",
                  icon: (
                    <FaProjectDiagram className="text-3xl text-[#34B3AA]" />
                  ),
                },
                {
                  name: "Tableau",
                  icon: <FaChartBar className="text-3xl text-[#34B3AA]" />,
                },
                {
                  name: "Power BI",
                  icon: <FaChartLine className="text-3xl text-[#34B3AA]" />,
                },
                {
                  name: "Data Science",
                  icon: <FaDatabase className="text-3xl text-[#34B3AA]" />,
                },
                {
                  name: "Data Analytics",
                  icon: <FaChartPie className="text-3xl text-[#34B3AA]" />,
                },
                {
                  name: "SQL",
                  icon: <FaDatabase className="text-3xl text-[#34B3AA]" />,
                },
                {
                  name: "MS Office",
                  icon: <FaFileWord className="text-3xl text-[#34B3AA]" />,
                },
                {
                  name: "MS Word",
                  icon: <FaFileAlt className="text-3xl text-[#34B3AA]" />,
                },
              ].map((course, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-full"
                >
                  {course.icon}
                  <span className="font-medium text-gray-700">
                    {course.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Courses Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {courses.map((course, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={course.bgImage}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center p-2">
                      <img
                        src={course.logo}
                        alt={course.title}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg";
                        }}
                      />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#34B3AA] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {course.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {course.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-gray-600 text-sm">
                      <span>
                        <FaClock className="mr-1 inline" />
                        {course.duration}
                      </span>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <button
                        onClick={() => {
                          setSelectedCourse(course);
                          setIsCourseModalOpen(true);
                        }}
                        className="bg-[#34B3AA] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#2a8f88] transition shadow-md"
                      >
                        View Details
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* Course Details Modal */}
          {isCourseModalOpen && selectedCourse && (
            <motion.div
              className="fixed inset-0 backdrop-blur-md bg-black/70 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsCourseModalOpen(false)}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setIsCourseModalOpen(false)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-[#34B3AA] text-2xl transition-colors z-10"
                >
                  <FaTimes />
                </button>

                <div className="bg-gradient-to-r from-[#34B3AA] to-[#2a8f88] p-6 rounded-t-2xl">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                    {selectedCourse.title} Outline
                  </h3>
                  <p className="text-white/80 mt-2">
                    Duration: {selectedCourse.duration} | Level:{" "}
                    {selectedCourse.level}
                  </p>
                </div>

                <div className="p-6">
                  {selectedCourse.subCourses
                    ? selectedCourse.subCourses.map((sub, subIdx) => (
                        <div key={subIdx} className="mb-8">
                          <h4 className="text-xl font-bold text-[#2a8f88] mb-4">
                            {sub.title} ({sub.level})
                          </h4>
                          {sub.outline.map((module, modIdx) => (
                            <div key={modIdx} className="mb-5">
                              <h5 className="text-lg font-semibold text-gray-900 mb-2">
                                {module.module}
                              </h5>
                              <ul className="list-disc list-inside text-gray-700 space-y-2">
                                {module.topics.map((topic, topicIdx) => (
                                  <li key={topicIdx} className="text-sm">
                                    {typeof topic === "string" ? (
                                      topic
                                    ) : (
                                      <div>
                                        <span className="font-medium">
                                          {topic.subheading}
                                        </span>
                                        <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                                          {topic.items.map((item, i) => (
                                            <li key={i} className="text-sm">
                                              {item}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ))
                    : selectedCourse.outline.map((module, index) => (
                        <div key={index} className="mb-6">
                          <h4 className="text-xl font-semibold text-gray-900 mb-3">
                            {module.module}
                          </h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-2">
                            {module.topics.map((topic, idx) => (
                              <li key={idx} className="text-sm">
                                {typeof topic === "string" ? (
                                  topic
                                ) : (
                                  <div>
                                    <span className="font-medium">
                                      {topic.subheading}
                                    </span>
                                    <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                                      {topic.items.map((item, i) => (
                                        <li key={i} className="text-sm">
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                </div>

                <div className="p-6 border-t border-gray-200 text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={selectedCourse.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-[#34B3AA] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#2a8f88] transition shadow-lg group"
                    >
                      Enroll Now
                      <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://takeoffupskill.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#34B3AA] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2a8f88] transition shadow-lg group"
            >
              View All Courses{" "}
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#34B3AA] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-white"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-white"></div>
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold relative inline-block"
            >
              Success Stories
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-2 left-0 w-full h-1 bg-white origin-left"
              />
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-100 mt-4 max-w-2xl mx-auto"
            >
              What our students say about their Takeoff Projects experience
            </motion.p>
          </div>

          {/* Marquee Section */}
          <motion.div
            className="mb-12 overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm py-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex gap-4"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full"
                >
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <span className="font-medium text-white">
                    {testimonial.reviewer}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Testimonials Swiper */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                el: ".swiper-pagination",
                bulletClass: "swiper-bullet",
                bulletActiveClass: "swiper-bullet-active",
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="py-8"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    className="bg-white/10 rounded-xl p-6 h-full transition-all backdrop-blur-sm hover:backdrop-blur-md border border-white/10 hover:border-white/20 flex flex-col"
                  >
                    <div className="flex-grow">
                      <div className="relative mb-6">
                        <FaQuoteLeft className="text-4xl text-white/20 absolute -top-2 -left-2" />
                        <p className="text-gray-100 italic pl-6">
                          "{testimonial.comment}"
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-4">
                        <div>
                          <h4 className="font-bold text-white">
                            {testimonial.reviewer}
                          </h4>
                          <p className="text-sm text-gray-200">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex justify-end mb-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className="text-yellow-400 text-sm"
                            />
                          ))}
                        </div>
                        <p className="text-xs text-white/80">
                          {testimonial.date}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination !bottom-0 !relative mt-6"></div>
          </motion.div>

          {/* View More Button */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center px-8 py-3 border border-white/30 text-base font-medium rounded-full text-white bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-white/10 backdrop-blur-sm"
            >
              View All Reviews
            </button>
          </motion.div>
        </div>

        {/* Image Gallery Modal */}
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 backdrop-blur-md bg-white/5 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-6 right-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:text-[#34B3AA] transition duration-300 backdrop-blur rounded-full p-2 shadow-md"
              >
                <FaTimes className="w-7 h-7" />
              </button>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 max-w-6xl w-full">
              {/* Main Image Display */}
              <div className="relative mb-6">
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-[#34B3AA] transition-colors z-10"
                >
                  <FaChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex justify-center items-center max-h-[70vh]">
                  <img
                    src={imagePaths[selectedImageIndex]}
                    alt={`Review ${selectedImageIndex + 1}`}
                    className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-xl"
                  />
                </div>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-[#34B3AA] transition-colors z-10"
                >
                  <FaChevronRight className="w-6 h-6" />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImageIndex + 1} / {imagePaths.length}
                </div>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 max-w-5xl mx-auto">
                {imagePaths.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`overflow-hidden rounded-lg transition-all duration-200 ${
                      selectedImageIndex === index
                        ? "ring-4 ring-[#34B3AA] transform scale-105"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Review thumbnail ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-b from-[#1a1c2c] via-[#2c2f45] to-[#1a1c2c] text-white relative">
        {/* Background city skyline image */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img
            src="https://ymtsindia.com/assets/img/home-city-white.gif"
            alt="City Skyline Watermark"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Decorative glowing blobs */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#34B3AA] rounded-full blur-3xl mix-blend-overlay"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl mix-blend-overlay"></div>
        </div>
        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo + About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <img
                src="https://takeoffprojects.com/assets/images/logotakeoff3new1.png"
                alt="Takeoff Projects"
                className="h-16 hover:scale-105 transition-transform duration-300"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering students with cutting-edge project development,
                internship training, and technical mentorship to bridge the gap
                between academia and industry.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  { name: "Home", path: "/", icon: <FaHome /> },
                  {
                    name: "Services",
                    path: "https://takeoffprojects.com/",
                    icon: <FaServer />,
                  },
                  {
                    name: "Projects",
                    path: "https://takeoffprojects.com/",
                    icon: <FaProjectDiagram />,
                  },
                  {
                    name: "Courses",
                    path: "https://takeoffupskill.com/",
                    icon: <FaGraduationCap />,
                  },
                  {
                    name: "Contact",
                    path: "https://takeoffprojects.com/",
                    icon: <FaHeadset />,
                  },
                ].map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.path}
                      className="flex items-center hover:text-white transition"
                    >
                      <span className="w-8 h-8 mr-3 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gradient-to-r from-[#34B3AA] to-purple-500 transition-all duration-300">
                        {link.icon}
                      </span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-gradient-to-r from-[#34B3AA] to-teal-500 rounded-full mr-3 flex justify-center items-center mt-1">
                    <FaMapMarkerAlt />
                  </span>
                  1st Floor, 1-5-558, 2nd Street, Balaji Colony,
                  <br />
                  Tirupati, Andhra Pradesh - 517502
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-gradient-to-r from-[#34B3AA] to-teal-500 rounded-full mr-3 flex justify-center items-center mt-1">
                    <FaPhoneAlt />
                  </span>
                  <div className="space-y-1">
                    <a href="tel:+919030333433" className="hover:underline">
                      +91 903 033 3433
                    </a>
                    <br />
                    <a href="tel:+919966062884" className="hover:underline">
                      +91 996 606 2884
                    </a>
                    <br />
                    <a href="tel:+919393939042" className="hover:underline">
                      +91 939 393 9042
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-gradient-to-r from-[#34B3AA] to-teal-500 rounded-full mr-3 flex justify-center items-center mt-1">
                    <FaEnvelope />
                  </span>
                  <a
                    href="mailto:info@takeoffprojects.com"
                    className="hover:underline"
                  >
                    info@takeoffprojects.com
                  </a>
                </li>
                <li className="flex items-start mt-6">
                  <span className="w-8 h-8 bg-gradient-to-r from-[#34B3AA] to-teal-500 rounded-full mr-3 flex justify-center items-center mt-1">
                    <FaClock />
                  </span>
                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p>Mon–Sat: 10:00 AM – 07:00 PM</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">
                Connect With Us
              </h3>
              <p className="text-sm text-gray-300 mb-6">
                Follow us on social media to stay updated with our latest
                projects, courses, and offers.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  {
                    icon: <FaFacebookF />,
                    link: "https://facebook.com/takeoffedugroup",
                    color: "bg-blue-600",
                  },
                  {
                    icon: <FaTwitter />,
                    link: "https://x.com/Takeoffedugroup",
                    color: "bg-blue-400",
                  },
                  {
                    icon: <FaLinkedinIn />,
                    link: "https://linkedin.com/company/takeoffedugroup",
                    color: "bg-blue-700",
                  },
                  {
                    icon: <FaInstagram />,
                    link: "https://instagram.com/takeoffedugroup",
                    color: "bg-pink-600",
                  },
                  {
                    icon: <FaYoutube />,
                    link: "https://youtube.com/channel/UCm1FWCvpNmcnv991EHk5JNw",
                    color: "bg-red-600",
                  },
                  {
                    icon: <FaWhatsapp />,
                    link: "https://wa.me/919030333433",
                    color: "bg-green-500",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full text-white ${social.color} hover:opacity-90 transition`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bg-[#12131a] border-t border-gray-700 py-6 relative z-10">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Takeoff Projects. All rights
              reserved.
            </p>
            <div className="flex gap-4 mt-3 md:mt-0">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Sitemap",
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-xs text-gray-400 hover:text-[#34B3AA] transition hover:underline"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TakeoffPortfolio;
