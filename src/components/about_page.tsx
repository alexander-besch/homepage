import Image from "./image.js";
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
                <h1>About</h1>

                <p>
                    When people ask me how long I have been painting or drawing, my answer is: always.
                    Like all of us, I drew as a child — and I simply never stopped.<br />
                    <br />
                </p>
            </div>

            <div className="about_page_image_card">
                <a href="/picture/285a1062-62ea-404e-b294-cf22fdb05962">
                    <Image inputPath="./resources/IMG_4605.JPG" lazy={false} transparent />
                </a>
                <figcaption className="about_page_image_card_caption">
                    Early pencil drawing, age 17
                </figcaption>
            </div>

            <div className="about_page_text">
                <p>
                    Towards the end of my school years, I bought my first sketchbook,
                    and when I started university, studying mathematics,
                    I also began working with oil paints. Years later, these were replaced by acrylics.
                    Only recently,
                    I found my way back to oil paints after realising that they also come in a water-soluble form.<br />
                    <br />
                    To me, art is not a hobby. I have no better word - "passion" sounds too pathetic.
                    I simply know that I could not think of a life without it.
                    <br />
                    <br />
                    I enjoy working on commissions. They make me considering motifs (and sometimes genres)
                    that would otherwise never come to my mind.
                    <br />
                    <br />
                </p>
            </div>
        </div>

    </Layout >

}
