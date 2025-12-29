import Image from "./image.js";
import Layout from "./layout.js";


export default function GalleryPage(): React.ReactNode {
    return <Layout title="Alexander's Homepage">
        <h1>---Gallery---</h1>

        <a href="/">Home</a>
        <br />
        <div className="gallery_page_images">
            <Image inputPath="./resources/ID_7.jpg" lazy={false} />
            <br />
        </div>
        <div className="gallery_page_images">
            <Image inputPath="./resources/Loewe.JPG" lazy={false} />
            <br />
        </div>

    </Layout>

}
