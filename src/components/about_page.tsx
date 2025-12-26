import Layout from "./layout.js";

interface AboutPageProps {
    some_text: string,
}
export default function AboutPage(props: AboutPageProps): React.ReactNode {
    return <Layout title="Alexander's Homepage">
        <h1 className="about_page_some_heading">---Alexander's Homepage About---</h1>
        <p>{props.some_text}</p>
        <a href="/">Home</a>

    </Layout>

}
