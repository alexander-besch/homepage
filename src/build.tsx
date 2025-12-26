import * as fs from "fs";
import { renderToPipeableStream } from "react-dom/server";

import IndexPage from "./components/index_page.js";
import AboutPage from "./components/about_page.js";
import { transform } from "lightningcss";

async function buildStyles() {
    // list of css-Files
    const sourcePaths = [
        "./styles/index_page.module.css",
        "./styles/about_page.module.css",
        "./styles/layout.module.css",
    ];
    const destPath = "./deploy/styles.css";
    const sources = await Promise.all(sourcePaths.map(s => fs.promises.readFile(s)));
    const { code } = transform({
        filename: destPath,
        code: new Uint8Array(sources.flatMap(s => Array.from(new Uint8Array(s)))),
        minify: true,
        sourceMap: false,
    });
    await fs.promises.writeFile(destPath, code).catch();
}

// Build the route in the background.
// Return immediately.
function buildLoadPathHTMLInBG(path: string, element: React.ReactNode) {
    console.log(`Build path ${path}`);
    // We cannot use renderToStaticMarkup because that doesn't support async components.
    let out = renderToPipeableStream(element, {
        onAllReady: () => {
            const stream = fs.createWriteStream(path);
            out.pipe(stream);
        },
        onError: (e) => {
            throw e;
        },
        onShellError: (e) => {
            throw e;
        },
    });
}

// A route is a path with an index.html file.
// Build the route in the background.
// Return immediately.
function buildRouteInBG(route: string, element: React.ReactNode) {
    ensureDirExists(`./deploy/${route}`)
    buildLoadPathHTMLInBG(`./deploy/${route}/index.html`, element);
}

function ensureDirExists(dir: string): void {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

ensureDirExists("./deploy");
buildStyles().catch(e => { throw e; });
buildRouteInBG("/", <IndexPage some_text="First page" />);

buildRouteInBG("/about", <AboutPage some_text="About Page" />);


