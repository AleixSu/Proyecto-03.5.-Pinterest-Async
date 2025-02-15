import { randomDates, randomUserNames, userRingColors } from '../objects & arrays/objects&Arrays';
import './cards.css';

export const cardMaker = (elementoPadre, imageUrl, profileUrl) => {
    const cardDiv = document.createElement("div");
    elementoPadre.appendChild(cardDiv)
    cardDiv.className = "cardDiv";

    const cardDivImg = document.createElement("div");
    cardDiv.appendChild(cardDivImg);
    cardDivImg.className = "cardDivImg";

        const cardImg = document.createElement("img");
        cardDivImg.appendChild(cardImg);
        cardImg.src = imageUrl;
    
    const cardUserImgDiv = document.createElement("div");
    cardDiv.appendChild(cardUserImgDiv);
    cardUserImgDiv.className = "userPicture";
    cardUserImgDiv.style.backgroundImage = `url(${profileUrl})`;
    cardUserImgDiv.style.border = "solid 3.5px " + userRingColors[Math.floor(Math.random() * 7)];
    

    const cardInfoDiv = document.createElement("div");
    cardDiv.appendChild(cardInfoDiv);
    cardInfoDiv.className = "cardInfoDiv";

        const userName = document.createElement("h3");
        cardInfoDiv.appendChild(userName);
        const uploadDate = document.createElement("h4");
        cardInfoDiv.appendChild(uploadDate);

            userName.textContent = randomUserNames[Math.floor(Math.random() * 49)]
            uploadDate.textContent = randomDates[Math.floor(Math.random() * 49)]

        };


export const catMaker = (elementoPadre, catUrl) => {
    const catDiv = document.createElement("div");
    elementoPadre.appendChild(catDiv);
    catDiv.className = "catDiv";

    const catDivImg = document.createElement("div");
    catDiv.appendChild(catDivImg);
    catDivImg.className = "catDivImg";

        const catImg = document.createElement("img");
        catDivImg.appendChild(catImg);
        catImg.src = catUrl;

};