import Layout from "./layout.js";


export default function ArticlesPage(): React.ReactNode {
    return <Layout title="Articles">

        <div className="articles_page">


            <div className="articles_page_text">
                <h1>Articles on Art</h1>
            </div>

            <div className="articles_page_link">
                <a href="/articles/01_painting_drawing">Painting and Drawing are not the Same</a>
            </div>


            <div className="articles_page_link">
                <a href="/articles/02_being_colourblind">What it means to be Colourblind</a>
            </div>

            <br />
            <br />

        </div>

    </Layout >

}
