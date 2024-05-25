import{a as L,S as w,i as a}from"./assets/vendor-b11e2a50.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function f(t,r=1){const s=new URLSearchParams({key:"43803497-a801e9cfe7ea9bdd19d306bb3",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r});try{return(await L.get(`https://pixabay.com/api/?${s}`)).data}catch(i){throw console.error("Error fetching data:",i),i}}const c=document.querySelector(".list");let h;const y=t=>{const r=t.hits.map(s=>`
      <li class="item-list">
        <a href="${s.largeImageURL}" class="item-list-link">
            <img class="item-list-img" src="${s.webformatURL}" alt="${s.tags}">
        </a>
        <div class='markup-info'>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Likes</h3>
                <p class="item-list-text">${s.likes}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Views</h3>
                <p class="item-list-text">${s.views}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Comments</h3>
                <p class="item-list-text">${s.comments}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Downloads</h3>
                <p class="item-list-text">${s.downloads}</p>
            </div>
        </div>
      </li>
    `).join("");t.page===1?c.innerHTML=r:c.insertAdjacentHTML("beforeend",r),h?h.refresh():h=new w(".item-list-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8})},b=document.querySelector(".searchButton"),d=document.querySelector(".load-more"),g=document.querySelector(".input");let l="",m=1,n=0;const S=()=>{g.value=""},v=()=>{const t=document.querySelector(".loader");t.style.display="block"},u=()=>{const t=document.querySelector(".loader");t.style.display="none"},q=async t=>{if(t.preventDefault(),l=g.value.trim(),!l){a.error({title:"Error",message:"The search field cannot be empty! Please enter the search query!"});return}m=1,d.style.display="none",c.innerHTML="";try{v();const r=await f(l,m);u(),n=r.totalHits,y(r),n>15&&(d.style.display="block"),n===0&&a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}catch{u(),a.error({title:"Error",message:"An error occurred while fetching data. Please try again later."})}S()},x=async()=>{m+=1;try{v();const t=await f(l,m);u(),y(t),c.childElementCount>=n&&(d.style.display="none",a.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results."}));const{height:s}=document.querySelector(".item-list").getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}catch{u(),a.error({title:"Error",message:"An error occurred while loading more images. Please try again later."})}};b.addEventListener("click",q);d.addEventListener("click",x);
//# sourceMappingURL=commonHelpers.js.map
