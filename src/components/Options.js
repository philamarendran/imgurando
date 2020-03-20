import React from 'react';


export default class Options extends React.Component {

    constructor(props) {
        super(props);
        this.state =  {
            welcomeScreen: this.props.welcomeScreen,
            imageGetterType: 'withoutApi',
            useLongHash: false,
            imageSize: 100,
            darkMode: false
        } 
    }

    render() {
        return (
            <span id="Options">
                <span id="PickImageGetterType">
                    <span id="UseApiButton">
                        <input id="useApi" type="radio" name="pickImageGetterType" value="useApi" className="radio"></input>
                        <label htmlFor="useApi">Use Imgur API</label>
                    </span>
                    <span id="WithoutApiButton">
                        <input id="withoutApi" type="radio" name="pickImageGetterType" value="withoutApi" className="radio"></input>
                        <label htmlFor="withoutApi">
                            Continue without API
                        </label>
                    </span>
                    <span id="SfwModeButton">
                        <input id="sfwMode" type="radio" name="pickImageGetterType" value="sfwMode" className="radio"></input>
                        <label htmlFor="sfwMode">SFW Demo Mode</label>
                        <span className="optionMessage">Write something here</span>
                    </span>
                </span>

                <span id="UseLongHashContainer">
                    <input type="checkbox" id="UseLongHash"></input>
                    <label htmlFor="UseLongHash">Generate Long Hashes</label>
                    <span className="optionMessage">
                        Generate Imgur's newer 7 character
                        hashes alongside the 5 character hashes.
                        This will severely impact performance and likely not yield many results.
                    </span>
                </span>
                <span id="DarkModeToggleContainer">
                    <input type="checkbox" id="DarkModeToggle"></input>
                    <label htmlFor="DarkModeToggle">Enable Dark Mode</label>
                </span>

                <span id="SizeSliderContainer">
                    <input id="SizeSlider" type="range" min="50" max="500"></input>
                </span>
            </span>
        );
    }

}