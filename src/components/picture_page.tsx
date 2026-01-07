import Layout from "./layout.js";
import Image from "./image.js";
import type { Asset } from "../assets.js";
import Description from "./description.js";


function getTagsByPrefix(tags: string[], prefix: string) {
    return tags
        .filter(tag => tag.startsWith(prefix + ":"))
        .map(tag => tag.split(":").slice(1).join(":"));
}


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
    //console.log(genreTags);

    return <Layout title="Alexander's Picture">
        <div className="picture_page_wrapper">
            <div className="picture_page">
                <Image inputPath={asset.cachePath} lazy={false} />
                {asset.description && (
                    <div className="description">
                        <Description description={asset.description} />
                    </div>
                )}
            </div>

            <div>
                <strong>Medium:</strong>{" "}
                {mediumTags.map((tag, idx) => (
                    <span key={idx}>
                        {tag}
                        {idx < mediumTags.length - 1 ? ", " : ""}
                    </span>
                ))}
            </div>
            <br />
            <div>
                <strong>Genre:</strong>{" "}
                {genreTags.map((tag, idx) => (
                    <span key={idx}>
                        {tag}
                        {idx < genreTags.length - 1 ? ", " : ""}
                    </span>
                ))}
            </div>
            <br />
            <div>
                <strong>Motif:</strong>{" "}
                {motifTags.map((tag, idx) => (
                    <span key={idx}>
                        {tag}
                        {idx < motifTags.length - 1 ? ", " : ""}
                    </span>
                ))}
            </div>
            <br />
        </div>
    </Layout>

}


