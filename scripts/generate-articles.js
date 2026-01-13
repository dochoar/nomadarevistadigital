import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const articlesDir = path.join(__dirname, '../src/content/articles');
const outputHeader = `// AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
// Modifica los archivos en src/content/articles/ para actualizar

`;

// Helper to get formatted date
const getToday = () => new Date().toISOString().split('T')[0];

try {
    // Ensure dir exists
    if (!fs.existsSync(articlesDir)) {
        console.error('Directory src/content/articles does not exist.');
        process.exit(1);
    }

    const folders = fs.readdirSync(articlesDir)
        .filter(f => fs.statSync(path.join(articlesDir, f)).isDirectory())
        .sort(); // Ensure order

    const imports = [];
    const articleObjects = [];

    folders.forEach((folder, index) => {
        const folderPath = path.join(articlesDir, folder);

        // Read Meta
        let meta = {};
        try {
            meta = JSON.parse(fs.readFileSync(path.join(folderPath, 'meta.json'), 'utf8'));
        } catch (e) {
            console.error(`Error reading meta.json in ${folder}`, e);
            return;
        }

        // Read Body
        let body = '';
        try {
            body = fs.readFileSync(path.join(folderPath, 'body.html'), 'utf8');
            // Escape backticks for JS template string
            body = body.replace(/`/g, '\\`').replace(/\$/g, '\\$');
        } catch (e) {
            console.error(`Error reading body.html in ${folder}`, e);
        }

        // Check for images
        const files = fs.readdirSync(folderPath);
        const mainImage = files.find(f => f.match(/^image\.(jpg|png|jpeg|webp)$/));
        const galleryImages = files.filter(f => f.match(/^gallery_.*\.(jpg|png|jpeg|webp)$/));

        const importName = `article_${index}`;

        // Generate Imports for Images
        let mainImageImport = 'null';
        if (mainImage) {
            imports.push(`import img_${index}_main from '../content/articles/${folder}/${mainImage}';`);
            mainImageImport = `img_${index}_main`;
        } else if (meta.image) {
            mainImageImport = `"${meta.image}"`; // Keep URL if no local file
        }

        let galleryImports = [];
        galleryImages.forEach((gImg, gIdx) => {
            const gVar = `img_${index}_gal_${gIdx}`;
            imports.push(`import ${gVar} from '../content/articles/${folder}/${gImg}';`);
            galleryImports.push(gVar);
        });

        // Construct Object
        articleObjects.push(`
    {
        ...${JSON.stringify(meta)},
        id: ${meta.id || index + 1},
        content: \`${body}\`,
        image: ${mainImageImport},
        gallery: [${galleryImports.join(', ')}]
    }`);
    });

    const fileContent = `${outputHeader}
${imports.join('\n')}

export const articles = [
${articleObjects.join(',')}
];
`;

    fs.writeFileSync(path.join(__dirname, '../src/data/articles.js'), fileContent);
    console.log(`Success! Generated data for ${folders.length} articles.`);

} catch (err) {
    console.error('Build failed:', err);
}
