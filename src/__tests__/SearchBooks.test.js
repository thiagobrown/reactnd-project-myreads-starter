import React from 'react'
import ReactDOM from 'react-dom'
import { Debounce } from 'react-throttle';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';

import SearchBooks from './../components/SearchBooks'
import Loader from './../components/Loader'

describe('Testing SearchBooks Component', () => {
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
    onUpdateBook: jest.fn()
  }

  const wrapper = shallow(<SearchBooks {...props} />);

  it('render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('check render when state changes', () => {
    wrapper.setState({
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

  it('check component if exists Debouce', () => {
    expect(wrapper.exists(<Debounce />)).toEqual(true);
  });

  it('Debouce props.time = 500', () => {
    expect(wrapper.find(Debounce).prop('time')).toBe('500')
  });

  it('Debouce props.handler = onChange', () => {
    expect(wrapper.find(Debounce).prop('handler')).toBe('onChange')
  });

  it('input changes the text', () => {
    wrapper.find('input').prop('onChange')({ target: { value: 'React' } });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('check component <Loader/> when state.loading change to true', () => {
    wrapper.setState({ isLoading: true });
    expect(wrapper.containsAllMatchingElements([<Loader />])).toEqual(true);
  });

  it('check component <Loader/> when state.loading change to false', () => {
    wrapper.setState({ isLoading: false });
    expect(wrapper.containsAllMatchingElements([<Loader />])).toEqual(false);
  });
});