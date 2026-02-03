import Layout from "./layout.js";
import Image from "./image.js";
import type { Asset } from "../assets.js";
import { getTagRoute } from "../paths.js";
import { getNearestListedNeighbours } from "../embedding.js";
import PictureList from "./picture_list.js";


function getTagsByPrefix(tags: string[], prefix: string) {
    return tags
        .filter(tag => tag.startsWith(prefix + ":"))
        .map(tag => tag.split(":").slice(1).join(":"))
        .sort();
}

function getYearFromDate(date: string): number {
    return new Date(date).getFullYear();
}

function getSizeTag(tags: string[]): string | null {
    const sizeTag = tags.find(tag => tag.startsWith("size:"));

    if (typeof sizeTag === "undefined") return null;  // <-- TypeScript ist happy

    // sizeTag existiert hier garantiert
    const sizePart = sizeTag.split(":")[1];
    if (!sizePart) return null;  // sicherstellen, dass nach ':' auch was kommt

    return sizePart
        .replace("x", " x ")
        .replace("cm", " cm");
}

const nearestNeighbours = 10;
const antiNeighbours = 0;

interface PicturePageProps {
    route: string,
    idx: number,
    assets: Asset[],
}

export default function PicturePage(props: PicturePageProps): React.ReactNode {
    const asset = props.assets[props.idx]!;
    const mediumTags = getTagsByPrefix(asset.tags, "medium");
    const genreTags = getTagsByPrefix(asset.tags, "genre");
    const motifTags = getTagsByPrefix(asset.tags, "motif");
    const year = asset.date ? getYearFromDate(asset.date) : null;
    const size = getSizeTag(asset.tags);
    const descriptionLines = [
        [asset.description, year].filter(Boolean).join(", "),
        size
    ].filter(Boolean);
    const similarAssets = getNearestListedNeighbours(props.idx, nearestNeighbours, antiNeighbours, props.assets);
    //console.log(genreTags);

    return <Layout title="Alexander's Picture">
        <div className="picture_page_wrapper">
            <div className="picture_page">
                <Image inputPath={asset.cachePath} lazy={false} />
                {descriptionLines.length > 0 && (
                    <div className="picture_page_description">
                        {descriptionLines.map((line, idx) => (
                            <div key={idx}>{line}</div>
                        ))}
                    </div>
                )}
            </div>

            <div className="picture_page_tag">
                <strong>Medium:</strong>{" "}
                {mediumTags.map((tag, idx) => (
                    <span key={idx}>
                        <a href={getTagRoute(`medium:${tag}`)}>
                            {tag}
                        </a>
                        {idx < mediumTags.length - 1 ? ", " : ""}
                    </span>
                ))}
            </div>
            <br />
            <div className="picture_page_tag">
                <strong>Genre:</strong>{" "}
                {genreTags.map((tag, idx) => (
                    <span key={idx}>
                        <a href={getTagRoute(`genre:${tag}`)}>
                            {tag}
                        </a>
                        {idx < genreTags.length - 1 ? ", " : ""}
                    </span>
                ))}
            </div>
            <br />
            <div className="picture_page_tag">
                <strong>Motif:</strong>{" "}
                {motifTags.map((tag, idx) => (
                    <span key={idx}>
                        <a href={getTagRoute(`motif:${tag}`)}>
                            {tag}
                        </a>
                        {idx < motifTags.length - 1 ? ", " : ""}
                    </span>
                ))}
            </div>
            <br />
            <hr />
            <div className="picture_page">
                <h2>Similar works:</h2>
            </div>
            <PictureList assets={similarAssets} />
            <hr />
        </div>
    </Layout>

}


