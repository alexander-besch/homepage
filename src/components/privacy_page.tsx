import Layout from "./layout.js";


export default function PrivacyPage(): React.ReactNode {
    return <Layout title="Privacy">

        <div className="privacy_page">


            <div className="privacy_page_text">
                <h1>Privacy Policy</h1>

                <p>
                    This privacy policy explains how I and any necessary third-party
                    services use the personal data collected from you when you use my website.<br />
                    <br />
                </p>
                <h2>
                    What data do I collect?
                </h2>
                <p>
                    This website uses <a href="https://umami.is/">umami</a>. The umami server is hosted by Hetzner in Germany.
                    It collects the following data:
                </p>
                <li>time of access,</li>
                <li>what page you read,</li>
                <li>your operating system (Linux, Windows, MacOS, Android, iOS, ...),</li>
                <li>your type of browser (Firefox, Chrome, Edge, ...),</li>
                <li>if you're using a mobile device,</li>
                <li>the size of your screen,</li>
                <li>the referer (i.e. the page that linked you to my homepage),</li>
                <li>if you react (i.e., press a like or dislike button) to a page,</li>
                <li>the comments your write to a page,</li>
                <li>the time you spend on each page,</li>
                <li>your IP address and thus from what country you're accesing my homepage and
                    some website diagnostics, like how long my homepage takes to load for you.</li>

                <p>
                    Take a look at <a href="https://umami.is/features">umami's features</a> for
                    more details.<br />
                    <br />
                    This data is anonymized.<br />
                    I plan on freely publishing this data at some point.
                    Also, I don't plan on deleting this data.<br />

                    This data is used to help me understand what topics people
                    are interested in and keep my motivation up.<br />
                    <br />
                </p>
                <h2>
                    Privacy policies of other websites
                </h2>
                <p>
                    My website contains links to other websites. This privacy policy applies only to my website.
                    So if you click on a link to another website, you should read their privacy policy.<br />
                    <br />
                </p>
                <h2>
                    Changes to my privacy policy
                </h2>
                <p>
                    I keep my privacy policy under regular review and place any updates on this web page.
                    This privacy policy was last updated on 6th Januar 2026.<br />
                    <br />
                </p>
                <h2>
                    How to contact me
                </h2>
                <p>
                    If you have any questions about my privacy policy,
                    please do not hesitate to <a href="/about">contact me</a>.
                    Email me at: <a href="mailto:mail@alexander-besch.com">mail@alexander-besch.com</a>.
                    <br />
                    <br />
                    <br />
                </p>


            </div>
        </div>

    </Layout >

}
