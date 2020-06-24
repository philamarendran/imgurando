import React from 'react';
import CSSTransitionGroup from 'react-transition-group';
import './Imgurando.scss';
import {CHARACTERS, CHARACTERS_LENGTH, URL_STRING, HASH_LENGTH} from './constants';
import ImageList from './components/ImageList';
import TopBar from './components/TopBar';



export default class Imgurando extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeScreen: true,
      searchRunning: false,
      isReset: true,
      options: {
        imageGetterType: 'withoutApi',
        useLongHash: false,
        imageSize: 100,
        darkMode: false
      },
      stats: {
        attempts: 0,
        hits: 0
      }
    }

    this.getOptions = this.getOptions.bind(this);
    this.getControlsState = this.getControlsState.bind(this);
    this.generateRandomImgurHash = this.generateRandomImgurHash.bind(this);
    this.isHashValid = this.isHashValid.bind(this);
    this.newImageUrl = this.newImageUrl.bind(this);
  }

// Callback functions to get properties from Options/Controls
//=====================================================
  getOptions(options) {
    this.setState({...this.state, options: options});
  }
  getControlsState(controlsState) {
    this.setState({...this.state, ...controlsState});
  }
//=====================================================

  generateRandomImgurHash(hashLength) {
    let hash = '';
    for(let i=0; i < hashLength; i++) {
        hash += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS_LENGTH));
    }
    return hash;
  }

  async isHashValid(hash) {
    let urlPromise = await fetch(URL_STRING.I_URL + hash + URL_STRING.EXT.JPG);
    return urlPromise.url !== URL_STRING.REMOVED_URL;
  }

  async newImageUrl() {
    let hashLength = (this.state.options.useLongHash && this.state.stats.attempts % 2 === 0) ? HASH_LENGTH.LONG : HASH_LENGTH.SHORT;
    let hash = this.generateRandomImgurHash(hashLength);
    if (await this.isHashValid(hash)) {
      return URL_STRING.I_URL + hash + URL_STRING.EXT.JPG;
    } else {
      return null;
    }
  }


  render() {
    return (
      <div id="Imgurando" className={this.state.welcomeScreen ? 'welcomeScreen' : 'mainActivity'}>
        <TopBar 
        getOptions={this.getOptions}
        getControlsState={this.getControlsState}
        welcomeScreen={this.state.welcomeScreen}
        />
        <ImageList 
        searchRunning={this.state.searchRunning}
        newImageUrl={this.newImageUrl}
        isReset={this.state.isReset}
        imageSize={this.state.options.imageSize}
        />
      </div>
    );
  }
    
}