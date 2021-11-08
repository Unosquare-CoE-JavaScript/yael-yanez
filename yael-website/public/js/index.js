let isFistRender = true;
let isSkillsTypingAnimationOver = false;
let fullPage;
let backToTopBtn;

const disableScrolling = () => {
  if (fullPage) {
    fullPage.setMouseWheelScrolling(false);
    fullPage.setAllowScrolling(false);
  }
};

const enableScrolling = () => {
  if (fullPage) {
    fullPage.setMouseWheelScrolling(true);
    fullPage.setAllowScrolling(true);
  }
};

const animateHome = () => {
  const jumboTitle = document.querySelector('#jumbo-title');
  const jumboSubtitle = document.querySelector('#jumbo-subtitle');
  const jumboBounce = document.querySelector('#jumbo-bounce');
  const jumboScroll = document.querySelector('#jumbo-scroll');
  const mainLogo = document.querySelector('#main-logo');

  anime
    .timeline({ easing: 'easeOutQuart', duration: 3000 })
    .add({ targets: jumboTitle, opacity: 1, translateY: [100, 0] })
    .add({ targets: jumboSubtitle, opacity: 1 }, '-=1500')
    .add({ targets: jumboScroll, opacity: 1 }, '-=2500')
    .add({ targets: mainLogo, opacity: 1 }, '-=3000');

  anime({
    targets: jumboBounce,
    translateY: [-10, 0],
    easing: 'easeInQuad',
    duration: 800,
    direction: 'alternate',
    left: '240px',
    loop: true,
  });
};

const animateAbout = () => {
  const aboutMeTitle = document.querySelector('#about-me-title');
  const aboutMeInfo = document.querySelector('#about-me-info');
  const attributes = document.querySelectorAll('.attribute');
  const attributesContainer = document.querySelectorAll(
    '#attributes-container'
  );

  const aboutTl = anime
    .timeline({ easing: 'easeOutQuart', duration: 2000 })
    .add({ targets: aboutMeTitle, opacity: 1 }, 0)
    .add({ targets: aboutMeInfo, opacity: 1 }, '-=1000');

  _.shuffle(attributes).forEach((attribute) =>
    aboutTl.add({ targets: attribute, opacity: 1, duration: 2300 }, '-=1500')
  );

  aboutTl
    .add({ targets: attributesContainer, backgroundColor: '#fff' }, '-=2000')
    .add({ targets: attributes, color: '#000' }, '-=1500');
};

const animateSkills = () => {
  const skillsTitle = document.querySelector('#skills-title');
  const skills = document.querySelectorAll('.skill');
  const skillsColors = [
    '#f7e018',
    '#304ff3',
    '#87c248',
    '#06ac4e',
    '#e84f32',
    '#5fd3f3',
    '#623294',
    '#c53d14',
    '#2584ff',
    '#ec4f18',
    '#274de4',
    '#d56fa3',
  ];

  const addHoverToItems = () => {
    skills.forEach((skill) => skill.classList.remove('pointer-none'));
  };

  const typed = !isSkillsTypingAnimationOver
    ? new Typed(skillsTitle, {
        strings: ['Never stop learning<span class="text-primary">.</span>'],
        showCursor: false,
        typeSpeed: 80,
        onBegin: disableScrolling,
        onComplete: enableScrolling,
      })
    : undefined;

  const startSkillsAnimation = () => {
    isSkillsTypingAnimationOver = true;

    enableScrolling();

    const skillsTl = anime
      .timeline({
        easing: 'easeOutQuart',
        duration: 1000,
        complete: addHoverToItems,
      })
      .add({ targets: skillsTitle, borderColor: '#304ff3' })
      .add(
        { targets: skillsTitle, boxShadow: '0px 0px 15px 5px #304ff380' },
        '-=1300'
      );

    _.shuffle(skills).forEach((skill) =>
      skillsTl.add({ targets: skill, opacity: 1 }, '-=500')
    );

    skills.forEach((skill, index) =>
      skillsTl.add(
        {
          targets: skill,
          duration: 1300,
          backgroundColor: ['#000', skillsColors[index], '#000'],
        },
        '-=1200'
      )
    );
  };

  if (typed) {
    typed.options.onComplete = startSkillsAnimation;
    typed.start();
  }
};

const handleAfterLoad = (origin, { index }) => {
  const actionMap = {
    0: animateHome,
    1: animateAbout,
    2: animateSkills,
    default: () => {},
  };

  if (backToTopBtn) {
    const backToTopAnimationOptions = {
      targets: backToTopBtn,
      easing: 'easeOutQuad',
      duration: 300,
    };

    if (index === 0) {
      anime({ ...backToTopAnimationOptions, translateX: 0 });
    } else {
      anime({ ...backToTopAnimationOptions, translateX: -60 });
    }
  }

  if (isFistRender) {
    if (index === 0) actionMap[index]();
  } else {
    if (index !== 0)
      actionMap[index] ? actionMap[index]() : actionMap.default();
  }
};

const hanldeAfterRender = () => {
  isFistRender = false;
};

document.body.onload = () => {
  backToTopBtn = document.querySelector('#back-to-top');

  fullPage = new fullpage('#fullpage', {
    licenseKey: FULL_SCREEN_LICENSE,
    navigation: true,
    scrollingSpeed: 700,
    fixedElements: ['#back-to-top'],
    controlArrows: true,
    anchors: ['jumbo', 'about-me', 'skills', 'footer'],
    afterLoad: handleAfterLoad,
    afterRender: hanldeAfterRender,
  });

  if (backToTopBtn && fullPage)
    backToTopBtn.onclick = () => {
      fullPage.moveTo('jumbo');
    };
};
