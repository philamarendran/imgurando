import React from 'react';
import Options from './Options';
import Controls from './Controls';
import StatsDisplay from './StatsDisplay';
import { CSSTransitionGroup } from 'react-transition-group';

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

        let splashMessage = this.state.welcomeScreen ? 
        <span id="splashMessage" key="splashMessage">An endless stream of random images from Imgur.</span> :
        null;

        return (
            <div id="TopBar" className={this.topBarClasses()}>
                <StatsDisplay />
                <CSSTransitionGroup
                    transitionName={{appear: 'liftIn', leave: 'sinkOut'}} transitionEnter={false}
                    transitionAppear={true} transitionAppearTimeout={1100}
                    transitionLeaveTimeout={500}
                >
                    <span id="appTitle" key="appTitle">Imgurando</span>
                    {splashMessage}
                </CSSTransitionGroup>
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