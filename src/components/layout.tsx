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
        </head>

        <body>
            <div>
                <h1 className="layout_heading">---Header---</h1>
            </div>

            <div>
                {props.children}
            </div>
        </body>
    </html>;
}
