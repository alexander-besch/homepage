import Layout from "./layout.js";
import type { Asset } from "../assets.js";
import PictureList from "./picture_list.js";

interface RecentPageProps {
    portfolio: Asset[],
}

export default function RecentPage(props: RecentPageProps): React.ReactNode {

    //show the best x (in slice(0,x)) pictures on  index-page
    const portfolioToShow = [...props.portfolio]
        .filter(a => a.listed)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 100);

    return <Layout title="Recent works">

        <div className="recent_page">
            <h1>Recent works</h1>
            <hr />
            <PictureList assets={portfolioToShow} />
            <hr />

            <div className="recent_page_links">
                <a href="/explore">Explore the collection</a>
            </div>
            <br />
            <hr />
        </div>

    </Layout >
}