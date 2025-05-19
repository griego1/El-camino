function showMap() {}
  const mapDiv = document.getElementById('map'); // Get the map container
const map = L.map('map').setView([40.0, -4.0], 10); // Centered over Spain
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
const caminoFrancesCoords = [
  [43.1628, -1.2416],  // Saint-Jean-Pied-de-Port
  [43.0096, -1.3213],  // Roncesvalles
  [42.8169, -1.6440],  // Pamplona
  [42.6728, -2.9441],  // Logroño
  [42.4650, -2.4496],  // Nájera
  [42.3411, -3.6997],  // Burgos
  [42.5469, -5.5583],  // León
  [42.5987, -6.6147],  // Ponferrada
  [42.7339, -7.4100],  // Sarria
  [42.8782, -8.5448]   // Santiago de Compostela
];
const caminoRoute = L.polyline(caminoFrancesCoords, {
  color: 'blue',
  weight: 4,
  opacity: 0.8,
  smoothFactor: 1
}).addTo(map);
const religiousSites = [
  {
    name: "Seville Cathedral",
    coords: [37.3861, -5.9922],
    type: "cathedral",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sevilla_Cathedral_-_Southeast.jpg/1024px-Sevilla_Cathedral_-_Southeast.jpg",
    description: "One of the largest Gothic cathedrals in the world, and the burial site of Christopher Columbus."
  },
  {
    name: "Colegiata de La Candelaria (Zafra)",
    coords: [38.4170, -6.4162],
    type: "church",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Iglesia_de_la_Candelaria_de_Zafra_1.jpg/800px-Iglesia_de_la_Candelaria_de_Zafra_1.jpg",
    description: "A 16th-century church known for its intricate altarpiece and historical significance in Zafra."
  },
  {
    name: "Basilica of Santa Eulalia (Mérida)",
    coords: [38.9198, -6.3419],
    type: "basilica",
    image: "https://merida.es/wp-content/uploads/2023/10/Santa-Eulalia-y-atrio.jpeg",
    description: "An early Christian basilica built over a Roman necropolis, dedicated to the martyr Saint Eulalia."
  },
  {
    name: "Concatedral de Santa María (Cáceres)",
    coords: [39.4750, -6.3731],
    type: "cathedral",
    image: "https://concatedralcaceres.com/wp-content/uploads/20220801_ConcatedralCaceres_-43-1.jpg",
    description: "A striking example of late Gothic architecture in the old town of Cáceres."
  },
  {
    name: "Cathedrals of Salamanca",
    coords: [40.9607, -5.6639],
    type: "cathedral",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Salamanca_Catedral.JPG/1280px-Salamanca_Catedral.JPG",
    description: "A unique blend of two cathedrals (old and new) standing side by side in Salamanca."
  },
  {
    name: "Cathedral of Zamora",
    coords: [41.5041, -5.7446],
    type: "cathedral",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Zamora_cathedral_2021_-_north_fa%C3%A7ade.jpg/1280px-Zamora_cathedral_2021_-_north_fa%C3%A7ade.jpg",
    description: "A Romanesque cathedral with a distinctive Byzantine-style dome."
  },
  {
    name: "Ourense Cathedral",
    coords: [42.3357, -7.8639],
    type: "cathedral",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Catedral_de_Ourense_-_Cabeceira.jpg/1024px-Catedral_de_Ourense_-_Cabeceira.jpg",
    description: "Also known as the Cathedral of San Martiño, blending Romanesque and Gothic elements."
  },
  {
    name: "Santiago Cathedral",
    coords: [42.8802, -8.5452],
    type: "cathedral",
    image: "https://www.caminodesantiago.gal/osdam/filestore/7/1/7/5/8_e797c45712fed65/71758scr_d7994c1773734e6.jpg",
    description: "The final destination of the Camino de Santiago pilgrimage, housing the tomb of Saint James."
  },
  {
  name: "Church of Saint Nicholas of Portomarin",
  coords: [42.4827, -7.3656], // Slightly offset to avoid icon overlap
  type: "church",
  image: "https://vivecamino.com/img/poi/av/iglesia-de-san-nicolas-portomarin_3391.jpg",
  description: "A Romanesque church known for its unique architecture and historical significance."
  },
{
    name: "Cathedral of Leon",  
    coords: [42.5994, -5.5662],
    type: "cathedral",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkoaSX8WzfSXC9aYa8A7-Zopy-4qztsYiqg&s",
    description: "A Gothic cathedral famous for its stunning stained glass windows and intricate architecture."
},
{
    name: "Cathedral of Burgos",  
    coords: [42.3409, -3.7044],
    type: "cathedral",
    image: "https://assets.wikiwand.com/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Escaleras_a_la_Catedral_--_2023_--_Burgos%252C_Castilla_y_Le%25C3%25B3n%252C_Espa%25C3%25B1a.jpg/600px-Escaleras_a_la_Catedral_--_2023_--_Burgos%252C_Castilla_y_Le%25C3%25B3n%252C_Espa%25C3%25B1a.jpg&w=828&q=70",
    description: "A masterpiece of Gothic architecture, known for its impressive façade and altarpiece."
},
{
    name: "Co-Cathedral of Santa Maria de la Redonda (Logroño)",  
    coords: [42.2759, -2.2643],
    type: "cathedral",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Logro%C3%B1o_2021_-_main_fa%C3%A7ade.jpg/500px-Logro%C3%B1o_2021_-_main_fa%C3%A7ade.jpg",
    description: "A baroque-style co-cathedral located in the heart of Logroño, known for its twin towers."
},
{
    name: "Cathedral of Astorga",  
    coords: [42.2728, -6.0324],
    type: "cathedral",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrZzM0VFO_5SPse_DFNxqhHJyna0gyI6XRj829JUunTfrtSjXajHC_5CSsi2QVDursQyvF9pst7YK4Rn0qecDVpOYEEJtBiilM6etNXgngS7cBvJMf0RfUroRis6jvewngnAV8W=s1360-w1360-h1020-rw",
    description: "A neo-Gothic cathedral designed by Antoni Gaudí, known for its unique architecture and stunning stained glass."
},
{
    name: "Pamplona Cathedral",  
    coords: [42.4911, -2.3828],
    type: "cathedral",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Pamplona_2022_-_west_facade_front.jpg",
    description: "A Gothic-style cathedral with a neoclassical façade, located in the historic center of Pamplona."
},
{
    name: "Royal Collegiate Church of San Isidoro (Leon)",  
    coords: [42.3602, -5.3416],
    type: "basilica",
    image: "https://www.turismocastillayleon.com/en/heritage-culture/churches-chapels/real-colegiata-san-isidoro.files/38381-35906_SD_0.jpg/g,38381-35906_SD_0.jpg",
    description: "A Romanesque church known for its stunning frescoes and historical significance, often referred to as the 'Sistine Chapel of Spain'."
},
{
    name: "San Marcos Monastery (Leon)",  
    coords: [42.6019, -5.5814],
    type: "monastery",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Panor%C3%A1mica_del_convento_de_San_Marcos_en_Le%C3%B3n.jpg/1200px-Panor%C3%A1mica_del_convento_de_San_Marcos_en_Le%C3%B3n.jpg?20130912232453",
    description: "A former monastery and now a parador, known for its stunning Plateresque façade and historical significance."
},
{
    name: "Church of Saint Mary of Eunate",  
    coords: [42.4017, -1.4531],
    type: "church",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Eunate.JPG/500px-Eunate.JPG",
    description: "A unique Romanesque church with a circular design."
},
{
    name: "Santo Domingo de la Calzada Cathedral, La Rioja",  
    coords: [42.4409, -2.9536],
    type: "cathedral",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Santo_Domingo_de_la_Calzada%2C_catedral-PM_32689.jpg",
    description: "A Romanesque cathedral known for its historical significance and the legend of the miraculous chicken."
},
{
    name: "Arch of San Benito, Sahagun, León",  
    coords: [42.22156, -5.207],
    type: "monastery",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Sahagun_Leon_Spain_Arco_de_San_Benito.jpg",
    description: "A historic archway that was part of the monastery complex, known for its architectural beauty."
},
{
    name: "San Juan de Ortega Monastery, Burgos",  
    coords: [42.3220, -3.58493],
    type: "monastery",
    image: "https://www.elcaminoconcorreos.com/admin/files/articulos/69/iglesia-san-juan-de-ortega-1-opt.jpg",
    description: "A small monastery located on the Camino de Santiago, known for its historical significance and serene surroundings."
},
{
    name: "San Millan de Yuso Monastery, La Rioja",  
    coords: [42.194597, -2.5221],
    type: "monastery",
    image: "https://whc.unesco.org/uploads/thumbs/site_0805_0001-750-750-20090924140554.jpg",
    description: "A UNESCO World Heritage site, this monastery is known for its historical significance and beautiful architecture."
},
{
    name: "Church of the Holy Sepulchre, Torres del Río, Navarra",  
    coords: [42.3308, -2.1617],
    type: "church",
    image: "https://vialucispress.wordpress.com/wp-content/uploads/2012/06/torres-del-rio-la-iglesia-del-santo-sepulcro-11.jpg",
    description: "A unique church with a circular design, inspired by the Church of the Holy Sepulchre in Jerusalem."
},
{
    name: "Church of Saint Nicholas of Villafranca del Bierzo, León",  
    coords: [42.3627, -6.4827],
    type: "church",
    image: "https://l450v.alamy.com/450v/2e1gxpf/the-faade-of-st-nicholas-church-iglesia-de-san-nicolas-el-real-villafrance-del-bierzo-castile-and-leon-spain-2e1gxpf.jpg",
    description: "A historic church known for its beautiful architecture and historical significance."
},
{
    name: "Monastery of Yuste, Caceres",  
    coords: [40.649, -5.4418],
    type: "monastery",
    image: "https://www.patrimonionacional.es/sites/default/files/styles/full/public/2020-05/07-img_9590.jpg?itok=DRwdYYX9",
    description: "A former monastery where Emperor Charles V spent his last years, known for its beautiful gardens and architecture."
},
{
    name: "Cathedral of Palencia",  
    coords: [41.040, -4.3213],
    type: "cathedral",
    image: "https://cloud.inspain.org/imgwbp/sitios/9/8/2/vg765nwmjvgacviouppyeoseui_2000.webp",
    description: "A Gothic cathedral known for its stunning architecture and historical significance."
},
{
    name: "Royal MOnastery of Santa Maria de Guadalupe",  
    coords: [39.4525, -5.3273],
    type: "monastery",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Royal_Monastery_of_Santa_Maria_de_Guadalupe.jpg",
    description: "Built in the 14th century, this monastery is located in the town of Guadalupe, Extremadura."
},
{
    name: "Church of Santa Maria O Cebreiro, Lugo",  
    coords: [42.7079, -7.0434],
    type: "church",
    image: "https://media.pilgrimaps.com/wp-content/uploads/2024/10/shutterstock_2169103467-scaled.jpg",
    description: "It is of pre-Romanesque style and is located in the village of O Cebreiro, Lugo."
},
{
    name: "Santa Cruz Church, Elbete, Navarra",  
    coords: [43.1485, -1.5130],
    type: "church",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Elbete.JPG/500px-Elbete.JPG",
    description: "Church of Santa Cruz, located in Elbete, Navarra, is a small church known for its unique architecture."
},
{
    name: "Church of Santa Maria la Real of Sangüesa, Navarra",  
    coords: [42.5770, -1.2853],
    type: "church",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Iglesia_de_Santa_Mar%C3%ADa_la_Real%2C_Sang%C3%BCesa_02.jpg",
    description: "It is a Romanesque church with Gothic features located in the town of Sangüesa, Navarra."
},
{
    name: "Monastery of Santa Maria la Real, de Aguilar de Campoo, Palencia",  
    coords: [42.7959, -4.2715],
    type: "monastery",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Monasterio_Santa_Maria_la_Real_-_Aguilar_de_Campoo2.jpg/600px-Monasterio_Santa_Maria_la_Real_-_Aguilar_de_Campoo2.jpg",
    description: "A former Benedictine monastery, it is located in Aguilar de Campoo, Palencia."
},
{
    name: "Monastery of Santa Maria la Real de Irache, Navarra",  
    coords: [42.3900, -2.0235],
    type: "monastery",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Monast%C3%A8re_Irache.jpg",
    description: "A former Benedictine monastery, it dates from the 8th century and is located in the town of Ayegui, Navarra."
},
];
// Add styled popups with image and description
const icons = {
  cathedral: L.icon({
    iconUrl: 'assets/icons/cathedral.png',
    iconSize: [28, 28],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  church: L.icon({
    iconUrl: 'assets/icons/church (2).png',
    iconSize: [28, 28],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  basilica: L.icon({
    iconUrl: 'assets/icons/basilica.png',
    iconSize: [34, 34],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  monastery: L.icon({
    iconUrl: 'assets/icons/monastery.png',
    iconSize: [28, 28],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  })
};
religiousSites.forEach(site => {
  const icon = icons[site.type] || icons.church; // default fallback icon

  const popupContent = `
    <div style="text-align:center; max-width:200px;">
      <strong>${site.name}</strong><br>
      <img src="${site.image}" alt="${site.name}" style="width:60%; border-radius:5px; margin:5px 0;">
      <p style="font-size:10px;">${site.description}</p>
    </div>
  `;

L.marker(site.coords, { icon: icon }).addTo(map).bindPopup(popupContent);
});
// Add event listener to show the map when "Vía de la Plata" link is clicked
document.getElementById('viaLink').addEventListener('click', function (e) {
e.preventDefault(); // Prevent default behavior of the link
showMap(); // Show the map
});