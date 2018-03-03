import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import BookShelf from './../components/BookShelf'

describe('Testing BookShelf Component', () => {
    let props = {
        title: 'read',
        books: [{
            id: 1,
            title: 'Book One',
            authors: ['Authors One'],
            imageLinks: { thumbnail: 'url/book/one' },
            shelf: 'read'
        }],
        onUpdateBook: jest.fn()
    }

    const wrapper = shallow(<BookShelf {...props} />);

    it('render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});