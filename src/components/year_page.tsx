import Layout from "./layout.js";
import type { Asset } from "../assets.js";
import PictureList from "./picture_list.js";

interface YearPageProps {
    route: string,
    year: string,
    portfolio: Asset[],
}


export default function YearPage(props: YearPageProps): React.ReactNode {

    // Nur Bilder aus dem Jahr anzeigen
    const portfolioToShow = props.portfolio
        .filter(a => a.listed && new Date(a.date).getFullYear().toString() === props.year)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // nach Datum absteigend

    return <Layout title={`Year ${props.year}`}>
        <div className="year_page">
            <h1>Year {props.year}</h1>
            <hr />
            <PictureList assets={portfolioToShow} />
        </div>
    </Layout>
}