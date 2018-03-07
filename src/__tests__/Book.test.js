import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Book from './../components/Book'
import BookShelfChanger from './../components/BookShelfChanger'

describe('Testing Book Component', () => {
  let props = {
    book: {
      id: 1,
      title: 'Book One',
      authors: ['Author One'],
      imageLinks: { thumbnail: 'url/book/one' },
      shelf: 'read'
    },
    onUpdateBook: jest.fn()
  }

  const wrapper = shallow(<Book {...props} />);

  it('render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('verify exists values passed as props', () => {
    expect(
      wrapper.find('div.book > div.book-top > div.book-cover')
      .props().style.backgroundImage)
      .toBe(`url(${props.book.imageLinks.thumbnail})`);
    
    expect(
      wrapper.find('div.book > div.book-title').text())
      .toBe(props.book.title);
    
    expect(
      wrapper.find('div.book > div.book-authors').text())
      .toBe(props.book.authors.join(', '));
  });

  it('verify exists BookShelfChanger', () => {
    expect(wrapper.find(BookShelfChanger)).toBeTruthy();
  });

  it('check render when not exists props.book.imageLinks', () => {
    wrapper.setProps({
      book: {
        id: 1,
        title: 'Book One',
        authors: ['Author One'],
        shelf: 'read'
      }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('check render when not exists props.book.imageLinks.thumbnail', () => {
    wrapper.setProps({
      book: {
        id: 1,
        title: 'Book One',
        authors: ['Author One'],
        imageLinks: { },
        shelf: 'read'
      }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('check render when not exists props.book.authors', () => {
    wrapper.setProps({
      book: {
        id: 1,
        title: 'Book One',
        imageLinks: { thumbnail: 'url/book/one' },
        shelf: 'read'
      }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it ('check render when there is only one author in props.book.authors', () => {
    wrapper.setProps({
      book: {
        id: 1,
        title: 'Book One',
        authors: ['Author One', 'Author Two'],
        imageLinks: { thumbnail: 'url/book/one' },
        shelf: 'read'
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});



