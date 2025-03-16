
import { createGenericButton } from '../button/button';
import { userRingColors } from '../objects & arrays/objects&Arrays';
import './cards.css';

export const cardMaker = (elementoPadre, image) => {
    const cardDiv = document.createElement("div");
    elementoPadre.appendChild(cardDiv)
    cardDiv.classList.add("cardDiv");


    const cardDivImg = document.createElement("div");
    cardDiv.appendChild(cardDivImg);
    cardDivImg.classList.add("cardDivImg");

        const cardImg = document.createElement("img");
        cardDivImg.appendChild(cardImg);
        cardImg.src = image.urls.small;
    
    const photoButton = document.createElement("button");
    cardDiv.appendChild(photoButton);
    photoButton.classList.add("photoButton");

        const cameraImg = document.createElement("img");
        cameraImg.src = "https://cdn-icons-png.flaticon.com/128/45/45010.png"
        photoButton.appendChild(cameraImg)

        const photoCount = document.createElement("h6")
        photoCount.innerText = image.user.total_promoted_photos;
        photoButton.appendChild(photoCount)

    const likeButton = document.createElement("button");
    cardDiv.appendChild(likeButton);
    likeButton.classList.add("likeButton");

        const heartDiv = document.createElement("div");
        heartDiv.classList.add("heartDivEmpty")
        likeButton.appendChild(heartDiv);

            likeButton.addEventListener("click", () => {
                let isHeartEmpty = heartDiv.classList.contains("heartDivEmpty");
                
                heartDiv.classList.toggle("heartDivEmpty", !isHeartEmpty);
                heartDiv.classList.toggle("heartDivFull", isHeartEmpty);
                
                likeCount.innerText = parseInt(likeCount.innerText) + (isHeartEmpty ? 1 : -1);
            });
    
        const likeCount = document.createElement("h6")
        likeCount.innerText = image.likes;
        likeButton.appendChild(likeCount)

        if (parseInt(likeCount.innerText) > 99) {
                likeCount.innerText = "+99"
            }
 

    createGenericButton(cardDiv, "Visitar", "#f01e2c", "#ffffff", "visitButton")

    const cardUserImgDiv = document.createElement("div");
    cardDiv.appendChild(cardUserImgDiv);
    cardUserImgDiv.classList = "userPicture";
    cardUserImgDiv.style.backgroundImage = `url(${image.user.profile_image.large})`;
    cardUserImgDiv.style.border = "solid 3.5px " + userRingColors[Math.floor(Math.random() * 7)];
    

    const cardInfoDiv = document.createElement("div");
    cardDiv.appendChild(cardInfoDiv);
    cardInfoDiv.classList.add("cardInfoDiv");

        const userName = document.createElement("h3");
        cardInfoDiv.appendChild(userName);
        const uploadDate = document.createElement("h4");
        cardInfoDiv.appendChild(uploadDate);

            userName.textContent = image.user.name;
            uploadDate.textContent = new Date(image.created_at).toLocaleDateString();

        };

