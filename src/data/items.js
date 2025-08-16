const items = [
  {
    image: "/myphoto.jpg",
    link: "https://google.com/",
    title: "Item 1",
    description: "This is pretty cool, right?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center&auto=format&q=80",
    link: "https://google.com/",
    title: "Item 2",
    description: "This is pretty cool, right?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=500&fit=crop&crop=center&auto=format&q=80",
    link: "https://google.com/",
    title: "Item 3",
    description: "This is pretty cool, right?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=600&h=600&fit=crop&crop=center&auto=format&q=80",
    link: "https://google.com/",
    title: "Item 4",
    description: "This is pretty cool, right?",
  },
];

const projectsData = [
  {
    id: 1,
    number: "01",
    name: " Food Factory – Full-Stack Food Delivery App",
    description:
     " A responsive full-stack food delivery application where users can browse food items, manage their cart, place orders, and make secure payments via Stripe. Features include user authentication (JWT), order tracking, admin dashboard for managing items and orders, image upload, and real-time status updates.",
    technicalDetails:
      "React.js, React Router, Context API, Axios, CSS3, Vite, React Toastify, Node.js, Express.js, MongoDB, Mongoose, JWT, Multer, Stripe API.",
    mainImage: "/project 1.png",
    link: "https://github.com/sushil-thakur/Foof-del",
    type: "Web Application",
    moreShots: [],
  },
  {
    id: 2,
    number: "02",
    name: "EarthSight",
    description:
      "EarthSight is a modern React web application designed to deliver a visually captivating and immersive user experience. Featuring smooth GSAP-powered animations, an interactive image slider, and a responsive layout, the project focuses on combining aesthetics with performance. Ideal for showcasing visual content in a sleek, dynamic environment.",
    technicalDetails:
      "React 19.1.0, Vite 7.0.0, Tailwind CSS 3.4.17, GSAP 3.13.0, React Icons 5.5.0, Clsx, React-use, ESLint",
    mainImage: "/project 2.png",
    link: "https://github.com/sushil-thakur/environment-frontend-using-GSAP",
    type: "web Application",
    moreShots: [],
  },
  {
    id: 3,
    number: "06",
    name: "Mental Health Awarness",
    description:
      "A responsive and user-focused website dedicated to promoting mental health awareness, breaking stigma, and connecting individuals with reliable support resources. The platform includes sections on mental health education, personal blogs, professional guidance, and a chatbot for instant help—designed to create a safe and empathetic digital space.",
    technicalDetails:
      "HTML5, CSS3, JavaScript, Chatbot Integration (custom scripts), Responsive Design, Multimedia Support (Images & Videos)",
    mainImage: "/project 3.png",
    link: "https://github.com/sushil-thakur/mental-health",
    type: "Web Application",
    moreShots: [],
  },
  {
    id: 4,
    number: "04",
    name: " Employee Task Management System (ETMS)",
    description:
      "The Employee Task Management System (ETMS) is a web-based platform that streamlines employee-task coordination and system administration. Admins can manage employee records, assign and edit tasks, monitor progress, and handle salary details. Employees can log in to track assigned tasks, view notifications, and update task statuses. The system includes secure authentication features, password recovery, and a structured admin/employee panel for effective role-based interaction.",
    technicalDetails:
      "PHP, MySQL, HTML5, CSS3, JavaScript, Bootstrap, SQL (db.sql), PDO for secure DB operations, Session & Cookie management, AJAX, JSON, and server-side validation.",
    mainImage: "/project 6.png",
    link: "https://github.com/sushil-thakur/Employee-Management-System",
    type: "Web Application",
    moreShots: [],
  },
  {
    id: 5,
    number: "05",
    name: "Atoms Gaming Homepage ",
    description:
      "A modern single-page application built with React 19 and Vite 7, designed to display gaming-related featured content, recommendations, and latest news in an engaging, responsive layout. Styled with Tailwind CSS v4 for fast, utility-first design, and structured with reusable, modular components.",
    technicalDetails:
      "React 19, Tailwind Css, React Icon.",
    mainImage: "/project 5.png",
    link: "https://github.com/sushil-thakur/Atom-Gaming",
    type: "Web Application",
    moreShots: [],
  },
  {
    id: 6,
    number: "06",
    name: "Legal Buddy",
    description:
      "The Legal Notice Assistant is a privacy-first web app that helps users understand legal or court notices. Users can upload an image or PDF, and the system extracts the text using OCR before passing it to an AI chatbot for explanation. The assistant guides users on what the notice means, what actions to take, and what to avoid, while also allowing follow-up questions through a simple chat interface. Built as an MVP using React.js, Node.js, Express, OCR.space API, Grok API, and Multer, the project focuses on real-time processing without storing user data.",
    technicalDetails:
      "React, OCR API, GROK API",
    mainImage: "/RNN.webp",
    link: "https://github.com/sushil-thakur/Legal-Buddy",
    type: "Web Application",
    moreShots: [],
  },
  // {
  //   id: 7,
  //   number: "07",
  //   name: "English to French Translation - seq2seq LSTM",
  //   description:
  //     "A sequence-to-sequence model using LSTM networks for English to French translation. Implements encoder-decoder architecture with attention mechanisms for neural machine translation.",
  //   technicalDetails:
  //     "Seq2seq architecture, LSTM encoder-decoder, attention mechanism, TensorFlow/Keras, machine translation, multilingual NLP.",
  //   mainImage: "/projects/translation.jpg",
  //   link: "https://github.com/anuz505/English-to-French-Translation-seq2seq-LSTM",
  //   type: "Jupyter Notebook",
  //   moreShots: [],
  // },
];

export { items, projectsData };
