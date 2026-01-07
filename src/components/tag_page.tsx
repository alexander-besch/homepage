import Layout from "./layout.js";
import type { Asset } from "../assets.js";
import PictureList from "./picture_list.js";

interface TagPageProps {
    route: string,
    tag: string,
    portfolio: Asset[],
}


function formatTagForTitle(tag: string): string {
    const [group = "", value = ""] = tag.split(":");

    const TAG_LABELS: Record<string, string> = {
        motif: "Motif",
        genre: "Genre",
        medium: "Medium",
    };

    const label = TAG_LABELS[group] ?? group;
    return `${label} ${value}`;
}


export default function TagPage(props: TagPageProps): React.ReactNode {

    const portfolioToShow = props.portfolio
        .filter(a => a.listed && a.tags.includes(props.tag))
        .sort((a, b) => b.rating - a.rating);

    return <Layout title={formatTagForTitle(props.tag)}>
        <div className="tag_page">
            <h1>{formatTagForTitle(props.tag)}</h1>

            <PictureList assets={portfolioToShow} />

        </div>
    </Layout >

}