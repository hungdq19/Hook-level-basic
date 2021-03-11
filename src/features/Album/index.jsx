import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import AlbumList from './AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    
    const [albums, setAlbums] = useState([
        {id:1, sing:"Nguyen Van A", img:"link", song: 'Tim Nguoi Noi Ay'},
        {id:2, sing:"Nguyen Van B", img:"link2", song: 'ANh Se Can EM'},
        {id:3, sing:"Nguyen Van C", img:"link3", song: 'Noi Cho ANh ghe'},
    ])
    return (
        <Fragment >
            <h1 >COMPONET_ALBUM</h1>
            <AlbumList albums = {albums}/>
            
        </Fragment>
    );
}

export default AlbumFeature;