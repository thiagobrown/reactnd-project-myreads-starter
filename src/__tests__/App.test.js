import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { MemoryRouter } from 'react-router-dom';

import App from './../App'
import ListBooks from './../components/ListBooks'

describe('Testing App Component', () => {
  let books = [{
    id: 1,
    title: 'Book One',
    authors: ['Authors One'],
    imageLinks: { thumbnail: 'url/book/one'},
    shelf: 'read'
  },{
    id: 2,
    title: 'Book Two',
    authors: ['Authors Two'],
    shelf: 'wantToRead'
  },{
    id: 3,
    title: 'Book Three',
    imageLinks: { thumbnail: 'url/book/three'},
    shelf: 'currentlyReading'
  }];

  const wrapper = shallow(<App />);
  
  it('render correctly', () => {
    wrapper.setState({ books: books, isLoading: false });
    expect(wrapper).toMatchSnapshot();
  });

  it('verify values of state/props in a component', () => {
    expect(wrapper.state().books).toBe(books);
    expect(wrapper.state().isLoading).toBe(false);
  });

  it('verify exists className app', () => {
    expect(wrapper.find('div').hasClass('app')).toEqual(true);
  });
});



