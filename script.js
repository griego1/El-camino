function showMap() {
const map = L.map('map').setView([40.0, -4.0], 6);
// Add OpenStreetMap tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const viaDeLaPlataCoords = [
  [37.3886, -5.9823],  // Seville
  [38.2670, -6.7662],  // Zafra
  [38.8786, -6.9703],  // Mérida
  [39.4699, -6.3725],  // Cáceres
  [40.9613, -5.6669],  // Salamanca
  [41.5035, -5.7468],  // Zamora
  [42.3358, -7.8639],  // Ourense
  [42.8782, -8.5448]   // Santiago de Compostela
];

const viaRoute = L.polyline(viaDeLaPlataCoords, {
  color: 'red',
  weight: 4,
  opacity: 0.8,
  smoothFactor: 1
}).addTo(map);

// Optional: zoom to fit the whole route
map.fitBounds(viaRoute.getBounds());
const religiousSites = [
  {
    name: "Seville Cathedral",
    coords: [37.3861, -5.9922],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sevilla_Cathedral_-_Southeast.jpg/1024px-Sevilla_Cathedral_-_Southeast.jpg",
    description: "One of the largest Gothic cathedrals in the world, and the burial site of Christopher Columbus."
  },
  {
    name: "Colegiata de La Candelaria (Zafra)",
    coords: [38.4170, -6.4162],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Iglesia_de_la_Candelaria_de_Zafra_1.jpg/800px-Iglesia_de_la_Candelaria_de_Zafra_1.jpg",
    description: "A 16th-century church known for its intricate altarpiece and historical significance in Zafra."
  },
  {
    name: "Basilica of Santa Eulalia (Mérida)",
    coords: [38.9198, -6.3419],
    image: "https://merida.es/wp-content/uploads/2023/10/Santa-Eulalia-y-atrio.jpeg",
    description: "An early Christian basilica built over a Roman necropolis, dedicated to the martyr Saint Eulalia."
  },
  {
    name: "Concatedral de Santa María (Cáceres)",
    coords: [39.4750, -6.3731],
    image: "https://concatedralcaceres.com/wp-content/uploads/20220801_ConcatedralCaceres_-43-1.jpg",
    description: "A striking example of late Gothic architecture in the old town of Cáceres."
  },
  {
    name: "Cathedrals of Salamanca",
    coords: [40.9607, -5.6639],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Salamanca_Catedral.JPG/1280px-Salamanca_Catedral.JPG",
    description: "A unique blend of two cathedrals (old and new) standing side by side in Salamanca."
  },
  {
    name: "Cathedral of Zamora",
    coords: [41.5041, -5.7446],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Zamora_cathedral_2021_-_north_fa%C3%A7ade.jpg/1280px-Zamora_cathedral_2021_-_north_fa%C3%A7ade.jpg",
    description: "A Romanesque cathedral with a distinctive Byzantine-style dome."
  },
  {
    name: "Ourense Cathedral",
    coords: [42.3357, -7.8639],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Catedral_de_Ourense_-_Cabeceira.jpg/1024px-Catedral_de_Ourense_-_Cabeceira.jpg",
    description: "Also known as the Cathedral of San Martiño, blending Romanesque and Gothic elements."
  },
  {
    name: "Santiago Cathedral",
    coords: [42.8806, -8.5444],
    image: "https://www.caminodesantiago.gal/osdam/filestore/7/1/7/5/8_e797c45712fed65/71758scr_d7994c1773734e6.jpg",
    description: "The final destination of the Camino de Santiago pilgrimage, housing the tomb of Saint James."
  }
];

// Add styled popups with image and description
religiousSites.forEach(site => {
  const popupContent = `
    <div style="text-align:center; max-width:200px;">
      <strong>${site.name}</strong><br>
      <img src="${site.image}" alt="${site.name}" style="width:100%; border-radius:5px; margin:5px 0;">
      <p style="font-size:10px;">${site.description}</p>
    </div>
  `;
  L.marker(site.coords).addTo(map).bindPopup(popupContent);
});
}
// Add event listener to show the map when "Vía de la Plata" link is clicked
document.getElementById('viaLink').addEventListener('click', function (e) {
e.preventDefault(); // Prevent default behavior of the link
showMap(); // Show the map
});