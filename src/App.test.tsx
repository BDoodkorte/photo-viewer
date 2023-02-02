import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { brokenImages, photoSelection } from './PhotoSelector/PhotoSelector';

test('renders Hello world text', () => {
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