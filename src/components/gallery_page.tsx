import Image from "./image.js";
import Layout from "./layout.js";


export default function GalleryPage(): React.ReactNode {
    return <Layout title="Alexander's Homepage">
        <h1>---Gallery---</h1>

        <a href="/">Home</a>
        <br />
        <div className="gallery_page_images_list">

            <div className="gallery_page_image_card">
                <Image inputPath="./resources/ID_7.jpg" lazy={false} />

            </div>
            <div className="gallery_page_image_card">
                <Image inputPath="./resources/Loewe.JPG" lazy={false} />

            </div>
        </div>

    </Layout>

}
