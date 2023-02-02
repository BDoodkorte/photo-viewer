import React from "react";  // import React (to provide access to TSX)

export function PhotoViewer(props: { url: string | undefined; }) {    // declare and export new function called 'PhotoViewer'
    return (                
        <div className="photo">    
            <img className="main_pic" src={props.url} /> 
        </div>
    );
}

// {(mainImage === url ?) img.classList.toggle("selected")}
