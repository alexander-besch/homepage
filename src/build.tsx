import * as fs from "fs";
import { renderToPipeableStream } from "react-dom/server";

import IndexPage from "./components/index_page.js";
import GalleryPage from "./components/gallery_page.js";
import PicturePage from "./components/picture_page.js";
import AboutPage from "./components/about_page.js";
import { transform } from "lightningcss";
import path from "path";
import { ensureDirExists } from "./paths.js";
import { prepareImmichPortfolio, type Asset } from "./assets.js";
import { getAssetRoute } from "./paths.js";


async function buildStyles() {
    // list of css-Files
    const sourcePaths = [
        "./styles/reset.css",
        "./styles/layout.module.css",
        "./styles/fonts.css",
        "./styles/index_page.module.css",
        "./styles/gallery_page.module.css",
        "./styles/picture_page.module.css",
        "./styles/about_page.module.css",
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

async function copyDir(srcDir: string, destDir: string): Promise<void> {
    const files = await fs.promises.readdir(srcDir, { recursive: true, withFileTypes: true });
    await Promise.all(files.map(async file => {
        if (!file.isFile()) {
            return;
        }
        const srcPath = path.join(file.parentPath, file.name);
        const destPathDir = path.join(destDir, path.relative(srcDir, file.parentPath));
        const destPath = path.join(destDir, path.relative(srcDir, srcPath));
        // Don't copy files that already exist.
        if (!fs.existsSync(destPath)) {
            console.log(`Copying: ${srcPath} to ${destPath}`);
            // This needs to be done with that sync function.
            // Otherwise copyring, e.g. copying with fs.cp, would cause a file system race condition.
            ensureDirExists(destPathDir);
            await fs.promises.cp(srcPath, destPath);
        }
    }));
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

ensureDirExists("./deploy");
buildStyles().catch(e => { throw e; });
//buildRouteInBG("/", <IndexPage parameter_01="Testparameter" />);
buildRouteInBG("/", <IndexPage />);

buildRouteInBG("/gallery", <GalleryPage />);

buildRouteInBG("/about", <AboutPage parameter_01="About Page" />);

copyDir("./static", "./deploy").catch(e => { throw e; });

// create one html-page for each picture
async function buildPicture(portfolio: Asset[]) {
    console.log("Building picture");
    for (const [idx, asset] of portfolio.entries()) {
        const route = getAssetRoute(asset.id);
        buildRouteInBG(route, <PicturePage route={route} idx={idx} assets={portfolio} />);
    }

}

const portfolio = await prepareImmichPortfolio();
// console.log(portfolio);
buildPicture(portfolio).catch(e => { throw e; });