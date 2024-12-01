/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== SMOOTH SCROLL WITH OFFSET ===============*/
const smoothScroll = (target, offset = 0) => {
    const element = document.querySelector(target);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerHeight + offset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target, +200); // Adjust offset as needed
    });
});

document.querySelectorAll('.scrolldownbtn a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target, +100); // Adjust offset as needed
    });
});

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW MORE & SHOW LESS BUTTON ===============*/ 
document.addEventListener('DOMContentLoaded', function() {
    const showMoreButton = document.getElementById('show-more-button');
    const showLessButton = document.getElementById('show-less-button');
    const hiddenContent = document.querySelector('.hidden-content');
    const showLessContainer = document.getElementById('show-less-container');
    const whatYouWillLearnSection = document.getElementById('whatyouwilllearn');
    
    showMoreButton.addEventListener('click', function(event) {
        event.preventDefault();
        hiddenContent.style.maxHeight = hiddenContent.scrollHeight + 'px';
        showMoreButton.parentElement.style.display = 'none';
        showLessContainer.style.display = 'flex';
    });
    
    showLessButton.addEventListener('click', function(event) {
        event.preventDefault();
        hiddenContent.style.maxHeight = hiddenContent.scrollHeight + 'px'; // Set to scrollHeight first for smooth transition
        setTimeout(() => {
            hiddenContent.style.maxHeight = '0';
        }, 10);
        showMoreButton.parentElement.style.display = 'flex';
        showLessContainer.style.display = 'none';

    });
});

/*=============== FAQ ===============*/ 
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(faqItem => {
        const question = faqItem.querySelector('.faq-question');
        const answer = faqItem.querySelector('.faq-answer');

        question.addEventListener('click', function() {
            // Close all other answers
            faqItems.forEach(item => {
                const otherAnswer = item.querySelector('.faq-answer');
                const otherQuestion = item.querySelector('.faq-question .faq-toggle-icon');
                if (otherAnswer !== answer) {
                    otherAnswer.style.display = 'none';
                    otherQuestion.textContent = '+';
                }
            });

            // Toggle the current answer
            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';
                question.querySelector('.faq-toggle-icon').textContent = '×';
            } else {
                answer.style.display = 'none';
                question.querySelector('.faq-toggle-icon').textContent = '+';
            }
        });
    });
    const showMoreButton1 = document.getElementById('show-more-button1');
    const showLessButton1 = document.getElementById('show-less-button1');
    const showLessContainer1 = document.getElementById('show-less-container1');
    const hiddenContent1 = document.querySelector('.hidden-content1');

    showMoreButton1.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        hiddenContent1.style.maxHeight = hiddenContent1.scrollHeight + '1px';
        showMoreButton1.parentElement.style.display = 'none';
        showLessContainer1.style.display = 'flex';
    });

    showLessButton1.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        hiddenContent1.style.maxHeight = hiddenContent1.scrollHeight + 'px'; // Set to scrollHeight first for smooth transition
        setTimeout(() => { 
            hiddenContent1.style.maxHeight = '0';
        }, 10);
        showMoreButton1.parentElement.style.display = 'flex';
        showLessContainer1.style.display = 'none';
    });

});

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () => {
  	const scrollDown = window.scrollY;

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

              // Check if sectionsClass is not null
        if (sectionsClass) {
            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
              sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
		}                                                    
	});
}
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 500,
    delay: 300,
    // reset: true, // Animations repeat
})

sr.reveal(`.home__title1, .home__title2, .home__img, .about__data, .instructor_bg_img, .section-header, .swiper, .contact__img`)
sr.reveal(`.instructor__container, .instructor__img5, .title3, .contact__title, .contact__description`, {delay: 500})
sr.reveal(`.about__img, .home__title2, .social-icons-home, .home__buttons_2, .instructor__data, .faq-item`, {delay: 500, interval: 100})
sr.reveal(`.what-you-will-learn-box, .image2, .scrolldownbtn, .contact__buttons, .scrollup_button, .swiper-pagination`, {interval: 100})

/*=============== SHOW HEADER & HIDE HEADER ===============*/
let lastScrollTop = 0;
const header = document.getElementById('header');
let debounceTimer;

window.addEventListener('scroll', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll Down
            header.style.top = '-130px'; // Adjust this value to match the header height
        } else {
            // Scroll Up
            header.style.top = '0';
        }
        lastScrollTop = scrollTop;
    }, 50); // Adjust the debounce time as needed
});


/*=============== TAMIL AND ENGLISH HIDDEN BUTTON ===============*/

document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.getElementById('registerButton');
    const languageButtons = document.getElementById('languageButtons');

    // Initially hide the language buttons
    languageButtons.classList.add('hidden_1');

    // Add click event listener to the register button
    registerButton.addEventListener('click', function() {
        event.preventDefault(); // Prevent default link behavior
        
        // Hide the register button
        registerButton.classList.add('hidden_1');

        // Show the language buttons
        languageButtons.classList.remove('hidden_1');
    });
    
    // Add click event listener to the document
    document.addEventListener('click', function(event) {
        // Check if the click is outside the language buttons
        if (!languageButtons.contains(event.target) && !registerButton.contains(event.target)) {
            // Show the register button
            registerButton.classList.remove('hidden_1');

            // Hide the language buttons
            languageButtons.classList.add('hidden_1');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.getElementById('contactButton');
    const languageButtons_1 = document.getElementById('languageButtons_1');

    // Initially hide the language buttons
    languageButtons_1.classList.add('hidden_2');

    // Add click event listener to the contact button
    contactButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Hide the contact button
        contactButton.classList.add('hidden_2');

        // Show the language buttons
        languageButtons_1.classList.remove('hidden_2');
    });

    // Add click event listener to the document
    document.addEventListener('click', function(event) {
        // Check if the click is outside the language buttons
        if (!languageButtons_1.contains(event.target) && !contactButton.contains(event.target)) {
            // Show the register button
            contactButton.classList.remove('hidden_2');

            // Hide the language buttons
            languageButtons_1.classList.add('hidden_2');
        }
    });
});

/*=============== LOADING SCREEN ===============*/

window.addEventListener('load', function() {
    // Set a timeout to ensure the loading screen is displayed for at least 3.5 seconds
    const loadingDuration = 3500; // 3.5 seconds in milliseconds
    const start = new Date().getTime();

    const hideLoadingScreen = () => {
        const now = new Date().getTime();
        const elapsed = now - start;
        const remainingTime = loadingDuration - elapsed;

        if (remainingTime > 0) {
            setTimeout(() => {
                document.body.classList.add('loaded');
                setTimeout(() => {
                    document.getElementById('loading-screen').classList.add('hidden_3');
                    document.body.style.overflow = 'auto'; // Allow scrolling after loading
                    initializeScrollReveal();
                }, 1000); // Match this with the CSS transition duration
            }, remainingTime);
        } else {
            document.body.classList.add('loaded');
            setTimeout(() => {
                document.getElementById('loading-screen').classList.add('hidden_3');
                document.body.style.overflow = 'auto'; // Allow scrolling after loading
                initializeScrollReveal();
            }, 1000); // Match this with the CSS transition duration
        }
    };

    hideLoadingScreen();
});

// Load the Lottie animation
document.addEventListener('DOMContentLoaded', function() {
    lottie.loadAnimation({
        container: document.getElementById('lottie-container'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: './assets/json/brainstrom.json' // the path to the animation json
    });
});

// Load the Giftbox Lottie animation
document.addEventListener("DOMContentLoaded", function() {
    var animation = lottie.loadAnimation({
        container: document.getElementById('lottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './assets/json/giftbox.json' // Replace with the path to your Lottie animation JSON file
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const viewKit = document.querySelector('.viewkit');
    const slidingImageContainer = document.getElementById('slidingImageContainer');
    const closeButton = document.getElementById('closeButton');

    viewKit.addEventListener('click', function() {
        slidingImageContainer.classList.add('visible');
    });

    closeButton.addEventListener('click', function() {
        slidingImageContainer.classList.remove('visible');
    });
});