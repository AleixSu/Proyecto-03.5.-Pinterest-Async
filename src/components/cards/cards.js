
import { createGenericButton } from '../button/button';
import { userRingColors } from '../objects & arrays/objects&Arrays';
import './cards.css';

export const cardMaker = (elementoPadre, image) => {
    const cardDiv = document.createElement("div");
    elementoPadre.appendChild(cardDiv)
    cardDiv.className = "cardDiv";

    const cardDivImg = document.createElement("div");
    cardDiv.appendChild(cardDivImg);
    cardDivImg.className = "cardDivImg";

        const cardImg = document.createElement("img");
        cardDivImg.appendChild(cardImg);
        cardImg.src = image.urls.small;
    
    const photoButton = document.createElement("button");
    cardDiv.appendChild(photoButton);
    photoButton.className = "photoButton";

        const cameraImg = document.createElement("img");
        cameraImg.src = "https://cdn-icons-png.flaticon.com/128/45/45010.png"
        photoButton.appendChild(cameraImg)

        const photoCount = document.createElement("h6")
        photoCount.innerText = image.user.total_promoted_photos;
        photoButton.appendChild(photoCount)

    const likeButton = document.createElement("button");
    cardDiv.appendChild(likeButton);
    likeButton.className = "likeButton";

        const heartDiv = document.createElement("div");
        heartDiv.classList = "heartDivEmpty";
        likeButton.appendChild(heartDiv);

            likeButton.addEventListener("click", () => {

                if (heartDiv.classList.contains("heartDivEmpty")) {
                    heartDiv.classList.remove("heartDivEmpty");
                    heartDiv.classList.add("heartDivFull");
                    likeCount.innerText = parseInt(likeCount.innerText) + 1;
                } else {
                    heartDiv.classList.remove("heartDivFull");
                    heartDiv.classList.add("heartDivEmpty");
                    likeCount.innerText = parseInt(likeCount.innerText) - 1;
                };

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
    cardUserImgDiv.className = "userPicture";
    cardUserImgDiv.style.backgroundImage = `url(${image.user.profile_image.large})`;
    cardUserImgDiv.style.border = "solid 3.5px " + userRingColors[Math.floor(Math.random() * 7)];
    

    const cardInfoDiv = document.createElement("div");
    cardDiv.appendChild(cardInfoDiv);
    cardInfoDiv.className = "cardInfoDiv";

        const userName = document.createElement("h3");
        cardInfoDiv.appendChild(userName);
        const uploadDate = document.createElement("h4");
        cardInfoDiv.appendChild(uploadDate);

            userName.textContent = image.user.name;
            uploadDate.textContent = new Date(image.created_at).toLocaleDateString();

        };

