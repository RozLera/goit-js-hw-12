import{a as y,S as q,i as a}from"./assets/vendor-CocXUmuy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();y.defaults.baseURL="https://pixabay.com/api/";async function h(t,r){try{return(await y("",{params:{q:t,key:"50191530-19c60f56ef7d22126639596e8",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}catch(o){return o}}const v=new q(".js-gallery .image-link",{captionsData:"alt",captionDelay:250}),L=document.querySelector(".js-gallery");function w(t){const r=t.map(({tags:o,largeImageURL:l,webformatURL:e,likes:i,views:s,comments:b,downloads:R})=>`<li class="gallery-item">
                <div>
                  <a href="${l}" class="image-link">
                    <img
                      src="${e}"
                      alt="${o}"
                      class="gallery-image"
                    />
                  </a>
                </div>
                <div>
                  <ul class="image-info">
                    <li class="info-item">
                      <p class="info-value-tittle">Likes</p>
                      <p class="info-value" data-likes>${i}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Views</p>
                      <p class="info-value" data-views>${s}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Comments</p>
                      <p class="info-value" data-comments>${b}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Downloads</p>
                      <p class="info-value" data-downloads>${R}</p>
                    </li>
                  </ul>
                </div>
              </li>`).join("");L.insertAdjacentHTML("beforeend",r)}function g(){L.innerHTML=""}function m(t){t.classList.remove("hidden")}function u(t){t.classList.add("hidden")}let c="",n=1;const p=document.querySelector(".js-form"),d=document.querySelector(".js-loader"),f=document.querySelector(".btn-loader");p.addEventListener("submit",S);f.addEventListener("click",$);async function S(t){if(t.preventDefault(),n=1,c=t.target.elements["search-text"].value.trim(),c===""){a.warning({position:"topRight",message:"Please enter the correct query!"});return}g(),m(d);try{const r=await h(c,n);if(r.hits.length===0){a.warning({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),u(f),g();return}r.totalHits>15&&m(f),w(r.hits),v.refresh()}catch(r){a.error({position:"topRight",message:`ERROR: ${r}`})}finally{u(d),p.reset()}}async function $(){m(d);try{n+=1;const t=await h(c,n);n*15>=t.totalHits&&(u(f),a.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),w(t.hits);const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"}),v.refresh()}catch(t){a.error({position:"topRight",message:`ERROR: ${t}`})}finally{u(d),p.reset()}}
//# sourceMappingURL=index.js.map
