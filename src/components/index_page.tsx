import Layout from "./layout.js";


//interface IndexPageProps {
//    parameter_01: string,
//}
//export default function IndexPage(props: IndexPageProps): React.ReactNode {
export default function IndexPage(): React.ReactNode {
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


        </div>

    </Layout >
}