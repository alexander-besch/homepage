import Layout from "./layout.js";
import Image from "./image.js";
import type { Asset } from "../assets.js";


interface PicturePageProps {
    route: string,
    idx: number,
    assets: Asset[],
}

export default function PicturePage(props: PicturePageProps): React.ReactNode {
    return <Layout
        title="Alexander's Picture"
    >

        <div className="picture_page">
            <Image inputPath={props.assets[props.idx]!.cachePath} lazy={false} />

        </div>

    </Layout>

}
