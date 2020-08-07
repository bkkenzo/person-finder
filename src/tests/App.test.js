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

describe('Person component', () => {

  const person = {"id":1,"name":"Dyanna Cullingford","email":"dcullingford0@nba.com","avatar":"https://robohash.org/rerumliberoamet.png?size=200x200&set=set1","description":"Nondisplaced fracture of lower epiphysis (separation) of left femur, initial encounter for closed fracture"}

  it('renders without crashing', () => {
     shallow(<Person person={person} />);
  });

  it('renders Person name', () => {
    const wrapper = shallow(<Person person={person} />);
    const name = <h4>Dyanna Cullingford</h4>;
    expect(wrapper.contains(name)).toEqual(true);
  });
})
