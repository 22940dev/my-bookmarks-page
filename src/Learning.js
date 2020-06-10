import React from 'react'
import learningList from './learningList'

function Learning() {
        const learningListTile = learningList.map((item) => (
            <div className="tile">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.icon_url} alt="site icon"  className="icon_tile" />
                </a>
                <h3 className="tile_name">{item.name}</h3>
            </div>
        ))
    return (
            <div className="learning">
                <h1>Learning</h1>
                <div className="tile_flex_container">
                {learningListTile}
                </div>
                
            </div>
    )
}


export default Learning