const C="ps-backlog-v1-4-2";
const A=["./","./index.html","./styles.css","./app.js","./manifest.webmanifest","./icon.svg"];
self.addEventListener("install",e=>e.waitUntil((async()=>{
  const cache=await caches.open(C);
  await cache.addAll(A);
  await self.skipWaiting();
})()));
self.addEventListener("activate",e=>e.waitUntil((async()=>{
  await clients.claim();
  const keys=await caches.keys();
  await Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k)));
})()));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET"||new URL(e.request.url).origin!==location.origin)return;
  e.respondWith(caches.match(e.request).then(x=>x||fetch(e.request).then(r=>{
    if(r.ok)caches.open(C).then(c=>c.put(e.request,r.clone()));
    return r;
  }).catch(()=>caches.match("./index.html"))));
});
