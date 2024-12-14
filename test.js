/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}


const overlay = document.querySelector('.overlay');
document.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Calculate colors based on cursor position
  const color1 = `rgba(${(clientX / windowWidth) * 255}, 0, 255, 0.1)`;
  const color2 = `rgba(255, ${(clientY / windowHeight) * 255}, 0, 0.2)`;

  // Update overlay background
  overlay.style.background = `
    linear-gradient(145deg, ${color1}, transparent),
    linear-gradient(45deg, ${color2}, transparent)
  `;
});

var typed = new Typed(".auto-typer", {
   strings: ["THE NFT MARKETPLACE", "EXPLORE IT", "TRADE IT", "DRAW IT", " DIGITALIZE IT",],
   typeSpeed: 200,  
   backSpeed: 200, 
   loop: true
});
