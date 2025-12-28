import Image from "./image.js";
import Layout from "./layout.js";


export default function GaleryPage(): React.ReactNode {
    return <Layout title="Alexander's Homepage">
        <h1>---Galery---</h1>

        <a href="/">Home</a>
        <br />
        <div className="galery_page_images">
            <Image inputPath="./resources/ID_7.jpg" lazy={false} />
            <br />
        </div>
    </Layout>

}
