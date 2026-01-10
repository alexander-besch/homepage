import Layout from "./layout.js";
import type { Asset } from "../assets.js";
import PictureList from "./picture_list.js";

interface ChronologicalPageProps {
    portfolio: Asset[],
}

export default function RecentPage(props: ChronologicalPageProps): React.ReactNode {

    //show the best x (in slice(0,x)) pictures on  index-page
    const portfolioToShow = [...props.portfolio]
        .filter(a => a.listed)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 100);

    return <Layout title="Chronological">

        <div className="chronological_page">
            <h1>Chronological</h1>
            <hr />
            <PictureList assets={portfolioToShow} />
            <hr />

            <div className="chronological_page_link">
                <a href="/explore">Explore the collection</a>
            </div>
            <br />
            <hr />
        </div>

    </Layout >
}