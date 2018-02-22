import React from 'react';
import Enzyme from 'enzyme'
import {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../../components/app';

jest.dontMock('../../components/app.jsx');
Enzyme.configure({ adapter: new Adapter() });

describe("Given the app module", () => {
    describe("When it runs", ()=> {
        it("Then it should say Hello World", ()=> {
            expect(render(<App />).text()).toEqual("Hello World")
        });
    });
});