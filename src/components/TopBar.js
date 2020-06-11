import React from 'react';
import Options from './Options';
import Controls from './Controls';
import StatsDisplay from './StatsDisplay';

export default class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeScreen: this.props.welcomeScreen
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({ ...this.state, ...newProps});
    }

    handleControlsChange(e) {
        console.log(e);
    }

    topBarClasses() {
        let topBarClasses = '';
        topBarClasses += this.state.welcomeScreen ? 'welcomeScreen ' : 'mainActivity ';

        return topBarClasses;
    }

    render() {

        return (
            <div id="TopBar" className={this.topBarClasses()}>
                <span id="appTitle">Imgurando</span>
                <span id="splashMessage">
                    This is where you would see a useful message about this app.<br/>
                     I, unfortunately, have not written one yet. So you're seeing this.
                </span>
                <StatsDisplay />
                <Options 
                getOptions={this.props.getOptions} 
                />
                <Controls 
                getControlsState={this.props.getControlsState}
                welcomeScreen={this.state.welcomeScreen}
                />
            </div>
        );
    }
}