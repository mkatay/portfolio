// Objektum, amely a hash értékekhez tartozó útvonalakat tartalmazza
const routes = {
  '': 'home.html',
  'about': 'about.html',
  'contact': 'contact.html'
};



//első látogatáskor, az oldal betöltődésekor:
navigate();

// A hash változását figyeljük, és frissítjük a tartalmat
window.addEventListener("hashchange", () => navigate());


// A megfelelő oldalt jelenítjük meg a hash alapján
function navigate() {
  const domObj = document.getElementById("content");
  // elmentjük a jelenlegi URL hash értékét.
  const hash = window.location.hash;
  const route = hash.substring(2); // Az '#/' előtag eltávolítása
  const page = routes[route] || '404.html';
  loadPage(page, domObj);
}


async function loadPage(url, domObj) {
  try {
   const response = await fetch(url);
   const html = await response.text();
   domObj.innerHTML = html;
  } catch (error) {
    console.error(`Hiba történt: ${error}`);
  }
}
