import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import BookShelfChanger from './../components/BookShelfChanger'

describe('Testing BookShelfChanger Component', () => {
  let props = {
    book: {
      id: 1,
      title: 'Book One',
      authors: ['Authors One'],
      imageLinks: { thumbnail: 'url/book/one' },
      shelf: 'read'
    },
    onUpdateBook: jest.fn()
  }

  const wrapper = shallow(<BookShelfChanger {...props} />);
  
  it('render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});