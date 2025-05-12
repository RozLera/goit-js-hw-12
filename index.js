import{a as u,S as p,i as l}from"./assets/vendor-CocXUmuy.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();u.defaults.baseURL="https://pixabay.com/api/";function g(s){return u("",{params:{q:s,key:"50191530-19c60f56ef7d22126639596e8",image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(i=>i.data).catch(i=>i)}const h=new p(".js-gallery .image-link",{captionsData:"alt",captionDelay:250}),f=document.querySelector(".js-gallery");function y(s){f.innerHTML=s.map(({tags:i,largeImageURL:r,webformatURL:a,likes:e,views:t,comments:o,downloads:m})=>`<li class="gallery-item">
                <div>
                  <a href="${r}" class="image-link">
                    <img
                      src="${a}"
                      alt="${i}"
                      class="gallery-image"
                    />
                  </a>
                </div>
                <div>
                  <ul class="image-info">
                    <li class="info-item">
                      <p class="info-value-tittle">Likes</p>
                      <p class="info-value" data-likes>${e}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Views</p>
                      <p class="info-value" data-views>${t}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Comments</p>
                      <p class="info-value" data-comments>${o}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Downloads</p>
                      <p class="info-value" data-downloads>${m}</p>
                    </li>
                  </ul>
                </div>
              </li>`).join("")}function n(){f.innerHTML=""}function v(s){s.classList.remove("hidden")}function L(s){s.classList.add("hidden")}const d=document.querySelector(".js-form"),c=document.querySelector(".js-loader");d.addEventListener("submit",b);function b(s){s.preventDefault();const i=s.target.elements["search-text"].value.trim();if(i===""){l.warning({position:"topRight",message:"Please enter the correct query!"});return}n(),v(c),g(i).then(r=>{if(r.hits.length===0){l.warning({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n();return}y(r.hits),h.refresh()}).catch(r=>{l.error({position:"topRight",message:`ERROR: ${r}`})}).finally(()=>{L(c),d.reset()})}
//# sourceMappingURL=index.js.map
