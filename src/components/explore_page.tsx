import type { Asset } from "../assets.js";
import { getTagRoute, getYearRoute } from "../paths.js";
import Layout from "./layout.js";


function getTags(portfolio: Asset[], type: string): string[] {
    const allTags = portfolio
        .flatMap(asset => asset.tags)
        .filter(tag => tag.startsWith(type))
        .map(tag => tag.split(":")[1])      // kann undefined sein
        .filter((t): t is string => !!t);   // nur definierte Strings behalten

    return Array.from(new Set(allTags))
        .sort((a, b) => a.localeCompare(b));
}
interface ExplorePageProps {
    portfolio: Asset[],
}


export default function ExplorePage(props: ExplorePageProps): React.ReactNode {
    const mediumTags = getTags(props.portfolio, "medium:");
    const genreTags = getTags(props.portfolio, "genre:");
    const motifTags = getTags(props.portfolio, "motif:");
    const years = Array.from(
        new Set(
            props.portfolio.map(asset => new Date(asset.date).getFullYear().toString())
        )
    ).sort((a, b) => parseInt(b) - parseInt(a)); // absteigend
    return <Layout title="Categories">

        <div className="explore_page">

            <div className="explore_page_text">
                <h1>Categories & Keywords</h1>
                <hr />
                <div className="explore_page">
                    <h2>Medium</h2>
                    <div className="explore_page_list">
                        {mediumTags.map((tag, idx) => (
                            <span key={idx}>
                                <a href={getTagRoute(`medium:${tag}`)}>
                                    {tag}
                                </a>
                            </span>
                        ))}
                    </div>
                    <br />
                    <h2>Genre</h2>
                    <div className="explore_page_list">
                        {genreTags.map((tag, idx) => (
                            <span key={idx}>
                                <a href={getTagRoute(`genre:${tag}`)}>
                                    {tag}
                                </a>
                            </span>
                        ))}
                    </div>
                    <br />
                    <h2>Motif</h2>
                    <div className="explore_page_list">
                        {motifTags.map((tag, idx) => (
                            <span key={idx}>
                                <a href={getTagRoute(`motif:${tag}`)}>
                                    {tag}
                                </a>
                            </span>
                        ))}
                    </div>
                    <br />
                    <h2>Year</h2>
                    <div className="explore_page_list">
                        {years.map((year, idx) => (
                            <span key={idx}>
                                <a href={getYearRoute(year)}>
                                    {year}
                                </a>
                            </span>
                        ))}
                    </div>
                    <br />
                    <hr />

                </div>

            </div>


        </div>

    </Layout >

}
