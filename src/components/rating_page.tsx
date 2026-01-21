import Layout from "./layout.js";
import type { Asset } from "../assets.js";
import PictureList from "./picture_list.js";

interface RatingPageProps {
    portfolio: Asset[],
}

export default function RatingPage(props: RatingPageProps): React.ReactNode {

    // Nur gelistete Assets
    const listedAssets = props.portfolio.filter(a => a.listed);

    // Optional: innerhalb eines Ratings nach Datum sortieren (neu → alt)
    const sortedAssets = [...listedAssets].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Nach Rating gruppieren
    const assetsByRating = new Map<number, Asset[]>();

    for (const asset of sortedAssets) {
        const r = asset.rating;
        if (!assetsByRating.has(r)) {
            assetsByRating.set(r, []);
        }
        assetsByRating.get(r)!.push(asset);
    }

    return (
        <Layout title="Rating">

            <div className="rating_page">
                <h1>By Rating</h1>
                <hr />

                {[5, 4, 3, 2, 1].map(rating => {
                    const assets = assetsByRating.get(rating);
                    if (!assets || assets.length === 0) return null;

                    return (
                        <div key={rating} className="rating_section">
                            <h2>{"★".repeat(rating)}{"☆".repeat(5 - rating)}</h2>
                            <PictureList assets={assets} />
                            <hr />
                        </div>
                    );
                })}
            </div>

        </Layout>
    );
}