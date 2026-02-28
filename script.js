(function () {
  'use strict';

  // ----- Data -----
  const typewriterPhrases = ['AI/ML Engineer', 'GenAI Engineer', 'NLP Engineer', 'Computer Vision\nEngineer', 'AI/ML Researcher', 'Data Scientist', 'AI/ML Enthusiast'];
  const technicalSkills = [
    { name: 'Python', percentage: 95 },
    { name: 'Machine Learning', percentage: 90 },
    { name: 'Generative AI', percentage: 88 },
    { name: 'Deep Learning', percentage: 86 },
    { name: 'TensorFlow/PyTorch', percentage: 85 },
    { name: 'LangChain/LangGraph', percentage: 82 },
    { name: 'Natural Language Processing', percentage: 80 }
  ];
  const cloudSkills = [
    { name: 'AWS', percentage: 82 },
    { name: 'Azure', percentage: 78 },
    { name: 'Docker', percentage: 75 },
    { name: 'Git/GitHub', percentage: 92 },
    { name: 'Data Analysis', percentage: 87 }
  ];
  const projects = [
    { title: 'Stress Therapy with Music and Images device', description: 'A research project at NUS focusing on music and images for stress therapy.', image: 'public/img/portfolio/stress-therapy.jpg', tags: ['NLP', 'Gen AI', 'Transformers'], github: 'https://github.com/Cyriloo7/Stress-Therapy-using-Music-and-Images', color: '#ff6b6b' },
    { title: 'Gen AI Assistant', description: 'Developed a Retrieval-Augmented Generation (RAG) model for QA bots and an interactive interface.', image: 'public/img/portfolio/gen-ai-assignment.jpg', tags: ['NLP', 'Gen AI', 'Transformers'], github: 'https://github.com/Cyriloo7/Gen-AI-Engineer-Machine-Learning-Engineer-Assignment', color: '#51cf66' },
    { title: 'Deepfake Detection System', description: 'Advanced neural network model for detecting manipulated videos using computer vision techniques.', image: 'public/img/portfolio/deepfake-detection.jpg', tags: ['Python', 'TensorFlow', 'Computer Vision'], github: 'https://github.com/Cyriloo7/DeepFake-Detection-Using-Vision-and-Wav2Vec2-Transformer-Models', color: '#339af0' },
    { title: 'Collision Detection AI', description: 'Real-time collision detection system for autonomous vehicles using deep learning algorithms.', image: 'public/img/portfolio/collision-detection.jpg', tags: ['PyTorch', 'OpenCV', 'Real-time AI'], github: 'https://github.com/Cyriloo7/Collision-Detection-Using-Yolov7', color: '#fcc419' },
    { title: 'Fake News Analyzer', description: 'Advanced natural language processing model for sentiment analysis with 95% accuracy.', image: 'public/img/portfolio/fake-news-classifier.jpg', tags: ['NLP', 'BERT', 'Transformers'], github: 'https://github.com/gokul-h/fake-news-detector', color: '#845ef7' },
    { title: 'First MLOps Project', description: 'Implemented CI/CD pipelines for machine learning models, ensuring smooth deployment and monitoring.', image: 'public/img/portfolio/llmops-project.jpg', tags: ['MLOps', 'CI/CD', 'Docker', 'git', 'DVC', 'mlruns'], github: 'https://github.com/Cyriloo7/First_MLOps_Project', color: '#ff922b' },
    { title: 'Image Similarity Finder', description: 'Python scripts using a pretrained Vision Transformer (ViT) to extract features and find similar images.', image: 'public/img/portfolio/llmops-project.jpg', tags: ['Python', 'AI', 'ML', 'git', 'Clustering'], github: 'https://github.com/Cyriloo7/Image-Similarity.git', color: '#20c997' }
  ];
  const experiences = [
    {
      title: 'AIML Engineer',
      company: 'Webfolks, Mannarkkad, India',
      period: 'Jan 1 2026 - Present',
      description: 'Building and deploying AI/ML solutions end-to-end: dataset curation and validation, model training and evaluation, integration into internal annotation and review workflows, and lightweight automation to improve speed, quality, and consistency.',
      icon: 'fas fa-brain',
      badge: 'AI/ML Engineering',
      attachments: [
        { title: 'Promotion', file: 'public/img/resume/promotion-webfolks.jpeg' }
      ]
    },
    {
      title: 'Junior Python Developer',
      company: 'Webfolks, Mannarkkad, India',
      period: 'Feb 2025 - Dec 2025',
      description: 'Developed pipelines to preprocess, validate, and transform large-scale AI/ML datasets for object detection, segmentation, and keypoint labeling; built automation tools and lightweight AI models to accelerate annotation review and correction; integrated custom pretrained models into CVAT and Label-Studio; and deployed Dockerized utilities to boost labeling speed, accuracy, and consistency.',
      icon: 'fas fa-code',
      badge: 'Development Excellence',
      attachments: [
        { title: 'Junior Python Developer', file: 'public/img/resume/junior python developer.jpg' }
      ]
    },
    {
      title: 'Research Intern',
      company: 'National University of Singapore (NUS), Singapore',
      period: 'Feb 2024 - Aug 2024',
      description: 'Developed VR therapy using music and immersive environments, enhancing stress reduction by 20%. Achieved a 30% relaxation rate for patients using AI-driven approaches with multimodal sensor data.',
      icon: 'fas fa-flask',
      badge: 'Research & Innovation',
      attachments: [
        { title: 'NUS', file: 'public/img/resume/nus.jpg' }
      ]
    },
    {
      title: 'Big Data Analysis Using Deep Learning Intern',
      company: 'National University of Singapore (NUS), Singapore',
      period: 'Dec 2023 - Jan 2024',
      description: 'Utilized T5-small and Pegasus models to generate legal verdicts efficiently. Focused on data processing, feature engineering, and machine learning algorithms.',
      icon: 'fas fa-database',
      badge: 'Research & Innovation',
      attachments: [
        { title: 'Internship', file: 'public/img/resume/Big Data Analysis using Deep Learning - nus.jpg' }
      ]
    },
    {
      title: 'Artificial Intelligence Extern',
      company: 'Smart Bridge, Chennai, India',
      period: 'Feb 2024 - Aug 2024',
      description: 'Built a ship classification model using VGG16 with transfer learning techniques. Achieved 78.1% accuracy on the training set and 76.67% on the test set.',
      icon: 'fas fa-briefcase',
      badge: 'Professional Experience'
    }
  ];
  const achievements = [
    { icon: 'fas fa-trophy', title: 'Best Performer Award â€” Webfolks', description: 'Recognized as Best Performer at Webfolks for strong delivery, consistency, and impact in day-to-day development and automation work.', media: 'public/img/achievements/best-performer-award-webfolks.jpeg' },
    { icon: 'fas fa-medal', title: 'Top Performer in AI Solutioning', description: 'Recognized as one of the top 6-15 performers out of 800+ applicants in the AI Solutioning assignment with ResoluteAI Software Private Limited.', media: 'public/img/achievements/ResoluteAI-Software-Private-Limitedachievement-1.jpg' },
    { icon: 'fas fa-code-branch', title: 'Open Source Contributor', description: 'Active contributor to machine learning projects on GitHub with multiple repositories and collaborations.', link: 'https://github.com/Cyriloo7?tab=repositories' },
    { icon: 'fas fa-graduation-cap', title: 'B.Tech Graduation', description: 'Proud to graduate from Vellore Institute of Technology (VIT) with a B.Tech in Computer Science and Engineering.', media: 'public/img/achievements/btech-graduation-achievement-2.jpg' },
    { icon: 'fas fa-users', title: 'AIML Member, Bionary Club, VIT Chennai', description: 'Contributed to AI/ML initiatives at VIT\'s Bionary Club, collaborating with peers on innovative projects and workshops.', media: 'public/img/achievements/aiml-bionary-club-achievement.jpg' }
  ];
  const certifications = [
    { icon: 'fas fa-cogs', title: 'MLOps Foundations', date: 'Jul 2024', issuer: 'iNeuron.ai', description: 'Gained expertise in git, GitHub, Docker, CI/CD, DVC, and MLflow.', file: 'public/img/certificates/MLOps Foundations.pdf', color: '#eab308' },
    { icon: 'fas fa-brain', title: 'Generative AI with Large Language Models', date: 'May 2024', issuer: 'DeepLearning.AI, AWS', description: 'Specialized in LLM training, fine-tuning, PEFT configuration, and RLHF.', file: 'public/img/certificates/Generative AI with Large Language Models.pdf', color: '#a855f7' },
    { icon: 'fas fa-database', title: 'Big Data Analysis Using Deep Learning (NUS)', date: 'Dec 2023 â€“ Jan 2024', issuer: 'NUS', description: 'Internship â€“ Used T5-small and Pegasus models to generate legal verdicts.', file: 'public/img/certificates/Big Data Analysis using Deep Learning - nus.jpg', color: '#2dd4bf' },
    { icon: 'fab fa-aws', title: 'Big Data Analysis Using Deep Learning (AWS)', date: 'Dec 2023 â€“ Jan 2024', issuer: 'AWS', description: 'Optimized model performance by 20% using Amazon SageMaker.', file: 'public/img/certificates/Big Data Analysis using Deep Learning - aws.jpg', color: '#f97316' },
    { icon: 'fab fa-microsoft', title: 'Microsoft Azure Fundamentals', date: 'May 2023', issuer: 'Microsoft', description: 'Comprehensive understanding of cloud computing concepts.', file: 'public/img/certificates/Azure AI900 Score Report.pdf', color: '#3b82f6' },
    { icon: 'fas fa-chart-line', title: 'Data Analytics Real-World Projects in Python', date: 'Sept 2023', issuer: 'Udemy', description: 'Mastered data cleaning, manipulation, and visualization using Pandas, Seaborn, and Plotly.', file: 'public/img/certificates/Data Analytics Real-World Projects in Python.pdf', color: '#22c55e' },
    { icon: 'fab fa-google', title: 'Artificial Intelligence Powered by Google Developers', date: 'Mar 2023 â€“ Jul 2023', issuer: 'Smart Bridge', description: 'Practical experience in AI, cloud technologies, TensorFlow models, and NLP.', file: 'public/img/certificates/Artificial Intelligence Powered by Google Developers.pdf', color: '#ef4444' }
  ];

  const education = [
    {
      period: '09/2020 - 04/2024',
      location: 'Chennai, India',
      title: 'BTech in Computer Science and Engineering',
      institute: 'Vellore Institute of Technology',
      scoreLabel: 'CGPA',
      scoreValue: '7.87/10',
      media: { title: 'Graduation', file: 'public/img/resume/btech-graduation-achievement-2.jpg' }
    },
    {
      period: '2018 - 2020',
      location: 'Anakkal, Kerala',
      title: '11th to 12th',
      institute: 'St. Antony\'s public school',
      scoreLabel: 'Percentage',
      scoreValue: '90%',
      media: { title: 'School document', file: 'public/img/resume/high-school.jpg' }
    },
    {
      period: '2018',
      location: 'Sreekrishnapuram, Kerala',
      title: '10th',
      institute: 'St. Dominics convent english medium school',
      scoreLabel: 'Percentage',
      scoreValue: '88%',
      media: { title: 'School document', file: 'public/img/resume/st-dominics.jpg' }
    }
  ];

  const stats = [
    { icon: 'fas fa-award', value: certifications.length, label: 'Certifications' },
    { icon: 'fas fa-trophy', value: achievements.length, label: 'Achievements' },
    { icon: 'fab fa-github', value: 23, label: 'Repositories', link: 'https://github.com/Cyriloo7?tab=repositories' },
    { icon: 'fas fa-graduation-cap', value: 4, label: 'Years Education' }
  ];
  const PROJECTS_PER_PAGE = 6;
  const ACHIEVEMENTS_PER_PAGE = 3;
  const CERTS_PER_PAGE = 6;

  // ----- 3D Particle Text Visualizer -----
  class ParticleTextVisualizer {
    constructor(containerId, isPreloader = false, colors = { h: 0.5, s: 0.7, l: 0.4 }, particleCount = 4000, sphereRadius = 8) {
      this.container = document.getElementById(containerId);
      if (!this.container) return;

      this.isPreloader = isPreloader;
      this.particleCount = particleCount;
      this.sphereRadius = sphereRadius; // controls sphere size — hero uses 8, skills uses 4
      this.colors = colors;
      this.currentState = 'sphere';
      
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
      this.renderer.setClearColor(0x000000, 0); // Transparent background
      this.container.appendChild(this.renderer.domElement);

      this.camera.position.z = 25;
      
      this.createParticles();
      this.animate = this.animate.bind(this);
      this.animationId = requestAnimationFrame(this.animate);
      
      this.handleResize = () => {
        if (!this.container) return;
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
      };
      window.addEventListener('resize', this.handleResize);
    }

    createParticles() {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(this.particleCount * 3);
      const colors = new Float32Array(this.particleCount * 3);

      const count = this.particleCount;
      const sphericalDistribution = (i) => {
          const phi = Math.acos(-1 + (2 * i) / count);
          const theta = Math.sqrt(count * Math.PI) * phi;
          return {
              x: this.sphereRadius * Math.cos(theta) * Math.sin(phi),
              y: this.sphereRadius * Math.sin(theta) * Math.sin(phi),
              z: this.sphereRadius * Math.cos(phi)
          };
      };

      for (let i = 0; i < count; i++) {
          const point = sphericalDistribution(i);
          positions[i * 3] = point.x + (Math.random() - 0.5) * 0.5;
          positions[i * 3 + 1] = point.y + (Math.random() - 0.5) * 0.5;
          positions[i * 3 + 2] = point.z + (Math.random() - 0.5) * 0.5;

          const color = new THREE.Color();
          const depth = Math.sqrt(point.x * point.x + point.y * point.y + point.z * point.z) / this.sphereRadius;
          color.setHSL(this.colors.h + depth * 0.2, this.colors.s, this.colors.l + depth * 0.3);

          colors[i * 3] = color.r;
          colors[i * 3 + 1] = color.g;
          colors[i * 3 + 2] = color.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
          size: 0.08,
          vertexColors: true,
          blending: THREE.AdditiveBlending,
          transparent: true,
          opacity: 0.8,
          sizeAttenuation: true
      });

      if (this.particles) this.scene.remove(this.particles);
      this.particles = new THREE.Points(geometry, material);
      this.scene.add(this.particles);
    }

    createTextPoints(text) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      // Set initial font size relative to container size instead of window size
      let fontSize = this.container.clientWidth < 600 ? 50 : 90;
      if (this.isPreloader) fontSize = window.innerWidth < 768 ? 60 : 100;
      
      const padding = 20;
      let lines = text.split('\n');

      ctx.font = `bold ${fontSize}px Arial`;
      let textWidth = 0;
      lines.forEach(line => {
        const metrics = ctx.measureText(line);
        if (metrics.width > textWidth) textWidth = metrics.width;
      });

      // Dynamically auto-scale down the font size if the text is wider than 80% of the container
      while (textWidth > this.container.clientWidth * 0.8 && fontSize > 20) {
        fontSize -= 5;
        ctx.font = `bold ${fontSize}px Arial`;
        textWidth = 0;
        lines.forEach(line => {
          const metrics = ctx.measureText(line);
          if (metrics.width > textWidth) textWidth = metrics.width;
        });
      }

      const textHeight = fontSize * lines.length + (lines.length - 1) * 20; // 20px line spacing

      canvas.width = textWidth + padding * 2;
      canvas.height = textHeight + padding * 2;

      ctx.fillStyle = 'white';
      ctx.font = `bold ${fontSize}px Arial`;
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';

      // Draw multi-line text
      const startY = (canvas.height - textHeight) / 2 + (fontSize / 2);
      lines.forEach((line, index) => {
         ctx.fillText(line, canvas.width / 2, startY + (index * (fontSize + 20)));
      });

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      const points = [];
      const threshold = 128;

      let validPixelCount = 0;
      for (let i = 0; i < pixels.length; i += 4) {
          if (pixels[i] > threshold) validPixelCount++;
      }

      // Compute sample rate so we don't exceed the particle count
      const sampleRate = Math.min(0.5, this.particleCount / (validPixelCount || 1));

      for (let i = 0; i < pixels.length; i += 4) {
          if (pixels[i] > threshold) {
              const x = (i / 4) % canvas.width;
              const y = Math.floor((i / 4) / canvas.width);
              if (Math.random() < sampleRate) {
                  points.push({
                      x: (x - canvas.width / 2) / (fontSize / 10),
                      y: -(y - canvas.height / 2) / (fontSize / 10)
                  });
              }
          }
      }

      // Shuffle points so any cut-offs are distributed randomly rather than just at the bottom
      if (points.length > this.particleCount) {
          for (let i = points.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              const temp = points[i];
              points[i] = points[j];
              points[j] = temp;
          }
      }

      return points;
    }

    morphToText(text, onComplete = null) {
      if (!this.particles || this.destroyed) return;
      this.currentState = 'text';
      const textPoints = this.createTextPoints(text);
      const positions = this.particles.geometry.attributes.position.array;
      const targetPositions = new Float32Array(this.particleCount * 3);

      gsap.to(this.particles.rotation, { x: 0, y: 0, z: 0, duration: 0.5 });

      for (let i = 0; i < this.particleCount; i++) {
          if (i < textPoints.length) {
              targetPositions[i * 3] = textPoints[i].x;
              targetPositions[i * 3 + 1] = textPoints[i].y;
              targetPositions[i * 3 + 2] = 0;
          } else {
              const angle = Math.random() * Math.PI * 2;
              const radius = Math.random() * 10 + 10; // push unused outward
              targetPositions[i * 3] = Math.cos(angle) * radius;
              targetPositions[i * 3 + 1] = Math.sin(angle) * radius;
              targetPositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
          }
      }

      let completeCalled = false;
      for (let i = 0; i < positions.length; i += 3) {
          gsap.to(positions, {
              [i]: targetPositions[i],
              [i + 1]: targetPositions[i + 1],
              [i + 2]: targetPositions[i + 2],
              duration: 1.5,
              ease: "power2.inOut",
              onUpdate: () => {
                  if (this.particles) this.particles.geometry.attributes.position.needsUpdate = true;
              },
              onComplete: () => {
                  if (!completeCalled && onComplete && !this.destroyed) {
                      completeCalled = true;
                      onComplete();
                  }
              }
          });
      }
    }

    morphToCircle() {
      if (!this.particles || this.destroyed) return;
      this.currentState = 'sphere';
      const positions = this.particles.geometry.attributes.position.array;
      const targetPositions = new Float32Array(this.particleCount * 3);

      const count = this.particleCount;
      const sphericalDistribution = (i) => {
          const phi = Math.acos(-1 + (2 * i) / count);
          const theta = Math.sqrt(count * Math.PI) * phi;
          return { x: this.sphereRadius * Math.cos(theta) * Math.sin(phi), y: this.sphereRadius * Math.sin(theta) * Math.sin(phi), z: this.sphereRadius * Math.cos(phi) };
      };

      for (let i = 0; i < count; i++) {
          const point = sphericalDistribution(i);
          targetPositions[i * 3] = point.x + (Math.random() - 0.5) * 0.5;
          targetPositions[i * 3 + 1] = point.y + (Math.random() - 0.5) * 0.5;
          targetPositions[i * 3 + 2] = point.z + (Math.random() - 0.5) * 0.5;
      }

      for (let i = 0; i < positions.length; i += 3) {
          gsap.to(positions, {
              [i]: targetPositions[i],
              [i + 1]: targetPositions[i + 1],
              [i + 2]: targetPositions[i + 2],
              duration: 1.5,
              ease: "power2.inOut",
              onUpdate: () => {
                  if (this.particles) this.particles.geometry.attributes.position.needsUpdate = true;
              }
          });
      }
    }

    explodeAndFade(onComplete) {
      if (!this.particles || this.destroyed) return;
      this.currentState = 'exploded';
      const positions = this.particles.geometry.attributes.position.array;
      const targetPositions = new Float32Array(this.particleCount * 3);

      for (let i = 0; i < this.particleCount; i++) {
          const x = positions[i * 3];
          const y = positions[i * 3 + 1];
          const z = positions[i * 3 + 2];
          
          targetPositions[i * 3] = x * 3 + (Math.random() - 0.5) * 40;
          targetPositions[i * 3 + 1] = y * 3 + (Math.random() - 0.5) * 40;
          targetPositions[i * 3 + 2] = z + 50 + Math.random() * 30;
      }

      gsap.to(this.particles.material, { opacity: 0, duration: 1.5, ease: "power2.in" });

      let completeCalled = false;
      for (let i = 0; i < positions.length; i += 3) {
          gsap.to(positions, {
              [i]: targetPositions[i],
              [i + 1]: targetPositions[i + 1],
              [i + 2]: targetPositions[i + 2],
              duration: 1.5,
              ease: "power2.inOut",
              onUpdate: () => {
                  if (this.particles) this.particles.geometry.attributes.position.needsUpdate = true;
              },
              onComplete: () => {
                  if (!completeCalled && onComplete && !this.destroyed) {
                      completeCalled = true;
                      onComplete();
                  }
              }
          });
      }
    }

    animate() {
      if (this.destroyed) return;
      this.animationId = requestAnimationFrame(this.animate);
      if (this.currentState === 'sphere' && this.particles) {
          this.particles.rotation.y += 0.002;
          this.particles.rotation.x += 0.001;
      }
      this.renderer.render(this.scene, this.camera);
    }
    
    destroy() {
      this.destroyed = true;
      cancelAnimationFrame(this.animationId);
      window.removeEventListener('resize', this.handleResize);
      if (this.container && this.renderer.domElement) {
        this.container.removeChild(this.renderer.domElement);
      }
      this.renderer.dispose();
      this.scene.clear();
      this.particles = null;
    }
  }

  // ----- Nav -----
  function setupNav() {
    const nav = document.getElementById('nav');
    let lastScroll = 0;
    window.addEventListener('scroll', function () {
      const y = window.scrollY || document.documentElement.scrollTop;
      if (y < 80) {
        nav.classList.add('hidden');
        nav.classList.remove('visible');
      } else {
        nav.classList.remove('hidden');
        nav.classList.add('visible');
      }
      lastScroll = y;
    }, { passive: true });

    document.querySelectorAll('.header-link, .header-logo').forEach(function (a) {
      a.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ----- Intersection observer for sections -----
  function setupSectionVisibility() {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { rootMargin: '-80px 0px -80px 0px', threshold: 0.1 });
    sections.forEach(function (s) { observer.observe(s); });
  }

  // ----- Experience: Road Journey -----
  function setupExperience() {
    renderExperienceJourney();
  }

  function getFileType(filePath) {
    return String(filePath || '').toLowerCase().endsWith('.pdf') ? 'pdf' : 'image';
  }

  // Old/Basic Car
  var CAR_SVG_BASIC = '<svg viewBox="0 0 60 110" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="12" y="10" width="36" height="88" rx="8" fill="#8d6e63"/>' +
    '<rect x="15" y="16" width="30" height="15" rx="3" fill="rgba(255,255,255,0.4)"/>' +
    '<rect x="15" y="65" width="30" height="20" rx="3" fill="rgba(255,255,255,0.3)"/>' +
    '<rect x="0" y="20" width="12" height="20" rx="4" fill="#111"/><rect x="2" y="22" width="6" height="16" rx="2" fill="#333"/>' +
    '<rect x="48" y="20" width="12" height="20" rx="4" fill="#111"/><rect x="50" y="22" width="6" height="16" rx="2" fill="#333"/>' +
    '<rect x="0" y="65" width="12" height="20" rx="4" fill="#111"/><rect x="2" y="67" width="6" height="16" rx="2" fill="#333"/>' +
    '<rect x="48" y="65" width="12" height="20" rx="4" fill="#111"/><rect x="50" y="67" width="6" height="16" rx="2" fill="#333"/>' +
    '<ellipse cx="20" cy="12" rx="4" ry="4" fill="#FFE082" opacity="0.8"/>' +
    '<ellipse cx="40" cy="12" rx="4" ry="4" fill="#FFE082" opacity="0.8"/>' +
  '</svg>';

  // Mid-tier Car
  var CAR_SVG_MID = '<svg viewBox="0 0 60 110" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="10" y="8" width="40" height="92" rx="10" fill="#29b6f6"/>' +
    '<rect x="13" y="12" width="34" height="18" rx="5" fill="rgba(220,245,255,0.4)"/>' +
    '<rect x="13" y="70" width="34" height="20" rx="5" fill="rgba(220,245,255,0.3)"/>' +
    '<rect x="1" y="16" width="10" height="22" rx="4" fill="#111"/><rect x="3" y="18" width="6" height="18" rx="2" fill="#2a2a2a"/>' +
    '<rect x="49" y="16" width="10" height="22" rx="4" fill="#111"/><rect x="51" y="18" width="6" height="18" rx="2" fill="#2a2a2a"/>' +
    '<rect x="1" y="70" width="10" height="22" rx="4" fill="#111"/><rect x="3" y="72" width="6" height="18" rx="2" fill="#2a2a2a"/>' +
    '<rect x="49" y="70" width="10" height="22" rx="4" fill="#111"/><rect x="51" y="72" width="6" height="18" rx="2" fill="#2a2a2a"/>' +
    '<ellipse cx="18" cy="10" rx="5" ry="4" fill="#FFE082" opacity="0.9"/>' +
    '<ellipse cx="42" cy="10" rx="5" ry="4" fill="#FFE082" opacity="0.9"/>' +
  '</svg>';

  // Top-down car SVG (Luxury)
  var CAR_SVG_LUXURY = '<svg viewBox="0 0 60 110" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="8" y="8" width="44" height="94" rx="14" fill="#00d4aa"/>' +
    '<rect x="11" y="8" width="38" height="22" rx="7" fill="#00b894"/>' +
    '<rect x="13" y="14" width="34" height="18" rx="5" fill="rgba(200,235,255,0.35)"/>' +
    '<rect x="13" y="80" width="34" height="14" rx="4" fill="rgba(200,235,255,0.25)"/>' +
    '<rect x="18" y="36" width="24" height="32" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>' +
    '<rect x="1" y="14" width="9" height="22" rx="4" fill="#111"/><rect x="3" y="17" width="5" height="16" rx="2" fill="#2a2a2a"/>' +
    '<rect x="50" y="14" width="9" height="22" rx="4" fill="#111"/><rect x="52" y="17" width="5" height="16" rx="2" fill="#2a2a2a"/>' +
    '<rect x="1" y="74" width="9" height="22" rx="4" fill="#111"/><rect x="3" y="77" width="5" height="16" rx="2" fill="#2a2a2a"/>' +
    '<rect x="50" y="74" width="9" height="22" rx="4" fill="#111"/><rect x="52" y="77" width="5" height="16" rx="2" fill="#2a2a2a"/>' +
    '<ellipse cx="18" cy="11" rx="6" ry="3.5" fill="#FFE082" opacity="0.95"/>' +
    '<ellipse cx="42" cy="11" rx="6" ry="3.5" fill="#FFE082" opacity="0.95"/>' +
    '<ellipse cx="18" cy="99" rx="5" ry="3" fill="#FF5252" opacity="0.8"/>' +
    '<ellipse cx="42" cy="99" rx="5" ry="3" fill="#FF5252" opacity="0.8"/>' +
    '<rect x="10" y="52" width="40" height="2" rx="1" fill="rgba(255,255,255,0.12)"/>' +
    '</svg>';

  function renderExperienceJourney() {
    var view = document.getElementById('timelineView');
    if (!view) return;
    view.classList.add('journey-mode');

    // Clone and reverse the array so the visual journey travels from oldest -> newest
    var chronologicalExperiences = experiences.slice().reverse();

    var n = chronologicalExperiences.length;
    var PX_PER_STOP = 500;
    var PAD_LEFT = 200;
    var PAD_RIGHT = 300;
    var totalW = PAD_LEFT + (n - 1) * PX_PER_STOP + PAD_RIGHT;
    var SVG_H = 1000; // viewBox height

    // ---- Build curved road SVG paths (horizontal) ----
    // S-curve using quadratic bezier: alternates top/bottom control points
    function buildPath(offsetY) {
      var segs = n; // one curve segment per experience group
      var segW = totalW / segs;
      var d = 'M 0,' + (SVG_H / 2 + offsetY);
      for (var i = 0; i < segs; i++) {
        var cx = (i + 0.5) * segW;
        var ex = (i + 1) * segW;
        var cy = (i % 2 === 0 ? 230 : 770) + offsetY;
        d += ' Q ' + cx + ',' + cy + ' ' + ex + ',' + (SVG_H / 2 + offsetY);
      }
      return d;
    }

    var centerPath = buildPath(0);
    var topEdge   = buildPath(-80);
    var bottomEdge  = buildPath(80);

    var roadSvg =
      '<svg class="journey-road-svg" id="roadSvg" viewBox="0 0 ' + totalW + ' ' + SVG_H + '" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">' +
        // Road fill (wide stroke, acts as asphalt)
        '<path d="' + centerPath + '" stroke="#181818" stroke-width="170" fill="none" stroke-linecap="square"/>' +
        // Subtle road texture glow
        '<path d="' + centerPath + '" stroke="rgba(255,255,255,0.015)" stroke-width="155" fill="none" stroke-linecap="square"/>' +
        // Top yellow edge
        '<path d="' + topEdge  + '" stroke="#c9971e" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.85"/>' +
        // Bottom yellow edge
        '<path d="' + bottomEdge + '" stroke="#c9971e" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.85"/>' +
        // Centre dashes
        '<path id="roadCenterPath" class="jroad-center-dashes" d="' + centerPath + '" stroke="rgba(255,255,255,0.72)" stroke-width="5" fill="none" stroke-linecap="round" stroke-dasharray="26 26"/>' +
      '</svg>';

    // ---- Stars ----
    var stars = '';
    for (var s = 0; s < 70; s++) {
      var sx = (Math.random() * 100).toFixed(1);
      var sy = (Math.random() * 100).toFixed(1);
      var ss = (Math.random() * 1.8 + 0.4).toFixed(1);
      var stw = (Math.random() * 3 + 2).toFixed(1);
      var std = (Math.random() * 5).toFixed(1);
      stars += '<div class="jstar" style="left:' + sx + '%;top:' + sy + '%;width:' + ss + 'px;height:' + ss + 'px;--tw:' + stw + 's;--td:' + std + 's"></div>';
    }

    // ---- Remove Old Glass Panels ----
    // (The previous glass panels "trees" have been removed as requested)
    var glassPanels = '';

    // ---- Stop cards ----
    var stopsHtml = chronologicalExperiences.map(function(exp, i) {
      var side = i % 2 === 0 ? 'bottom' : 'top';
      var signSide = side === 'bottom' ? 'top' : 'bottom';
      var atts = Array.isArray(exp.attachments) ? exp.attachments : [];
      var attsHtml = atts.length
        ? '<div class="jcard-atts"><span class="jcard-att-label">Attachments</span>' +
          atts.map(function(a) {
            var tp = getFileType(a.file || '');
            return '<button type="button" class="jcard-att-btn" data-url="' + escapeHtml(a.file || '') + '" data-type="' + tp + '">' +
              '<i class="fas ' + (tp === 'pdf' ? 'fa-file-pdf' : 'fa-image') + '"></i>' +
              '<span>' + escapeHtml(a.title || 'View') + '</span></button>';
          }).join('') + '</div>'
        : '';

      // Build Front Face
      const frontHtml =
        '<div class="exp-card-front glass-card">' +
          '<div class="exp-glow"></div>' +
          '<div class="exp-date">' +
            '<i class="fas fa-calendar-alt"></i> ' + escapeHtml(exp.period || '') +
          '</div>' +
          '<div class="exp-role">' +
            '<h3 class="exp-role-title">' + escapeHtml(exp.title || '') + '</h3>' +
            '<h4 class="exp-role-company">' + escapeHtml(exp.company || '') + '</h4>' +
          '</div>' +
          '<p class="exp-summary">' + escapeHtml((exp.description || '').split('.')[0]) + '...</p>' +
          '<span class="edu-flip-hint" style="margin-top:auto;"><i class="fas fa-sync-alt"></i> Hover to flip</span>' +
        '</div>';

      // Build Back Face
      const backHtml =
        '<div class="exp-card-back glass-card">' +
          '<h4 class="exp-role-company">' + escapeHtml(exp.company || '') + '</h4>' +
          '<div class="exp-desc-scroll">' +
            '<p class="exp-desc">' + escapeHtml(exp.description || '') + '</p>' +
          '</div>' +
          (exp.badge ? '<span class="jcard-badge">' + escapeHtml(exp.badge) + '</span>' : '') +
          attsHtml +
        '</div>';

      // Stops initially at left:0; JS repositions them after SVG is in DOM
      return '<div class="journey-stop" data-idx="' + i + '" style="top:0;left:0;bottom:0">' +
        '<div class="journey-pin"></div>' +
        '<div class="journey-sign sign-' + signSide + '"><div class="journey-sign-board">' + escapeHtml(exp.company || '') + '</div><div class="journey-sign-post"></div></div>' +
        '<div class="journey-exp-card card-' + side + '">' +
          '<div class="jcard-line"></div>' +
          '<div class="exp-card-inner">' + frontHtml + backHtml + '</div>' +
        '</div>' +
      '</div>';
    }).join('');

    // Set the height of the scroll container to drive the scroll (width dictates scroll length)
    // We want the scroll container to be tall enough to scroll horizontally across the entire width
    // Scroll distance = totalW - window.innerWidth. We add 100vh so content is fully reachable.
    document.getElementById('experienceScrollContainer').style.height = 'calc(100vh + ' + totalW + 'px)';

    view.innerHTML =
      '<div class="journey-scene" id="journeyScene" style="width:' + totalW + 'px">' +
        '<div class="journey-bg"></div>' +
        '<div class="journey-stars">' + stars + '</div>' +
        glassPanels +
        roadSvg +
        '<div class="journey-car-wrap" id="journeyCar">' +
          '<div class="journey-headlights"></div>' +
          '<div class="car-svg-container">' + CAR_SVG_BASIC + '</div>' +
          '<div class="journey-car-glow"></div>' +
        '</div>' +
        stopsHtml +
      '</div>';

    // Attachment buttons
    view.querySelectorAll('.jcard-att-btn').forEach(function(btn) {
      btn.addEventListener('click', function() { openModal(this.dataset.url, this.dataset.type); });
    });

    // Mobile support: tap to flip the 3D card
    view.querySelectorAll('.journey-exp-card').forEach(function(card) {
      card.addEventListener('click', function() {
        this.classList.toggle('flipped');
      });
    });

    setupJourneyScroll();
  }

  function setupJourneyScroll() {
    var section         = document.getElementById('experience');
    var car             = document.getElementById('journeyCar');
    var pathEl          = document.getElementById('roadCenterPath');
    var sceneEl         = document.getElementById('journeyScene');
    var scrollContainer = document.getElementById('experienceScrollContainer');
    if (!section || !car || !pathEl || !sceneEl || !scrollContainer) return;

    var stops   = Array.prototype.slice.call(document.querySelectorAll('.journey-stop'));
    var n       = stops.length;
    var pathLen = pathEl.getTotalLength();
    var SVG_H   = 1000;
    var ticking = false;

    /* â”€â”€ Inject Progress Bar â”€â”€ */
    var progressBar = document.createElement('div');
    progressBar.className = 'journey-progress-bar';
    document.body.appendChild(progressBar);

    /* â”€â”€ Inject Milestone Badge â”€â”€ */
    var milestoneBadge = document.createElement('div');
    milestoneBadge.className = 'journey-milestone-badge';
    milestoneBadge.innerHTML =
      '<i class="fas fa-map-marker-alt"></i>' +
      '<span>Stop <span class="jmb-num">0</span> / ' + n + '</span>';
    document.body.appendChild(milestoneBadge);
    var jmbNum = milestoneBadge.querySelector('.jmb-num');

    /* â”€â”€ Inject Ambient Road Glow â”€â”€ */
    var roadGlow = document.createElement('div');
    roadGlow.className = 'journey-road-glow';
    sceneEl.appendChild(roadGlow);

    /* â”€â”€ Sign Typewriter State â”€â”€ */
    var typedSigns = {};

    /* â”€â”€ Velocity tracking for dash speed â”€â”€ */
    var lastP = 0, lastTime = performance.now(), scrollVelocity = 0;
    var dashEl = document.getElementById('roadCenterPath');

    /* â”€â”€ Exhaust particle pool â”€â”€ */
    var lastExhaustTime = 0;

    // ---- Position each stop pin/sign/card along the horizontal curve ----
    function placeStops() {
      var sceneH = sceneEl.offsetHeight;
      var scaleY = sceneH / SVG_H;
      stops.forEach(function(stop, i) {
        var t   = (i + 0.5) / n;
        var pt  = pathEl.getPointAtLength(t * pathLen);
        var ax  = pt.x;
        var ay  = pt.y * scaleY;

        stop.style.left   = ax + 'px';
        stop.style.top    = '0';
        stop.style.bottom = '0';

        var pin = stop.querySelector('.journey-pin');
        if (pin) pin.style.top = ay + 'px';

        var card = stop.querySelector('.journey-exp-card');
        var sign = stop.querySelector('.journey-sign');
        if (card) {
          if (card.classList.contains('card-bottom')) {
            card.style.top    = (ay + 60) + 'px';
            card.style.bottom = 'auto';
            if (sign) { sign.style.bottom = (sceneH - ay + 20) + 'px'; sign.style.top = 'auto'; }
          } else {
            card.style.bottom = (sceneH - ay + 60) + 'px';
            card.style.top    = 'auto';
            if (sign) { sign.style.top = (ay + 20) + 'px'; sign.style.bottom = 'auto'; }
          }
        }

        /* Road glow: track mid-point of scene height */
        var midY = sceneH / 2;
        roadGlow.style.top    = (midY - 80) + 'px';
        roadGlow.style.height = '160px';
      });
    }
    placeStops();
    window.addEventListener('resize', placeStops, { passive: true });

    /* â”€â”€ Sign Typewriter â”€â”€ */
    function typeSignBoard(signEl) {
      var board = signEl.querySelector('.journey-sign-board');
      if (!board || board.dataset.typed) return;
      board.dataset.typed = 'true';

      var fullText = board.textContent.trim();
      board.innerHTML = '<span class="jtype-cursor"></span>';
      var i = 0;
      var cursor = board.querySelector('.jtype-cursor');

      function typeNext() {
        if (i >= fullText.length) {
          // Remove cursor after typing finishes
          setTimeout(function() { if (cursor) cursor.remove(); }, 800);
          return;
        }
        board.insertBefore(document.createTextNode(fullText[i++]), cursor);
        setTimeout(typeNext, 38 + Math.random() * 28);
      }
      setTimeout(typeNext, 200);
    }

    /* â”€â”€ Exhaust Trail â”€â”€ */
    function spawnExhaust(x, y) {
      var now = performance.now();
      if (now - lastExhaustTime < 60) return; // throttle
      lastExhaustTime = now;

      var count = Math.floor(Math.random() * 2) + 1;
      for (var k = 0; k < count; k++) {
        var dot = document.createElement('div');
        dot.className = 'journey-exhaust-dot';
        var sz = 4 + Math.random() * 6;
        var spread = (Math.random() - 0.5) * 22;
        dot.style.width  = sz + 'px';
        dot.style.height = sz + 'px';
        dot.style.left   = (x - sz / 2 + spread) + 'px';
        dot.style.top    = (y - sz / 2 + spread * 0.5) + 'px';
        // Alternate green/purple
        var useAccent2 = Math.random() < 0.3;
        dot.style.background = useAccent2
          ? 'radial-gradient(circle, rgba(124,58,237,0.8) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(0,212,170,0.9) 0%, transparent 70%)';
        sceneEl.appendChild(dot);
        // Remove after animation
        setTimeout(function(d) { if (d.parentNode) d.parentNode.removeChild(d); }, 900, dot);
      }
    }

    /* â”€â”€ Main scroll update â”€â”€ */
    function update() {
      var rect = scrollContainer.getBoundingClientRect();
      var scrollableDist = rect.height - window.innerHeight;
      var scrolled = -rect.top;
      var p = scrolled / scrollableDist;
      p = Math.max(0, Math.min(1, p));

      /* Is the experience section currently in the sticky viewport? */
      var inSection = scrolled > 0 && scrolled < scrollableDist;

      /* Progress bar */
      progressBar.style.width = (p * 100) + '%';
      if (inSection) progressBar.classList.add('visible');
      else progressBar.classList.remove('visible');

      /* Velocity (for dash speed + exhaust frequency) */
      var now = performance.now();
      var dt = Math.max(1, now - lastTime);
      scrollVelocity = Math.abs(p - lastP) / dt * 1000; // per second
      lastP = p; lastTime = now;

      /* â”€â”€ 1. Road dashes speed up with velocity â”€â”€ */
      if (dashEl) {
        var dashDur = Math.max(0.18, 0.55 - scrollVelocity * 1.2);
        dashEl.style.animationDuration = dashDur + 's';
      }

      /* â”€â”€ 2. Car model based on progress â”€â”€ */
      var carContainer = car.querySelector('.car-svg-container');
      if (carContainer) {
        if (p > 0.6) {
          if (carContainer.dataset.model !== 'luxury') { carContainer.innerHTML = CAR_SVG_LUXURY; carContainer.dataset.model = 'luxury'; }
        } else if (p > 0.3) {
          if (carContainer.dataset.model !== 'mid') { carContainer.innerHTML = CAR_SVG_MID; carContainer.dataset.model = 'mid'; }
        } else {
          if (carContainer.dataset.model !== 'basic') { carContainer.innerHTML = CAR_SVG_BASIC; carContainer.dataset.model = 'basic'; }
        }
      }

      /* Scene translate */
      var vw = window.innerWidth;
      var sceneW = sceneEl.offsetWidth;
      var maxTranslate = sceneW - vw;
      if (maxTranslate > 0) sceneEl.style.transform = 'translateX(' + (-p * maxTranslate) + 'px)';

      var len    = p * pathLen;
      var scaleY = sceneEl.offsetHeight / SVG_H;

      /* Car position */
      var pt  = pathEl.getPointAtLength(len);
      var ax  = pt.x;
      var ay  = pt.y * scaleY;

      /* Car rotation */
      var la = Math.max(0, len - 12);
      var lb = Math.min(pathLen, len + 12);
      var pa = pathEl.getPointAtLength(la);
      var pb = pathEl.getPointAtLength(lb);
      var motionDeg = Math.atan2((pb.y - pa.y) * scaleY, pb.x - pa.x) * 180 / Math.PI;
      var cssRot = motionDeg + 90; // +90 to face right
      var carScale = 0.65 + (p * 0.35); // Scales UP from 0.65 to 1.0

      car.style.left      = ax + 'px';
      car.style.top       = ay + 'px';
      car.style.transform = 'translate(-50%,-50%) rotate(' + cssRot + 'deg) scale(' + carScale + ')';

      /* â”€â”€ 3. Car engine shake when moving, still at stop â”€â”€ */
      var atStop = false;
      stops.forEach(function(stop, i) {
        var t2 = (i + 0.5) / n;
        if (Math.abs(p - t2) < 0.03) atStop = true;
      });
      if (scrollVelocity > 0.04 && !atStop) car.classList.add('car-shaking');
      else car.classList.remove('car-shaking');

      /* â”€â”€ 4. Exhaust particles â”€â”€ */
      if (scrollVelocity > 0.06 && inSection) spawnExhaust(ax, ay);

      /* â”€â”€ 5. Stop arrivals, card-deal, sign typewriter, milestone â”€â”€ */
      var maxArrived = 0;
      stops.forEach(function(stop, i) {
        var t2 = (i + 0.5) / n;
        if (p >= t2 - 0.06) {
          stop.classList.add('arrived');
          maxArrived = i + 1;

          /* Sign typewriter â€” fires once per stop */
          var sign = stop.querySelector('.journey-sign');
          if (sign && !typedSigns[i]) {
            typedSigns[i] = true;
            typeSignBoard(sign);
          }
        }
      });

      /* Milestone badge */
      if (inSection && maxArrived > 0) {
        milestoneBadge.classList.add('visible');
        if (jmbNum) jmbNum.textContent = maxArrived;
      } else {
        milestoneBadge.classList.remove('visible');
      }

      /* â”€â”€ 6. Glass panel parallax â”€â”€ */
      var panels = sceneEl.querySelectorAll('.jglass-panel');
      panels.forEach(function(panel, idx) {
        var speed = 0.06 + idx * 0.04;
        var offsetX = -p * maxTranslate * speed;
        panel.style.transform = 'translateX(' + offsetX + 'px)';
      });

      ticking = false;
    }

    window.addEventListener('scroll', function() {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });

    /* Cleanup milestone badge & progress bar when section leaves viewport */
    var cleanupObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (!e.isIntersecting) {
          progressBar.classList.remove('visible');
          milestoneBadge.classList.remove('visible');
        }
      });
    }, { threshold: 0 });
    cleanupObserver.observe(scrollContainer);

    update();
  }

  // ----- Education â€” Full Premium Animation System -----
  function renderEducation() {
    const grid = document.getElementById('educationGrid');
    if (!grid) return;

    // Milestones per education entry shown on the back face
    const milestones = [
      [
        { text: '<strong>Deep Learning & NLP</strong> specialisation track' },
        { text: '<strong>Capstone project</strong> â€” AI-based medical diagnosis system' },
        { text: 'Research internship at <strong>NUS Singapore</strong>' },
        { text: '<strong>Multiple certifications</strong> â€” AWS, Azure, TensorFlow' }
      ],
      [
        { text: 'Scored <strong>90%</strong> in Higher Secondary' },
        { text: 'Science stream â€” Physics, Chemistry, Maths, Computer Science' },
        { text: 'Developed early interest in <strong>programming</strong>' }
      ],
      [
        { text: 'Scored <strong>88%</strong> in SSLC Board Exams' },
        { text: 'School <strong>merit rank</strong> holder' },
        { text: 'First exposure to <strong>computer science</strong> fundamentals' }
      ]
    ];

    const icons = ['fas fa-graduation-cap', 'fas fa-school', 'fas fa-book-open'];

    grid.innerHTML = education.map(function (e, i) {
      const media = e.media && e.media.file ? e.media : null;
      const type  = media ? getFileType(media.file) : 'image';

      // ---- FRONT face ----
      const thumb = media
        ? (type === 'pdf'
          ? '<div class="education-thumb education-thumb--pdf"><i class="fas fa-file-pdf" aria-hidden="true"></i></div>'
          : '<div class="education-thumb edu-thumb-parallax"><img src="' + escapeHtml(media.file) + '" alt="" loading="lazy" /><div class="edu-shimmer-layer" aria-hidden="true"></div></div>')
        : '<div class="education-thumb education-thumb--pdf edu-thumb-parallax"><i class="' + icons[i] + '" aria-hidden="true"></i><div class="edu-shimmer-layer" aria-hidden="true"></div></div>';

      const metaLine = [
        e.period   ? '<span class="education-meta-item edu-year-chip"><i class="fas fa-calendar-alt"></i>' + escapeHtml(e.period) + '</span>' : '',
        e.location ? '<span class="education-meta-item"><i class="fas fa-location-dot"></i>' + escapeHtml(e.location) + '</span>' : ''
      ].filter(Boolean).join('');

      const scoreVal  = e.scoreValue || '';
      const scoreNum  = parseFloat(scoreVal); // numeric part for animation
      const scoreHtml = (e.scoreLabel && e.scoreValue)
        ? '<p class="education-score"><span class="education-score-label">' + escapeHtml(e.scoreLabel) + ':</span> <span class="education-score-value" data-score="' + escapeHtml(scoreVal) + '" data-score-num="' + scoreNum + '">0</span></p>'
        : '';

      const viewBtn = media
        ? '<button type="button" class="education-view" data-url="' + escapeHtml(media.file) + '" data-type="' + escapeHtml(type) + '"><span>View</span><i class="fas fa-arrow-right"></i></button>'
        : '';

      const frontFace =
        '<div class="edu-card-front">' +
          '<div class="education-card-glow" aria-hidden="true"></div>' +
          '<div class="edu-holo-overlay" aria-hidden="true"></div>' +
          thumb +
          '<div class="education-body">' +
            (metaLine ? '<div class="education-meta">' + metaLine + '</div>' : '') +
            '<h3 class="education-title edu-typewriter-title" data-fulltext="' + escapeHtml(e.title || '') + '"></h3>' +
            '<p class="education-institute">' + escapeHtml(e.institute || '') + '</p>' +
            scoreHtml +
            (viewBtn ? '<div class="education-actions">' + viewBtn + '</div>' : '') +
          '</div>' +
          '<span class="edu-flip-hint"><i class="fas fa-sync-alt"></i> click to flip</span>' +
        '</div>';

      // ---- BACK face ----
      const msList = (milestones[i] || []).map(function(m) {
        return '<li class="edu-milestone"><span class="edu-milestone-dot"></span><span class="edu-milestone-text">' + m.text + '</span></li>';
      }).join('');

      const backFace =
        '<div class="edu-card-back">' +
          '<div class="edu-back-header">' +
            '<div class="edu-back-icon"><i class="' + icons[i] + '"></i></div>' +
            '<div><p class="edu-back-title">' + escapeHtml(e.institute || '') + '</p>' +
              '<p class="edu-back-sub">' + escapeHtml(e.period || '') + ' Â· ' + escapeHtml(e.location || '') + '</p>' +
            '</div>' +
          '</div>' +
          '<ul class="edu-milestones">' + msList + '</ul>' +
          (e.scoreLabel ? '<div class="edu-back-score"><span class="edu-back-score-val">' + escapeHtml(e.scoreValue || '') + '</span><span class="edu-back-score-label">' + escapeHtml(e.scoreLabel) + '</span></div>' : '') +
        '</div>';

      return '<article class="education-card" data-idx="' + i + '">' +
        '<div class="edu-card-flipper">' + frontFace + backFace + '</div>' +
      '</article>';
    }).join('');

    // Wire up view buttons (inside front face)
    grid.querySelectorAll('.education-view').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation(); // don't trigger card flip
        openModal(this.dataset.url, this.dataset.type);
      });
    });

    // Wire up flip on click
    grid.querySelectorAll('.education-card').forEach(function (card) {
      card.addEventListener('click', function () {
        this.classList.toggle('flipped');
      });
    });

    setupEducationAnimations(grid);
  }

  // ----- Education Animations -----
  function setupEducationAnimations(grid) {
    if (!grid) return;

    /* â”€â”€â”€ 1. IntersectionObserver: blur-to-sharp reveal + timeline trail + score count-up â”€â”€â”€ */
    var revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        grid.classList.add('trail-visible');
        revealObserver.disconnect();

        /* Score count-up on each card */
        grid.querySelectorAll('.education-score-value[data-score]').forEach(function(el) {
          var raw = el.dataset.score || '';  // e.g. "7.87/10" or "90%"
          var numStr = raw.replace(/[^0-9.]/g, '');
          var num = parseFloat(numStr) || 0;
          var suffix = raw.replace(/[0-9.]/g, ''); // "/10" or "%" etc.
          var decimals = (numStr.indexOf('.') >= 0) ? numStr.split('.')[1].length : 0;
          var delay = 400;

          setTimeout(function() {
            var start = performance.now();
            var dur   = 1400;
            (function step(now) {
              var t    = Math.min((now - start) / dur, 1);
              var ease = t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t+2,2)/2;
              el.textContent = (num * ease).toFixed(decimals) + suffix;
              if (t < 1) requestAnimationFrame(step);
              else el.textContent = raw; // snap to exact value
            })(performance.now());
          }, delay);
        });

        /* Title typewriter on each card */
        grid.querySelectorAll('.edu-typewriter-title').forEach(function(el, idx) {
          var full = el.dataset.fulltext || '';
          el.textContent = '';
          var cursor = document.createElement('span');
          cursor.style.cssText = 'display:inline-block;width:2px;height:0.9em;background:var(--accent);vertical-align:middle;margin-left:2px;animation:jtypeBlink 0.5s step-end infinite';
          el.appendChild(cursor);
          var i = 0;
          var baseDelay = 300 + idx * 180;

          function typeChar() {
            if (i >= full.length) {
              setTimeout(function() { cursor.remove(); }, 600);
              return;
            }
            el.insertBefore(document.createTextNode(full[i++]), cursor);
            setTimeout(typeChar, 28 + Math.random() * 22);
          }
          setTimeout(typeChar, baseDelay);
        });

        /* Timeline trail height (between cards) â€” draw after cards have width */
        setTimeout(function() {
          var trail = grid.querySelector('.edu-timeline-trail');
          if (trail) {
            var gridH = grid.offsetHeight;
            trail.style.height = gridH + 'px';
          }
        }, 400);
      });
    }, { threshold: 0.15 });

    revealObserver.observe(grid);

    /* â”€â”€â”€ 2. Diploma shimmer â€” golden sweep on thumb hover â”€â”€â”€ */
    grid.querySelectorAll('.edu-shimmer-layer').forEach(function(layer) {
      var thumb = layer.closest('.education-thumb, .edu-thumb-parallax');
      if (!thumb) return;
      layer.addEventListener('animationend', function() {
        layer.classList.remove('edu-shimmer-active');
      });
      thumb.addEventListener('mouseenter', function() {
        layer.classList.remove('edu-shimmer-active');
        void layer.offsetWidth; // reflow
        layer.classList.add('edu-shimmer-active');
      });
    });

    /* â”€â”€â”€ 3. Year chip float on hover â”€â”€â”€ */
    grid.querySelectorAll('.edu-year-chip').forEach(function(chip) {
      chip.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.08)';
        this.style.transition = 'transform 0.3s var(--ease-out-expo)';
        this.style.color = 'var(--accent)';
        this.style.background = 'rgba(0,212,170,0.12)';
        this.style.borderRadius = '20px';
        this.style.padding = '2px 8px';
      });
      chip.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.color = '';
        this.style.background = '';
        this.style.padding = '';
      });
    });

    /* â”€â”€â”€ 4. Holographic glow: track mouse over each card face â”€â”€â”€ */
    grid.querySelectorAll('.education-card').forEach(function(card) {
      var glow = card.querySelector('.education-card-glow');
      if (!glow) return;
      card.addEventListener('mousemove', function(e) {
        var r = card.getBoundingClientRect();
        var x = ((e.clientX - r.left) / r.width  * 100).toFixed(1) + '%';
        var y = ((e.clientY - r.top)  / r.height * 100).toFixed(1) + '%';
        card.style.setProperty('--mouse-x', x);
        card.style.setProperty('--mouse-y', y);
      });
    });

    /* â”€â”€â”€ 6. Thumbnail parallax on mouse move â”€â”€â”€ */
    grid.querySelectorAll('.edu-thumb-parallax').forEach(function(thumb) {
      var img = thumb.querySelector('img, i');
      if (!img) return;
      thumb.addEventListener('mousemove', function(e) {
        var r = thumb.getBoundingClientRect();
        var nx = ((e.clientX - r.left) / r.width  - 0.5) * 2;
        var ny = ((e.clientY - r.top)  / r.height - 0.5) * 2;
        img.style.transform = 'scale(1.08) translate(' + (nx * 7) + 'px,' + (ny * 5) + 'px)';
      });
      thumb.addEventListener('mouseleave', function() {
        img.style.transform = '';
      });
    });
  }

  // ----- Hero Mouse Parallax & Particles -----
  function initHeroEffects() {
    const hero = document.getElementById('hero');
    const bgLayer = document.querySelector('.hero-bg-layer');
    const overlay = document.querySelector('.hero-overlay');
    const canvas = document.getElementById('particles-canvas');
    if (!hero || !bgLayer || !overlay || !canvas) return;

    // Mouse Parallax
    hero.addEventListener('mousemove', function(e) {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const offsetX = (x - centerX) / centerX;
      const offsetY = (y - centerY) / centerY;

      // Slight opposite movement
      bgLayer.style.transform = `translate(${offsetX * -15}px, ${offsetY * -15}px) scale(1.05)`;
      overlay.style.transform = `translate(${offsetX * -10}px, ${offsetY * -10}px)`;
      canvas.style.transform = `translate(${offsetX * -5}px, ${offsetY * -5}px)`;
    });

    hero.addEventListener('mouseleave', function() {
      bgLayer.style.transform = `translate(0px, 0px) scale(1)`;
      overlay.style.transform = `translate(0px, 0px)`;
      canvas.style.transform = `translate(0px, 0px)`;
      bgLayer.style.transition = 'transform 0.5s ease-out';
      overlay.style.transition = 'transform 0.5s ease-out';
      canvas.style.transition = 'transform 0.5s ease-out';
    });
    
    hero.addEventListener('mouseenter', function() {
      bgLayer.style.transition = 'none';
      overlay.style.transition = 'none';
      canvas.style.transition = 'none';
    });

    // Particles Canvas System
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resize() {
      width = hero.offsetWidth;
      height = hero.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 0.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 212, 170, 0.4)';
        ctx.fill();
      }
    }

    for (let i = 0; i < 60; i++) {
      particles.push(new Particle());
    }

    // Matrix Rain class
    class MatrixDrop {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * -height; // Start above canvas
        this.speed = Math.random() * 2 + 1;
        this.len = Math.floor(Math.random() * 10) + 5;
        this.chars = [];
        const possible = "01ABCD";
        for (let i = 0; i < this.len; i++) {
          this.chars.push(possible.charAt(Math.floor(Math.random() * possible.length)));
        }
      }
      update() {
        this.y += this.speed;
        if (this.y > height + this.len * 15) { // Reset when off screen
          this.y = Math.random() * -height;
          this.x = Math.random() * width;
        }
        // randomly change characters
        if (Math.random() < 0.1) {
          const possible = "01ABCD";
          this.chars[Math.floor(Math.random() * this.len)] = possible.charAt(Math.floor(Math.random() * possible.length));
        }
      }
      draw() {
        ctx.font = "12px monospace";
        for (let i = 0; i < this.len; i++) {
          const opacity = (i === this.len - 1) ? 0.8 : 0.2 * (i / this.len);
          ctx.fillStyle = `rgba(0, 212, 170, ${opacity})`;
          ctx.fillText(this.chars[i], this.x, this.y - (this.len - 1 - i) * 12);
        }
      }
    }

    let rainDrops = [];
    for (let i = 0; i < 25; i++) {
      rainDrops.push(new MatrixDrop());
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);
      
      // Draw Matrix Rain (background)
      for (let i = 0; i < rainDrops.length; i++) {
        rainDrops[i].update();
        rainDrops[i].draw();
      }

      // Draw Particles & Lines (foreground)
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 170, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  // ----- Projects -----
  function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    const nav  = document.getElementById('projectsNav');
    let page = 0;
    const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

    function render() {
      const start = page * PROJECTS_PER_PAGE;
      const slice = projects.slice(start, start + PROJECTS_PER_PAGE);

      grid.innerHTML = slice.map(function (p, i) {
        const absIdx = start + i;
        const tagsHtml = p.tags.map(function (t, ti) {
          return '<span class="project-tag" style="--tag-delay:' + (ti * 0.07) + 's">' + escapeHtml(t) + '</span>';
        }).join('');
        const projectData = escapeAttr(JSON.stringify({ title: p.title, description: p.description, tags: p.tags, github: p.github, color: p.color }));

        return '<div class="project-card" style="--card-color:' + escapeHtml(p.color) + '" data-idx="' + absIdx + '">' +
          /* Neon border SVG trace */
          '<svg class="pcard-neon-border" aria-hidden="true"><rect class="pcard-neon-rect" rx="16" ry="16"/></svg>' +
          /* Project index number */
          '<span class="pcard-index" aria-hidden="true">0' + (absIdx + 1) + '</span>' +
          /* Image area */
          '<div class="project-image-wrap">' +
            '<img src="' + escapeHtml(p.image) + '" alt="' + escapeHtml(p.title) + '" loading="lazy" class="pcard-img" />' +
            /* Wipe overlay: reveals with clip-path */
            '<div class="project-image-overlay" aria-hidden="true"></div>' +
            /* CRT scanline element */
            '<div class="pcard-scanline" aria-hidden="true"></div>' +
            /* Stat overlay */
            '<div class="pcard-stat-overlay" aria-hidden="true">' +
              '<span class="pcard-stat"><i class="fab fa-github"></i><span class="pcs-val" data-repo="' + escapeHtml(p.github) + '">View</span></span>' +
            '</div>' +
          '</div>' +
          /* Content */
          '<div class="project-card-content">' +
            '<h3 style="color:' + escapeHtml(p.color) + '"><span>' + escapeHtml(p.title) + '</span></h3>' +
            '<p>' + escapeHtml(p.description) + '</p>' +
            '<div class="project-tags">' + tagsHtml + '</div>' +
            '<div class="project-card-actions">' +
              '<button type="button" class="project-detail-btn" data-project="' + projectData + '" aria-label="Full details"><i class="fas fa-info-circle"></i> Full details</button>' +
              '<a href="' + escapeHtml(p.github) + '" target="_blank" rel="noopener" class="project-link pcard-magnetic-btn"><i class="fab fa-github"></i> View Code</a>' +
            '</div>' +
          '</div>' +
        '</div>';
      }).join('');

      /* Wire detail modal buttons */
      grid.querySelectorAll('.project-detail-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          try {
            var p = JSON.parse(this.getAttribute('data-project'));
            var tagsHtml = (p.tags || []).map(function (t) { return '<span class="project-tag">' + escapeHtml(t) + '</span>'; }).join('');
            var html = '<div class="detail-detail">' +
              '<h3 class="detail-title" style="color:' + escapeHtml(p.color || '#00d4aa') + '">' + escapeHtml(p.title) + '</h3>' +
              '<p class="detail-desc">' + escapeHtml(p.description) + '</p>' +
              (tagsHtml ? '<div class="detail-tags">' + tagsHtml + '</div>' : '') +
              (p.github ? '<a href="' + escapeHtml(p.github) + '" target="_blank" rel="noopener" class="btn btn-cinema btn-primary"><i class="fab fa-github"></i> View Code</a>' : '') +
              '</div>';
            openDetailModal(html);
          } catch (e) {}
        });
      });

      /* Pagination */
      if (totalPages > 1) {
        nav.innerHTML = '<button type="button" class="ach-prev prev" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>' +
          '<div class="ach-dots">' + Array.from({ length: totalPages }, function (_, i) {
            return '<button type="button" class="projects-dot' + (i === page ? ' active' : '') + '" data-page="' + i + '" aria-label="Page ' + (i + 1) + '"></button>';
          }).join('') + '</div>' +
          '<button type="button" class="ach-next next" aria-label="Next"><i class="fas fa-chevron-right"></i></button>';
        nav.querySelector('.prev').addEventListener('click', function () { page = page === 0 ? totalPages - 1 : page - 1; render(); scrollToGrid(grid); });
        nav.querySelector('.next').addEventListener('click', function () { page = page === totalPages - 1 ? 0 : page + 1; render(); scrollToGrid(grid); });
        nav.querySelectorAll('.ach-dots .projects-dot').forEach(function (b) {
          b.addEventListener('click', function () { page = parseInt(this.dataset.page, 10); render(); scrollToGrid(grid); });
        });
      } else {
        nav.innerHTML = '';
      }

      setupProjectAnimations(grid);
    }
    render();
  }

  /* â”€â”€ Project Animations â”€â”€ */
  function setupProjectAnimations(grid) {
    if (!grid) return;

    grid.querySelectorAll('.project-card').forEach(function (card) {
      var img     = card.querySelector('.pcard-img');
      var magBtn  = card.querySelector('.pcard-magnetic-btn');
      var tags    = card.querySelectorAll('.project-tag');
      var scanline = card.querySelector('.pcard-scanline');
      var neonSvg  = card.querySelector('.pcard-neon-border');
      var neonRect = card.querySelector('.pcard-neon-rect');
      var color    = card.style.getPropertyValue('--card-color') || '#00d4aa';

      /* â”€â”€ 1. Image parallax â”€â”€ */
      if (img) {
        card.addEventListener('mousemove', function (e) {
          var r  = card.getBoundingClientRect();
          var nx = ((e.clientX - r.left) / r.width  - 0.5) * 2;
          var ny = ((e.clientY - r.top)  / r.height - 0.5) * 2;
          img.style.transform = 'scale(1.08) translate(' + (-nx * 10) + 'px,' + (-ny * 7) + 'px)';
        });
        card.addEventListener('mouseleave', function () {
          img.style.transform = '';
        });
      }

      /* â”€â”€ 2. Stacked depth shadow â”€â”€ */
      card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.22), 0 2px 4px rgba(0,0,0,0.14), 0 8px 0 -4px rgba(0,0,0,0.08), 0 12px 0 -8px rgba(0,0,0,0.04)';
      card.addEventListener('mouseenter', function () {
        card.style.boxShadow = '0 24px 48px rgba(0,0,0,0.42), 0 8px 16px rgba(0,0,0,0.22), 0 14px 0 -4px rgba(0,0,0,0.12), 0 20px 0 -8px rgba(0,0,0,0.06)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.22), 0 2px 4px rgba(0,0,0,0.14), 0 8px 0 -4px rgba(0,0,0,0.08), 0 12px 0 -8px rgba(0,0,0,0.04)';
      });

      /* â”€â”€ 3. Tag stagger spring pop-in â”€â”€ */
      var tagsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          tags.forEach(function (tag, i) {
            tag.style.transitionDelay = tag.style.getPropertyValue('--tag-delay') || (i * 0.07 + 's');
            tag.classList.add('tag-popped');
          });
          tagsObserver.unobserve(card);
        });
      }, { threshold: 0.4 });
      tagsObserver.observe(card);

      /* â”€â”€ 4. CRT Scanline sweep on hover â”€â”€ */
      if (scanline) {
        card.addEventListener('mouseenter', function () {
          scanline.classList.remove('scanline-go');
          void scanline.offsetWidth;
          scanline.classList.add('scanline-go');
        });
      }

      /* â”€â”€ 5. Neon border trace on hover â”€â”€ */
      if (neonSvg && neonRect) {
        /* Set SVG fill dimensions reactively */
        neonRect.setAttribute('stroke', color);
        function sizeNeon() {
          var w = card.offsetWidth;
          var h = card.offsetHeight;
          neonSvg.setAttribute('width', w);
          neonSvg.setAttribute('height', h);
          neonRect.setAttribute('width', w - 2);
          neonRect.setAttribute('height', h - 2);
          neonRect.setAttribute('x', '1');
          neonRect.setAttribute('y', '1');
          var perimeter = 2 * ((w - 2) + (h - 2));
          neonRect.style.strokeDasharray  = perimeter;
          neonRect.style.strokeDashoffset = perimeter;
        }
        sizeNeon();
        window.addEventListener('resize', sizeNeon, { passive: true });

        card.addEventListener('mouseenter', function () {
          neonRect.classList.add('neon-trace');
          neonRect.style.opacity = '1';
        });
        card.addEventListener('mouseleave', function () {
          neonRect.classList.remove('neon-trace');
          neonRect.style.opacity = '0';
        });
      }

      /* â”€â”€ 6. Magnetic GitHub button â”€â”€ */
      if (magBtn) {
        magBtn.addEventListener('mousemove', function (e) {
          var r  = magBtn.getBoundingClientRect();
          var dx = (e.clientX - (r.left + r.width  / 2)) * 0.35;
          var dy = (e.clientY - (r.top  + r.height / 2)) * 0.35;
          magBtn.style.transform = 'translate(' + dx + 'px,' + dy + 'px) scale(1.06)';
        });
        magBtn.addEventListener('mouseleave', function () {
          magBtn.style.transform = '';
        });
      }
    });
  }


  // ----- Skills -----
  function renderSkills() {
    function getTechIcon(name) {
      const lower = name.toLowerCase();
      if (lower.includes('python')) return 'fab fa-python';
      if (lower.includes('aws')) return 'fab fa-aws';
      if (lower.includes('docker')) return 'fab fa-docker';
      if (lower.includes('git')) return 'fab fa-git-alt';
      if (lower.includes('azure')) return 'fab fa-microsoft';
      if (lower.includes('tensorflow') || lower.includes('pytorch') || lower.includes('machine') || lower.includes('deep')) return 'fas fa-brain';
      if (lower.includes('language') || lower.includes('nlp')) return 'fas fa-language';
      if (lower.includes('analysis') || lower.includes('data')) return 'fas fa-chart-bar';
      return 'fas fa-code';
    }

    /* â”€â”€ 1. Background Constellation â”€â”€ */
    const skillsSection = document.getElementById('skills');
    if (skillsSection && !document.getElementById('skillsCanvas')) {
      const canvas = document.createElement('canvas');
      canvas.id = 'skillsCanvas';
      canvas.className = 'skills-constellation';
      skillsSection.insertBefore(canvas, skillsSection.firstChild);
      initSkillsConstellation(canvas, skillsSection);
    }

    function renderSkillCards(data, containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;
      
      container.innerHTML = data.map(function (s, index) {
        const circumference = 2 * Math.PI * 42;
        const icon = getTechIcon(s.name);
        
        return '<div class="skill-card skill-card-3d" data-percentage="' + s.percentage + '">' +
          /* Floating icon badge - positioned relative to .skill-card (which has position:relative) */
          '<div class="skill-float-badge"><i class="' + icon + '"></i></div>' +
          '<div class="skill-card-inner">' +
            '<div class="skill-progress-ring">' +
              '<svg class="skill-ring-svg" viewBox="0 0 100 100">' +
                '<circle class="skill-ring-bg" cx="50" cy="50" r="42"></circle>' +
                /* Spring ring fill uses stroke-dashoffset initially set to circumference */
                '<circle class="skill-ring-progress" cx="50" cy="50" r="42" stroke="url(#skillGradient)" stroke-dasharray="' + circumference + '" stroke-dashoffset="' + circumference + '" data-percentage="' + s.percentage + '"></circle>' +
              '</svg>' +
              '<div class="skill-percentage"><span class="skill-val" data-target="' + s.percentage + '">0</span><span class="skill-sign">%</span></div>' +
            '</div>' +
            '<h4 class="skill-name">' + escapeHtml(s.name).replace(/\//g, '/<wbr>') + '</h4>' +
            /* Glow pulse on complete */
            '<div class="skill-complete-glow" aria-hidden="true"></div>' +
          '</div>' +
          /* Hover tooltip */
          '<div class="skill-tooltip">' +
            '<div class="st-header">Proficiency</div>' +
            '<div class="st-bar-bg"><div class="st-bar-fill" style="width: ' + s.percentage + '%"></div></div>' +
            '<div class="st-desc">' + escapeHtml(s.name) + ' proficiency is at ' + s.percentage + '% based on recent projects and experience.</div>' +
          '</div>' +
        '</div>';
      }).join('');
      
      /* â”€â”€ Radar Chart Entrance (Staggered Wave) + 3D Spin + Ring Draw â”€â”€ */
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            container.querySelectorAll('.skill-card').forEach(function(card, idx) {
              /* Staggering the entrance wave */
              setTimeout(function() {
                /* Flip in 3D */
                card.classList.add('skill-card-flipped');
                
                /* Start ring draw and counter tick after flip completes (0.4s) */
                setTimeout(function() {
                  const circle = card.querySelector('.skill-ring-progress');
                  const targetPct = parseInt(circle.dataset.percentage, 10);
                  const circumference = 2 * Math.PI * 42;
                  const offset = circumference - (targetPct / 100) * circumference;
                  
                  /* Spring fill using CSS cubic-bezier transition */
                  circle.style.strokeDashoffset = offset;
                  
                  /* Percentage counter tick */
                  const valEl = card.querySelector('.skill-val');
                  const drawDuration = 1800; /* matching CSS transition time */
                  const start = performance.now();
                  
                  requestAnimationFrame(function step(now) {
                    let progress = (now - start) / drawDuration;
                    if (progress > 1) progress = 1;
                    /* Ease out cubic */
                    const ease = 1 - Math.pow(1 - progress, 3);
                    valEl.textContent = Math.floor(ease * targetPct);
                    
                    if (progress < 1) {
                      requestAnimationFrame(step);
                    } else {
                      valEl.textContent = targetPct;
                      /* Glow pulse on complete */
                      const glowEl = card.querySelector('.skill-complete-glow');
                      if (glowEl) {
                         glowEl.classList.add('pulse-active');
                         setTimeout(function() { glowEl.classList.remove('pulse-active'); }, 1000);
                      }
                    }
                  });
                }, 400); // Wait for the 3D flip to finish a bit before drawing
                
              }, idx * 150); // Stagger 150ms per card
            });
            observer.disconnect();
          }
        });
      }, { threshold: 0.2 });
      
      if (container) observer.observe(container);
    }
    
    renderSkillCards(technicalSkills, 'technicalSkills');
    renderSkillCards(cloudSkills, 'cloudSkills');

    // Add horizontal scroll on mouse wheel for skills grids
    document.querySelectorAll('.skills-grid').forEach(function(grid) {
      grid.addEventListener('wheel', function(e) {
        const isScrollingHorizontally = Math.abs(e.deltaX) > Math.abs(e.deltaY);
        if (!isScrollingHorizontally && e.deltaY !== 0) {
          const canScrollLeft = this.scrollLeft > 0;
          const canScrollRight = this.scrollLeft < this.scrollWidth - this.clientWidth - 1;
          
          if ((e.deltaY < 0 && canScrollLeft) || (e.deltaY > 0 && canScrollRight)) {
            e.preventDefault();
            this.scrollLeft += e.deltaY;
          }
        }
      }, { passive: false });
    });
  }

  /* â”€â”€ Canvas Constellation Background for Skills â”€â”€ */
  function initSkillsConstellation(canvas, section) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let mouse = { x: -9999, y: -9999, radius: 150 };

    function resize() {
      width = section.offsetWidth;
      height = section.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    }
    resize();
    window.addEventListener('resize', resize);

    section.addEventListener('mousemove', function(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    section.addEventListener('mouseleave', function() {
      mouse.x = -9999;
      mouse.y = -9999;
    });

    class ConstellationNode {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.5;
        this.baseColor = 'rgba(0, 212, 170, 0.3)';
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.baseColor;
        ctx.fill();
      }
    }

    for (let i = 0; i < 70; i++) particles.push(new ConstellationNode());

    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        /* Distance to mouse => interaction */
        let dx = mouse.x - particles[i].x;
        let dy = mouse.y - particles[i].y;
        let distMouse = Math.sqrt(dx * dx + dy * dy);
        if (distMouse < mouse.radius) {
          /* Repel slightly */
          const force = (mouse.radius - distMouse) / mouse.radius;
          particles[i].x -= dx * force * 0.02;
          particles[i].y -= dy * force * 0.02;
          
          /* Draw line to mouse */
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 212, 170, ${0.4 * (1 - distMouse / mouse.radius)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        /* Connect nodes */
        for (let j = i + 1; j < particles.length; j++) {
          let dxNode = particles[i].x - particles[j].x;
          let dyNode = particles[i].y - particles[j].y;
          let distNode = Math.sqrt(dxNode * dxNode + dyNode * dyNode);
          if (distNode < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 170, ${0.15 * (1 - distNode / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    }
    animate();
  }


  // ----- Helper: Scroll to grid on pagination -----
  function scrollToGrid(gridElement) {
    if (!gridElement) return;
    const rect = gridElement.getBoundingClientRect();
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
    const targetY = rect.top + scrollOffset - 120; // 120px offset from top for better visibility
    
    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
  }

  // ----- Achievements -----
  function renderAchievements() {
    const statsGrid = document.getElementById('statsGrid');
    const achievementsGrid = document.getElementById('achievementsGrid');
    const achievementsNav = document.getElementById('achievementsNav');

    /* â”€â”€ Render Stats with Trophy Drop & Explosion Burst setup â”€â”€ */
    statsGrid.innerHTML = stats.map(function (s, i) {
      let extra = '';
      if (s.link) extra = '<a href="' + escapeHtml(s.link) + '" target="_blank" rel="noopener" class="stat-cta">View <i class="fas fa-arrow-up-right-from-square"></i></a>';
      
      // We wrap the value safely to append a bouncing suffix
      return '<div class="stat-card stat-card-premium reveal" data-reveal style="--delay:' + (i * 0.08) + 's">' +
               '<div class="stat-card-inner">' +
                 /* Trophy drop animation class */
                 '<div class="stat-icon-wrap ach-trophy-drop" style="--drop-delay:' + (0.3 + i * 0.1) + 's"><i class="' + s.icon + '"></i></div>' +
                 /* Value container for explosion burst */
                 '<div class="stat-val-container">' +
                   '<div class="stat-value" data-end="' + s.value + '">0</div>' +
                   '<span class="stat-suffix" aria-hidden="true">+</span>' +
                   '<div class="stat-burst" aria-hidden="true"></div>' +
                 '</div>' +
                 '<p class="stat-label">' + escapeHtml(s.label) + '</p>' +
                 extra +
               '</div>' +
             '</div>';
    }).join('');

    let achPage = 0;
    const achTotalPages = Math.ceil(achievements.length / ACHIEVEMENTS_PER_PAGE);

    function renderAch(isPagination) {
      const start = achPage * ACHIEVEMENTS_PER_PAGE;
      const slice = achievements.slice(start, start + ACHIEVEMENTS_PER_PAGE);
      
      achievementsGrid.innerHTML = slice.map(function (a, idx) {
        var mediaBlock = '';
        if (a.media) {
          /* Ken burns effect applied via ach-ken-burns class */
          mediaBlock = '<div class="ach-media"><img src="' + escapeHtml(a.media) + '" alt="" loading="lazy" class="ach-ken-burns"/><div class="ach-media-overlay"></div></div>';
        } else if (a.link && a.link.indexOf('github') !== -1) {
          mediaBlock = '<div class="ach-media ach-media-icon"><i class="fab fa-github" aria-hidden="true"></i></div>';
        }
        var viewBtn = '';
        if (a.media) viewBtn = '<button type="button" class="ach-cta ach-view" data-url="' + escapeHtml(a.media) + '" data-type="image"><span>View</span><i class="fas fa-arrow-right"></i></button>';
        else if (a.link) viewBtn = '<a href="' + escapeHtml(a.link) + '" target="_blank" rel="noopener" class="ach-cta"><span>View</span><i class="fas fa-arrow-up-right-from-square"></i></a>';
        
        var hasMediaBlock = !!a.media || !!(a.link && a.link.indexOf('github') !== -1);
        
        /* Shimmer pagination: add entering class if triggered by dot click */
        var cardClass = 'achievement-card ach-card glass-card' + (hasMediaBlock ? ' ach-card-has-media' : '');
        if (isPagination) cardClass += ' ach-shuffle-enter';
        
        var achData = escapeAttr(JSON.stringify({ title: a.title, description: a.description, icon: a.icon, media: a.media || '', link: a.link || '' }));
        
        return '<article class="' + cardClass + '" style="--shuffle-delay:' + (idx * 0.08) + 's">' +
          '<div class="ach-card-glow" aria-hidden="true"></div>' +
          mediaBlock +
          '<div class="ach-card-body">' +
            /* Hover glow halo behind icon */
            '<div class="ach-icon-wrap"><div class="ach-hover-halo" aria-hidden="true"></div><i class="' + a.icon + '"></i></div>' +
            /* Removed glitch reveal text */
            '<h3 class="ach-title">' + escapeHtml(a.title) + '</h3>' +
            '<p class="ach-desc">' + escapeHtml(a.description) + '</p>' +
            '<div class="ach-card-actions">' +
              '<button type="button" class="ach-detail-btn" data-ach="' + achData + '" aria-label="Full details"><i class="fas fa-info-circle"></i> Full details</button>' +
              viewBtn +
            '</div>' +
          '</div>' +
        '</article>';
      }).join('');

      /* Wire up buttons */
      achievementsGrid.querySelectorAll('.ach-view').forEach(function (btn) {
        if (btn.tagName === 'BUTTON') {
          btn.addEventListener('click', function () { openModal(this.dataset.url, this.dataset.type); });
        }
      });
      achievementsGrid.querySelectorAll('.ach-detail-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          try {
            var a = JSON.parse(this.getAttribute('data-ach'));
            var achDetailHtml = '<div class="detail-detail">' +
              '<div class="detail-icon"><i class="' + (a.icon || 'fas fa-medal') + '"></i></div>' +
              '<h3 class="detail-title">' + escapeHtml(a.title) + '</h3>' +
              '<p class="detail-desc">' + escapeHtml(a.description) + '</p>';
            if (a.media) achDetailHtml += '<button type="button" class="btn btn-cinema btn-primary detail-view-cert" data-modal-view-cert="' + escapeHtml(a.media) + '" data-modal-view-type="image"><i class="fas fa-image"></i> View image</button>';
            else if (a.link) achDetailHtml += '<a href="' + escapeHtml(a.link) + '" target="_blank" rel="noopener" class="btn btn-cinema btn-primary"><i class="fas fa-external-link-alt"></i> Open link</a>';
            achDetailHtml += '</div>';
            openDetailModal(achDetailHtml);
          } catch (e) {}
        });
      });

      /* Glitch observer removed */

      if (achTotalPages > 1) {
        achievementsNav.innerHTML = '<button type="button" class="ach-prev" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>' +
          '<div class="ach-dots">' + Array.from({ length: achTotalPages }, function (_, i) {
            return '<button type="button" class="projects-dot' + (i === achPage ? ' active' : '') + '" data-page="' + i + '"></button>';
          }).join('') + '</div>' +
          '<button type="button" class="ach-next" aria-label="Next"><i class="fas fa-chevron-right"></i></button>';
          
        achievementsNav.querySelector('.ach-prev').addEventListener('click', function () {
          achPage = achPage === 0 ? achTotalPages - 1 : achPage - 1;
          renderAch(true);
          scrollToGrid(achievementsGrid);
        });
        achievementsNav.querySelector('.ach-next').addEventListener('click', function () {
          achPage = achPage === achTotalPages - 1 ? 0 : achPage + 1;
          renderAch(true);
          scrollToGrid(achievementsGrid);
        });
        achievementsNav.querySelectorAll('.ach-dots .projects-dot').forEach(function (d) {
          d.addEventListener('click', function () {
            achPage = parseInt(this.dataset.page, 10);
            renderAch(true);
            scrollToGrid(achievementsGrid);
          });
        });
      } else {
        achievementsNav.innerHTML = '';
      }
    }
    renderAch(false);

    // Counter animation for stats w/ explosion burst
    const statCards = statsGrid.querySelectorAll('.stat-card-premium');
    const section = document.getElementById('achievements');
    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        statCards.forEach(function (card) {
          card.classList.add('stats-anim-start'); // trigger drops
          
          const valEl = card.querySelector('.stat-value');
          const suffix = card.querySelector('.stat-suffix');
          const burst = card.querySelector('.stat-burst');
          const end = parseInt(valEl.dataset.end, 10);
          
          animateNumber(valEl, 0, end, 1500);
          
          // Trigger explosion and suffix bounce when counter almost stops
          setTimeout(() => {
            if (burst) {
              burst.classList.add('burst-active');
              setTimeout(() => burst.classList.remove('burst-active'), 800);
            }
            if (suffix) {
              suffix.classList.add('suffix-popped');
            }
          }, 1450);
        });
        counterObserver.disconnect();
      });
    }, { threshold: 0.3 });
    if (section) counterObserver.observe(section);
  }


  function animateNumber(el, from, to, duration) {
    const start = performance.now();
    function step(now) {
      const t = Math.min((now - start) / duration, 1);
      const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      el.textContent = Math.round(from + (to - from) * ease);
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = to;
    }
    requestAnimationFrame(step);
  }

  // ----- Certifications -----
  function renderCertifications() {
    const certsGrid = document.getElementById('certsGrid');
    const certsNav = document.getElementById('certsNav');
    let certPage = 0;
    const certTotalPages = Math.ceil(certifications.length / CERTS_PER_PAGE);

    function render(isPagination) {
      const start = certPage * CERTS_PER_PAGE;
      const slice = certifications.slice(start, start + CERTS_PER_PAGE);
      
      certsGrid.innerHTML = slice.map(function (c, i) {
        const isPdf = (c.file || '').toLowerCase().endsWith('.pdf');
        const certData = escapeAttr(JSON.stringify({ 
          title: c.title, date: c.date, issuer: c.issuer, 
          description: c.description, file: c.file, 
          type: isPdf ? 'pdf' : 'image', color: c.color, icon: c.icon 
        }));
        
        let cardClass = 'cert-card cert-card-premium';
        if (isPagination) cardClass += ' cert-shuffle-enter';

        return '<article class="' + cardClass + '" style="--shuffle-delay:' + (i * 0.08) + 's">' +
          '<div class="cert-card-inner">' +
            /* FRONT FACE */
            '<div class="cert-front glass-card">' +
              /* Holographic overlay */
              '<div class="cert-holo" aria-hidden="true"></div>' +
              /* Glowing border on hover (CSS conic sweep) */
              '<div class="cert-glow-border" aria-hidden="true"></div>' +
              /* Staggered ribbon reveal */
              '<div class="cert-ribbon" style="--ribbon-delay:' + (0.3 + i * 0.1) + 's"><i class="fas fa-medal"></i></div>' +
              
              '<div class="cert-card-body">' +
                /* Icon with orbit ring and parallax */
                '<div class="cert-icon-parallax" style="--cert-color:' + escapeHtml(c.color) + '">' +
                  '<div class="cert-orbit" aria-hidden="true"></div>' +
                  '<div class="cert-icon-wrap"><i class="' + c.icon + '"></i></div>' +
                '</div>' +
                '<h3 class="cert-title">' + escapeHtml(c.title) + '</h3>' +
                '<p class="cert-date">' + escapeHtml(c.date) + '</p>' +
                '<p class="cert-issuer">' + escapeHtml(c.issuer) + '</p>' +
                '<div class="cert-card-actions">' +
                  '<button type="button" class="cert-detail-btn" data-cert="' + certData + '" aria-label="Full details">Hover to flip <i class="fas fa-sync-alt"></i></button>' +
                '</div>' +
              '</div>' +
            '</div>' +
            
            /* BACK FACE (Details + CTA) */
            '<div class="cert-back glass-card">' +
              '<div class="cert-holo" aria-hidden="true"></div>' +
              '<div class="cert-card-body">' +
                '<h3 class="cert-title">' + escapeHtml(c.title) + '</h3>' +
                '<p class="cert-desc">' + escapeHtml(c.description) + '</p>' +
                '<div class="cert-card-actions" style="margin-top:auto;">' +
                  '<button type="button" class="cert-cta cert-view" data-url="' + escapeHtml(c.file) + '" data-type="' + (isPdf ? 'pdf' : 'image') + '"><span>View Document</span><i class="fas fa-arrow-right"></i></button>' +
                  '<button type="button" class="cert-detail-modal-btn" data-cert="' + certData + '" aria-label="Modal details"><i class="fas fa-info-circle"></i> Info</button>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</article>';
      }).join('');

      /* Wire up buttons */
      certsGrid.querySelectorAll('.cert-view').forEach(function (btn) {
        btn.addEventListener('click', function () { openModal(this.dataset.url, this.dataset.type); });
      });
      
      certsGrid.querySelectorAll('.cert-detail-modal-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          try {
            const c = JSON.parse(this.getAttribute('data-cert'));
            const certDetailHtml = '<div class="detail-detail">' +
              '<div class="detail-icon" style="color:' + escapeHtml(c.color || '#00d4aa') + '"><i class="' + (c.icon || 'fas fa-award') + '"></i></div>' +
              '<h3 class="detail-title">' + escapeHtml(c.title) + '</h3>' +
              '<p class="detail-meta"><span class="detail-date">' + escapeHtml(c.date) + '</span> Â· ' + escapeHtml(c.issuer) + '</p>' +
              '<p class="detail-desc">' + escapeHtml(c.description) + '</p>' +
              (c.file ? '<button type="button" class="btn btn-cinema btn-primary detail-view-cert" data-modal-view-cert="' + escapeHtml(c.file) + '" data-modal-view-type="' + escapeHtml(c.type || 'pdf') + '"><i class="fas fa-external-link-alt"></i> View Certificate</button>' : '') +
              '</div>';
            openDetailModal(certDetailHtml);
          } catch (e) {}
        });
      });

      setupCertAnimations(certsGrid);

      if (certTotalPages > 1) {
        certsNav.innerHTML = '<button type="button" class="certs-prev" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>' +
          '<div class="certs-dots">' + Array.from({ length: certTotalPages }, function (_, i) {
            return '<button type="button" class="projects-dot' + (i === certPage ? ' active' : '') + '" data-page="' + i + '"></button>';
          }).join('') + '</div>' +
          '<button type="button" class="certs-next" aria-label="Next"><i class="fas fa-chevron-right"></i></button>';
          
        certsNav.querySelector('.certs-prev').addEventListener('click', function () {
          certPage = certPage === 0 ? certTotalPages - 1 : certPage - 1;
          render(true);
          scrollToGrid(certsGrid);
        });
        certsNav.querySelector('.certs-next').addEventListener('click', function () {
          certPage = certPage === certTotalPages - 1 ? 0 : certPage + 1;
          render(true);
          scrollToGrid(certsGrid);
        });
        certsNav.querySelectorAll('.certs-dots .projects-dot').forEach(function (d) {
          d.addEventListener('click', function () {
            certPage = parseInt(this.dataset.page, 10);
            render(true);
            scrollToGrid(certsGrid);
          });
        });
      } else {
        certsNav.innerHTML = '';
      }
    }
    
    render(false);
  }

  function setupCertAnimations(grid) {
    if (!grid) return;

    /* Stamp Entrance Observer + Ribbon Stagger */
    const stampObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('cert-stamp-in');
          const ribbons = entry.target.querySelectorAll('.cert-ribbon');
          ribbons.forEach(r => r.classList.add('ribbon-drop'));
          stampObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    grid.querySelectorAll('.cert-card').forEach(card => {
      stampObserver.observe(card);

      /* Icon Parallax & Holo Foil */
      const inner = card.querySelector('.cert-card-inner');
      const front = card.querySelector('.cert-front');
      const back = card.querySelector('.cert-back');
      const icon = card.querySelector('.cert-icon-parallax');
      
      if (inner && icon) {
        card.addEventListener('mousemove', function(e) {
          /* Parallax */
          const r = card.getBoundingClientRect();
          const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
          const ny = ((e.clientY - r.top) / r.height - 0.5) * 2;
          icon.style.transform = `translate(${-nx * 15}px, ${-ny * 15}px)`;
          
          /* Holo Foil Conic gradient variables */
          const mx = ((e.clientX - r.left) / r.width) * 100;
          const my = ((e.clientY - r.top) / r.height) * 100;
          if (front) {
             front.style.setProperty('--mouse-x', `${mx}%`);
             front.style.setProperty('--mouse-y', `${my}%`);
          }
          if (back) {
             back.style.setProperty('--mouse-x', `${mx}%`);
             back.style.setProperty('--mouse-y', `${my}%`);
          }
        });
        
        card.addEventListener('mouseleave', function() {
          icon.style.transform = '';
          if (front) {
             front.style.setProperty('--mouse-x', '50%');
             front.style.setProperty('--mouse-y', '50%');
          }
           if (back) {
             back.style.setProperty('--mouse-x', '50%');
             back.style.setProperty('--mouse-y', '50%');
          }
        });
      }
    });
  }

  // ----- Modal -----
  function openModal(url, type) {
    const modal = document.getElementById('modal');
    const body = modal.querySelector('.modal-body');
    if (!body) return;
    body.classList.remove('modal-body--detail');
    if (type === 'image') {
      body.innerHTML = '<img src="' + escapeHtml(url) + '" alt="Preview" />';
    } else {
      body.innerHTML = '<iframe src="' + escapeHtml(url) + '" title="Document"></iframe>';
    }
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function openDetailModal(html) {
    const modal = document.getElementById('modal');
    const body = modal.querySelector('.modal-body');
    if (!body) return;
    body.classList.add('modal-body--detail');
    body.innerHTML = html;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    body.querySelectorAll('[data-modal-view-cert]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const url = this.getAttribute('data-modal-view-cert');
        const type = this.getAttribute('data-modal-view-type') || 'pdf';
        closeModal();
        setTimeout(function () { openModal(url, type); }, 100);
      });
    });
  }

  function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    const body = modal.querySelector('.modal-body');
    body.innerHTML = '';
    body.classList.remove('modal-body--detail');
  }

  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.querySelector('.modal-backdrop').addEventListener('click', closeModal);

  // ----- Contact form -----
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! Please contact me via LinkedIn or email at cyriljosecky@gmail.com.');
    this.reset();
  });

  // ----- Helpers -----
  function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function escapeAttr(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // ----- Mobile menu -----
  function setupMobileMenu() {
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.header-nav');
    if (!burger || !nav) return;
    burger.addEventListener('click', function () {
      nav.classList.toggle('open');
      burger.classList.toggle('open');
    });
    document.querySelectorAll('.header-link').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        burger.classList.remove('open');
      });
    });
  }

  // ----- 3D Card Tilt Engine -----
  function setup3DCards() {
    // Skip on touch devices (coarse pointer)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    // All card selectors that should get the 3D treatment
    var CARD_SELECTORS = [
      '.timeline-card',
      '.education-card',
      '.project-card',
      '.skill-card',
      '.stat-card-inner',
      '.ach-card',
      '.cert-card-premium',
      '.contact-card-premium',
      '.about-premium-info-item',
      '.about-premium-highlight',
      '.about-premium-img-frame'
    ];

    var MAX_TILT = 12;      // max rotation degrees
    var LIFT_Z   = 18;      // translateZ lift in px when hovered
    var SHADOW_LIFT = '0 32px 80px rgba(0,0,0,0.5), 0 12px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05)';

    // Stagger idle animation phases so all cards don't float identically
    var phaseIndex = 0;

    function applyTo(el) {
      if (el.__tilt3d) return; // already set up
      el.__tilt3d = true;

      // Add 3D classes
      el.classList.add('block-3d');

      // Inject shine overlay
      var shine = document.createElement('div');
      shine.className = 'block-3d-shine';
      // make sure position:relative is set so absolute child works
      var cs = window.getComputedStyle(el);
      if (cs.position === 'static') el.style.position = 'relative';
      el.appendChild(shine);

      // Stagger the idle float animation delay
      var delay = (phaseIndex % 8) * 0.75;
      phaseIndex++;
      el.style.animationDelay = delay + 's';
      el.classList.add('block-3d-idle');

      // ------- Mouse Enter -------
      el.addEventListener('mouseenter', function () {
        this.classList.remove('block-3d-idle');
        this.classList.add('block-3d-active');
      });

      // ------- Mouse Move -------
      el.addEventListener('mousemove', function (e) {
        var rect = this.getBoundingClientRect();
        // Normalized coords: -1 to +1
        var nx = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
        var ny = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;

        // rotateY tilts left-right, rotateX tilts top-bottom (inverted for natural feel)
        var rotY =  nx * MAX_TILT;
        var rotX = -ny * MAX_TILT;

        this.style.transform =
          'perspective(900px)' +
          ' rotateX(' + rotX + 'deg)' +
          ' rotateY(' + rotY + 'deg)' +
          ' translateZ(' + LIFT_Z + 'px)';

        this.style.boxShadow = SHADOW_LIFT;

        // Move shine highlight to cursor position
        var shineX = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1) + '%';
        var shineY = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1) + '%';
        this.style.setProperty('--shine-x', shineX);
        this.style.setProperty('--shine-y', shineY);
      });

      // ------- Mouse Leave -------
      el.addEventListener('mouseleave', function () {
        var self = this;
        // Smooth snap-back via CSS transition
        self.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.6s cubic-bezier(0.16,1,0.3,1)';
        self.style.transform  = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        self.style.boxShadow  = '';

        // Re-enable idle float after snap-back completes
        setTimeout(function () {
          if (document.contains(self)) {
            self.classList.remove('block-3d-active');
            self.style.transition  = '';
            self.style.transform   = '';
            self.classList.add('block-3d-idle');
          }
        }, 620);
      });
    }

    // Apply to all currently existing cards
    function applyAll() {
      CARD_SELECTORS.forEach(function (sel) {
        document.querySelectorAll(sel).forEach(applyTo);
      });
    }

    // Re-apply when paginated grids re-render (projects, certs, achievements)
    // Use a MutationObserver on grid containers
    var gridsToWatch = [
      document.getElementById('projectsGrid'),
      document.getElementById('certsGrid'),
      document.getElementById('achievementsGrid'),
      document.getElementById('educationGrid'),
      document.getElementById('technicalSkills'),
      document.getElementById('cloudSkills'),
      document.getElementById('experienceTimeline'),
      document.getElementById('statsGrid')
    ];

    var observer = new MutationObserver(function () {
      // Small delay so DOM settles after innerHTML updates
      setTimeout(applyAll, 60);
    });

    gridsToWatch.forEach(function (grid) {
      if (grid) observer.observe(grid, { childList: true, subtree: false });
    });

    // Also watch about section for info items (they're in static HTML)
    var aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection, { childList: true, subtree: true });
    }

    applyAll();
  }

  // ----- Scramble Text Revealer -----
  function setupScrambleText() {
    const scrambleElements = document.querySelectorAll('.scramble-text');
    const chars = '!<>-_\\\\/[]{}â€”=+*^?#________';
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (el.dataset.scrambled === 'true') return;
          el.dataset.scrambled = 'true';
          
          el.classList.add('visible');
          const originalText = el.textContent || el.innerText;
          const length = originalText.length;
          let frame = 0;
          
          const maxFrames = 20; // Faster animation, under 1 second
          
          function scramble() {
            let output = '';
            for (let i = 0; i < length; i++) {
              if (originalText[i] === ' ') {
                output += ' ';
                continue;
              }
              // Progress ratio for this specific character
              const charProgress = (frame / maxFrames) - (i / length) * 0.5;
              
              if (charProgress >= 1) {
                output += originalText[i];
              } else if (charProgress > 0) {
                output += chars[Math.floor(Math.random() * chars.length)];
              } else {
                output += chars[Math.floor(Math.random() * chars.length)];
              }
            }
            
            el.textContent = output;
            
            if (frame < maxFrames + (length * 0.5)) {
              frame++;
              requestAnimationFrame(scramble);
            } else {
              el.textContent = originalText;
            }
          }
          
          scramble();
          observer.unobserve(el);
        }
      });
    }, { rootMargin: '0px 0px -100px 0px', threshold: 0.1 });
    
    scrambleElements.forEach(el => observer.observe(el));
  }

  // ----- Glow Cursor & Magnetic Buttons -----
  function initGlowCursor() {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-glow');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', function(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      // Make active when moving
      cursor.classList.add('active');
    });

    document.addEventListener('mouseleave', function() {
      cursor.classList.remove('active');
    });
    
    // Magnetic Buttons
    const magneticBtns = document.querySelectorAll('.btn-hero');
    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', function(e) {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });
      
      btn.addEventListener('mouseleave', function() {
        btn.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  // ----- About: Mouse Parallax Depth Layers -----
  function setupAboutParallax() {
    var section = document.getElementById('about');
    if (!section) return;
    // Touch devices: skip
    if (window.matchMedia('(pointer: coarse)').matches) return;

    var imgFrame  = section.querySelector('.about-premium-img-frame');
    var ringWrap  = section.querySelector('.about-avatar-ring-wrap');
    var badge     = section.querySelector('.about-premium-badge');
    var content   = section.querySelector('.about-premium-content');

    var lerpX = 0, lerpY = 0, targetX = 0, targetY = 0;
    var raf = null;

    function lerp(a, b, t) { return a + (b - a) * t; }

    function tick() {
      lerpX = lerp(lerpX, targetX, 0.08);
      lerpY = lerp(lerpY, targetY, 0.08);

      if (imgFrame)  imgFrame.style.transform  = 'translate(' + (-lerpX * 12) + 'px,' + (-lerpY * 10) + 'px)';
      if (ringWrap)  ringWrap.style.transform   = 'translate(' + (-lerpX * 14) + 'px,' + (-lerpY * 12) + 'px)';
      if (badge)     badge.style.transform      = 'translate(' + ( lerpX * 8)  + 'px,' + ( lerpY * 6)  + 'px)';
      if (content)   content.style.transform    = 'translate(' + ( lerpX * 4)  + 'px,' + ( lerpY * 3)  + 'px)';

      var dist = Math.abs(lerpX - targetX) + Math.abs(lerpY - targetY);
      if (dist > 0.01) raf = requestAnimationFrame(tick);
      else raf = null;
    }

    section.addEventListener('mousemove', function(e) {
      var rect = section.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
      targetY = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(tick);
    });

    section.addEventListener('mouseleave', function() {
      targetX = 0; targetY = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    });
  }

  // ----- About: Info Chip Animated Counters -----
  function setupAboutCounters() {
    var section = document.getElementById('about');
    if (!section) return;

    // Look for info-value elements containing numeric strings and animate them
    var infoItems = section.querySelectorAll('.about-premium-info-item');
    var animated = false;

    var observer = new IntersectionObserver(function(entries) {
      if (animated) return;
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        animated = true;
        observer.disconnect();

        infoItems.forEach(function(item) {
          var valueEl = item.querySelector('.info-value');
          if (!valueEl) return;
          var text = valueEl.textContent.trim();
          // Only animate purely numeric values
          var num = parseInt(text, 10);
          if (!isNaN(num) && String(num) === text) {
            animateNumber(valueEl, 0, num, 1200);
          }
        });
      });
    }, { threshold: 0.4 });

    observer.observe(section);
  }

  // ----- About: Aurora Blobs React to Scroll -----
  function setupAuroraScroll() {
    var section = document.getElementById('about');
    if (!section) return;
    var blobs = section.querySelectorAll('.aurora-blob');
    if (!blobs.length) return;

    var ticking = false;

    function update() {
      var rect = section.getBoundingClientRect();
      var sectionH = section.offsetHeight;
      // Progress: 0 when section top is at viewport bottom, 1 when section bottom at viewport top
      var p = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + sectionH)));

      blobs.forEach(function(blob, i) {
        var dir = i % 2 === 0 ? 1 : -1;
        var shift = (p - 0.5) * 80 * dir;
        blob.style.transform = 'translate(' + (shift * 0.6) + 'px, ' + shift + 'px) scale(' + (0.85 + p * 0.3) + ')';
      });
      ticking = false;
    }

    window.addEventListener('scroll', function() {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  
  // ----- HERO ADVANCED ANIMATIONS & CUSTOM CURSOR -----
  function initHeroCanvasAndCursor() {
    /* 1. Custom Geometric Cursor & Glow Spotlight */
    const cursor = document.getElementById('custom-cursor');
    const spotlight = document.getElementById('glow-spotlight');
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let cursorX = mouseX, cursorY = mouseY;
    let spotX = mouseX, spotY = mouseY;

    window.addEventListener('mousemove', function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function renderCursor() {
      // Lerp for smooth trailing effect
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      spotX += (mouseX - spotX) * 0.1; // Slower trail for spotlight
      spotY += (mouseY - spotY) * 0.1;

      if (cursor) cursor.style.transform = 'translate(' + cursorX + 'px, ' + cursorY + 'px) translate(-50%, -50%)';
      if (spotlight) spotlight.style.transform = 'translate(' + spotX + 'px, ' + spotY + 'px) translate(-50%, -50%)';

      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Add hover states to interactive elements
    const interactives = document.querySelectorAll('a, button, .exp-card-inner, .project-card, .cert-card, .education-card');
    interactives.forEach(function(el) {
      el.addEventListener('mouseenter', function() { if (cursor) cursor.classList.add('cursor-hover'); });
      el.addEventListener('mouseleave', function() { if (cursor) cursor.classList.remove('cursor-hover'); });
    });

    /* 2. Setup Node Constellation Background */
    const nodeCanvas = document.getElementById('hero-nodes');
    if (nodeCanvas) {
      const ctx = nodeCanvas.getContext('2d');
      let nodes = [];
      const numNodes = window.innerWidth < 768 ? 40 : 80;

      function resizeNodes() {
        nodeCanvas.width = window.innerWidth;
        nodeCanvas.height = window.innerHeight;
      }
      window.addEventListener('resize', resizeNodes);
      resizeNodes();

      for (let i = 0; i < numNodes; i++) {
        nodes.push({
          x: Math.random() * nodeCanvas.width,
          y: Math.random() * nodeCanvas.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 1.5 + 0.5
        });
      }

      function drawNodes() {
        ctx.clearRect(0, 0, nodeCanvas.width, nodeCanvas.height);
        
        for (let i = 0; i < nodes.length; i++) {
          let p = nodes[i];
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > nodeCanvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > nodeCanvas.height) p.vy *= -1;

          // Mouse Repel
          let dx = mouseX - p.x;
          let dy = mouseY - p.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            p.x -= dx * 0.02;
            p.y -= dy * 0.02;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 212, 170, 0.4)';
          ctx.fill();

          for (let j = i + 1; j < nodes.length; j++) {
            let p2 = nodes[j];
            let dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist2 < 100) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = 'rgba(0, 212, 170, ' + (1 - dist2/100) + ')';
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
        requestAnimationFrame(drawNodes);
      }
      drawNodes();
    }

    /* 3. Setup Data Rain Matrix Background */
    const matrixCanvas = document.getElementById('hero-matrix');
    if (matrixCanvas) {
      const mCtx = matrixCanvas.getContext('2d');
      const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZdefimporttfkerasfrommodel...';
      const fontSize = 14;
      let columns = [];
      let drops = [];

      function resizeMatrix() {
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
        columns = matrixCanvas.width / fontSize;
        drops = [];
        for(let x = 0; x < columns; x++) drops[x] = Math.random() * -100;
      }
      window.addEventListener('resize', resizeMatrix);
      resizeMatrix();

      function drawMatrix() {
        mCtx.fillStyle = 'rgba(6, 6, 8, 0.1)'; 
        mCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        
        mCtx.fillStyle = 'rgba(0, 212, 170, 0.15)'; 
        mCtx.font = fontSize + 'px "Space Mono", monospace';
        
        for(let i = 0; i < drops.length; i++) {
          const text = chars[Math.floor(Math.random() * chars.length)];
          mCtx.fillText(text, i * fontSize, drops[i] * fontSize);
          
          if(drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i] += 0.5;
        }
        requestAnimationFrame(drawMatrix);
      }
      drawMatrix();
    }

    /* 4. 3D Tilt Parallax & Multi-layer depth for Hero Content */
    const hero = document.querySelector('.hero');
    const heroInner = document.querySelector('.hero-inner');
    if (hero && heroInner) {
      hero.addEventListener('mousemove', function(e) {
        const rect = hero.getBoundingClientRect();
        const hx = e.clientX - rect.left;
        const hy = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((hy - centerY) / centerY) * -10; 
        const rotateY = ((hx - centerX) / centerX) * 10;
        
        heroInner.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';

        const children = heroInner.children;
        for (let i=0; i < children.length; i++) {
           const factor = (i + 1) * 15; 
           children[i].style.transform = 'translateZ(' + factor + 'px)';
        }
      });
      hero.addEventListener('mouseleave', function() {
        heroInner.style.transform = 'rotateX(0deg) rotateY(0deg)';
        const children = heroInner.children;
        for (let i=0; i < children.length; i++) {
           children[i].style.transform = 'translateZ(0px)';
        }
      });
    }

    /* 5. Magnetic CTA Buttons */
    const ctas = document.querySelectorAll('.hero-cta .btn');
    ctas.forEach(function(btn) {
      btn.addEventListener('mousemove', function(e) {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        // Keep translateZ popped out from parallax
        btn.style.transform = 'translateZ(75px) translate(' + (x * 0.3) + 'px, ' + (y * 0.3) + 'px)';
      });
      btn.addEventListener('mouseleave', function() {
        btn.style.transform = 'translateZ(75px) translate(0px, 0px)';
      });
    });

    /* 6. Hero Glitch Script */
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
      // Add text attr for split glitch css pseudo elements
      heroName.setAttribute('data-text', 'Cyril Jose');
      heroName.classList.add('glitch-reveal');
      
      // Trigger glitch briefly on load
      setTimeout(function() {
        heroName.classList.add('is-glitching');
        setTimeout(function() {
          heroName.classList.remove('is-glitching');
          
          // Clear out the individual letter spans and replace with a single text node
          // This isolates the WebKit background-clip bug from the 3D CSS parent transforms!
          heroName.innerHTML = '<span class="hero-name-holo-text">Cyril Jose</span>';
          heroName.classList.remove('staggered-reveal');
        }, 1200);
      }, 500);
    }
  }
// ----- Init -----
  function init() {
    setupNav();
    setupSectionVisibility();
    setupExperience();
    renderEducation();
    renderProjects();
    renderSkills();
    renderAchievements();
    renderCertifications();
    setupMobileMenu();
    setup3DCards();
    initHeroEffects();
    setupScrambleText();
    initGlowCursor();
    setupAboutParallax();
    setupAboutCounters();
    setupAuroraScroll();
    initHeroCanvasAndCursor(); // NEW: Advanced Hero Animations

    // Contact form mock handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        const origHtml = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending...</span>';
        btn.disabled = true;
        setTimeout(function () {
          btn.innerHTML = '<i class="fas fa-check"></i><span>Sent Successfully</span>';
          contactForm.reset();
          setTimeout(function () {
            btn.innerHTML = origHtml;
            btn.disabled = false;
          }, 3000);
        }, 1500);
      });
    }

    // Modal Events
    const modalCloseBtn = document.getElementById('modalClose');
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeModal);
    }
    const modalBackdrop = document.querySelector('.modal-backdrop');
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', closeModal);
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.keyCode === 27) closeModal();
    });

    // Start 3D Visualizer Logic
    const loader = document.getElementById('pageLoader');
    let preloaderViz = null;

    if (document.getElementById('preloader-canvas-container')) {
      preloaderViz = new ParticleTextVisualizer('preloader-canvas-container', true, { h: 0.5, s: 0.7, l: 0.4 }, 12000);
      
      // Sequence
      setTimeout(() => {
        preloaderViz.morphToText('Cyril Jose', () => {
          setTimeout(() => {
            preloaderViz.morphToText('Welcomes', () => {
              setTimeout(() => {
                preloaderViz.morphToText('You', () => {
                  setTimeout(() => {
                    preloaderViz.explodeAndFade(() => {
                      if (loader) loader.classList.add('loaded');
                      setTimeout(() => preloaderViz.destroy(), 1000); // cleanup
                    });
                  }, 800);
                });
              }, 600);
            });
          }, 600);
        });
      }, 500);
    } else {
      if (loader) loader.classList.add('loaded');
    }

    // Hero Typewriter Logic
    const heroViz = new ParticleTextVisualizer('hero-particles-container', false, { h: 0.45, s: 0.7, l: 0.5 }, 4000, 12);
    let heroPhraseIndex = 0;
    
    function cycleHeroText() {
        if (!heroViz || heroViz.destroyed) return;
        let word = typewriterPhrases[heroPhraseIndex].toUpperCase();
        
        if (word.includes('/') && !word.includes(' ')) {
          word = word.split('/').join('\n');
        } else if (word.includes(' ') && !word.includes('\n')) {
          const words = word.split(' ');
          if (words.length === 2) {
            word = words.join('\n');
          } else if (words.length >= 3) {
            const mid = Math.ceil(words.length / 2);
            word = words.slice(0, mid).join(' ') + '\n' + words.slice(mid).join(' ');
          }
        }

        heroViz.morphToText(word, () => {
            setTimeout(() => {
                heroViz.morphToCircle();
                setTimeout(() => {
                    heroPhraseIndex = (heroPhraseIndex + 1) % typewriterPhrases.length;
                    cycleHeroText();
                }, 1500);
            }, 2000);
        });
    }
    setTimeout(() => cycleHeroText(), 4000); // start hero particles after preloader is mostly done

    // Skills Particles Logic — compact sphere (radius 4) to fill the dedicated stage panel
    const skillsViz = new ParticleTextVisualizer('skills-particles-container', false, { h: 0.72, s: 0.8, l: 0.6 }, 4000, 4);
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      // Use document-level delegation so hovering cards in either category triggers the stage
      skillsSection.addEventListener('mouseover', function(e) {
        const card = e.target.closest('.skill-card');
        if (card) {
          const nameEl = card.querySelector('.skill-name');
          const text = nameEl ? nameEl.textContent.trim().toUpperCase() : '';
          let word = text;

          // Smart wrapping for multi-word skill names
          if (word.includes('/')) {
            word = word.split('/').join('\n');
          } else if (word.includes(' ')) {
            // Split long names into 2 lines at the midpoint word
            const words = word.split(' ');
            if (words.length === 2) {
              word = words.join('\n');
            } else if (words.length >= 3) {
              const mid = Math.ceil(words.length / 2);
              word = words.slice(0, mid).join(' ') + '\n' + words.slice(mid).join(' ');
            }
          }

          if (word) skillsViz.morphToText(word);
        }
      });

      skillsSection.addEventListener('mouseout', function(e) {
        const card = e.target.closest('.skill-card');
        // Only revert to sphere if we're actually leaving a card (not just moving between child elements)
        if (card && !card.contains(e.relatedTarget)) {
          skillsViz.morphToCircle();
        }
      });
    }
  }

  // Kickoff
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();


