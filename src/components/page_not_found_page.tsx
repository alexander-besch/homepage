import Layout from "./layout.js";



export default function PageNotFoundPage(): React.ReactNode {
    return <Layout title="404 Page Not Found">

        <div className="page_not_found_page">
            <h1>Page not found</h1>
            <p>
                This page is not the page you are looking for.
                If you followed a link, that link is broken.
                <br />

                Please send me a mail at <a href="mailto:mail@alexander-besch.com">mail@alexander-besch.com</a> and
                tell me where the broken link is.
                <br /><br />
                In any case you can always get back <a href="/">Home</a>.
                <br /><br />
                <br /><br />
            </p>
        </div>
    </Layout>;
}
