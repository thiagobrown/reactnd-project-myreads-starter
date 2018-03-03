import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import ListBooks from './../components/ListBooks'

describe('Testing ListBooks Component', () => {
  let props = {
    books: [{
      id: 1,
      title: 'Book One',
      authors: ['Authors One'],
      imageLinks: { thumbnail: 'url/book/one' },
      shelf: 'read'
    }, {
      id: 2,
      title: 'Book Two',
      authors: ['Authors Two'],
      shelf: 'wantToRead'
    }, {
      id: 3,
      title: 'Book Three',
      imageLinks: { thumbnail: 'url/book/three' },
      shelf: 'currentlyReading'
    }],
    loading: false,
    onUpdateBook: jest.fn()
  }

  const wrapper = shallow(<ListBooks {...props} />);

  it('render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});