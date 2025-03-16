import { footerMaker } from './components/footer/footer';
import { headerMaker } from './components/header/header';
import { mainMaker } from './components/main/main';
import './style.css';


const app = document.getElementById("app");

headerMaker(app);

mainMaker(app);

footerMaker(app);