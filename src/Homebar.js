import React from 'react'
import homebarList from './homebarList'

function Homebar() {
        const homebarListTile = homebarList.map((item) => (
            <div className="tile">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.icon_url} alt="site icon"  className="icon_tile" />
                </a>
                <h3 className="tile_name">{item.name}</h3>
            </div>
        ))
    return (
            <div className="bookmark_box homebar">
                <h1 className="bookmark_title"></h1>
                <div className="tile_flex_container">
                {homebarListTile}
                </div>
                
            </div>
    )
}


export default Homebar