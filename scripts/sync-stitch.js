import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { stitch } from '@google/stitch-sdk';

// Resolve directory name for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to load environment variables from a .env file if it exists
function loadEnv() {
  const envPath = path.resolve(__dirname, '..', '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let value = match[2] || '';
        // Remove surrounding quotes if any
        if (value.length > 0 && value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
          value = value.substring(1, value.length - 1);
        } else if (value.length > 0 && value.charAt(0) === "'" && value.charAt(value.length - 1) === "'") {
          value = value.substring(1, value.length - 1);
        }
        process.env[key] = value.trim();
      }
    });
  }
}

loadEnv();

const apiKey = process.env.STITCH_API_KEY;
if (!apiKey) {
  console.error('Error: STITCH_API_KEY environment variable is not set. Please define it in your shell or Frontend/.env file.');
  process.exit(1);
}

// Get project and screen from CLI args
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: node scripts/sync-stitch.js <project_id> <screen_id>');
  console.log('Example: node scripts/sync-stitch.js 15680133674876592280 bc491d3363304bbfa48686dfe3a81e69');
  process.exit(1);
}

const [projectId, screenId] = args;

async function downloadFile(url, outputPath) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.statusText}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  fs.writeFileSync(outputPath, Buffer.from(arrayBuffer));
}

async function sync() {
  try {
    console.log(`Initializing Stitch sync for project: ${projectId}, screen: ${screenId}...`);
    
    // Connect project
    const project = stitch.project(projectId);
    
    console.log('Fetching screen details...');
    const screen = await project.getScreen(screenId);
    
    const title = screen.title || 'stitch_screen';
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
    
    console.log(`Screen Title: "${title}" -> Slug: "${slug}"`);
    
    // Get URLs
    console.log('Retrieving HTML and Screenshot download URLs...');
    const htmlUrl = await screen.getHtml();
    const imageUrl = await screen.getImage();
    
    // Define outputs
    const outputDir = path.resolve(__dirname, '..', 'stitch_downloads');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const htmlPath = path.join(outputDir, `${slug}.html`);
    const imagePath = path.join(outputDir, `${slug}.png`);
    
    console.log(`Downloading HTML code to ${htmlPath}...`);
    await downloadFile(htmlUrl, htmlPath);
    
    console.log(`Downloading screenshot to ${imagePath}...`);
    await downloadFile(imageUrl, imagePath);
    
    console.log('\nSuccess! Sync complete.');
    console.log(`- HTML: ${htmlPath}`);
    console.log(`- Screenshot: ${imagePath}`);
  } catch (error) {
    console.error('Error syncing Stitch assets:', error);
    process.exit(1);
  }
}

sync();
