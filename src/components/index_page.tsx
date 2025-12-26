import Layout from "./layout.js";

interface IndexPageProps {
    some_text: string,
}
export default function IndexPage(props: IndexPageProps): React.ReactNode {
    return <Layout title="Alexander's Homepage">
        <h1 className="index_page_some_heading">---Alexander's Homepage---</h1>
        <p>{props.some_text}</p>
        <a href="/about">Goto about</a>

    </Layout>
}
