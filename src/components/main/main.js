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
    const data = await response.json();
      const imageUrls = data.results.map(image => image.urls.small);
      const userNames = data.results.map(image => image.user.name);
      const profileImgUrls = data.results.map(image => image.user.profile_image.large);
      const uploadDates = data.results.map(image => image.created_at);
      const pCounts = data.results.map (pCounts => pCounts.user.total_promoted_photos);
      const lCounts = data.results.map (lCounts => lCounts.likes) ;


    const response3 = await fetch(catUrl);
      const data3 = await response3.json();
        const catUrls = data3.results.map(catImg => catImg.urls.small);
        const catUserNames = data3.results.map(catImage => catImage.user.name);
        const catProfileImgUrls = data3.results.map(catUser => catUser.user.profile_image.large);
        const catUploadDates = data3.results.map(catDate => catDate.created_at)
        const catpCounts = data3.results.map (catpCounts => catpCounts.user.total_promoted_photos);
        const catlCounts = data3.results.map (catlCounts => catlCounts.likes) ;

    console.log(pageUrl);
    
    main.innerHTML = "";


    if (!localStorage.getItem("firstSearch")) {
      localStorage.setItem("firstSearch", value);
    };


    if (imageUrls.length > 0) {

      for (let i = 0; i < (profileImgUrls.length, imageUrls.length, userNames.length, uploadDates.length, pCounts.length, lCounts.length); i++) {
        const imageUrl = imageUrls[i];
        const profileImageUrl = profileImgUrls[i];
        const userName = userNames[i];
        const uploadDate = uploadDates[i];
        const pCount = pCounts[i]
        const lCount = lCounts[i]
     
      cardMaker(main, imageUrl, profileImageUrl, userName, uploadDate, pCount, lCount);
      }
     
      noResultsText.classList="noResultsTextOFF";
      noResultsText.innerHTML=``;
    }else{

      noResultsText.classList.toggle("noResultsTextOFF");
      noResultsText.classList.toggle("noResultsTextON");
      noResultsText.innerHTML = `<p>"Lo sentimos.. No hemos encontrado ningún resultado para tu búsqueda. Quizá estos gatos te inspiren a seguir buscando"</p>`;
      console.log("Hey, me he activado");

    
      for (let i = 0; i < (catProfileImgUrls.length, catUrls.length, catUserNames.length, catUploadDates.length, catpCounts.length, catlCounts.length); i++) {
        const catUrl = catUrls[i];
        const catProfileImgUrl = catProfileImgUrls[i];
        const catUserName = catUserNames[i];
        const catUploadDate = catUploadDates[i];
        const catpCount = catpCounts[i];
        const catlCount = catlCounts[i];        
     
      cardMaker(main, catUrl, catProfileImgUrl, catUserName, catUploadDate, catpCount, catlCount);
      
      };
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
      const randomUrls = initialData.results.map(random => random.urls.small);
      const randomUserNames = initialData.results.map(randomImage => randomImage.user.name);
      const randomProfileImgUrls = initialData.results.map(randomUser => randomUser.user.profile_image.large);
      const randomUploadDates = initialData.results.map(randomDate => randomDate.created_at);
      const randompCounts = initialData.results.map(randompCounts => randompCounts.user.total_promoted_photos);
      const randomlCounts = initialData.results.map(randomlCounts => randomlCounts.likes);
 

    for (let i = 0; i < (randomUserNames.length, randomProfileImgUrls.length, randomUploadDates.length, randomUrls.length, randompCounts.length, randomlCounts.length); i++) {
      const randomUrl = randomUrls[i];
      const randomProfileImgUrl = randomProfileImgUrls[i];
      const randomUploadDate = randomUploadDates[i];
      const randomUserName = randomUserNames[i];
      const randompCount = randompCounts[i];
      const randomlCount = randomlCounts[i];
   
    cardMaker(main, randomUrl, randomProfileImgUrl, randomUserName, randomUploadDate, randompCount, randomlCount);
    
    };
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
