import Layout from "./layout.js";
import type { Asset } from "../assets.js";
import PictureList from "./picture_list.js";

interface IndexPageProps {
    route: string,
    portfolio: Asset[],
}

export default function IndexPage(props: IndexPageProps): React.ReactNode {

    //show the best x (in slice(0,x)) pictures on index-page
    const portfolioToShow = props.portfolio.sort((a, b) => b.rating - a.rating).slice(0, 5);

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

            <h1>nulla dies sine linea</h1>
            {/* <h2>Headline {props.parameter_01}</h2> */}

            <p>
                --- Baustelle ---
                <br />

            </p>
            <PictureList assets={portfolioToShow} />

        </div>

    </Layout >
}