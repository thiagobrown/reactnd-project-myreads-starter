import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import { Link } from 'react-router-dom'

import ListBooks from '../components/ListBooks'
import Loader from '../components/Loader';
import SearchBooks from '../components/SearchBooks';

describe('Testing ListBooks Component', () => {
  let props = {
    books: [],
    loading: false,
    onUpdateBook: jest.fn()
  }

  const wrapper = shallow(<ListBooks {...props} />);

  it('render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('check render when state changes', () => {
    wrapper.setProps({
      books: [
        {
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
        }]
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('check component <Loader/> when state.loading change to true', () => {
    wrapper.setProps({ loading: true });
    expect(wrapper.containsAllMatchingElements([<Loader />])).toEqual(true);
  });

  it('check component <Loader/> when state.loading change to false', () => {
    wrapper.setProps({ loading: false });
    expect(wrapper.containsAllMatchingElements([<Loader />])).toEqual(false);
  });

  // it('check when click in <Link /> to path /search', () => {
  //   const search = wrapper.find(Link);
  //   search.props.onClick();
  //   //search.simulate('click', { button: 0});
  //   expect(location.pathname).toBe('/search')
  // });
});