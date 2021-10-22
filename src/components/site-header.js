import React from "react";

class SiteHeader extends React.Component {
    render() {
        return <header>
            <h1 id={"logo"} class={"logo"}>The Shift</h1>
            <nav id={"site-nav"}>
                <ul>
                    <li><a href={"/"}>Home</a></li>
                    <li><a href={"/"}>Project</a></li>
                    <li><a href={"/"}>Research</a></li>
                    <li><a href={"/"}>About</a></li>
                </ul>
            </nav>
        </header>
    }
}

export default SiteHeader;