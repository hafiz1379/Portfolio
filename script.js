window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('header--open-menu');
  } else {
    document.body.classList.remove('header--open-menu');
  }
});

// Popup window

const projectCard = [
  {
    id: '0',
    image: './images/work-0.png',
    title: 'Tonic',
    creatorName: 'Canopy',
    creatorPos: 'Back End Dev',
    creatorYear: '2015',
    descriptionShort:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionLong1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    descriptionLong2:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    language1: 'HTML',
    language2: 'Ruby on rails',
    language3: 'CSS',
    language4: 'Javascript',
    language5: 'Bootstrap',
    buttonOpen: 'See project',
    buttonLive: 'See live',
    liveLink: 'https://hafiz1379.github.io/Portfolio-desktop-version/',
    buttonSource: 'See source',
    sourceLink:
      'https://github.com/hafiz1379/Portfolio-desktop-version/tree/main',
  },

  {
    id: '1',
    image: './images/work-1.png',
    title: 'Multi-Post Stories',
    creatorName: 'Facebook',
    creatorPos: 'Full Stack Dev',
    creatorYear: '2015',
    descriptionShort:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    descriptionLong1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    descriptionLong2:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    language1: 'HTML',
    language2: 'Ruby on rails',
    language3: 'CSS',
    language4: 'Javascript',
    language5: 'Bootstrap',
    buttonOpen: 'See project',
    buttonLive: 'See live',
    liveLink: 'https://hafiz1379.github.io/Portfolio-desktop-version/',
    buttonSource: 'See source',
    sourceLink:
      'https://github.com/hafiz1379/Portfolio-desktop-version/tree/main',
  },

  {
    id: '2',
    image: './images/work-2.png',
    title: 'Facebook 360',
    creatorName: 'Facebook',
    creatorPos: 'Full Stack Dev',
    creatorYear: '2015',
    descriptionShort:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    descriptionLong1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    descriptionLong2:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    language1: 'HTML',
    language2: 'Ruby on rails',
    language3: 'CSS',
    language4: 'Javascript',
    language5: 'Bootstrap',
    buttonOpen: 'See project',
    buttonLive: 'See live',
    liveLink: 'https://hafiz1379.github.io/Portfolio-desktop-version/',
    buttonSource: 'See source',
    sourceLink:
      'https://github.com/hafiz1379/Portfolio-desktop-version/tree/main',
  },

  {
    id: '3',
    image: './images/work-3.png',
    title: 'Uber Navigation',
    creatorName: 'Uber',
    creatorPos: 'Lead Developer',
    creatorYear: '2018',
    descriptionShort:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    descriptionLong1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    descriptionLong2:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    language1: 'HTML',
    language2: 'Ruby on rails',
    language3: 'CSS',
    language4: 'Javascript',
    language5: 'Bootstrap',
    buttonOpen: 'See project',
    buttonLive: 'See live',
    liveLink: 'https://hafiz1379.github.io/Portfolio-desktop-version/',
    buttonSource: 'See source',
    sourceLink:
      'https://github.com/hafiz1379/Portfolio-desktop-version/tree/main',
  },
];

const projectContainer = document.querySelector('.work');

const createProjectCards = () => {
  projectCard.map((projectInfo) => {
    const createProject = document.createElement('article');
    createProject.classList.add('project');

    if (projectInfo.id % 2 === 1) {
      createProject.classList.add('row-reverse');
    }

    createProject.innerHTML = `
      <img 
        src="./images/work-${projectInfo.id}.png" 
        alt="Project Preview"
        class="project__image"
      >
      <div class="project__details">
        <h3 class="project__title">
          ${projectInfo.title}
        </h3>
        <div class="project-creator">
          <h4 class="project-creator__name">
            ${projectInfo.creatorName}
          </h4>
          <h4 class="project-creator__details">
            <span class="circle">●</span>
            
            ${projectInfo.creatorPos}
          </h4>
          <h4 class="project-creator__details">
            <span class="circle">●</span>
            ${projectInfo.creatorYear}
          </h4>
        </div>
        <p class="project__description">
          ${projectInfo.descriptionShort}
        </p>
        <ul class="project__languages">
          <li class="project__language__item">${projectInfo.language1}</li>
          <li class="project__language__item">${projectInfo.language2}</li>
          <li class="project__language__item">${projectInfo.language3}</li>
          <li class="project__language__item">${projectInfo.language4}</li>
        </ul>
        <button type="button" class="project__button button" id='card-${projectInfo.id}'>
          ${projectInfo.buttonOpen}
        </button>
      </div>
    `;

    return projectContainer.appendChild(createProject);
  });
};

createProjectCards();

// Open modal

const modalContainer = document.querySelector('.modal');

const showModal = (event) => {
  const clickedButton = event.target.id.slice(5);

  modalContainer.classList.remove('hidden');

  const createModal = () => {
    const findCardInfo = projectCard.find((card) => card.id === clickedButton);

    if (!findCardInfo) {
      return;
    }

    const createModalCard = document.createElement('article');
    createModalCard.classList.add('modal-card');

    createModalCard.innerHTML = `
      <div class="project__details modal__details">
        <div class="modal-top">
          <h3 class="project__title">
            ${findCardInfo.title}
          </h3>
          <button type="button" class="modal__closer"></button>
        </div>
        <div class="project-creator">
          <h4 class="project-creator__name">
            ${findCardInfo.creatorName}
          </h4>
          <h4 class="project-creator__details">
            <span class="circle">●</span>
            
            ${findCardInfo.creatorPos}
          </h4>
          <h4 class="project-creator__details">
            <span class="circle">●</span>
            ${findCardInfo.creatorYear}
          </h4>
        </div>
        <div class="modal__image-container">
          <img 
            src="./images/work-${findCardInfo.id}.png" 
            alt="Project Preview"
            class="project__image modal__image"
          >
        </div>
        <div class="modal__desktop-wrapper">
          <div class="modal__description">
            <p class="project__description">
              ${findCardInfo.descriptionLong1}
            </p>
            <p class="project__description project__description2">
              ${findCardInfo.descriptionLong2}
            </p>
          </div>
          <div class="modal__right-column">
            <ul class="project__languages modal__languages">
              <li class="project__language__item">${findCardInfo.language1}</li>
              <li class="project__language__item">${findCardInfo.language2}</li>
              <li class="project__language__item">${findCardInfo.language3}</li>
              <li class="project__language__item">${findCardInfo.language4}</li>
              <li class="project__language__item">${findCardInfo.language5}</li>
            </ul>
            <hr>
            <div class="modal-bottom">
              <a href="${findCardInfo.liveLink}" class="modal__button button">
                ${findCardInfo.buttonLive}
                <img 
                  src="./images/live.svg" 
                  alt="Live view"
                  class="button__image"
                >
              </a>
          
              <a href="${findCardInfo.sourceLink}" class="modal__button button">
                ${findCardInfo.buttonSource}
                <img 
                  src="./images/source.svg" 
                  alt="Source code"
                  class="button__image"
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    const modalIsShown = modalContainer.querySelector('.modal-card');

    if (modalIsShown) {
      modalContainer.removeChild(modalIsShown);
    }

    modalContainer.appendChild(createModalCard);

    // Close Modal

    const modalCloser = document.querySelector('.modal__closer');

    const closeModal = () => {
      modalContainer.classList.add('hidden');
    };

    modalCloser.addEventListener('click', closeModal);
  };

  createModal();
};

const buttons = document.querySelectorAll('.project__button');

buttons.forEach((button) => button.addEventListener('click', showModal));
