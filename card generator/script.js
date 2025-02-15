//! 1. select the elements 

const appContainer = document.getElementById('app');
const generateBtn = document.getElementById('generate-btn');



//! 2. create new html elements 


function createCard() {
    // add profile card container
    const profileCard = document.createElement('div');
    //add class
    //! 4. add classes or ids if needed add any attributes

    profileCard.className = 'card m-1 p-3 bg-light shadow';
    // console.log(profileCard);
    //! 3/ Add content to the element created (innner html/text-content)

    const profileImg = document.createElement('img');
    profileImg.src = 'https://cdn.pixabay.com/photo/2024/10/26/03/05/honeybee-9150104_1280.jpg';
    profileImg.className = 'img-fluid mb-3 ';
    // console.log(profileImg);

    const profileDescription = document.createElement('p');
    profileDescription.textContent = 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.';
    // console.log(profileDescription);/

    // title 
    const profileTitle = document.createElement('h2');
    profileTitle.textContent = 'John Doe';
    // console.log(profileTitle);



    // ! 5. append the elements to build the structure

    // append all elements to the card
    profileCard.appendChild(profileImg);
    profileCard.appendChild(profileTitle);
    profileCard.appendChild(profileDescription);
    // console.log(profileCard);

    // append the card to the app container
    appContainer.appendChild(profileCard);
    // console.log(appContainer);
    appContainer.className = 'mt-3';
}


// createCard();

generateBtn.addEventListener('click',createCard)







// ! append to the dom