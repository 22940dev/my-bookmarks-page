import React from 'react'
import documentationList from './documentationList'

function Documentation() {
        const documentationListTile = documentationList.map((item) => (

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
                <h1 className="bookmark_title">Documentation</h1>
                <div className="tile_flex_container">
                {documentationListTile}
                </div>
                
            </div>
    )
}


export default Documentation