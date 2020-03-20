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

    handleControlsChange(e) {
        console.log(e);
    }

    render() {
        return (
            <div id="topBar">
                <span id="appTitle">Imgurando</span>
                <span id="splashMessage">
                    This is where you would see a useful message about this app.
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