import React, {Component} from "react";

const PhotoTile = props => {

    return (
        <div >
        <img src={`https://epic.gsfc.nasa.gov/archive/natural/${props.image.year}/${props.image.month}/${props.image.day}/png/epic_1b_${props.image.id}.png`}
        width="400"
        height="400"
        alt="The earth floating in space"
        />

        <h2>{props.caption}</h2>
        <h4>{props.year}</h4>
        </div>
    )

// image,
//         caption:responseBody.caption,
//         date:responseBody.identifier

}

export default PhotoTile;