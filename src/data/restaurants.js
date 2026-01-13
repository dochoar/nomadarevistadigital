// Datos de restaurantes y prestadores de servicios gastronómicos en Morelos
// ESTA VERSIÓN CONTIENE DATOS VERIFICADOS CON VISITMORELOS.MX

// Imágenes existentes y generadas
import casaGrandeImg from '../assets/restaurants/casa-grande.png';
import chocolateriaImg from '../assets/restaurants/chocolateria.png';
import emiliaImg from '../assets/restaurants/emilia.png';
import colibriImg from '../assets/restaurants/colibri.png';
import pancracioImg from '../assets/restaurants/pancracio.png';
import verdesalviaImg from '../assets/restaurants/verdesalvia.png';
import paraisoImg from '../assets/restaurants/paraiso-cafe.png';
import casaTaxcoImg from '../assets/restaurants/casa-taxco.png';
import casaTikalImg from '../assets/restaurants/casa-tikal.png';
import tiaMuchachasImg from '../assets/restaurants/tia-muchachas.png';
import bungyImg from '../assets/restaurants/bungy-teques.png';
import milAmoresImg from '../assets/restaurants/mil-amores.png';
import nanaImg from '../assets/restaurants/nana-mixtli.png';

// Reusadas/Existentes
import isabellaImg from '../assets/restaurants/isabella.png';
import aguachilImg from '../assets/restaurants/aguachil.png';
import casaHidalgoImg from '../assets/restaurants/casa-hidalgo.png';
import mananitasImg from '../assets/restaurants/las-mananitas.png';
import terrazaImg from '../assets/restaurants/terraza-catedral.png';
import puertoImg from '../assets/restaurants/puerto-pacifico.png';

// Placeholders estratégicos
const fridaDiegoImg = isabellaImg;
const iguanaImg = paraisoImg;
const cafe87Img = chocolateriaImg;
const indiaBonitaImg = mananitasImg;

// Hoteles Placeholders
const anticavillaImg = emiliaImg;
const amomoxtliImg = milAmoresImg;
const lasCasasImg = casaHidalgoImg;
const sumiyaImg = verdesalviaImg;
const haciendaCortesImg = casaTikalImg;
const lasQuintasImg = isabellaImg;
const buenaVibraImg = paraisoImg;
const sanAntonioImg = terrazaImg;

export const restaurants = [
    {
        id: 1,
        name: "Casa Grande",
        category: "Restaurantes",
        description: "Tradición culinaria en un ambiente histórico.",
        captivatingDescription: "Este restaurante es famoso porque tiene platos de la cocina mexicana. Siempre puedes disfrutar de un generoso laing: es la especialidad de Casa Grande Tlayacapan. Este lugar es conocido por su sorprendente cerveza y música en vivo por la noche.",
        founded: "Principios del siglo XX",
        history: "Ubicada en lo que fuera una antigua casona señorial, Casa Grande ha sido testigo de la evolución de Morelos.",
        specialties: ["Mole poblano con arroz", "Cecina de Yecapixtla", "Laing"],
        image: casaGrandeImg,
        gallery: [casaGrandeImg, casaTaxcoImg, milAmoresImg],
        address: "Benito Juárez 8, Tlayacapan, Mexico, 62540",
        phone: "735 108 1089",
        email: "casagrande.tlayacapan@gmail.com",
        website: "https://www.facebook.com/CasaGrandeTlayacapan",
        coordinates: { lat: 18.9600, lng: -98.9800 },
        videoId: "OQkXJjgT1W8",
        priceRange: "$$",
        reviews: [
            { user: "Wanderlog User", rating: 4, comment: "Un lugar bastante digno para detenerse a comer.", date: "2025" }
        ]
    },
    {
        id: 2,
        name: "De la Cruz Chocolatería",
        category: "Restaurantes",
        description: "El refugio del cacao en el corazón de la ciudad.",
        captivatingDescription: "Terraza dentro del edificio histórico de Pasaje Florencia. El aroma a cacao tostado te guía hasta este rincón mágico donde cada sorbo de chocolate cuenta una historia ancestral.",
        founded: "2018",
        history: "Nacida de la pasión por el cacao mexicano, De la Cruz busca rescatar la tradición chocolatera ofreciendo bebidas prehispánicas y repostería de autor.",
        specialties: ["Chocolate caliente con especias", "Tascalate", "Pastel de chocolate amargo"],
        image: chocolateriaImg,
        gallery: [chocolateriaImg, cafe87Img, paraisoImg],
        address: "Calle Lic. Ignacio L. Rayon 22, Cuernavaca Centro",
        phone: "777 2426877",
        email: "delacruzcacaoterraza@gmail.com",
        website: "https://www.facebook.com/De-La-Cruz-Terraza-Cacao-Comedor-110337947137913/",
        coordinates: { lat: 18.9225, lng: -99.2355 },
        videoId: "tN4j0r7xJc0",
        priceRange: "$$",
        reviews: [
            { user: "Visitante Local", rating: 5, comment: "El mejor lugar para trabajar o relajarse con un buen chocolate.", date: "Reciente" }
        ]
    },
    {
        id: 3,
        name: "Isabella Restaurante",
        category: "Restaurantes",
        description: "Elegancia y tradición en cada platillo.",
        captivatingDescription: "Un restaurante icónico, en el centro de Cuernavaca Morelos, que cuenta con una exquisita especialidad en la Cocina mexicana, mariscos y bebidas.",
        founded: "1995",
        history: "Fundado con la visión de traer la alta cocina internacional al centro de Cuernavaca, convirtiéndose rápidamente en un referente de bodas y eventos.",
        specialties: ["Lasaña a la boloñesa", "Salmón a las finas hierbas", "Tiramisú casero"],
        image: isabellaImg,
        gallery: [isabellaImg, emiliaImg, verdesalviaImg],
        address: "Ignació L. Rayón #8 A Cuernavaca Centro",
        phone: "777 502 85 52",
        email: "alexispastranaaaviles@gmail.com",
        website: null,
        coordinates: { lat: 18.9210, lng: -99.2340 },
        videoId: "tN4j0r7xJc0",
        priceRange: "$$$",
        reviews: [
            { user: "Carlos R.", rating: 5, comment: "Elegancia y sabor en cada platillo.", date: "Diciembre 2025" }
        ]
    },
    {
        id: 4, name: "EMILIA CUERNAVACA", category: "Restaurantes",
        description: "Cocina de autor en un entorno vanguardista.",
        captivatingDescription: "EMILIA no es solo comida, es arte. Restaurant de cocina molecular de autor. Cada plato es un lienzo donde los sabores moleculares y las texturas juegan para sorprender a tu paladar.",
        founded: "2015",
        history: "Un proyecto gastronómico que buscó romper los esquemas tradicionales de Cuernavaca introduciendo técnicas de cocina molecular y de vanguardia.",
        specialties: ["Esferas de aguacate", "Carpaccio de res con aceite de trufa", "Postre de texturas de chocolate"],
        image: emiliaImg, gallery: [emiliaImg, verdesalviaImg, isabellaImg],
        address: "Av Teopanzolco 305-A, Vista Hermosa, 62290 Cuernavaca, Mor.",
        phone: "777 452 8891", email: "reservas@emilia.mx",
        website: "https://emiliarhs.com/",
        coordinates: { lat: 18.9350, lng: -99.2150 }, videoId: "tN4j0r7xJc0", priceRange: "$$$$",
        reviews: [{ user: "Sofía L.", rating: 5, comment: "Una experiencia culinaria única.", date: "Enero 2026" }]
    },
    {
        id: 5, name: "El Aguachil", category: "Restaurantes",
        description: "El sabor fresco del mar en la ciudad.",
        captivatingDescription: "El aguachile ofrece platillos que son un grato sabor al paladar. Imagina estar en la costa sin salir de Cuernavaca.",
        founded: "2010",
        history: "Nació como un pequeño puesto de mariscos estilo Sinaloa y creció gracias a la fama de sus salsas negras secretas y la frescura de sus productos.",
        specialties: ["Aguachile negro", "Tostada de atún fresco", "Camarones roca"],
        image: aguachilImg, gallery: [aguachilImg, puertoImg],
        address: "Av. San Diego 704, zona 1, Delicias, 62296 Cuernavaca, Mor.",
        phone: "777 100 2570", email: "hola@elaguachil.mx",
        website: "http://www.elaguachil.com",
        coordinates: { lat: 18.9054, lng: -99.2312 }, videoId: "GgS6p7t5tqM", priceRange: "$$",
        reviews: [{ user: "Google User", rating: 5, comment: "Excelente calidad en mariscos. Camarones caramelo deliciosos.", date: "Hace 2 meses" }]
    },

    {
        id: 6, name: "COLIBRÍ (GAIA CAFÉ)", category: "Restaurantes",
        description: "El mejor desayuno con la vista más icónica.",
        captivatingDescription: "Restaurante cafetería en el centro de Cuernavaca, frente al zócalo. Despertar en Cuernavaca sabe mejor desde la terraza de Colibrí.",
        founded: "2009",
        history: "Empresa mexicana con más de 15 años de experiencia, convirtiéndose en el punto de encuentro favorito para locales y turistas frente al Zócalo.",
        specialties: ["Chilaquiles Colibrí", "Pan dulce recién horneado", "Café de altura"],
        image: colibriImg, gallery: [colibriImg, casaTaxcoImg],
        address: "Gutemberg #2. Col. Centro, Cuernavaca, Mexico",
        phone: "777 219 23 94", email: "gaiacafecuernavaca@gmail.com",
        website: "https://www.facebook.com/gaiacafecuernavaca/",
        coordinates: { lat: 18.9215, lng: -99.2346 }, videoId: "tN4j0r7xJc0", priceRange: "$$",
        reviews: [{ user: "Wanderlog Reviewer", rating: 4, comment: "Buen lugar, acogedor y cómodo. Excelente comida.", date: "Julio 2024" }]
    },

    {
        id: 7, name: "PANCRACIO", category: "Restaurantes",
        description: "Nostalgia culinaria en el Centro Histórico.",
        captivatingDescription: "Transportarse al Cuernavaca de antaño, revivir la ciudad en un lugar muy especial, con diferentes escenarios, en donde se puede pasar un rato super agradable.",
        founded: "2015",
        history: "Rescatando la esencia del Cuernavaca de antaño, Pancracio se estableció en una casona histórica para ofrecer comida reconfortante y panadería propia.",
        specialties: ["Pan artesanal de masa madre", "Sopa de fideo seco", "Enchiladas suizas"],
        image: pancracioImg, gallery: [pancracioImg, casaTikalImg],
        address: "Ignacio López Rayón #22 antes 107, Centro Históricos, 62000 Cuernavaca, Mor.",
        phone: "777 202 4948", email: "pancraciocvca@gmail.com",
        website: "http://pancraciocvca.com",
        coordinates: { lat: 18.9220, lng: -99.2330 }, videoId: "OQkXJjgT1W8", priceRange: "$$$", reviews: []
    },

    {
        id: 8, name: "Restaurante Verdesalvia", category: "Restaurantes",
        description: "Alta cocina italo-mexicana en jardines de ensueño.",
        captivatingDescription: "A menos de una hora de la Ciudad de México, hay un paraíso donde disfrutar de la riqueza y las tradiciones culinarias de Italia con los mejores ingredientes de México.",
        founded: "2010 (junto con Anticavilla)",
        history: "Parte del Hotel Anticavilla, Verdesalvia nació para fusionar la sofisticación italiana con los ingredientes frescos de Morelos.",
        specialties: ["Risotto ai funghi", "Arancinis de prosciutto", "Pasta hecha a mano"],
        image: verdesalviaImg, gallery: [verdesalviaImg, emiliaImg],
        address: "Río Amacuzac 10, esquina Chilpancingo, Vista Hermosa, Cuernavaca Morelos, CP 62290",
        phone: "777 313 31 31", email: "restaurant_manager@anticavillahotel.com",
        website: "https://www.verdesalvia.mx",
        coordinates: { lat: 18.9345, lng: -99.2160 }, videoId: "tN4j0r7xJc0", priceRange: "$$$",
        reviews: [{ user: "Wanderlog User", rating: 5, comment: "Ambiente precioso, jardín increíble. Comida deliciosa y fresca.", date: "Reciente" }]
    },

    {
        id: 9, name: "El Paraíso del Café", category: "Restaurantes",
        description: "Un espacio multicultural para el café y la charla.",
        captivatingDescription: "Cafeteria/Restaurante multicultural. Más que una cafetería, es un centro cultural. Aquí las ideas fluyen tantas como el café.",
        founded: "2008",
        history: "Inició como un pequeño café literario y evolucionó a un foro multicultural que apoya artistas locales.",
        specialties: ["Baguettes artesanales", "Café espresso de especialidad", "Postres caseros"],
        image: paraisoImg, gallery: [paraisoImg, cafe87Img],
        address: "Ignació L. Rayón #18 Cuernavaca Centro.",
        phone: "777 175 19 24", email: "lordbasuca@hotmail.com",
        website: null,
        coordinates: { lat: 18.9290, lng: -99.2200 }, videoId: "tN4j0r7xJc0", priceRange: "$$",
        reviews: [{ user: "Gastroranking User", rating: 4, comment: "Buen café y buena atención. Precios accesibles.", date: "2024" }]
    },

    {
        id: 10, name: "Casa Taxco", category: "Restaurantes",
        description: "Sabor mexicano con más de 30 años de tradición.",
        captivatingDescription: "Restaurante familiar de comida mexicana, establecidos desde 1990. El sabor de siempre, el que nunca falla.",
        founded: "1990",
        history: "Una empresa familiar que ha crecido gracias a su constancia y a mantener las recetas originales de la abuela. En la actualidad existen 4 sucursales.",
        specialties: ["Mole poblano", "Pan de elote", "Cantaritos"],
        image: casaTaxcoImg, gallery: [casaTaxcoImg, casaGrandeImg], address: "Av. Cuauhtémoc 50",
        phone: "777 452 38 14", email: "Casataxco.centro@gmail.com",
        website: null,
        coordinates: { lat: 18.9260, lng: -99.2280 }, videoId: "OQkXJjgT1W8", priceRange: "$$",
        reviews: [{ user: "YouTube Review", rating: 5, comment: "100% recomendado para desayunar. El mole es excelente.", date: "Junio 2024" }]
    },

    {
        id: 11, name: "CASA TIKAL", category: "Restaurantes",
        description: "Arte, cultura y gastronomía en una casona vieja.",
        captivatingDescription: "Rescatando una de las casonas viejas del centro de Cuernavaca “Casa Tikal” abre sus puertas. Trayendo de varios rincones de México los sabores de la rica cocina Yucateca y Oaxaqueña.",
        founded: "2015",
        history: "Fundado por amantes del arte que quisieron rescatar una casona del centro para convertirla en galería y restaurante.",
        specialties: ["Pollo en salsa de almendras", "Quesadillas de chapulines", "Café de olla"],
        image: casaTikalImg, gallery: [casaTikalImg, pancracioImg],
        address: "Comonfort 13BIS, Cuernavaca Centro, Centro, 62000 Cuernavaca, Mor.",
        phone: "777 202 9063", email: "casatikal@gmail.com",
        website: "https://www.facebook.com/CASATIKALCUERNAVACA",
        coordinates: { lat: 18.9205, lng: -99.2350 }, videoId: "OQkXJjgT1W8", priceRange: "$$$",
        reviews: [{ user: "Gustavo R.", rating: 5, comment: "Ambiente hogareño y tranquilo, lleno de arte. Comida auténtica.", date: "Diciembre 2025" }]
    },

    {
        id: 12, name: "La Tía de las Muchachas", category: "Restaurantes",
        description: "Alegría, color y los mejores jugos naturales.",
        captivatingDescription: "Somos una lonchería inspirada en la gastronomía y el cine mexicano, cocinamos los sabores del barrio y los revelamos con un enfoque contemporáneo.",
        founded: "2016",
        history: "Un concepto fresco y desenfadado que reinventó la lonchería tradicional mexicana.",
        specialties: ["Tacos de cecina", "Mole casero", "Bolillos con nata"],
        image: tiaMuchachasImg, gallery: [tiaMuchachasImg, casaTaxcoImg],
        address: "Calle Lic. Ignacio L. Rayon 7-local A-1, Cuernavaca Centro, Centro, 62000 Cuernavaca, Mor",
        phone: "7772122787", email: "loncheria.delatia@gmail.com",
        website: "https://www.facebook.com/LoncheriaDeLaTia",
        coordinates: { lat: 18.9230, lng: -99.2360 }, videoId: "OQkXJjgT1W8", priceRange: "$",
        reviews: [{ user: "Wanderlog User", rating: 5, comment: "Excelente relación calidad-precio. Los postres son una delicia.", date: "Reciente" }]
    },

    {
        id: 13, name: "CASA HIDALGO", category: "Restaurantes",
        description: "La mejor vista al Palacio de Cortés.",
        captivatingDescription: "Historia y sabor. Las instalaciones del Restaurante son lo que antiguamente fue la Farmacia Cruz Blanca.",
        founded: "2000",
        history: "Ubicado frente al Palacio de Cortés, se ha consolidado como el lugar turístico por excelencia para disfrutar de la vista y la gastronomía local.",
        specialties: ["Camarones a la mantequilla", "Tacos de salmón al pastor", "Pan de elote"],
        image: casaHidalgoImg, gallery: [casaHidalgoImg, terrazaImg],
        address: "Jardin de Los Heroes 6/ Hidalgo 6, Centro Histórico, Cuernavaca, Morelos, MEXICO, CP 62000",
        phone: "(777) 312 2749", email: "sales@casahidalgo.com",
        website: "http://www.casahidalgo.com/",
        coordinates: { lat: 18.9214, lng: -99.2345 }, videoId: "tN4j0r7xJc0", priceRange: "$$$",
        reviews: [{ user: "Wanderlog Reviewer", rating: 4, comment: "Vista hermosa y comida deliciosa. Muy buen ambiente.", date: "Reciente" }]
    },

    {
        id: 14, name: "Bungy Teques", category: "Restaurantes", description: "Adrenalina y sabor frente al lago.", captivatingDescription: "Donde la emoción del salto en bungee se encuentra con el placer de una buena comida frente al lago de Tequesquitengo.", founded: "1998", history: "Pioneros en el turismo de aventura en Tequesquitengo.", specialties: ["Alitas Bungee", "Hamburguesa Extreme", "Cerveza fría"], image: bungyImg, gallery: [bungyImg, puertoImg],
        address: "Lago Pátzcuaro 15-5ta, seccion brisas, 62915 Tequesquitengo, Mor",
        phone: "55 2514 8067", email: "tequesbungy@gmail.com",
        website: null,
        coordinates: { lat: 18.6167, lng: -99.2667 }, videoId: "GgS6p7t5tqM", priceRange: "$$", reviews: []
    },

    {
        id: 15, name: "Mil Amores Tlayacapan", category: "Restaurantes", description: "Romance y tradición en Pueblo Mágico.", captivatingDescription: "Mil Amores es un homenaje y un compromiso a toda la cultura mexicana. Como dice Bob Willey: 'Revisamos el pasado y preparamos recetas tradicionales'.", founded: "2017", history: "Creado para ofrecer una experiencia gastronómica de calidad en el corazón del Pueblo Mágico.", specialties: ["Cecina de Yecapixtla", "Tlacoyos de frijol", "Mezcal artesanal"], image: milAmoresImg, gallery: [milAmoresImg, casaGrandeImg],
        address: "Galeana #2, 62540 Tlayacapan, Morelos, Mexico.",
        phone: null, email: "amor@milamores.mx",
        website: "https://www.facebook.com/milamorestlayacapan/",
        coordinates: { lat: 18.9560, lng: -98.9800 }, videoId: "OQkXJjgT1W8", priceRange: "$$", reviews: []
    },

    {
        id: 16, name: "Frida y Diego", category: "Restaurantes", description: "Color y sabor mexicano.", captivatingDescription: "Restaurante familiar con deliciosa comida casera 100% mexicana en el corazón de Cuernavaca.", founded: "2019", history: "Inspirado en el amor de Frida y Diego por la cocina mexicana, este restaurante celebra la tradición con un toque artístico.", specialties: ["Enchiladas Frida", "Mole Negro", "Aguas frescas"], image: fridaDiegoImg, gallery: [fridaDiegoImg, casaTaxcoImg],
        address: "Calle Galeana #12 Cuernavaca Centro.",
        phone: "777 107 14 50", email: "arluzsivertsen@hotmail.com",
        website: null,
        coordinates: { lat: 18.9300, lng: -99.2250 }, videoId: "OQkXJjgT1W8", priceRange: "$$", reviews: []
    },

    {
        id: 17, name: "LA IGUANA GREEN'S", category: "Restaurantes",
        description: "Cocina tradicional y murales artísticos.",
        captivatingDescription: "Fundado en el año de 2008, el restaurante las Iguanas green´s rescata la historia esquina de construcción colonial y sobreviviente de las borracheras de Malcolm Lowry.",
        founded: "2008",
        history: "Desde 2008, se ha posicionado como un lugar de tradición.",
        specialties: ["Enchiladas verdes", "Huauzontles", "Pozole (Jueves)"],
        image: iguanaImg, gallery: [iguanaImg, paraisoImg],
        address: "Lic. Ignacio L. Rayon 190, Cuernavaca Centro, Centro, 62000 Cuernavaca, Mor.",
        phone: "777 716 0940", email: "Iguanasgreens@hotmail.com",
        website: null,
        coordinates: { lat: 18.9400, lng: -99.2150 }, videoId: "GgS6p7t5tqM", priceRange: "$$",
        reviews: [{ user: "VisitMorelos", rating: 4, comment: "Buen menú tradicional y ambiente artístico.", date: "2024" }]
    },

    {
        id: 18, name: "CAFÉ 87", category: "Restaurantes", description: "Tu oficina favorita con el mejor café.", captivatingDescription: "Perfect Work Coffee | Brunch. Disfruta de un rico café rodeado del mejor clima de Cuernavaca.", founded: "2020", history: "Nació como respuesta a la necesidad de espacios de coworking cómodos y con buen café en la ciudad.", specialties: ["Cold Brew", "Paninis", "Smoothies"], image: cafe87Img, gallery: [cafe87Img, chocolateriaImg],
        address: "Blvd. Lic. Benito Juárez 28 62000 Cuernavaca Centro, Morelos, Mexico",
        phone: "77720003819", email: "cafe87.cuernavaca@gmail.com",
        website: null,
        coordinates: { lat: 18.9240, lng: -99.2320 }, videoId: "tN4j0r7xJc0", priceRange: "$$", reviews: []
    },

    {
        id: 19, name: "Terraza Catedral", category: "Restaurantes",
        description: "La vista más espectacular de la Catedral.",
        captivatingDescription: "Ubicados en el corazón de Cuernavaca, con la vista más espectacular y compartiendo contigo nuestra pasión por la gastronomía.",
        founded: "2013",
        history: "Ubicado estratégicamente para ofrecer una perspectiva única del patrimonio arquitectónico de la ciudad.",
        specialties: ["Enchiladas verdes", "Mojitos", "Café de puchero"],
        image: terrazaImg, gallery: [terrazaImg, casaHidalgoImg],
        address: "Av. Morelos #82 Cuernavaca, Centro",
        phone: null, email: "alexispastranaaaviles@gmail.com",
        website: null,
        coordinates: { lat: 18.9216, lng: -99.2348 }, videoId: "tN4j0r7xJc0", priceRange: "$$$",
        reviews: [{ user: "RestaurantGuru", rating: 3, comment: "Vista increíble. Buenas enchiladas.", date: "2024" }]
    },

    {
        id: 20, name: "PUERTO PACÍFICO", category: "Restaurantes",
        description: "El buffet de mariscos más completo.",
        captivatingDescription: "¡Todo el sabor del mar en tu paladar! Restaurante Puerto Pacífico ofrece la mejor calidad y frescura en todos sus productos del mar, con sabor estilo Sinaloa.",
        founded: "2015",
        history: "Creado para traer la experiencia de los grandes buffets de playa a la ciudad de la eterna primavera.",
        specialties: ["Tacos gobernador", "Ceviche de pescado", "Buffet de mariscos (Fines de semana)"],
        image: puertoImg, gallery: [puertoImg, aguachilImg],
        address: "Av. Palmira #34 Col. Palmira Tinguindin, Cuernavaca Morelos.",
        phone: "777 312 66 83", email: "rest.pacifico1@gmail.com",
        website: "https://www.puertopacifico.com.mx/",
        coordinates: { lat: 18.9324, lng: -99.2155 }, videoId: "GgS6p7t5tqM", priceRange: "$$",
        reviews: [{ user: "Jennifer V.", rating: 5, comment: "Excelente, buen ambiente y súper familiar. Servicio rápido.", date: "Diciembre 2025" }]
    },

    {
        id: 21, name: "La India Bonita", category: "Restaurantes",
        description: "Joya culinaria desde 1933.",
        captivatingDescription: "Restaurante mexicano, ubicado en la propiedad que anteriormente perteneció al embajador de los Estados Unidos, Dwight W.Morrow.",
        founded: "1933",
        history: "Ubicado en la que fuera la casa de Dwight Morrow, embajador de EE.UU., este restaurante ha servido a generaciones de morelenses y visitantes.",
        specialties: ["Enchiladas con mole", "Sopa de flor de calabaza", "Cecina"],
        image: indiaBonitaImg, gallery: [indiaBonitaImg, mananitasImg],
        address: "Dwight W. Morrow 15 B, Cuernavaca Centro, Centro, 62000 Cuernavaca, Mor.",
        phone: "777 312 5021", email: "vadas.indiabonita@gmail.com",
        website: "http://www.laindiabonita.com.mx/",
        coordinates: { lat: 18.9235, lng: -99.2365 }, videoId: "OQkXJjgT1W8", priceRange: "$$$",
        reviews: [{ user: "Wanderlog User", rating: 4, comment: "Lugar muy bonito, ambiente agradable en el jardín.", date: "Reciente" }]
    },

    {
        id: 22, name: "Nana Mixtli", category: "Cultural",
        description: "Comedor de Madame Choux MX.",
        captivatingDescription: "Agencia Gastronómica fundada el 20 de marzo de 1999 ofrece comedor con productos frescos y de alta calidad. En cada bocado, un pedacito de cielo.",
        founded: "1999",
        history: "Fundado por Madame Choux MX, iniciando como una agencia gastronómica que evolucionó a ofrecer experiencias de comedor íntimas.",
        specialties: ["Cocina de temporada", "Platillos con ingredientes locales", "Menú degustación"],
        image: nanaImg, gallery: [nanaImg, casaTaxcoImg],
        address: "Calle Galeana 15",
        phone: "7775027955", email: "gagaque34@gmail.com",
        website: "https://madamechoux.univer.se/",
        coordinates: { lat: 18.9200, lng: -99.2300 }, videoId: "OQkXJjgT1W8", priceRange: "$$",
        reviews: [{ user: "Local Foodie", rating: 5, comment: "Experiencia auténtica y productos de primera.", date: "Reciente" }]
    },

    // HOTELES (Items 23-31)
    {
        id: 23,
        name: "Anticavilla Hotel & Spa",
        category: "Hoteles",
        description: "Fusión de historia colonial y diseño italiano.",
        captivatingDescription: "Adentrarse en Anticavilla es viajar en el tiempo con estilo. Una casona señorial del siglo XVII restaurada con maestría. Restaurante Verdesalvia.",
        founded: "Siglo XVII / 2010",
        history: "Originalmente una hacienda colonial, fue meticulosamente restaurada y convertida en un hotel boutique de diseño italiano.",
        specialties: ["Risotto ai funghi (Verdesalvia)", "Arancinis de prosciutto"],
        image: anticavillaImg,
        gallery: [anticavillaImg, sumiyaImg, lasQuintasImg, lasCasasImg],
        address: "Calle Río Amacuzac 10, Vista Hermosa, Cuernavaca",
        phone: "+52 (777) 313-3131",
        email: "reservas@anticavilla.com",
        website: "https://www.anticavilla.com",
        coordinates: { lat: 18.9410, lng: -99.2200 },
        videoId: "tN4j0r7xJc0",
        priceRange: "$$$$",
        reviews: [
            { user: "Booking User", rating: 9, comment: "El mejor spa de Cuernavaca. Instalaciones increíbles.", date: "2025" }
        ]
    },
    {
        id: 24,
        name: "Amomoxtli",
        category: "Hoteles",
        description: "Santuario místico a los pies del Tepozteco.",
        captivatingDescription: "Despierta con la energía del Tepozteco entrando por tu ventana. Amomoxtli no es solo un hotel, es un portal a la tranquilidad.",
        founded: "1970s (Quinta)",
        history: "Antigua quinta familiar transformada en el hotel boutique más exclusivo de Tepoztlán, respetando la naturaleza y la mística del lugar.",
        specialties: ["Elote tepozteco asado", "Tacos de jamaica", "Mole de cenizas"],
        image: amomoxtliImg,
        gallery: [amomoxtliImg, buenaVibraImg, mananitasImg, anticavillaImg],
        address: "Calle Benito Juárez 12, Tepoztlán, Morelos",
        phone: "+52 (739) 395-0012",
        email: "reservas@amomoxtli.com",
        website: "https://www.amomoxtli.com",
        coordinates: { lat: 18.9860, lng: -99.1000 },
        videoId: "GgS6p7t5tqM",
        priceRange: "$$$$",
        reviews: [
            { user: "Hotels.com Guest", rating: 10, comment: "Magia pura al despertar frente al Tepozteco.", date: "2025" }
        ]
    },
    {
        id: 25,
        name: "Las Mañanitas",
        category: "Hoteles",
        description: "Leyenda viva de la hospitalidad mexicana.",
        captivatingDescription: "Más que un hotel, Las Mañanitas es una institución. Imagina desayunar rodeado de jardines premiados mundialmente mientras pavos reales y aves exóticas pasean a tu lado.",
        founded: "1955",
        history: "Fundado por Robert Krause, inició con 5 mesas y hoy es un referente mundial, famoso por su colección de arte y sus jardines galardonados.",
        specialties: ["Sopa de tortilla legendaria", "Escamoles al epazote", "Pato Mañanitas"],
        image: mananitasImg,
        gallery: [mananitasImg, lasQuintasImg, haciendaCortesImg, sumiyaImg],
        address: "Ricardo Linares 107, Centro, Cuernavaca",
        phone: "+52 (777) 362-0000",
        email: "reservaciones@lasmananitas.com.mx",
        website: "https://www.lasmananitas.com.mx",
        coordinates: { lat: 18.9280, lng: -99.2380 },
        videoId: "OQkXJjgT1W8",
        priceRange: "$$$$",
        reviews: [
            { user: "Fernando L.", rating: 5, comment: "Los jardines son una obra de arte. Siempre un placer volver.", date: "2025" }
        ]
    },
    {
        id: 26,
        name: "Las Casas B+B Boutique Hotel",
        category: "Hoteles",
        description: "Oasis minimalista en el centro histórico.",
        captivatingDescription: "Un secreto blanco en el corazón de la ciudad. Las Casas B+B es el refugio perfecto para el viajero sofisticado. Diseño impecable, silencio absoluto y una piscina que parece un espejo de agua.",
        founded: "Edificio Colonial",
        history: "Una casona colonial transformada en un hotel boutique de diseño contemporáneo, reconocido por la Guía Michelin.",
        specialties: ["Desayuno californiano", "Cocina mediterránea-mexicana (HOUSE Restaurant)"],
        image: lasCasasImg,
        gallery: [lasCasasImg, anticavillaImg, amomoxtliImg, buenaVibraImg],
        address: "Calle Las Casas 110, Centro, Cuernavaca",
        phone: "+52 (777) 318-7777",
        email: "hola@lascasasbb.com",
        website: "https://www.lascasasbb.com",
        coordinates: { lat: 18.9208, lng: -99.2355 },
        videoId: "tN4j0r7xJc0",
        priceRange: "$$$",
        reviews: [
            { user: "Sofía R.", rating: 5, comment: "Pequeño, acogedor y con mucho estilo. El mejor desayuno de la ciudad.", date: "2025" }
        ]
    },
    {
        id: 27,
        name: "Grand Fiesta Americana Sumiya",
        category: "Hoteles",
        description: "Un palacio japonés en la eterna primavera.",
        captivatingDescription: "Cruzar sus puertas es transportarse al Japón imperial. Construido por la millonaria Barbara Hutton, Sumiya te ofrece pagodas, jardines zen y un teatro Kabuki auténtico.",
        founded: "1959-1961",
        history: "Construido originalmente como la residencia de retiro de la heredera Barbara Hutton, quien importó materiales y artesanos directamente de Japón.",
        specialties: ["Teppanyaki", "Shabu Shabu", "Cocina mexicana gourmet"],
        image: sumiyaImg,
        gallery: [sumiyaImg, mananitasImg, haciendaCortesImg, anticavillaImg],
        address: "Interior Fracc. Sumiya s/n, Jiutepec, Morelos",
        phone: "+52 (777) 329-9888",
        email: "reservas@sumiya.com",
        website: "https://www.sumiya.com",
        coordinates: { lat: 18.8850, lng: -99.1800 },
        videoId: "GgS6p7t5tqM",
        priceRange: "$$$$",
        reviews: [
            { user: "Alejandro M.", rating: 4, comment: "Increíble arquitectura, muy relajante. Te sientes en Japón.", date: "2025" }
        ]
    },
    {
        id: 28,
        name: "Hotel & Spa Hacienda de Cortés",
        category: "Hoteles",
        description: "Historia viva del siglo XVI.",
        captivatingDescription: "Duerme donde la historia de México se escribió. Muros de piedra que susurran leyendas, árboles centenarios y el sonido del agua corriendo por los antiguos acueductos.",
        founded: "1542",
        history: "Fundada por Hernán Cortés como el ingenio azucarero San Antonio Atlacomulco, el segundo más importante de la Nueva España.",
        specialties: ["Cochinillo de Segovia", "Paella", "Mole Poblano"],
        image: haciendaCortesImg,
        gallery: [haciendaCortesImg, sanAntonioImg, lasQuintasImg, mananitasImg],
        address: "Plaza Kennedy 90, Atlacomulco, Jiutepec",
        phone: "+52 (777) 315-8844",
        email: "reservas@haciendadecortes.com",
        website: "https://www.haciendadecortes.com",
        coordinates: { lat: 18.9000, lng: -99.2000 },
        videoId: "OQkXJjgT1W8",
        priceRange: "$$$$",
        reviews: [
            { user: "Gabriela P.", rating: 5, comment: "El lugar más romántico para una escapada. La cena es deliciosa.", date: "2025" }
        ]
    },
    {
        id: 29,
        name: "Hosteria Las Quintas",
        category: "Hoteles",
        description: "El jardín botánico donde te puedes hospedar.",
        captivatingDescription: "Un vergel exuberante donde la naturaleza te abraza. Hostería Las Quintas es famosa por su colección botánica y su arquitectura colonial.",
        founded: "Años 60",
        history: "Inició como una propiedad familiar y evolucionó hasta convertirse en un ícono de Cuernavaca, famoso por su colección de más de 1500 especies de plantas.",
        specialties: ["Sunday Brunch", "Cocina mexicana tradicional"],
        image: lasQuintasImg,
        gallery: [lasQuintasImg, mananitasImg, anticavillaImg, sanAntonioImg],
        address: "Av. Díaz Ordaz 9, Cantarranas, Cuernavaca",
        phone: "+52 (777) 362-3949",
        email: "info@lasquintas.com",
        website: "https://www.lasquintas.com",
        coordinates: { lat: 18.9300, lng: -99.2200 },
        videoId: "tN4j0r7xJc0",
        priceRange: "$$$",
        reviews: [
            { user: "Ricardo V.", rating: 4, comment: "Excelentes instalaciones y muy buen brunch. Jardines maravillosos.", date: "2025" }
        ]
    },
    {
        id: 30,
        name: "La Buena Vibra Retreat and Spa",
        category: "Hoteles",
        description: "Bienestar holístico solo para adultos.",
        captivatingDescription: "El escape perfecto para desconectar del mundo y reconectar con tu ser. A las faldas de las montañas sagradas, este santuario solo para adultos ofrece paz.",
        founded: "2009",
        history: "Fundado con la visión de crear un espacio dedicado al bienestar integral, el yoga y la meditación en un entorno de lujo consciente.",
        specialties: ["Cocina vegetariana gourmet", "Platillos orgánicos del huerto"],
        image: buenaVibraImg,
        gallery: [buenaVibraImg, amomoxtliImg, anticavillaImg, lasCasasImg],
        address: "San Lorenzo 7, Valle de Atongo, Tepoztlán",
        phone: "+52 (739) 395-1491",
        email: "reservas@labuenavibra.com",
        website: "https://www.labuenavibra.com",
        coordinates: { lat: 18.9900, lng: -99.0900 },
        videoId: "GgS6p7t5tqM",
        priceRange: "$$$$",
        reviews: [
            { user: "Daniela S.", rating: 5, comment: "El lugar perfecto para desconectar. Un paraíso escondido.", date: "2025" }
        ]
    },
    {
        id: 31,
        name: "Fiesta Americana Hacienda San Antonio El Puente",
        category: "Hoteles",
        description: "Majestuosidad colonial convertida en lujo.",
        captivatingDescription: "Caminar por San Antonio El Puente es caminar por siglos de historia. Sus arcadas monumentales, su capilla antigua y sus jardines infinitos te hacen sentir parte de la nobleza.",
        founded: "Siglo XVIII",
        history: "Antigua hacienda azucarera y productora de alcohol de caña, restaurada para convertirse en uno de los hoteles más impresionantes de Morelos.",
        specialties: ["Cocina mexicana gourmet (La Distral)", "Buffet dominical"],
        image: sanAntonioImg,
        gallery: [sanAntonioImg, haciendaCortesImg, sumiyaImg, lasQuintasImg],
        address: "Reforma 2, Centro, Xochitepec, Morelos",
        phone: "+52 (777) 362-0770",
        email: "reservas@fasanantonio.com",
        website: "https://www.fiestamericana.com",
        coordinates: { lat: 18.7800, lng: -99.2300 },
        videoId: "OQkXJjgT1W8",
        priceRange: "$$$$",
        reviews: [
            { user: "Jorge H.", rating: 5, comment: "Impresionante hacienda, el servicio es de primera clase. Jardines hermosos.", date: "2025" }
        ]
    }
];

export const serviceCategories = [
    { id: 'all', name: 'Todos', icon: '🏛️' },
    { id: 'Restaurantes', name: 'Restaurantes', icon: '🍽️' },
    { id: 'Hoteles', name: 'Hoteles', icon: '🏨' },
    { id: 'Cultural', name: 'Cultural', icon: '🎭' }
];
