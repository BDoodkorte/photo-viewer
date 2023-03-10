import React from "react";  // import React (to provide access to TSX)

// declare and export new function called 'PhotoSelector'
export const brokenImages = [
	1, 24, 32, 36, 44, 47
];

function PhotoSelector() {
	const urls = [];

	for (let i = 0; i < 50; i++) {
		if (!brokenImages.includes(i)) {
			const imageNumberString = i.toString().padStart(2, '0');
			urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
		}
	}

	return urls ;
}

export const photoSelection = PhotoSelector();

export function DisplayImageList(props : {mainImage : string, setMainImage : React.Dispatch <React.SetStateAction<string>>}){

        return <div className="photogrid">
		{photoSelection.map((url) => {
          return <img onClick={() => {
            props.setMainImage(url)
          }}
            className={url === props.mainImage ? "border" : "thumbnails"} src={url} alt={url}/>
        })}
		</div>}
