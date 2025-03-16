import { createButton, createProfileButton, createSignButton } from '../button/button';
import { userDataAleix } from '../objects & arrays/objects&Arrays';
import { searchBar } from '../searchBar/searchBar';
import './header.css'

export const headerMaker = (elementoPadre) => {

    const header = document.createElement("header");
    elementoPadre.appendChild(header);

    header.classList.add("header");

    const leftSide = document.createElement("div");
    header.appendChild(leftSide);
    leftSide.classList.add("leftSide");


    const pageSymbol = document.createElement("img");
    pageSymbol.src = "https://formacion.intef.es/tutorizados_2013_2019/pluginfile.php/119661/mod_data/intro/pinterest_badge_red.png";
    pageSymbol.id = "pageSymbol";
    leftSide.appendChild(pageSymbol);
    

    createButton(leftSide, "Inicio", "dark");
    createButton(leftSide, "Explorar", "light");
    createButton(leftSide, "Crear", "light");


    const centerSide = document.createElement("div");
    header.appendChild(centerSide);
    centerSide.classList.add("centerSide");


    searchBar(centerSide);


    const rightSide = document.createElement("div");
    header.appendChild(rightSide);
    rightSide.classList.add("rightSide");


    createSignButton(rightSide,"https://icones.pro/wp-content/uploads/2022/02/icone-de-cloche-grise.png");
    createSignButton(rightSide,"https://www.shareicon.net/download/2015/08/19/87483_message.ico");
    createProfileButton(rightSide,userDataAleix)

};