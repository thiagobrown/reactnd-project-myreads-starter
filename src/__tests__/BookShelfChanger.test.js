import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import BookShelfChanger from './../components/BookShelfChanger'

describe('Testing BookShelfChanger Component', () => {
  let props = {
    book: {},
    onUpdateBook: jest.fn()
  }

  const wrapper = shallow(<BookShelfChanger {...props} />);

  it('render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('check render when state changes', () => {
    wrapper.setProps({
      book: {
        id: 1,
        title: 'Book One',
        authors: ['Authors One'],
        imageLinks: { thumbnail: 'url/book/one' },
        shelf: 'read'
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});