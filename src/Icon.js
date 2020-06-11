import React from 'react'
import iconList from './iconList'

function Icon() {
        const iconListTile = iconList.map((item) => (
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
                <h1 className="bookmark_title">Icons</h1>
                <div className="tile_flex_container">
                {iconListTile}
                </div>
                
            </div>
    )
}


export default Icon