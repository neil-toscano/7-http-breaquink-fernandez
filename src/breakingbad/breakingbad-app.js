/**
 * 
 */
const fetchQuote=async()=>{
    const res=await fetch('https://api.breakingbadquotes.xyz/v1/quotes'); 
    const quote=await res.json();
    //console.log(quote);
    return quote;
}
export const BreakingBad=async(element)=>{
    element.innerHTML=`<div>
    <div id='loading' class="spinner-border text-warning" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  </div>
  `;
    
    const quoteLabe=document.createElement('blockquote');
    const authoLabel=document.createElement('h3');
    const nexQuote=document.createElement('button');
    nexQuote.setAttribute('class','btn btn-info');
    nexQuote.addEventListener('click',async()=>{
        element.innerHTML=`<div>
        <div id='loading' class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      </div>
      `;
      const quote=await fetchQuote();
      renderQuote(quote[0]);

    });
    
    nexQuote.innerText='Siguiente Frase';
    const renderQuote=(quote)=>{
        quoteLabe.innerHTML=quote.quote;
        authoLabel.innerHTML=quote.author;
        element.replaceChildren(quoteLabe,authoLabel,nexQuote);
    }
    const Quote=await fetchQuote();
   
    renderQuote(Quote[0]);

}