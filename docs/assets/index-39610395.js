(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c="/7-http-breaquink-fernandez/assets/javascript-8dac5379.svg",a=async()=>await(await fetch("https://api.breakingbadquotes.xyz/v1/quotes")).json(),l=async i=>{i.innerHTML=`<div>
    <div id='loading' class="spinner-border text-warning" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  </div>
  `;const o=document.createElement("blockquote"),s=document.createElement("h3"),r=document.createElement("button");r.setAttribute("class","btn btn-info"),r.addEventListener("click",async()=>{i.innerHTML=`<div>
        <div id='loading' class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      </div>
      `;const n=await a();e(n[0])}),r.innerText="Siguiente Frase";const e=n=>{o.innerHTML=n.quote,s.innerHTML=n.author,i.replaceChildren(o,s,r)},t=await a();e(t[0])};document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="./vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${c}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <div>
    <img src="https://breakingbadquotes.xyz/img/logo.png" alt="">
    </div>
    
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card" >
    
    
      
    </div>
    
    
    
  </div>
`;const d=document.querySelector("#app-title");d.innerHTML="Breaking Bad Quotes API";const u=document.querySelector(".card");l(u);
