import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import ImageGet from './ImageGet';


export default class ImageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidUpdate() {
        if (this.props.searchRunning) {
            this.addImage();
        }
    }

    async addImage() {
        let imageList = [...this.state.list];
        let url = await this.props.newImageUrl();
        if (url) {
            imageList.push(
                <ImageGet url={url} imageSize={this.props.imageSize}/>
            );
        }
        this.setState({list: imageList});
    }


    render() {
        return (
            <div id="ImageList">
                {this.state.list}
            </div>
        );
    }
}