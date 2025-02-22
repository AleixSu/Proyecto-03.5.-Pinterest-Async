import './button.css'

export const createButton = (elementoPadre, text, mode) => {
    const button = document.createElement("button");
    elementoPadre.appendChild(button);
    button.textContent = text;
    button.classList = "main-button";
    button.classList.add(mode);
};

export const createSignButton = (elementoPadre, img) => {

    const signButton = document.createElement("button");
    elementoPadre.appendChild(signButton);
    const imgButton = document.createElement("img")
    signButton.appendChild(imgButton);
    imgButton.src = img
    signButton.classList = "sign-button";
   

};


export const createProfileButton = (elementoPadre, userData) => {

    const profileButton = document.createElement("button");
    elementoPadre.appendChild(profileButton);
    profileButton.innerText = userData[0].name[0]
    profileButton.classList = "profile-button";

}

export const createGenericButton = (elementoPadre, text, BGcolor, fontColor, nameClass) => {
    const genericButton = document.createElement("button");
    elementoPadre.appendChild(genericButton);
    genericButton.innerText = text;
    genericButton.style.backgroundColor = BGcolor;
    genericButton.style.color = fontColor;
    genericButton.className = nameClass;
}