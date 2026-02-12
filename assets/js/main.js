/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- REDIRECTION FUNTIONS ----- */
function redirectToLinkedIn() {
  var linkedinURL = "https://www.linkedin.com/in/noumanahmed1836/";
  window.open(linkedinURL, "_blank");
}

function redirectToGithub() {
  var githubURL = "https://github.com/MianNouman1836";
  window.open(githubURL, "_blank");
}

function redirectToFlutterUI() {
  var githubURL = "https://github.com/MianNouman1836/best_flutter_ui_templates.git";
  window.open(githubURL, "_blank");
}

function redirectToFlutterCRUD() {
  var githubURL = "https://github.com/MianNouman1836/Flutter-Firebase-CRUD-Auth";
  window.open(githubURL, "_blank");
}

function redirectToFlutterRestApi() {
  var githubURL = "https://github.com/MianNouman1836/Flutter-Rest-Api-Series";
  window.open(githubURL, "_blank");
}

function redirectToFlutterNewsApp() {
  var githubURL = "https://github.com/MianNouman1836/Flutter-International-news-app";
  window.open(githubURL, "_blank");
}

function redirectToMERNApp() {
  var githubURL = "https://github.com/MianNouman1836/FULL-STACK-MERN-APPLICATION";
  window.open(githubURL, "_blank");
}



/* ----- DOWNLOAD CV ----- */
function downloadCV() {
  var cvFilename = "Nouman Ahmed.pdf"; 
  var cvURL = "assets/documents/" + cvFilename;

  var link = document.createElement("a");
  link.href = cvURL;
  link.download = cvFilename;
  link.click();
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: [
    "AI Engineer",
    "Software Engineer",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);
