
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const articlesDir = path.join(__dirname, '../src/content/articles');

// List of municipalities (excluding ones that might already be fundamentally covered or adding them anyway for completeness)
// We start numbering from 21 since 20 is the last one.
const newMunicipalities = [
    { name: 'amacuzac', title: 'Amacuzac', subtitle: 'Río y Tradición: Donde la naturaleza fluye.', rubric: 'Municipios' },
    { name: 'atlatlahucan', title: 'Atlatlahucan', subtitle: 'Belleza Agustina y tradición conventual.', rubric: 'Pueblos con Historia' },
    { name: 'axochiapan', title: 'Axochiapan', subtitle: 'Tierra de tradiciones vivas y aguas termales.', rubric: 'Municipios' },
    { name: 'ayala', title: 'Ayala', subtitle: 'Cuna de la Revolución y el agrarismo.', rubric: 'Historia' },
    { name: 'coatlandelrio', title: 'Coatlán del Río', subtitle: 'El paraíso de las frutas tropicales.', rubric: 'Municipios' },
    { name: 'cuautla', title: 'Cuautla', subtitle: 'La Heroica Ciudad de historia y balnearios.', rubric: 'Ciudades Importantes' },
    { name: 'emilianozapata', title: 'Emiliano Zapata', subtitle: 'Corazón comercial y modernidad.', rubric: 'Municipios' },
    { name: 'huitzilac', title: 'Huitzilac', subtitle: 'Bosques de niebla y clima de montaña.', rubric: 'Naturaleza' },
    { name: 'jantetelco', title: 'Jantetelco', subtitle: 'Historia en piedra y legado milenario.', rubric: 'Municipios' },
    { name: 'jiutepec', title: 'Jiutepec', subtitle: 'Jardines, haciendas y vida industrial.', rubric: 'Ciudades Importantes' },
    { name: 'jojutla', title: 'Jojutla', subtitle: 'Renacer constante y calor humano.', rubric: 'Ciudades Importantes' },
    { name: 'jonacatepec', title: 'Jonacatepec', subtitle: 'Tierra de la cebolla y grandes balnearios.', rubric: 'Municipios' },
    { name: 'mazatepec', title: 'Mazatepec', subtitle: 'Santuarios y tradición en el poniente.', rubric: 'Tradición' },
    { name: 'miacatlan', title: 'Miacatlán', subtitle: 'Entre la laguna y la historia antigua.', rubric: 'Municipios' },
    { name: 'ocuituco', title: 'Ocuituco', subtitle: 'Historia conventual a las faldas del volcán.', rubric: 'Pueblos con Historia' },
    { name: 'puentedeixtla', title: 'Puente de Ixtla', subtitle: 'Portal del sur y cruce de caminos.', rubric: 'Municipios' },
    { name: 'temixco', title: 'Temixco', subtitle: 'La capital del sol y la diversión acuática.', rubric: 'Turismo Acuático' },
    { name: 'temoac', title: 'Temoac', subtitle: 'El sabor dulce del amaranto.', rubric: 'Municipios' },
    { name: 'tepalcingo', title: 'Tepalcingo', subtitle: 'Fe, tradición y la feria más grande.', rubric: 'Tradición' },
    { name: 'tetecala', title: 'Tetecala', subtitle: 'Encanto colonial y leyendas urbanas.', rubric: 'Municipios' },
    { name: 'teteladelvolcan', title: 'Tetela del Volcán', subtitle: 'Frutas, bosques y cercanía al volcán.', rubric: 'Pueblos con Historia' },
    { name: 'tlalnepantla', title: 'Tlalnepantla', subtitle: 'El bosque de niebla y el nopal.', rubric: 'Naturaleza' },
    { name: 'tlaltizapan', title: 'Tlaltizapán', subtitle: 'Naturaleza revolucionaria y aguas cristalinas.', rubric: 'Historia y Naturaleza' },
    { name: 'tlaquiltenango', title: 'Tlaquiltenango', subtitle: 'Grandeza territorial y aventura.', rubric: 'Aventura' },
    { name: 'totolapan', title: 'Totolapan', subtitle: 'Tradición en las alturas del norte.', rubric: 'Pueblos con Historia' },
    { name: 'xochitepec', title: 'Xochitepec', subtitle: 'Pueblo con Encanto, pozole y tradición.', rubric: 'Pueblos con Encanto' },
    { name: 'yautepec', title: 'Yautepec', subtitle: 'Tierra de carnavales y jaguares.', rubric: 'Fiestas y Tradiciones' },
    { name: 'zacatepec', title: 'Zacatepec', subtitle: 'Orgullo cañero y pasión deportiva.', rubric: 'Municipios' },
    { name: 'coatetelco', title: 'Coatetelco', subtitle: 'Municipio indígena de pescadores.', rubric: 'Municipios Indígenas' },
    { name: 'xoxocotla', title: 'Xoxocotla', subtitle: 'Raíces vivas y cultura ancestral.', rubric: 'Municipios Indígenas' },
    { name: 'hueyapan', title: 'Hueyapan', subtitle: 'Textiles de lana y vida en la montaña.', rubric: 'Municipios Indígenas' }
];

let startIndex = 21; // Starting after existing folders

newMunicipalities.forEach((mun, index) => {
    const id = startIndex + index;
    const folderName = `${id}-${mun.name}`;
    const folderPath = path.join(articlesDir, folderName);

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
        console.log(`Created folder: ${folderName}`);

        // meta.json
        const meta = {
            id: id,
            rubric: mun.rubric,
            title: mun.title,
            subtitle: mun.subtitle,
            author: "Redacción Visita Morelos",
            date: "2026-02-01", // Default future date or generic
            videoId: "",
            featured: false,
            tags: ["Morelos", mun.rubric, "Turismo"],
            image: "https://placehold.co/800x600?text=" + encodeURIComponent(mun.title) // Placeholder for now
        };
        fs.writeFileSync(path.join(folderPath, 'meta.json'), JSON.stringify(meta, null, 4));

        // body.html
        const body = `
<p class="lead">${mun.title} es uno de los tesoros de Morelos. Conocido por su ${mun.subtitle.toLowerCase()}, es un destino que invita a ser descubierto.</p>

<h3><span class="highlight">01</span> Historia y Cultura</h3>
<p>Este municipio guarda en sus calles y edificaciones la memoria de generaciones. Desde su fundación, ha sido testigo de momentos clave en la historia del estado, ofreciendo al visitante una mezcla única de pasado y presente.</p>

<h3><span class="highlight">02</span> Atractivos Principales</h3>
<p>Visitar ${mun.title} es encontrar sorpresas en cada esquina. Ya sea por su arquitectura, sus paisajes naturales o su vibrante vida local, siempre hay algo nuevo que ver. No dejes de visitar su plaza principal y los mercados locales llenos de color.</p>
<blockquote>
    "La verdadera esencia de Morelos se vive en municipios como ${mun.title}, donde la hospitalidad es ley."
</blockquote>

<h3><span class="highlight">03</span> Gastronomía Local</h3>
<p>No puedes irte sin probar los sabores locales. La cocina de ${mun.title} es un reflejo de la riqueza de la tierra morelense, con platillos que deleitarán tu paladar.</p>
<div class="pro-tip">
    <strong>Tip de Viajero:</strong> Pregunta a los locales por las festividades patronales, es la mejor época para experimentar la cultura viva de ${mun.title}.
</div>`;

        fs.writeFileSync(path.join(folderPath, 'body.html'), body);
    } else {
        console.log(`Skipping existing: ${folderName}`);
    }
});

console.log("Done creating municipality folders.");
