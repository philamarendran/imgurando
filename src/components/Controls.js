import React from 'react';

export default class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeScreen: this.props.welcomeScreen,
            searchRunning: false,
            isReset: true
        }
    }

    begin() {
        let beginState = {welcomeScreen: false, isReset: false, searchRunning: true}
        this.setState(beginState);
        this.props.getControlsState(beginState);
    }

    playPause() {
        let playPauseState = {searchRunning: !this.state.searchRunning}
        if (this.state.isReset) playPauseState.isReset = false;
        this.setState({...this.state, ...playPauseState});
        this.props.getControlsState(playPauseState);
    }

    reset() {
        this.setState({...this.state, isReset: true});
        this.props.getControlsState({isReset: true});
    }

    render() {
        if (this.state.welcomeScreen) {
            return (
                <span id="Controls">
                     <button id="BeginButton" onClick={()=>this.begin()}>Begin</button>
                </span>
            );
        } else {
            return (
                <span id="Controls">
                    <button id="PlayPauseButton" onClick={()=>this.playPause()}>
                        {this.state.searchRunning ? 'Pause' : 'Play'}
                    </button>
                    <button 
                    id="ResetButton"
                    onClick={()=>this.reset()}
                    className={this.state.isReset ? 'justClicked' : ''}
                    disabled={this.state.searchRunning}
                    >
                        Reset
                    </button>
                </span>
            );
        }
    }
}
