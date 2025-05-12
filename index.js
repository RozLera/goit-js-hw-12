import{a as y,S as q,i as a}from"./assets/vendor-CocXUmuy.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();y.defaults.baseURL="https://pixabay.com/api/";async function h(t,i){try{return(await y("",{params:{q:t,key:"50191530-19c60f56ef7d22126639596e8",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:i}})).data}catch{}}const v=new q(".js-gallery .image-link",{captionsData:"alt",captionDelay:250}),L=document.querySelector(".js-gallery");function w(t){const i=t.map(({tags:o,largeImageURL:n,webformatURL:e,likes:r,views:s,comments:b,downloads:R})=>`<li class="gallery-item">
                <div>
                  <a href="${n}" class="image-link">
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
                      <p class="info-value" data-likes>${r}</p>
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
              </li>`).join("");L.insertAdjacentHTML("beforeend",i)}function g(){L.innerHTML=""}function d(t){t.classList.remove("hidden")}function f(t){t.classList.add("hidden")}let c="",l=1;const m=document.querySelector(".js-form"),u=document.querySelector(".js-loader"),p=document.querySelector(".btn-loader");m.addEventListener("submit",S);p.addEventListener("click",$);async function S(t){if(t.preventDefault(),c=t.target.elements["search-text"].value.trim(),c===""){a.warning({position:"topRight",message:"Please enter the correct query!"});return}g(),d(u);try{const i=await h(c);if(i.hits.length===0){a.warning({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),g();return}i.totalHits>15&&d(p),w(i.hits),v.refresh()}catch(i){a.error({position:"topRight",message:`ERROR: ${i}`})}finally{f(u),m.reset()}}async function $(){d(u);try{l+=1;const t=await h(c,l);l*15>=t.totalHits&&(l=1,f(p),a.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),w(t.hits);const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"}),v.refresh()}catch(t){a.error({position:"topRight",message:`ERROR: ${t}`})}finally{f(u),m.reset()}}
//# sourceMappingURL=index.js.map
