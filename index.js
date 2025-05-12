import{a as m,S as q,i as n}from"./assets/vendor-CocXUmuy.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();m.defaults.baseURL="https://pixabay.com/api/";async function y(t,i){try{return(await m("",{params:{q:t,key:"50191530-19c60f56ef7d22126639596e8",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:i}})).data}catch{}}const g=new q(".js-gallery .image-link",{captionsData:"alt",captionDelay:250}),h=document.querySelector(".js-gallery");function v(t){const i=t.map(({tags:a,largeImageURL:o,webformatURL:e,likes:r,views:s,comments:b,downloads:R})=>`<li class="gallery-item">
                <div>
                  <a href="${o}" class="image-link">
                    <img
                      src="${e}"
                      alt="${a}"
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
              </li>`).join("");h.insertAdjacentHTML("beforeend",i)}function d(){h.innerHTML=""}function f(t){t.classList.remove("hidden")}function L(t){t.classList.add("hidden")}let l="",p=1;const u=document.querySelector(".js-form"),c=document.querySelector(".js-loader"),w=document.querySelector(".btn-loader");u.addEventListener("submit",S);w.addEventListener("click",$);async function S(t){if(t.preventDefault(),l=t.target.elements["search-text"].value.trim(),l===""){n.warning({position:"topRight",message:"Please enter the correct query!"});return}d(),f(c);try{const i=await y(l);if(i.hits.length===0){n.warning({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),d();return}i.totalHits>15&&f(w),v(i.hits),g.refresh()}catch(i){n.error({position:"topRight",message:`ERROR: ${i}`})}finally{L(c),u.reset()}}async function $(){try{p+=1;const t=await y(l,p);v(t.hits),g.refresh()}catch(t){n.error({position:"topRight",message:`ERROR: ${t}`})}finally{L(c),u.reset()}}
//# sourceMappingURL=index.js.map
