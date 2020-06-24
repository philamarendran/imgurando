import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

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

        let beginButton =
            <button id="BeginButton" key="BeginButton" onClick={() => this.begin()}>Begin</button>
        ;

        let mainControls = [
            <button id="PlayPauseButton" key="PlayPauseButton" onClick={() => this.playPause()}>
                {this.state.searchRunning ? 'Pause' : 'Play'}
            </button>
            ,
            <button
                id="ResetButton" key="ResetButton"
                onClick={() => this.reset()}
                className={this.state.isReset ? 'justClicked' : ''}
                disabled={this.state.searchRunning}
            >
                Reset
            </button>
        ];

        return (
            <span id="Controls">
                <CSSTransitionGroup
                    transitionName={{ appear: 'liftIn', leave: 'sinkOut'}}
                    transitionAppear={true}
                    transitionEnter={false}
                    transitionAppearTimeout={1500}
                    transitionLeaveTimeout={3}
                >
                    {this.state.welcomeScreen ? beginButton : mainControls}
                </CSSTransitionGroup>
            </span>
        );
    }
}
