import Layout from "./layout.js";


export default function AboutPage(): React.ReactNode {
    return <Layout title="About me">

        <div className="about_page">

            <div className="about_page_hero">
                <div className="about_page_hero_text">
                    <div>
                        Alexander Besch
                        <br />
                    </div>

                </div>
            </div>

            <div className="about_page_contact">
                <h1>Contact</h1>
                <p>
                    Instagram: <a href="https://www.instagram.com/a_wie_alexander">@a_wie_alexander</a> <br />
                    E-Mail: <a href="mailto:mail@alexander-besch.com">mail@alexander-besch.com</a> <br />

                </p>
            </div>

            <div className="about_page_text">
                <h1>About me</h1>

                <p>
                    When people ask me how long I have been painting or drawing, my answer is: always.
                    Like all of us, I drew as a child — and I simply never stopped.<br />
                    <br />
                </p>
            </div>

            <div className="about_page_text_with_image right">
                <div className="about_page_text_with_image_block">
                    <a href="/picture/64c0b5a9-848d-40a7-8b44-0880b72c2c5f">
                        <img src="/20260108_134537.jpg" />
                    </a>
                    <figcaption>
                        Early pencil drawing, age 17
                    </figcaption>
                </div>
                <p>
                    Towards the end of my school years, I bought my first sketchbook,
                    and when I started university, studying mathematics,
                    I also began working with oil paints. Years later, these were replaced by acrylics.
                    Only recently have I found my way back to oil paints
                    after realising that they also come in a water-soluble form.<br />
                    <br />
                    To me, art is not a hobby. I have no better word - "passion" sounds too pathetic.
                    I simply know that I could not imagine a life without it.
                    <br />
                    <br />
                    If you stroll through these pages,
                    you will easily see that I am deeply in love with the sea;
                    that it is nearly impossible for me to go on vacation without one of my sketchbooks;
                    and that I will never lose my fascination with painting portraits.
                </p>
            </div>

            <div className="about_page_text">
                <p>
                    I enjoy making art just for myself. But I have also realized that I enjoy working on
                    commissions.
                    They make me consider motifs (and sometimes genres)
                    that would otherwise never come to my mind.
                    So please feel free to <a href="mailto:mail@alexander-besch.com">contact me</a> anytime
                    if there’s
                    something I could create for you.
                    <br />
                    <br />
                </p>
            </div>

            <h1>Thanks for visiting my Art!</h1>
            <div className="about_page_favicon">
                <img src="/favicon.png" />

            </div>

        </div>

    </Layout >

}
