import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import { BreakingBad } from './src/breakingbad/breakingbad-app';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="./vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <div>
    <img src="https://breakingbadquotes.xyz/img/logo.png" alt="">
    </div>
    
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card" >
    
    
      
    </div>
    
    
    
  </div>
`;
const titulo=document.querySelector("#app-title");
titulo.innerHTML='Breaking Bad Quotes API';

const element=document.querySelector('.card');
BreakingBad(element);



