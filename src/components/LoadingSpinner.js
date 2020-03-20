import React from 'react';
import spinner from './spinner.png';

export default class LoadingSpinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <img className="loadingSpinner" src={spinner} alt="Loading Spinner"></img>               
        );
    }
} 