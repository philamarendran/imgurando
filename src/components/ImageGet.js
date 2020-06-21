import React from 'react';
import {URL_STRING, SIZE} from '../constants';
import LoadingSpinner from './LoadingSpinner';
import { CSSTransitionGroup } from 'react-transition-group';

export default class ImageGet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fetching: true
        }
    }

    imageContainerStyle() {
        let imageListWidth = document.getElementById('ImageList').offsetWidth;
        let imagesPerRow = Math.floor(imageListWidth / (150 + 20));
        let marginRemainder = imageListWidth / imagesPerRow;

        return {
            margin: '10px ' + ((marginRemainder / imagesPerRow) / 2) + 'px'
        }
    }

    render() {

        let imageListWidth = document.getElementById('ImageList').offsetWidth;
        let imagesPerRow = Math.floor(imageListWidth / (150 + 20));
        let marginRemainder = imageListWidth / imagesPerRow;

        let imageContainerStyle = {
            margin: '10px ' + ((marginRemainder / imagesPerRow) / 2) + 'px'
        }

        return (
            <CSSTransitionGroup 
            transitionName={{ appear: 'materialize'}}
            transitionAppear={true} transitionEnter={false} transitionLeave={false}
            transitionAppearTimeout={200}
            >
                <span className="imageContainer" key={'imageContainer' + this.props.listIndex} style={imageContainerStyle}>
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
            </CSSTransitionGroup>
        );
    }
        
}