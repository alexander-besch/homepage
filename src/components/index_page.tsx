import Layout from "./layout.js";

interface IndexPageProps {
    parameter_01: string,
}
export default function IndexPage(props: IndexPageProps): React.ReactNode {
    return <Layout title="Alexander's Homepage">

        <div className="index_page">


            <h1>Header</h1>
            <h2>Headline {props.parameter_01}</h2>
            <p>
                Hello folks<br />
                When people ask me, when did I start to draw and paint, I say...<br />
            </p>


        </div>

    </Layout >
}
