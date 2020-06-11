import React from 'react'
import imageList from './imageList'

function Image() {
        const imageListTile = imageList.map((item) => (
            <div>
            <a href={item.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
            <div className="tile">
            <img src={item.icon_url} alt="site icon"  className="icon_tile" />
            <h3 className="tile_name">{item.name}</h3>
            </div>
            </a>
        </div>
        ))
    return (
            <div className="bookmark_box">
                <h1 className="bookmark_title">Image</h1>
                <div className="tile_flex_container">
                {imageListTile}
                </div>
                
            </div>
    )
}


export default Image