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
    name: "AI Posture Coach for Powerlifting",
    description:
      "A comprehensive real-time posture analysis application for powerlifting exercises using computer vision and machine learning. The system provides live feedback on exercise form for Bench Press, Squat, and Deadlift movements with both webcam analysis and video upload capabilities.",
    technicalDetails:
      "Built with Python, Streamlit, MediaPipe, OpenCV, scikit-learn, and PyTorch. Features real-time pose estimation, exercise classification models (benchpress.pkl, squat.pkl, deadlift.pkl), audio feedback system using pygame, and advanced angle calculation algorithms.",
    mainImage: "/LiftingAss.png",
    link: "https://github.com/prabinb50/lifting_assisstant",
    type: "Streamlit Application",
    moreShots: [],
  },
  {
    id: 2,
    number: "02",
    name: "Deep Learning Hackathon - Image Segmentation for Autonomous Vehicles",
    description:
      "This repository contains the code for the winning model of the Deep Learning Hackathon focused on image segmentation for autonomous vehicles using supervised learning techniques. Our model leverages advanced neural network architectures to achieve state-of-the-art performance.",
    technicalDetails:
      "Built with Python, TensorFlow/PyTorch, implemented U-Net and DeepLab architectures, achieved 95%+ IoU score on validation dataset.",
    mainImage: "/projects/image-segmentation.jpg",
    link: "https://github.com/anuz505/deep-learning-hackathon",
    type: "Jupyter Notebook",
    moreShots: [],
  },
  {
    id: 3,
    number: "03",
    name: "Receipt Reader",
    description:
      "This repository contains a simple receipt reader that utilizes tesseract to extract text data and gemini api to generate the json data. A practical application for digitizing and processing receipt information automatically.",
    technicalDetails:
      "Python, Tesseract OCR, Gemini API integration, JSON data processing, image preprocessing with OpenCV.",
    mainImage: "/projects/receipt-reader.jpg",
    link: "https://github.com/anuz505/Reciept-Reader",
    type: "Jupyter Notebook",
    moreShots: [],
  },
  {
    id: 4,
    number: "04",
    name: "Micrograd",
    description:
      "Andrej Karpathy's micrograd from scratch. This helped me understand Neural Networks better than ever before. A minimal implementation of automatic differentiation and neural network training.",
    technicalDetails:
      "Pure Python implementation, automatic differentiation engine, backpropagation from scratch, educational neural network framework.",
    mainImage: "/projects/micrograd.jpg",
    link: "https://github.com/anuz505/micrograd",
    type: "Jupyter Notebook",
    moreShots: [],
  },
  {
    id: 5,
    number: "05",
    name: "Sentence Completion using Word2Vec and LSTM",
    description:
      "I built this project to understand sequence-to-one learning, how to use pre-trained embeddings in NLP tasks, and how to train LSTM networks for language modeling. Implements advanced NLP techniques for text completion.",
    technicalDetails:
      "Word2Vec embeddings, LSTM neural networks, TensorFlow/Keras, sequence modeling, natural language processing.",
    mainImage: "/Sentence_completion.png",
    link: "https://github.com/anuz505/Sentence-Completion-using-Word2Vec-and-LSTM",
    type: "Jupyter Notebook",
    moreShots: [],
  },
  {
    id: 6,
    number: "06",
    name: "RNN from Scratch",
    description:
      "Implementation of Recurrent Neural Networks from scratch to understand the fundamentals of sequence modeling and temporal data processing. Built without using high-level frameworks.",
    technicalDetails:
      "Pure Python/NumPy implementation, vanilla RNN architecture, gradient computation, sequence processing, educational implementation.",
    mainImage: "/RNN.webp",
    link: "https://github.com/anuz505/RNN-from-scratch",
    type: "Jupyter Notebook",
    moreShots: [],
  },
  {
    id: 7,
    number: "07",
    name: "English to French Translation - seq2seq LSTM",
    description:
      "A sequence-to-sequence model using LSTM networks for English to French translation. Implements encoder-decoder architecture with attention mechanisms for neural machine translation.",
    technicalDetails:
      "Seq2seq architecture, LSTM encoder-decoder, attention mechanism, TensorFlow/Keras, machine translation, multilingual NLP.",
    mainImage: "/projects/translation.jpg",
    link: "https://github.com/anuz505/English-to-French-Translation-seq2seq-LSTM",
    type: "Jupyter Notebook",
    moreShots: [],
  },
];

export { items, projectsData };
