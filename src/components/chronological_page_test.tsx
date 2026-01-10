import { useState } from "react";
import Layout from "./layout.js";
import type { Asset } from "../assets.js";
import PictureList from "./picture_list.js";

interface ChronologicalPageProps {
    portfolio: Asset[],
}

export default function ChronologicalPage(props: ChronologicalPageProps) {
    const BATCH_SIZE = 5;

    // State für wie viele Bilder angezeigt werden
    const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

    // Sortierte Bilder nach Datum absteigend
    const sortedPortfolio = [...props.portfolio]
        .filter(a => a.listed)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Die Bilder, die aktuell angezeigt werden
    const portfolioToShow = sortedPortfolio.slice(0, visibleCount);

    // Klick-Handler für „More“
    const loadMore = () => {
        setVisibleCount(prev => prev + BATCH_SIZE);
    };

    return (
        <Layout title="Chronological">
            <div className="chronological_page">
                <h1>Recent works</h1>
                <hr />
                <PictureList assets={portfolioToShow} />
                <hr />

                {/* Nur anzeigen, wenn noch mehr Bilder da sind */}
                {visibleCount < sortedPortfolio.length && (
                    <button onClick={loadMore}>More</button>
                )}
            </div>
        </Layout>
    );
}
