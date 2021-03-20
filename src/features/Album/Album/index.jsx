import React from 'react';

Album.propTypes = {
    
};

function Album(props) {
    const {album} = props;
    return (
        <div >
            <img src={album.sing} alt=""/>
            <span>{album.song}</span>
            <h5>{album.sing}</h5>
        </div>
    );
}

export default Album;