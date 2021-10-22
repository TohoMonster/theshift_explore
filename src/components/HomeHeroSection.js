import React from "react";

class HomeHeroSection extends React.Component {
    render() {
        return <section id={"hero-section"}>
            <div className={"hero-head"} title={"Exploring the Shift of Today"}>
                <div className={"hero-base hero-1"}>Exploring</div>
                <div className={"hero-base hero-2"}>the Shift</div>
                <div className={"hero-base hero-3"}>of Today</div>
            </div>
            <div className={"hero-sidebar"}>
                The Shift creates future-inspired projects for people and businesses desiring a shift.
            </div>
        </section>
    }
}

export default HomeHeroSection;