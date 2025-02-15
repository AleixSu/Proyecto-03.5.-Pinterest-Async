import './footer.css'

export const footerMaker = (elementoPadre) => {
    const footer = document.createElement("footer");
    elementoPadre.appendChild(footer);

     footer.classList = "footer"
};