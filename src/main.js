import { footerMaker } from './components/footer/footer';
import { headerMaker } from './components/header/header';
import { mainMaker } from './components/main/main';
import { userDataAleix } from './components/objects & arrays/objects&Arrays';
import './style.css';


const body = document.querySelector("body");

headerMaker(body);

mainMaker(body);

footerMaker(body);













/* async function showResults(){

  let pageUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${value}&client_id${accesKey}&per_page${resultsPerPage}`;


  let response = await fetch(pageUrl)
  let data =  await response.json();
  let imageUrls = data.results;

  console.log(imageUrls);
  
};


showResults(); */