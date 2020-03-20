import React from 'react';
import {URL_STRING, LOADSTATUS} from '../constants';

export default class ImageDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgLoadStatus: LOADSTATUS.LOADING,
        }
    }

    makeImgurUrl(hash, imgSize) {
        if(!imgSize) imgSize='';
        return hash ? URL_STRING.I_URL + hash + imgSize + URL_STRING.EXT.JPG : '';
    }

    render() {
        return (
            <span className="imageDisplay">
                <a 
                    href={this.url} 
                    target="_blank" rel="noopener noreferrer"
                >
                    <img 
                        src={this.url}
                        alt=''
                    ></img>
                </a>  
            </span>
        );
    }
}