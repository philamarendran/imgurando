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
            <span className="imageContainer" style={imageContainerStyle}>
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