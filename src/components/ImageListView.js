import React from 'react';
import ImageDisplay from './ImageDisplay';
import {CHARACTERS, CHARACTERS_LENGTH, HASH_LENGTH, 
    URL_STRING, REDIRECT_MESSAGE} from '../constants';

export default class ImageListView extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            tries: 0,
            hits: 0
        }
    }

    generateRandomImgurHash(hashLength) {
        let hash = '';
        for(let i=0; i < hashLength; i++) {
            hash += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS_LENGTH));
        }
        return hash;
    }

    makeImgurUrl(hash, imgSize) {
        if(!imgSize) imgSize='';
        return hash ? URL_STRING.I_URL + hash + imgSize + URL_STRING.EXT.JPG : '';
    }

    renderImageDisplay(count) {

        function delay() {
            // `delay` returns a promise
            return new Promise(function(resolve, reject) {
              // Only `delay` is able to resolve or reject the promise
              setTimeout(function() {
                resolve(42); // After 3 seconds, resolve the promise with value 42
              }, 3000);
            });
          }
          
        
        let json;
        json = (async () => {
            const response = await fetch(this.makeImgurUrl(this.generateRandomImgurHash(HASH_LENGTH.SHORT)));
            json = await response.url;
            console.log(json);
            return json;
        })();
            

        console.log(json);
        //console.log(a);
        
        return 'json';
    }


    isImgurHashValid(hash) {
        
    }



    render() {
        return (
            <div className="imageContainer">
                {this.renderImageDisplay(10)}
            </div>
        );
    }
}