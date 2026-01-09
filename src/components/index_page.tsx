import Layout from "./layout.js";
import type { Asset } from "../assets.js";
import PictureList from "./picture_list.js";

interface IndexPageProps {
    route: string,
    portfolio: Asset[],
}

export default function IndexPage(props: IndexPageProps): React.ReactNode {

    //show the best x (in slice(0,x)) pictures on index-page
    const portfolioToShow = props.portfolio.sort((a, b) => b.rating - a.rating).slice(0, 12);

    return <Layout title="Alexander's Art">

        <div className="index_page">

            <div className="index_page_hero">
                <div className="index_page_hero_text">
                    <div>
                        Welcome to my Art<br />
                        <br />
                        Feel free to explore
                    </div>

                    <div>
                        (and to get lost)<br />
                        <br />
                    </div>
                </div>
            </div>

            <div className="index_page_quote">- nulla dies sine linea&nbsp;-</div>
            <hr />
            {/* <h2>Headline {props.parameter_01}</h2> */}


            <PictureList assets={portfolioToShow} />
            <hr />
            <div className="index_page_links">
                <a href="/recent">Recent Works</a>
            </div>
            <br />
            <div className="index_page_links">
                <a href="/explore">Explore the Collection</a>
            </div>
            <br />
            <div className="index_page_links">
                <a href="/articles">Articles on Art</a>
            </div>
            <br />
            <hr />
        </div>

    </Layout >
}