const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Navigaton top
const topNav = document.querySelectorAll('nav a')
topNav[0].textContent = "Services"
topNav[1].textContent = "Product"
topNav[2].textContent = "Vision"
topNav[3].textContent = "Features"
topNav[4].textContent = "About"
topNav[5].textContent = "Contact"

// Section .cta
const title = document.querySelector('h1')
title.textContent = siteContent['cta']['h1']
const button = document.querySelector('button')
button.textContent = siteContent['cta']['button']

// image
const image = document.getElementById('cta-img')
image.setAttribute('src', siteContent['cta']['img-src'])

// middle-top content
const contentTitle = document.querySelectorAll('.main-content h4')
const contentPar = document.querySelectorAll('.main-content p')
contentTitle[0].textContent = siteContent['main-content']['features-h4']
contentPar[0].textContent = siteContent['main-content']['features-content']
contentTitle[1].textContent = siteContent['main-content']['about-h4']
contentPar[1].textContent = siteContent['main-content']['about-content']
// image
const middleImg = document.getElementById('middle-img')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])
// middle-bottom content
contentTitle[2].textContent = siteContent['main-content']['services-h4']
contentPar[2].textContent = siteContent['main-content']['services-content']
contentTitle[3].textContent = siteContent['main-content']['product-h4']
contentPar[3].textContent = siteContent['main-content']['product-content']
contentTitle[4].textContent = siteContent['main-content']['vision-h4']
contentPar[4].textContent = siteContent['main-content']['vision-content']

// Bottom content
const contact = document.querySelectorAll('.contact h4')
contact[0].textContent = siteContent['contact']['contact-h4']
// conact info
const address = document.querySelector('.contact p:nth-child(2)')
address.textContent = siteContent['contact']['address']
const phone = document.querySelector('.contact p:nth-child(3)')
phone.textContent = siteContent['contact']['phone']
const email = document.querySelector('.contact p:nth-child(4)')
email.textContent = siteContent['contact']['email']

// footer
const foot = document.querySelector('footer p')
foot.textContent = siteContent['footer']['copyright']