import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import css from './ImageGallery.module.css';


export class ImageGallery extends Component {
    render() {                       
        return (
            <>
            <ul className={css.gallery}> 
            {<ImageGalleryItem hits={this.props.item} modal={this.props.modal} status={this.props.status} /> }
            </ul>
            </>)
        };
};
