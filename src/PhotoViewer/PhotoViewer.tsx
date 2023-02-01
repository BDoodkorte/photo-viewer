import React from "react";  // import React (to provide access to TSX)

export function PhotoViewer(props) {    // declare and export new function called 'PhotoViewer'
    return (                
        <div className="photo">    
            <img src={props.url} /> 
        </div>
    );
}
