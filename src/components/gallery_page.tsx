import Image from "./image.js";
import Layout from "./layout.js";


export default function GalleryPage(): React.ReactNode {
    return <Layout title="Alexander's Homepage">
        <h1>---Gallery---</h1>


        <br />
        <div className="gallery_page_images_list">

            <div className="gallery_page_image_card">
                <a href="/picture/fe986306-48f0-4f52-92ec-22461faa6b28">
                    <Image inputPath="./resources/ID_7.jpg" lazy={false} />
                </a>
            </div>

            <div className="gallery_page_image_card">
                <a href="/picture/a31f1c71-08c0-4332-bcad-29c0ae0b92af">
                    <Image inputPath="./resources/Loewe.JPG" lazy={false} />
                </a>
            </div>
        </div>

    </Layout >

}

