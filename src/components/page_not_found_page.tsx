import Layout from "./layout.js";



export default function PageNotFoundPage(): React.ReactNode {
    return <Layout title="Page not Found">

        <div>
            This page is not the page you are looking for.
            If you followed a link, that link is broken.

        </div>
    </Layout>;
}
