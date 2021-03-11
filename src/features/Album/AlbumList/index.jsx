import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';

AlbumList.propTypes = {
    
};

function AlbumList(props) {
    const {albums} = props;
    return (
        <ul>
            {albums.map(album=>(
            <li key = {album.id}>
                <Album album={album}/>
            </li>))}    
        </ul>
    );
}

export default AlbumList;