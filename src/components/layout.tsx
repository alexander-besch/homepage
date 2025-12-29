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
            <div className="layout_navbar_wrapper">

                <div className="layout_navbar">

                    <div className="layout_navbar_left">
                        <input id="layout_navbar_toggle" type="checkbox"></input>
                        <label htmlFor="layout_navbar_toggle" className="layout_navbar_hamburger">
                            <div></div>
                            <div></div>
                            <div></div>
                        </label>


                        <div className="layout_navbar_desktop">
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


                    <div className="layout_navbar_right">
                        <div>
                            <a href="/">Alexander's Art</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="layout_navbar_burgeritems">
                <li><a href="/">Home</a></li>
                <li><a href="/galery">Galery</a></li>
                <li><a href="/about">About</a></li>
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


