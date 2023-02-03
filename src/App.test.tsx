import React from 'react';
import * as renderer from 'react-test-renderer';
import { getByAltText, render } from '@testing-library/react';
import App from './App';
import { brokenImages, photoSelection } from './PhotoSelector/PhotoSelector';
import { PhotoViewer } from './PhotoViewer/PhotoViewer';
import { fireEvent } from '@testing-library/react';




// Test test to check if the word photo appears on the webpage
test('renders Photo text', () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/Photo/i);
    expect(textElement).toBeInTheDocument();
});


//A unit test to check our imageUrl generation code - 
// for me, this might check that the first link is what I expect and that it doesn’t include the ‘broken’ images.
test('checks image list does not contain broken images', () => {
    const brokenUrls: any = [];
    for (let i = 0; i < brokenImages.length; i++) {
        brokenUrls.push(`https://picsum.photos/id/6${brokenImages[i]}/1600/900.jpg`)
    }
    function findCommonElements3(arr1: any[], arr2: string | any[]) {
        return arr1.some(item => arr2.includes(item))
    }
    let check = findCommonElements3(photoSelection, brokenUrls)
    expect(check).toBeFalsy();
});


// A ‘Regression / Snapshot' test to confirm that I the ‘ImageViewer' component doesn’t accidentally change in the future.
describe("My Component", () => {
  it("Should match snapshot with url prop", async () => {
      const tree = renderer.create(<PhotoViewer url="https://picsum.photos/id/600/1600/900"/>).toJSON();
      expect(tree).toMatchSnapshot();
    });
});


// A Component Test to confirm that when I click a thumbnail, 
// then the thumbnail becomes selected and the ImageViewer updates with the new image.
test('does image update when clicked', () => {

    const loadApp = render(<App />);
    // const that stores selected thumbnail url
    const thumbnailTest : any = loadApp.getByAltText("https://picsum.photos/id/639/1600/900.jpg");

    // const that stores mainImage url
    const mainImageTest : any = loadApp.getByAltText("main_pic");
    expect(mainImageTest).toHaveAttribute("src","https://picsum.photos/id/600/1600/900");

    
    fireEvent.click(thumbnailTest); //this needs to be the element holding the url, cant run fireevent on url itself
    const mainImageTest2 : any = loadApp.getByAltText("main_pic");


    expect(mainImageTest2).toHaveAttribute("src","https://picsum.photos/id/639/1600/900.jpg");
});