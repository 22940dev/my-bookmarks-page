import React from 'react'
import colorList from './colorList'

function Color() {
        const colorListTile = colorList.map((item) => (
            <div className="tile">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.icon_url} alt="site icon"  className="icon_tile" />
                </a>
                <h3 className="tile_name">{item.name}</h3>
            </div>
        ))
    return (
            <div className="bookmark_box">
                <h1 className="bookmark_title">Color</h1>
                <div className="tile_flex_container">
                {colorListTile}
                </div>
                
            </div>
    )
}


export default Color