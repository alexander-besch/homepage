import Layout from "./layout.js";

interface AboutPageProps {
    parameter_01: string,
}
export default function AboutPage(props: AboutPageProps): React.ReactNode {
    return <Layout title="Alexander's Homepage">
        <h1 className="about_page_some_heading">---About---</h1>
        <p>{props.parameter_01}</p>
        <a href="/">Home</a>

    </Layout>

}
