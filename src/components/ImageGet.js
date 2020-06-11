import React from 'react';
import {URL_STRING, SIZE} from '../constants';
import LoadingSpinner from './LoadingSpinner';

export default class ImageGet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fetching: true
        }
    }

    render() {

        return (
            <span className="imageContainer">
                <a
                    href={this.props.url}
                    target="_blank" rel="noopener noreferrer"
                >
                    <img
                        src={this.props.url}
                        alt=''
                    ></img>
                </a> 
            </span>
        );
    }
        
}