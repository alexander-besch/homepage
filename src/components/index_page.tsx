interface IndexPageProps {
    some_text: string,
}
export default function IndexPage(props: IndexPageProps): React.ReactNode {
    return <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <title>Some Homepage</title>
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <link rel="stylesheet" type="text/css" href="/styles.css" />
        </head>

        <body>
            <div>
                <h1 className="some_heading">Hello World!</h1>
                <p>{props.some_text}</p>
            </div>
        </body>
    </html>;
}
