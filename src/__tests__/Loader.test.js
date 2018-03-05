import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Loader from './../components/Loader'

describe('Testing BookShelfChanger Component', () => {
  
  const wrapper = shallow(<Loader />);
  
  it('render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});