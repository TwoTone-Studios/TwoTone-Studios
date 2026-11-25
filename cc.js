(function(){
var ID="s513fdkpmb",K="tt_cookie_choice",ls=null;
try{ls=window.localStorage}catch(e){}
function get(){try{return ls&&ls.getItem(K)}catch(e){return null}}
function set(v){try{ls&&ls.setItem(K,v)}catch(e){}}
function load(){
  if(window.clarity&&window.clarity.q===undefined&&document.getElementById("tt-clarity"))return;
  (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.id="tt-clarity";t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script",ID);
}
var v=get();
if(v==="yes"){load();return}
if(v==="no")return;
function show(){
  var s=document.createElement("style");
  s.textContent=".ttcc{position:fixed;left:max(12px,env(safe-area-inset-left,0px));right:max(12px,env(safe-area-inset-right,0px));bottom:max(12px,env(safe-area-inset-bottom,0px));z-index:2147483000;display:flex;flex-wrap:wrap;gap:10px 16px;align-items:center;justify-content:space-between;max-width:720px;margin:0 auto;padding:14px 18px;border-radius:16px;background:#0b0b0b;color:#fff;font:400 14px/1.4 Inter,system-ui,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.25)}.ttcc p{margin:0;flex:1 1 280px}.ttcc div{display:flex;gap:8px}.ttcc button{font:600 13px/1 Inter,system-ui,sans-serif;border:0;border-radius:999px;padding:11px 18px;cursor:pointer}.ttcc .y{background:#ff2e7e;color:#fff}.ttcc .n{background:#2a2a2a;color:#fff}";
  document.head.appendChild(s);
  var b=document.createElement("div");b.className="ttcc";b.setAttribute("role","dialog");b.setAttribute("aria-label","Cookie choice");
  b.innerHTML='<p>We use Microsoft Clarity to see how visitors use this site, which sets cookies. Is that OK?</p><div><button type="button" class="n">Decline</button><button type="button" class="y">Accept</button></div>';
  b.querySelector(".y").onclick=function(){set("yes");b.remove();load()};
  b.querySelector(".n").onclick=function(){set("no");b.remove()};
  document.body.appendChild(b);
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",show);else show();
})();
