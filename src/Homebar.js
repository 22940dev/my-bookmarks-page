import React from 'react'
import homebarList from './homebarList'

function Homebar() {
        const homebarListTile = homebarList.map((item) => (
            <div>
                <a href={item.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                <div className="tile">
                <img src={item.icon_url} alt="site icon"  className="icon_tile" />
                <h3 className="tile_name" >{item.name}</h3>
                </div>
                </a>
            </div>
           
        ))
    return (
            <div className="bookmark_box homebar">
               
                <div className="tile_flex_container">
                {homebarListTile}
                </div>
                
            </div>
    )
}


export default Homebar