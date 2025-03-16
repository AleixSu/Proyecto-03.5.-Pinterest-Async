const randomColors = userRingColors[Math.floor(Math.random() * 7)]

export const cardMaker3 =  (elementoPadre, image) => {

  const cardHTML =`
    <div class="cardDiv">
          <div class="cardDivImg">
            <img src="${image.urls.small}" alt="cardImg">
          </div>
          <button>
            <img src="https://cdn-icons-png.flaticon.com/128/45/45010.png" alt="camera photo">
            <h6>${image.user.total_promoted_photos}</h6>
          </button>
          <button id="likeButton" class="likeButton">
            <div id="heartDiv" class="heartDivEmpty"></div>
            <h6 id="likeCount">${image.likes}</h6>
          </button>
          <div class="userPicture" style="background-image:url(${image.user.profile_image.large}); border:solid 3.5px ${randomColors}"></div>
          <div class="cardInfoDiv">
          
            <h3>${image.user.name}</h3>
            <h4>${new Date(image.created_at).toLocaleDateString()}</h4>
          </div>
          
        </div>`;


    elementoPadre.innerHTML += cardHTML;
    const cardDiv = document.querySelector(".cardDiv");
    createGenericButton(cardDiv, "Visitar", "#f01e2c", "#ffffff", "visitButton");

    const likeButton = document.getElementById("likeButton");
    const heartDiv = document.getElementById("heartDiv")
    likeButton.addEventListener("click", () => {
        let isHeartEmpty = heartDiv.classList.contains("heartDivEmpty");
        
        heartDiv.classList.toggle("heartDivEmpty", !isHeartEmpty);
        heartDiv.classList.toggle("heartDivFull", isHeartEmpty);
        
        likeCount.innerText = parseInt(likeCount.innerText) + (isHeartEmpty ? 1 : -1);
    });

    const likeCount = document.getElementById("likeCount");
    if (parseInt(likeCount.innerText) > 99) {
        likeCount.innerText = "+99"
    };


    
 }
