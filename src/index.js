// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector('header');
const logoTitle = document.querySelector('#logoTitle');
const firstCard = document.querySelector('.card');

// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('.card-img-top');
const titleFirstCard = firstCard.querySelector('.card-title');
const subtitleFirstCard = firstCard.querySelector('.card-subtitle');
const textFirstCard = firstCard.querySelector('.card-text');

// C- traversing with dot notation
const link1FirstCard = firstCard.querySelector('.card-link');
const link2FirstCard = firstCard.querySelectorAll('.card-link')[1];



// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const navLinks = document.querySelectorAll('nav a');
// B- Loop over the links and console.log their text content
navLinks.forEach(link => {
    console.log(link.textContent);
  });  
// C- Turn the collection of links into a real array
const linksArray = Array.from(navLinks);
// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeLink = linksArray.filter(link => link.textContent === 'Home')[0];


// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
titleFirstCard.textContent = 'Dog Title';
subtitleFirstCard.textContent = 'Dog Subtitle';
textFirstCard.textContent = 'Sweet dog tickle my belly at your own peril I will pester for food when you\'re in the kitchen even if it\'s salad spend six hours per day washing';
//  B- Have the students research online the difference between textContent and innerText
// 'textContent' retrieves all text within an element, including hidden elements, while innerText retrieves only the visible text, taking into account the applied styles.


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
imageFirstCard.src = 'https://new-image-url.jpg';
imageFirstCard.alt = 'A cute dog';

//  B- Using .setAttribute to change a few attributes
titleFirstCard.setAttribute('id', 'newId');
link1FirstCard.setAttribute('href', 'https://new-link-url.com');

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add('sky');
firstCard.classList.remove('card');
firstCard.classList.add('new-card');

//  B- By manipulating inline styles on the element
header.style.backgroundColor = 'blue';
firstCard.style.backgroundColor = '#ccc';


// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement('a');
blogLink.classList.add('menu-item');
blogLink.href = '#';
blogLink.textContent = 'Blog';

const nav = document.querySelector('nav');
nav.appendChild(blogLink);


// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
cardGroup = document.querySelector('.card-group');
const cardCopy = firstCard.cloneNode(true);
cardGroup.appendChild(cardCopy);



// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]
const cardGroup = document.querySelector('.card-group');
const cardToRemove = document.querySelector('.card');
const parentElement = cardToRemove.parentElement;

cardToRemove.remove();
cardGroup.appendChild(cardToRemove);


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
const footer = document.querySelector('footer');
footer.insertAdjacentHTML('beforeend', '<p>This is new HTML content</p>');
