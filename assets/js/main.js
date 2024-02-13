/*=============== AFFICHER LE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),    // Sélectionne l'élément HTML avec l'ID 'nav-menu'
      navToggle = document.getElementById('nav-toggle'),  // Sélectionne l'élément HTML avec l'ID 'nav-toogle' (correction de la coquille)
      navClose = document.getElementById('nav-close');    // Sélectionne l'élément HTML avec l'ID 'nav-close'

/*========= AFFICHER LE MENU ========*/
/* Valider si la constante existe */
if(navToggle) {  // Vérifie si 'navToggle' n'est pas nul ou indéfini
    navToggle.addEventListener('click', () => { // 
        navMenu.classList.add('show-menu');  // Ajoute la classe 'show-menu' à 'navMenu' lorsque 'navToggle' est cliqué 
                                            // (bouton hamburger)
    });
}

/*======== MASQUER LE MENU =========*/
/* Valider si la constante existe */
if (navClose) {   // Vérifie si 'navClose' n'est pas nul ou indéfini
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');  // Retire la classe 'show-menu' de 'navMenu' lorsque 'navClose' est cliqué
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');  // Sélectionne tous les éléments avec la classe 'nav__link'

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');  // Sélectionne l'élément avec l'ID 'nav-menu'
    
    // Lorsque nous cliquons sur chaque nav__link, nous retirons la classe show-menu, donc le menu disparait
    navMenu.classList.remove('show-menu');
};

// Ajoute un écouteur d'événements à chaque élément avec la classe 'nav__link'
navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== SHADOW HEADER ===============*/

const shadowHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)  /* ombre au scroll vers le bas */


// /*=============== COLOR HEADER ===============*/

// // Sélectionnez le header
// const header = document.getElementById('header');

// // Fonction pour récupérer la couleur du pixel sous le header
// function getBackgroundColor() {
//   const headerRect = header.getBoundingClientRect();
//   const x = headerRect.x + headerRect.width / 2;
//   const y = headerRect.y + headerRect.height / 2;

//   const pixelColor = getComputedStyle(document.elementFromPoint(x, y)).backgroundColor;

//   return pixelColor;
// }

// // Fonction pour mettre à jour la couleur du header en fonction de la couleur du pixel sous le header
// function updateHeaderColor() {
//   const bodyBackgroundColor = getBackgroundColor();
//   header.style.backgroundColor = bodyBackgroundColor;
// }

// // Écoutez l'événement de défilement et appelez la fonction pour mettre à jour la couleur du header
// window.addEventListener('scroll', updateHeaderColor);

// // Appelez également la fonction une fois au chargement de la page pour la couleur initiale
// updateHeaderColor();

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
e.preventDefault()

// serviceID - templateID - #form - publicKey
emailjs.sendForm('service_zbxcvtj','template_dj4y7zr','#contact-form','7nuZdoE68xlHaGwDJ')
.then(() => {
// Show sent message
contactMessage.textContent = 'Message envoyé ✅'

  // Remove message after five second
  setTimeout(() => {
  contactMessage.textContent = ''
}, 5000)

   // Clear input fields

   contactForm.reset()
}, () =>{
    // Show error message
    contactMessage.textContent = 'Message non envoyé ❌'

})
}
contactForm.addEventListener('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Animations repeat
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info,
           .about__container .section__title-1, .about__info,
           .contact__social, .contact`, {origin: 'left'})
sr.reveal(`.projects__card`, {internal: 100})

//services