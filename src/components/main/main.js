import { cardMaker } from '../cards/cards';
import { randomSearch } from '../objects & arrays/objects&Arrays';
import './main.css';

export const mainMaker = (elementoPadre) => {
    const noResultsText = document.createElement("section")
    elementoPadre.appendChild(noResultsText);
    noResultsText.classList="noResultsTextOFF"
    const main = document.createElement("main");
    elementoPadre.appendChild(main);

     main.classList = "main";
     
const accesKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

let page = 1;
let resultsPerPage = 30;
let value = "";
let value3 = "cat";

const searchEngine = async () => {

  

  const pageUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${value}&client_id=${accesKey}&per_page=${resultsPerPage}`;

  const catUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${value3}&client_id=${accesKey}&per_page=${resultsPerPage}`;

  try {

    const response = await fetch(pageUrl);
    const imageData = await response.json();

    
    main.innerHTML = "";


    if (!localStorage.getItem("firstSearch")) {
      localStorage.setItem("firstSearch", value);
    };


    if (imageData.results.length > 0) {



      imageData.results.forEach(image => {

        cardMaker(main, image);

      });

    
      noResultsText.classList="noResultsTextOFF";
      noResultsText.innerHTML=``;

    }else{

      noResultsText.classList.toggle("noResultsTextOFF");
      noResultsText.classList.toggle("noResultsTextON");
      noResultsText.innerHTML = `<p>"Lo sentimos.. No hemos encontrado ningún resultado para tu búsqueda. Quizá estos gatos te inspiren a seguir buscando"</p>`;
      console.log("Hey, me he activado");


      const response2 = await fetch(catUrl);
      const data2 = await response2.json();
;
      
      data2.results.forEach(catImage => {

        cardMaker(main, catImage)
      });
    };
  
  }catch(error) {
    console.error("Error al obtener las imágenes", error);
  };
};


const initialSearch = async () => {

  let initialQuery = localStorage.getItem("firstSearch") || randomSearch[Math.floor(Math.random() * 6)] 
  const initialUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${initialQuery}&client_id=${accesKey}&per_page=${resultsPerPage}`;

  try { 

    const initialResponse = await fetch(initialUrl);
    const initialData = await initialResponse.json();
   
    initialData.results.forEach( initialImage => {
      cardMaker(main, initialImage)
    });

  } catch (error) {
    console.error("Error al obtener las imágenes", error);
    
  };
};

initialSearch();

const returnToStart = async () => {
  const pageSymbol = document.getElementById("pageSymbol");
  pageSymbol.addEventListener("click", () => {
    let firstSearch = localStorage.getItem("firstSearch");

    if (firstSearch) {
      value = firstSearch;
      searchEngine();
    } else {
      main.innerHTML = "";
      noResultsText.style = "display:none";
      initialSearch();
    }
  });
};

const headerShortCut = document.querySelector("input");

if (headerShortCut) {
  headerShortCut.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      value = e.target.value.trim();

      if (value) {
        searchEngine();

        if (!localStorage.getItem("firstSearch")) {
          localStorage.setItem("firstSearch", value);
        }

        headerShortCut.value = "";
      }
    }
  });
} else {
  console.error("El campo de entrada no se encontró");
}

window.onbeforeunload = () => {
  localStorage.removeItem("firstSearch");
};

returnToStart();
};
