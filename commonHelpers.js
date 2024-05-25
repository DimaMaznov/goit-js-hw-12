import{S as m,i as a}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();function d(){const r=document.querySelector(".loader");r.style.display="block"}function f(r){d();const e=`https://pixabay.com/api/?${new URLSearchParams({key:"43952869-c947639c32813e7ff22513d15",q:r.value,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(e)}const u=document.querySelector(".list");let n;const p=r=>{const i=r.hits.map(e=>`
      <li class="item-list">
        <a href="${e.largeImageURL}" class="item-list-link">
            <img class="item-list-img" src="${e.webformatURL}" alt="${e.tags}">
        </a>
        <div class='markup-info'>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Likes</h3>
                <p class="item-list-text">${e.likes}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Views</h3>
                <p class="item-list-text">${e.views}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Comments</h3>
                <p class="item-list-text">${e.comments}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Downloads</h3>
                <p class="item-list-text">${e.downloads}</p>
            </div>
        </div>
      </li>
    `).join("");u.innerHTML=i,n=new m(".item-list-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),n.refresh()},h=document.querySelector(".searchButton"),y=()=>{const r=document.querySelector(".input");r.value=""};function c(){const r=document.querySelector(".loader");r.style.display="none"}h.addEventListener("click",r=>{r.preventDefault();const i=document.querySelector(".input");if(i.value.trim()==""){a.error({title:"Error",message:"The search field cannot be empty! Please enter the search query!"});return}else f(i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{c(),p(e),u.childElementCount||a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(e=>{c(),console.error("Error:",e)});y()});
//# sourceMappingURL=commonHelpers.js.map
