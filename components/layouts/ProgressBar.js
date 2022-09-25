import React from "react";

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: 0
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollProgress);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollProgress);
    }

    scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = `${scrollPx / winHeightPx * 100}%`;

        // console.log(scrolled);

        this.setState({
            scrolled: scrolled
        });
    };

    render() {
        const progressContainerStyle = {
            background: "white",
            height: "5px",
            position: "fixed",
            bottom: 66,
            left: 0,
            width: "100vw",
            zIndex: 99
        };

        const progressBarStyle = {
            height: "5px",
            background: "black",
            width: this.state.scrolled
        };

        return (
            <div className="progress-container" style={progressContainerStyle}>
                <div className="progress-bar" style={progressBarStyle} />
            </div>
        );
    }
}

export default ProgressBar
