import React from 'react';
import * as renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import App from './App';
import { brokenImages, photoSelection } from './PhotoSelector/PhotoSelector';
import { PhotoViewer } from './PhotoViewer/PhotoViewer';
import { fireEvent } from '@testing-library/react';




//A unit test to check our imageUrl generation code - cannot contain broken image links
test('checks image list does not contain broken images', () => {

    // Const that defines an empty array to be filled with the broken image urls.
    const brokenUrls: any = [];

    // For loop that fills the brokenUrls array with the relevant urls. 
    for (let i = 0; i < brokenImages.length; i++) {
        brokenUrls.push(`https://picsum.photos/id/6${brokenImages[i]}/1600/900.jpg`)
    }

    // Function that allows you to compare if two arrays have any elements in common.
    function findCommonElements3(arr1: any[], arr2: string | any[]) {
        return arr1.some(item => arr2.includes(item))
    }

    // Compares the brokenUrl array with the array of image urls displayed on website (photoSelection).
    let check = findCommonElements3(photoSelection, brokenUrls)

    // Check that no elements in the array match. 
    expect(check).toBeFalsy();
});


// A ‘Regression / Snapshot' test to confirm that I the ‘PhotoViewer' component doesn’t accidentally change in the future.
describe("My Component", () => {
    it("Should match snapshot with url prop", async () => {
        const tree = renderer.create(<PhotoViewer url="https://picsum.photos/id/600/1600/900" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});


// A Component Test to confirm when a thumbnail is clicked, it becomes selected and the PhotoViewer updates with the new image.
test('does image update when clicked', () => {

    // Render the full App
    const loadApp = render(<App />);

    // Const that defines our thumnail url to click on
    const thumbnailTest: any = loadApp.getByAltText("https://picsum.photos/id/639/1600/900.jpg");

    // Const that grabs mainImage element before the click event.
    const mainImageTest: any = loadApp.getByAltText("main_pic");

    // Check if source url of mainImage is the default image.
    expect(mainImageTest).toHaveAttribute("src", "https://picsum.photos/id/600/1600/900");

    // Generate click event.
    fireEvent.click(thumbnailTest);

    // Const that grabs mainImage element after the click event.
    const mainImageTest2: any = loadApp.getByAltText("main_pic");

    // Check if source url of mainImage is the same as selected thumbnail image.
    expect(mainImageTest2).toHaveAttribute("src", "https://picsum.photos/id/639/1600/900.jpg");
});