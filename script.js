(function () {
  'use strict';

  // ----- Data -----
  const typewriterPhrases = ['AI Engineer', 'ML Enthusiast', 'GenAI Practitioner', 'NLP Practitioner'];
  const technicalSkills = [
    { name: 'Python', percentage: 95 },
    { name: 'Machine Learning', percentage: 90 },
    { name: 'Deep Learning', percentage: 88 },
    { name: 'TensorFlow/PyTorch', percentage: 85 },
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
    { icon: 'fas fa-trophy', title: 'Best Performer Award — Webfolks', description: 'Recognized as Best Performer at Webfolks for strong delivery, consistency, and impact in day-to-day development and automation work.', media: 'public/img/achievements/best-performer-award-webfolks.jpeg' },
    { icon: 'fas fa-medal', title: 'Top Performer in AI Solutioning', description: 'Recognized as one of the top 6-15 performers out of 800+ applicants in the AI Solutioning assignment with ResoluteAI Software Private Limited.', media: 'public/img/achievements/ResoluteAI-Software-Private-Limitedachievement-1.jpg' },
    { icon: 'fas fa-code-branch', title: 'Open Source Contributor', description: 'Active contributor to machine learning projects on GitHub with multiple repositories and collaborations.', link: 'https://github.com/Cyriloo7?tab=repositories' },
    { icon: 'fas fa-graduation-cap', title: 'B.Tech Graduation', description: 'Proud to graduate from Vellore Institute of Technology (VIT) with a B.Tech in Computer Science and Engineering.', media: 'public/img/achievements/btech-graduation-achievement-2.jpg' },
    { icon: 'fas fa-users', title: 'AIML Member, Bionary Club, VIT Chennai', description: 'Contributed to AI/ML initiatives at VIT\'s Bionary Club, collaborating with peers on innovative projects and workshops.', media: 'public/img/achievements/aiml-bionary-club-achievement.jpg' }
  ];
  const certifications = [
    { icon: 'fas fa-cogs', title: 'MLOps Foundations', date: 'Jul 2024', issuer: 'iNeuron.ai', description: 'Gained expertise in git, GitHub, Docker, CI/CD, DVC, and MLflow.', file: 'public/img/certificates/MLOps Foundations.pdf', color: '#eab308' },
    { icon: 'fas fa-brain', title: 'Generative AI with Large Language Models', date: 'May 2024', issuer: 'DeepLearning.AI, AWS', description: 'Specialized in LLM training, fine-tuning, PEFT configuration, and RLHF.', file: 'public/img/certificates/Generative AI with Large Language Models.pdf', color: '#a855f7' },
    { icon: 'fas fa-database', title: 'Big Data Analysis Using Deep Learning (NUS)', date: 'Dec 2023 – Jan 2024', issuer: 'NUS', description: 'Internship – Used T5-small and Pegasus models to generate legal verdicts.', file: 'public/img/certificates/Big Data Analysis using Deep Learning - nus.jpg', color: '#2dd4bf' },
    { icon: 'fab fa-aws', title: 'Big Data Analysis Using Deep Learning (AWS)', date: 'Dec 2023 – Jan 2024', issuer: 'AWS', description: 'Optimized model performance by 20% using Amazon SageMaker.', file: 'public/img/certificates/Big Data Analysis using Deep Learning - aws.jpg', color: '#f97316' },
    { icon: 'fab fa-microsoft', title: 'Microsoft Azure Fundamentals', date: 'May 2023', issuer: 'Microsoft', description: 'Comprehensive understanding of cloud computing concepts.', file: 'public/img/certificates/Azure AI900 Score Report.pdf', color: '#3b82f6' },
    { icon: 'fas fa-chart-line', title: 'Data Analytics Real-World Projects in Python', date: 'Sept 2023', issuer: 'Udemy', description: 'Mastered data cleaning, manipulation, and visualization using Pandas, Seaborn, and Plotly.', file: 'public/img/certificates/Data Analytics Real-World Projects in Python.pdf', color: '#22c55e' },
    { icon: 'fab fa-google', title: 'Artificial Intelligence Powered by Google Developers', date: 'Mar 2023 – Jul 2023', issuer: 'Smart Bridge', description: 'Practical experience in AI, cloud technologies, TensorFlow models, and NLP.', file: 'public/img/certificates/Artificial Intelligence Powered by Google Developers.pdf', color: '#ef4444' }
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
    { icon: 'fab fa-github', value: 21, label: 'Repositories', link: 'https://github.com/Cyriloo7?tab=repositories' },
    { icon: 'fas fa-graduation-cap', value: 4, label: 'Years Education' }
  ];
  const PROJECTS_PER_PAGE = 6;
  const ACHIEVEMENTS_PER_PAGE = 3;
  const CERTS_PER_PAGE = 6;

  // ----- Typewriter -----
  function runTypewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function tick() {
      const phrase = typewriterPhrases[phraseIndex];
      if (isDeleting) {
        charIndex--;
        el.textContent = phrase.slice(0, charIndex);
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
          setTimeout(tick, 400);
          return;
        }
        setTimeout(tick, 50);
        return;
      }
      charIndex++;
      el.textContent = phrase.slice(0, charIndex);
      if (charIndex === phrase.length) {
        isDeleting = true;
        setTimeout(tick, 2000);
        return;
      }
      setTimeout(tick, 80);
    }
    setTimeout(tick, 500);
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

  // ----- Experience: Timeline only -----
  function setupExperience() {
    renderExperienceTimeline();
  }

  function getFileType(filePath) {
    return String(filePath || '').toLowerCase().endsWith('.pdf') ? 'pdf' : 'image';
  }

  function renderExperienceTimeline() {
    const timeline = document.getElementById('experienceTimeline');
    if (!timeline) return;

    timeline.innerHTML = experiences.map(function (e) {
      const date = e.period || '';
      const attachments = Array.isArray(e.attachments) ? e.attachments : [];
      const attachmentsHtml = attachments.length
        ? '<div class="timeline-attachments">' +
          '<span class="timeline-attachments-label">Attachments</span>' +
          attachments.map(function (a) {
            const url = a.file || '';
            const type = getFileType(url);
            return '<button type="button" class="timeline-attachment-btn" data-url="' + escapeHtml(url) + '" data-type="' + escapeHtml(type) + '">' +
              '<i class="fas ' + (type === 'pdf' ? 'fa-file-pdf' : 'fa-image') + '"></i>' +
              '<span>' + escapeHtml(a.title || 'View') + '</span>' +
              '</button>';
          }).join('') +
          '</div>'
        : '';

      return '<article class="timeline-item">' +
        '<div class="timeline-node" aria-hidden="true"></div>' +
        '<div class="timeline-card">' +
        '<div class="timeline-card-glow"></div>' +
        '<div class="timeline-card-head">' +
        '<div class="timeline-icon"><i class="' + escapeHtml(e.icon || 'fas fa-briefcase') + '"></i></div>' +
        '<div class="timeline-meta">' +
        '<span class="timeline-date">' + escapeHtml(date) + '</span>' +
        '<h3>' + escapeHtml(e.title || '') + '</h3>' +
        '<p class="timeline-company">' + escapeHtml(e.company || '') + '</p>' +
        '</div></div>' +
        '<p class="timeline-desc">' + escapeHtml(e.description || '') + '</p>' +
        (e.badge ? '<span class="timeline-badge">' + escapeHtml(e.badge) + '</span>' : '') +
        attachmentsHtml +
        '</div>' +
        '</article>';
    }).join('');

    timeline.querySelectorAll('.timeline-attachment-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        openModal(this.dataset.url, this.dataset.type);
      });
    });
  }

  // ----- Education -----
  function renderEducation() {
    const grid = document.getElementById('educationGrid');
    if (!grid) return;

    grid.innerHTML = education.map(function (e) {
      const media = e.media && e.media.file ? e.media : null;
      const type = media ? getFileType(media.file) : 'image';

      const thumb = media
        ? (type === 'pdf'
          ? '<div class="education-thumb education-thumb--pdf"><i class="fas fa-file-pdf" aria-hidden="true"></i></div>'
          : '<div class="education-thumb"><img src="' + escapeHtml(media.file) + '" alt="" loading="lazy" /></div>')
        : '<div class="education-thumb education-thumb--pdf"><i class="fas fa-graduation-cap" aria-hidden="true"></i></div>';

      const metaLine = [
        e.period ? '<span class="education-meta-item"><i class="fas fa-calendar-alt"></i>' + escapeHtml(e.period) + '</span>' : '',
        e.location ? '<span class="education-meta-item"><i class="fas fa-location-dot"></i>' + escapeHtml(e.location) + '</span>' : ''
      ].filter(Boolean).join('');

      const scoreLine = (e.scoreLabel && e.scoreValue)
        ? '<p class="education-score"><span class="education-score-label">' + escapeHtml(e.scoreLabel) + ':</span> <span class="education-score-value">' + escapeHtml(e.scoreValue) + '</span></p>'
        : '';

      const viewBtn = media
        ? '<button type="button" class="education-view" data-url="' + escapeHtml(media.file) + '" data-type="' + escapeHtml(type) + '">' +
          '<span>View</span><i class="fas fa-arrow-right"></i>' +
          '</button>'
        : '';

      return '<article class="education-card glass-card">' +
        '<div class="education-card-glow" aria-hidden="true"></div>' +
        thumb +
        '<div class="education-body">' +
        (metaLine ? '<div class="education-meta">' + metaLine + '</div>' : '') +
        '<h3 class="education-title">' + escapeHtml(e.title || '') + '</h3>' +
        '<p class="education-institute">' + escapeHtml(e.institute || '') + '</p>' +
        scoreLine +
        (viewBtn ? '<div class="education-actions">' + viewBtn + '</div>' : '') +
        '</div>' +
        '</article>';
    }).join('');

    grid.querySelectorAll('.education-view').forEach(function (btn) {
      btn.addEventListener('click', function () {
        openModal(this.dataset.url, this.dataset.type);
      });
    });
  }

  // ----- Projects -----
  function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    const nav = document.getElementById('projectsNav');
    let page = 0;
    const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

    function render() {
      const start = page * PROJECTS_PER_PAGE;
      const slice = projects.slice(start, start + PROJECTS_PER_PAGE);
      grid.innerHTML = slice.map(function (p) {
        const tagsHtml = p.tags.map(function (t) { return '<span class="project-tag">' + escapeHtml(t) + '</span>'; }).join('');
        const projectData = escapeAttr(JSON.stringify({ title: p.title, description: p.description, tags: p.tags, github: p.github, color: p.color }));
        return '<div class="project-card">' +
          '<div class="project-image-wrap">' +
          '<img src="' + escapeHtml(p.image) + '" alt="' + escapeHtml(p.title) + '" loading="lazy" />' +
          '<div class="project-image-overlay" aria-hidden="true"></div>' +
          '</div>' +
          '<div class="project-card-content">' +
          '<h3 style="color:' + escapeHtml(p.color) + '"><span>' + escapeHtml(p.title) + '</span></h3>' +
          '<p>' + escapeHtml(p.description) + '</p>' +
          '<div class="project-tags">' + tagsHtml + '</div>' +
          '<div class="project-card-actions">' +
          '<button type="button" class="project-detail-btn" data-project="' + projectData + '" aria-label="Full details"><i class="fas fa-info-circle"></i> Full details</button>' +
          '<a href="' + escapeHtml(p.github) + '" target="_blank" rel="noopener" class="project-link"><i class="fab fa-github"></i> View Code</a>' +
          '</div></div>' +
          '</div>';
      }).join('');

      grid.querySelectorAll('.project-detail-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          try {
            var p = JSON.parse(this.getAttribute('data-project'));
            var tagsHtml = (p.tags || []).map(function (t) { return '<span class="project-tag">' + escapeHtml(t) + '</span>'; }).join('');
            var projectDetailHtml = '<div class="detail-detail">' +
              '<h3 class="detail-title" style="color:' + escapeHtml(p.color || '#00d4aa') + '">' + escapeHtml(p.title) + '</h3>' +
              '<p class="detail-desc">' + escapeHtml(p.description) + '</p>' +
              (tagsHtml ? '<div class="detail-tags">' + tagsHtml + '</div>' : '') +
              (p.github ? '<a href="' + escapeHtml(p.github) + '" target="_blank" rel="noopener" class="btn btn-cinema btn-primary"><i class="fab fa-github"></i> View Code</a>' : '') +
              '</div>';
            openDetailModal(projectDetailHtml);
          } catch (e) {}
        });
      });

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
    }
    render();
  }

  // ----- Skills -----
  function renderSkills() {
    function renderSkillCards(data, containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;
      container.innerHTML = data.map(function (s, index) {
        const circumference = 2 * Math.PI * 42;
        const offset = circumference - (s.percentage / 100) * circumference;
        return '<div class="skill-card" data-percentage="' + s.percentage + '">' +
          '<div class="skill-card-inner">' +
          '<div class="skill-progress-ring">' +
          '<svg class="skill-ring-svg" viewBox="0 0 100 100">' +
          '<circle class="skill-ring-bg" cx="50" cy="50" r="42"></circle>' +
          '<circle class="skill-ring-progress" cx="50" cy="50" r="42" stroke="url(#skillGradient)" stroke-dasharray="' + circumference + '" stroke-dashoffset="' + circumference + '" data-percentage="' + s.percentage + '"></circle>' +
          '</svg>' +
          '<div class="skill-percentage">' + s.percentage + '<span>%</span></div>' +
          '</div>' +
          '<h4 class="skill-name">' + escapeHtml(s.name) + '</h4>' +
          '</div>' +
          '</div>';
      }).join('');
      
      // Animate progress rings when section becomes visible
      const section = document.getElementById('skills');
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            container.querySelectorAll('.skill-ring-progress').forEach(function(circle) {
              const percentage = parseInt(circle.dataset.percentage, 10);
              const circumference = 2 * Math.PI * 42;
              const offset = circumference - (percentage / 100) * circumference;
              circle.style.strokeDashoffset = offset;
            });
            observer.disconnect();
          }
        });
      }, { threshold: 0.2 });
      if (section) observer.observe(section);
    }
    renderSkillCards(technicalSkills, 'technicalSkills');
    renderSkillCards(cloudSkills, 'cloudSkills');
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

    statsGrid.innerHTML = stats.map(function (s, i) {
      let extra = '';
      if (s.link) extra = '<a href="' + escapeHtml(s.link) + '" target="_blank" rel="noopener" class="stat-cta">View <i class="fas fa-arrow-up-right-from-square"></i></a>';
      return '<div class="stat-card stat-card-premium reveal" data-reveal style="--delay:' + (i * 0.08) + 's"><div class="stat-card-inner"><div class="stat-icon-wrap"><i class="' + s.icon + '"></i></div><div class="stat-value" data-end="' + s.value + '">0</div><p class="stat-label">' + escapeHtml(s.label) + '</p>' + extra + '</div></div>';
    }).join('');

    let achPage = 0;
    const achTotalPages = Math.ceil(achievements.length / ACHIEVEMENTS_PER_PAGE);

    function renderAch() {
      const start = achPage * ACHIEVEMENTS_PER_PAGE;
      const slice = achievements.slice(start, start + ACHIEVEMENTS_PER_PAGE);
      achievementsGrid.innerHTML = slice.map(function (a) {
        var mediaBlock = '';
        if (a.media) {
          mediaBlock = '<div class="ach-media"><img src="' + escapeHtml(a.media) + '" alt="" loading="lazy"/><div class="ach-media-overlay"></div></div>';
        } else if (a.link && a.link.indexOf('github') !== -1) {
          mediaBlock = '<div class="ach-media ach-media-icon"><i class="fab fa-github" aria-hidden="true"></i></div>';
        }
        var viewBtn = '';
        if (a.media) viewBtn = '<button type="button" class="ach-cta ach-view" data-url="' + escapeHtml(a.media) + '" data-type="image"><span>View</span><i class="fas fa-arrow-right"></i></button>';
        else if (a.link) viewBtn = '<a href="' + escapeHtml(a.link) + '" target="_blank" rel="noopener" class="ach-cta"><span>View</span><i class="fas fa-arrow-up-right-from-square"></i></a>';
        var hasMediaBlock = !!a.media || !!(a.link && a.link.indexOf('github') !== -1);
        var cardClass = 'achievement-card ach-card glass-card' + (hasMediaBlock ? ' ach-card-has-media' : '');
        var achData = escapeAttr(JSON.stringify({ title: a.title, description: a.description, icon: a.icon, media: a.media || '', link: a.link || '' }));
        return '<article class="' + cardClass + '">' +
          '<div class="ach-card-glow" aria-hidden="true"></div>' +
          mediaBlock +
          '<div class="ach-card-body">' +
          '<div class="ach-icon-wrap"><i class="' + a.icon + '"></i></div>' +
          '<h3 class="ach-title">' + escapeHtml(a.title) + '</h3>' +
          '<p class="ach-desc">' + escapeHtml(a.description) + '</p>' +
          '<div class="ach-card-actions">' +
          '<button type="button" class="ach-detail-btn" data-ach="' + achData + '" aria-label="Full details"><i class="fas fa-info-circle"></i> Full details</button>' +
          viewBtn + '</div></article>';
      }).join('');

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

      if (achTotalPages > 1) {
        achievementsNav.innerHTML = '<button type="button" class="ach-prev" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>' +
          '<div class="ach-dots">' + Array.from({ length: achTotalPages }, function (_, i) {
            return '<button type="button" class="projects-dot' + (i === achPage ? ' active' : '') + '" data-page="' + i + '"></button>';
          }).join('') + '</div>' +
          '<button type="button" class="ach-next" aria-label="Next"><i class="fas fa-chevron-right"></i></button>';
        achievementsNav.querySelector('.ach-prev').addEventListener('click', function () {
          achPage = achPage === 0 ? achTotalPages - 1 : achPage - 1;
          renderAch();
          scrollToGrid(achievementsGrid);
        });
        achievementsNav.querySelector('.ach-next').addEventListener('click', function () {
          achPage = achPage === achTotalPages - 1 ? 0 : achPage + 1;
          renderAch();
          scrollToGrid(achievementsGrid);
        });
        achievementsNav.querySelectorAll('.ach-dots .projects-dot').forEach(function (d) {
          d.addEventListener('click', function () {
            achPage = parseInt(this.dataset.page, 10);
            renderAch();
            scrollToGrid(achievementsGrid);
          });
        });
      } else {
        achievementsNav.innerHTML = '';
      }
    }
    renderAch();

    // Counter animation for stats
    const statValues = statsGrid.querySelectorAll('.stat-value');
    const section = document.getElementById('achievements');
    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        statValues.forEach(function (el) {
          const end = parseInt(el.dataset.end, 10);
          animateNumber(el, 0, end, 1500);
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

    function render() {
      const start = certPage * CERTS_PER_PAGE;
      const slice = certifications.slice(start, start + CERTS_PER_PAGE);
      certsGrid.innerHTML = slice.map(function (c, i) {
        const isPdf = (c.file || '').toLowerCase().endsWith('.pdf');
        const certData = escapeAttr(JSON.stringify({ title: c.title, date: c.date, issuer: c.issuer, description: c.description, file: c.file, type: isPdf ? 'pdf' : 'image', color: c.color, icon: c.icon }));
        return '<article class="cert-card cert-card-premium glass-card">' +
          '<div class="cert-card-glow" aria-hidden="true"></div>' +
          '<div class="cert-card-body">' +
          '<div class="cert-icon-wrap" style="--cert-color:' + escapeHtml(c.color) + '"><i class="' + c.icon + '"></i></div>' +
          '<h3 class="cert-title">' + escapeHtml(c.title) + '</h3>' +
          '<p class="cert-date">' + escapeHtml(c.date) + '</p>' +
          '<p class="cert-issuer">' + escapeHtml(c.issuer) + '</p>' +
          '<p class="cert-desc">' + escapeHtml(c.description) + '</p>' +
          '<div class="cert-card-actions">' +
          '<button type="button" class="cert-detail-btn" data-cert="' + certData + '" aria-label="Full details"><i class="fas fa-info-circle"></i> Full details</button>' +
          '<button type="button" class="cert-cta cert-view" data-url="' + escapeHtml(c.file) + '" data-type="' + (isPdf ? 'pdf' : 'image') + '"><span>View Certificate</span><i class="fas fa-arrow-right"></i></button>' +
          '</div></div></article>';
      }).join('');

      certsGrid.querySelectorAll('.cert-view').forEach(function (btn) {
        btn.addEventListener('click', function () { openModal(this.dataset.url, this.dataset.type); });
      });
      certsGrid.querySelectorAll('.cert-detail-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          try {
            const c = JSON.parse(this.getAttribute('data-cert'));
            const certDetailHtml = '<div class="detail-detail">' +
              '<div class="detail-icon" style="color:' + escapeHtml(c.color || '#00d4aa') + '"><i class="' + (c.icon || 'fas fa-award') + '"></i></div>' +
              '<h3 class="detail-title">' + escapeHtml(c.title) + '</h3>' +
              '<p class="detail-meta"><span class="detail-date">' + escapeHtml(c.date) + '</span> · ' + escapeHtml(c.issuer) + '</p>' +
              '<p class="detail-desc">' + escapeHtml(c.description) + '</p>' +
              (c.file ? '<button type="button" class="btn btn-cinema btn-primary detail-view-cert" data-modal-view-cert="' + escapeHtml(c.file) + '" data-modal-view-type="' + escapeHtml(c.type || 'pdf') + '"><i class="fas fa-external-link-alt"></i> View Certificate</button>' : '') +
              '</div>';
            openDetailModal(certDetailHtml);
          } catch (e) {}
        });
      });

      if (certTotalPages > 1) {
        certsNav.innerHTML = '<button type="button" class="certs-prev" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>' +
          '<div class="certs-dots">' + Array.from({ length: certTotalPages }, function (_, i) {
            return '<button type="button" class="projects-dot' + (i === certPage ? ' active' : '') + '" data-page="' + i + '"></button>';
          }).join('') + '</div>' +
          '<button type="button" class="certs-next" aria-label="Next"><i class="fas fa-chevron-right"></i></button>';
        certsNav.querySelector('.certs-prev').addEventListener('click', function () {
          certPage = certPage === 0 ? certTotalPages - 1 : certPage - 1;
          render();
          scrollToGrid(certsGrid);
        });
        certsNav.querySelector('.certs-next').addEventListener('click', function () {
          certPage = certPage === certTotalPages - 1 ? 0 : certPage + 1;
          render();
          scrollToGrid(certsGrid);
        });
        certsNav.querySelectorAll('.certs-dots .projects-dot').forEach(function (d) {
          d.addEventListener('click', function () {
            certPage = parseInt(this.dataset.page, 10);
            render();
            scrollToGrid(certsGrid);
          });
        });
      } else {
        certsNav.innerHTML = '';
      }
    }
    render();
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

  // ----- Init -----
  runTypewriter();
  setupNav();
  setupSectionVisibility();
  setupExperience();
  renderEducation();
  renderProjects();
  renderSkills();
  renderAchievements();
  renderCertifications();
  setupMobileMenu();
})();
