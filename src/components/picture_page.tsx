import Layout from "./layout.js";
import Image from "./image.js";
import type { Asset } from "../assets.js";
import TagsList from "./tags_list.js";


interface PicturePageProps {
    route: string,
    idx: number,
    assets: Asset[],
}

export default function PicturePage(props: PicturePageProps): React.ReactNode {
    return <Layout title="Alexander's Picture">
        <div className="picture_page_wrapper">
            <div className="picture_page">
                <Image inputPath={props.assets[props.idx]!.cachePath} lazy={false} />

            </div>

            <TagsList tags={props.assets[props.idx]!.tags} />
        </div>
    </Layout>

}
