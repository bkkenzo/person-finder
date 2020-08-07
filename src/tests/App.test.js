import React from "react"
import ReactDOM from "react-dom"
import App from  "../components/App"
import Person from "./../components/Person"

import { shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe('App component', () => {
  it('renders without crashing', () => {
     shallow(<App />);
   });

   it('renders Page title', () => {
    const wrapper = shallow(<App />);
    const welcome = <h1>The Person Finder</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });
})
