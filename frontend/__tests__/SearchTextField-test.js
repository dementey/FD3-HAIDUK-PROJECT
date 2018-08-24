import React from 'react';
import { SearchTextField } from '../src/Components/LandingPage/Home/SearchForm/SearchTextField'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
// и напишем наш тест для компонента

//*********************************
describe('>>>SearchForm --- Shallow RendsrcACT COMPONENTS',()=>{
    let wrapper;
    const output = true;

    beforeEach(()=>{
        wrapper = shallow(<SearchTextField output={output}/>)
        
    })

    it('+++ render the DUMB component', () => {
        expect(true).toBe(true)
    });
      
    // it('+++ contains output', () => {
    //     expect(wrapper.find('input[placeholder="Output"]').prop('value')).toEqual(output)
    // });
    
});