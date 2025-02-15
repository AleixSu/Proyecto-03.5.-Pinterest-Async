import { cardMaker, catMaker } from '../cards/cards';
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
console.log(accesKey);


let page = 1;
let resultsPerPage = 30;
let value = "";
let value2 = "profile image";
let value3 = "cat";




const searchEngine = async () => {


  const pageUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${value}&client_id=${accesKey}&per_page=${resultsPerPage}`;

  const profileUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${value2}&client_id=${accesKey}&per_page=${resultsPerPage}`;

   const catUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${value3}&client_id=${accesKey}&per_page=${resultsPerPage}`

  try {

    const response = await fetch(pageUrl);
    const data = await response.json();
    const imageUrls = data.results.map(image => image.urls.small);

    const response2 = await fetch(profileUrl);
    const data2 = await response2.json();
    const profileImgs = data2.results.map(profileImg => profileImg.urls.small);

    const response3 = await fetch(catUrl);
    const data3 = await response3.json();
    const catUrls = data3.results.map(catImg => catImg.urls.small);

    console.log(imageUrls);
    console.log(value);
    
   main.innerHTML = "";

   const catUrlsPush = [];

  for (const catUrl of catUrls) {

    catUrlsPush.push(catUrl)

   };
    


  if (imageUrls.length > 0) {

      for (let i = 0; i < (profileImgs.length - 1, imageUrls.length); i++) {
        const imageUrl = imageUrls[i];
        const profileImageUrl = profileImgs[i];
     
      cardMaker(main, imageUrl, profileImageUrl);
    }
     
      noResultsText.classList="noResultsTextOFF";
      noResultsText.innerHTML=``
    }else{
      noResultsText.classList.toggle("noResultsTextOFF")
      noResultsText.classList.toggle("noResultsTextON")
      noResultsText.innerHTML = `<p>"Lo sentimos.. No hemos encontrado ningún resultado para tu búsqueda. Quizá estos gatos te inspiren a buscar otras cosas"</p>`;
      console.log("Hey, me he activado");

    
      for (let i = 0; i < (profileImgs.length - 1, catUrls.length); i++) {
        const catUrl = catUrls[i];
        const profileImageUrl = profileImgs[i];
     
      cardMaker(main, catUrl, profileImageUrl);
      
    };
  
    };
  
  }catch(error) {
    console.error("Error al obtener las imágenes", error);
    
  };
};


const initialSearch = async () => {

  const initialUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${randomSearch[Math.floor(Math.random() * 6 )]}&client_id=${accesKey}&per_page=${resultsPerPage}`;

  const profileUrl = `https://api.unsplash.com/search/photos?page=${page}&query=faces&client_id=${accesKey}&per_page=${resultsPerPage}`;

  try {

    const initialResponse = await fetch(initialUrl);
    const initialData = await initialResponse.json();
    const randomUrls = initialData.results.map(random => random.urls.small);

    const response2 = await fetch(profileUrl);
    const data2 = await response2.json();
    const profileImgs = data2.results.map(profileImg => profileImg.urls.small);


    console.log(randomUrls);

    for (let i = 0; i < (profileImgs.length - 1, randomUrls.length); i++) {
      const randomUrl = randomUrls[i];
      const profileImageUrl = profileImgs[i];
   
    cardMaker(main, randomUrl, profileImageUrl);
    
  };

    
  } catch (error) {
    console.error("Error al obtener las imágenes", error);
    
  };


};

initialSearch();

const returnToStart = async () => {
  const pageSymbol = document.getElementById("pageSymbol");
  pageSymbol.addEventListener("click",() => {
    main.innerHTML = "";
    noResultsText.style = "display:none";
    initialSearch();
  } );
  
};

returnToStart()


const headerShortCut = document.querySelector("input");

  if (headerShortCut) {
    headerShortCut.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      value = e.target.value.trim();
      
    
    if (value) {
      searchEngine();
      headerShortCut.value =``;
    };
      
      
    };
  
 });
} else {
  console.error("el campo de entrada no se encontró");
  
  };  
};




