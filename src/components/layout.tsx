interface LayoutProps {
    title: string,
}
export default function Layout(props: React.PropsWithChildren<LayoutProps>): React.ReactNode {
    return <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <title>{props.title}</title>
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <link rel="stylesheet" type="text/css" href="/styles.css" />
            <link rel="icon" type="image/png" sizes="245x245" href="/favicon.png" />
        </head>

        <body>
            <div className="layout_header">
                <div className="layout_header_left">
                    Alexander's Homepage
                </div>
                <div className="layout_header_right">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <div>
                        <a href="/galery">Galery</a>
                    </div>
                    <div>
                        <a href="/about">About</a>
                    </div>
                </div>
            </div>

            <div className="layout_body">
                {props.children}
            </div>


            <div className="layout_footer">
                Text unten
            </div>
        </body>
    </html>;
}


