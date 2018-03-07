import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'

import BookShelfChanger from './../components/BookShelfChanger'

describe('Testing BookShelfChanger Component', () => {
  const onChange = jest.fn(); 
  let book = {
    id: 1,
    title: 'Book One',
    authors: ['Authors One'],
    imageLinks: { thumbnail: 'url/book/one' },
    shelf: 'read'
  };
  let props = {
    book: {},
    onUpdateBook: onChange
  };

  const wrapper = shallow(<BookShelfChanger {...props} />);

  it('render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('check render when state changes', () => {
    wrapper.setProps({
      book: book,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should call change value none', () => {
    wrapper.find('select').simulate('change', { target: { value: 'none' }});
    expect(onChange).toBeCalledWith(book, 'none');
  });
});