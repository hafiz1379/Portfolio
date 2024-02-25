window.addEventListener("hashchange", () => {
  if (window.location.hash === "#menu") {
    document.body.classList.add("header--open-menu");
  } else {
    document.body.classList.remove("header--open-menu");
  }
});

// Popup window

const projectCard = [
  {
    id: "3",
    image: "./images/work-3.png",
    title: "My Places",
    creatorName: "Hafiz Rasa",
    creatorPos: "Full Stack Dev",
    creatorYear: "2024",
    descriptionShort:
      "MyPlaces—a comprehensive web app enabling users to sign up, log in, and effortlessly share their beloved destinations. Share detailed descriptions, addresses, and captivating pictures of your favorite spots with ease.",
    descriptionLong1:
      "Join MyPlaces, where exploration meets sharing! Our intuitive full-stack web application empowers users to effortlessly sign up and log in.",
    descriptionLong2:
      "Once logged in, unleash your creativity by showcasing your favorite spots with vivid descriptions, precise addresses, and captivating pictures. Let's build a vibrant community of exploration and inspiration together.",
    language1: "Reactjs",
    language2: "Nodejs",
    language3: "Expressjs",
    language4: "MongoDB",
    language5: "Tailwindcss",
    buttonOpen: "See project",
    buttonLive: "See live",
    liveLink: "https://mern-project-frontend-ruod.onrender.com",
    buttonSource: "See source",
    sourceLink: "https://github.com/hafiz1379/mern-project-frontend",
  },

  {
    id: "0",
    image: "./images/work-1.png",
    title: "Tesla Car Booking",
    creatorName: "Hafiz Rasa",
    creatorPos: "Full Stack Dev",
    creatorYear: "2023",
    descriptionShort:
      "It is the front end app to book Tesla car test drives. The app allows admin users to create and delete cars from the availability list. Besides, it allows to make reservations by car model, city and time.",
    descriptionLong1:
      "Welcome to our advanced Tesla test drive booking app! Admins can effortlessly manage the fleet, creating and removing cars as needed.",
    descriptionLong2:
      "For users, it is a breeze to reserve a Tesla test drive based on model, city, and time. Explore and book your preferred ride with just a few clicks. Enjoy the future of car reservations!",
    language1: "React",
    language2: "Ruby on rails",
    language3: "CSS",
    language4: "PostgreSQL",
    language5: "Redux",
    buttonOpen: "See project",
    buttonLive: "See live",
    liveLink: "https://tesla-car-booking-front.onrender.com/",
    buttonSource: "See source",
    sourceLink:
      "https://github.com/hafiz1379/Tesla-car-booking-front-end?tab=readme-ov-file",
  },

  {
    id: "1",
    image: "./images/work-1.png",
    title: "Air Pollution Tracker",
    creatorName: "Hafiz Rasa",
    creatorPos: "Front End Dev",
    creatorYear: "2023",
    descriptionShort:
      "This application provides current, forecast and historical air pollution data for majority countries. You can check the pollution index of your country by simply scrolling or searching for it using the search bar and clicking on it to show more details. This application is built with React.js and Redux.",
    descriptionLong1:
      "Welcome to our comprehensive air pollution information application! It offers up-to-date, forecasted, and historical air pollution data for a multitude of countries. Easily navigate through the pollution index of your country by scrolling through the list or utilizing the search bar for a quick lookup.",
    descriptionLong2:
      "This app, built with React.js and Redux, offers a seamless user experience. Explore pollution data by selecting your country to gain insights into air quality trends.",
    language1: "React",
    language2: "Redux",
    language3: "CSS",
    language4: "Tailwind",
    language5: "Testing",
    buttonOpen: "See project",
    buttonLive: "See live",
    liveLink: "https://react-capstone-project-g3s8.onrender.com/",
    buttonSource: "See source",
    sourceLink: "https://github.com/hafiz1379/react-capstone-project",
  },

  {
    id: "2",
    image: "./images/work-2.png",
    title: "JS Capstone Project",
    creatorName: "Hafiz Rasa",
    creatorPos: "Front End Dev",
    creatorYear: "2023",
    descriptionShort:
      "Our project is a web app that fetches data from an API, displaying items and allowing users to like, comment, and reserve them. It consists of a home page, comments popup, and popup. We use the Involvement API to record interactions and Jest for unit testing. The app is set up on GitHub using Gitflow, webpack, and follows the provided layout.",
    descriptionLong1:
      "Discover our interactive web app, fetching real-time data from an API. Users can like, comment, and reserve items, ensuring a personalized experience.",
    descriptionLong2:
      "Structured with a user-friendly home page and intuitive popups, the app employs the Involvement API for seamless interaction tracking. Jest handles unit testing, and the project follows Gitflow on GitHub, using webpack for bundling and maintaining a consistent layout.",
    language1: "JavaScript",
    language2: "API",
    language3: "CSS",
    language4: "HTML",
    language5: "",
    buttonOpen: "See project",
    buttonLive: "See live",
    liveLink: "https://hafiz1379.github.io/JS-capstone-project/dist/",
    buttonSource: "See source",
    sourceLink: "https://github.com/hafiz1379/JS-capstone-project",
  },
];

const projectContainer = document.querySelector(".work");

const createProjectCards = () => {
  projectCard.map((projectInfo) => {
    const createProject = document.createElement("article");
    createProject.classList.add("project");

    if (projectInfo.id % 2 === 1) {
      createProject.classList.add("row-reverse");
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

const modalContainer = document.querySelector(".modal");

const showModal = (event) => {
  const clickedButton = event.target.id.slice(5);

  modalContainer.classList.remove("hidden");

  const createModal = () => {
    const findCardInfo = projectCard.find((card) => card.id === clickedButton);

    if (!findCardInfo) {
      return;
    }

    const createModalCard = document.createElement("article");
    createModalCard.classList.add("modal-card");

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
              <a href="${findCardInfo.liveLink}" class="modal__button button" target="_blank" rel="noopener noreferrer">
                ${findCardInfo.buttonLive}
                <img 
                  src="./images/live.svg" 
                  alt="Live view"
                  class="button__image"
                >
              </a>
          
              <a href="${findCardInfo.sourceLink}" class="modal__button button" target="_blank" rel="noopener noreferrer">
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

    const modalIsShown = modalContainer.querySelector(".modal-card");

    if (modalIsShown) {
      modalContainer.removeChild(modalIsShown);
    }

    modalContainer.appendChild(createModalCard);

    // Close Modal

    const modalCloser = document.querySelector(".modal__closer");

    const closeModal = () => {
      modalContainer.classList.add("hidden");
    };

    modalCloser.addEventListener("click", closeModal);
  };

  createModal();
};

const buttons = document.querySelectorAll(".project__button");

buttons.forEach((button) => button.addEventListener("click", showModal));

// Form validation
const usernameInput = document.getElementById("user__name");

usernameInput.addEventListener("input", (event) => {
  const regex = /^[a-zA-Z\s]+$/;
  const inputValue = event.target.value;

  if (!regex.test(inputValue)) {
    event.target.setCustomValidity("Use only English alphabets for username.");
  } else {
    event.target.setCustomValidity("");
  }
});

const contactForm = document.getElementById("contact__form");
const emailField = document.getElementById("email__address");
const errorMessage = document.getElementById("error");

const correctEmail = () => {
  if (emailField.value === emailField.value.toLowerCase()) {
    return true;
  }

  return false;
};

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!correctEmail()) {
    emailField.style.border = "3px solid red";
    errorMessage.style.display = "block";
  } else {
    emailField.style.border = "1px solid #cfd8dc";
    errorMessage.style.display = "none";

    contactForm.submit();
    contactForm.result();
  }
});

// Locale Storage

let formData = {
  name: "",
  email: "",
  message: "",
};

const nameInput = document.getElementById("user__name");
const emailInput = document.getElementById("email__address");
const messageInput = document.getElementById("message");

nameInput.addEventListener("input", (event) => {
  formData.name = event.target.value;
  localStorage.setItem("formData", JSON.stringify(formData));
});

emailInput.addEventListener("input", (event) => {
  formData.email = event.target.value;
  localStorage.setItem("formData", JSON.stringify(formData));
});

messageInput.addEventListener("input", (event) => {
  formData.message = event.target.value;
  localStorage.setItem("formData", JSON.stringify(formData));
});

if (localStorage.getItem("formData")) {
  formData = JSON.parse(localStorage.getItem("formData"));
  nameInput.value = formData.name;
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

const form = document.getElementById("contact__form");
form.addEventListener("submit", () => {
  localStorage.setItem("formData", JSON.stringify(formData));
});
