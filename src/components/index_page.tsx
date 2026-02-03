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


            <PictureList assets={portfolioToShow} />
            <hr />
            <h2 className="index_page">
                How to get lost
            </h2>
            <div className="index_page_center">
                <p>
                    Click on any image to see it in a larger view.<br />
                    On each image page, scrolling down reveals similar
                    works – a way to dive deeper into my collection!<br />
                </p>
                <hr />
                <p>
                    <br />
                    A chronological view of my work<br />
                </p>
            </div>
            <div className="index_page_links">
                <a href="/chronological">Chronological</a>
            </div>
            <br />
            <div className="index_page_center">
                <p>
                    Browse the entire collection using categories and keywords<br />
                </p>
            </div>
            <div className="index_page_links">
                <a href="/explore">Categories</a>
            </div>
            <br />
            <div className="index_page_center">
                <p>
                    Read my thoughts on art in<br />
                </p>
            </div>
            <div className="index_page_links">
                <a href="/articles">Articles</a>
            </div>
            <br />
            <div className="index_page_center">
                <p>
                    Learn more about me and how to get in touch<br />
                </p>
            </div>
            <div className="index_page_links">
                <a href="/about">About</a>
            </div>
            <br />
            <hr />
        </div>

    </Layout >
}