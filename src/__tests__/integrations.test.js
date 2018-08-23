import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Fetched #0'}, { name: 'Fetched: #1'}]        
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch fake comments and display them as a list', (done) => {
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );
    
    wrapped.find('.fetch-comments').simulate('click');

    moxios.wait(() => {
        wrapped.update();
        
        expect(wrapped.find('li').length).toEqual(2);

        done();
    });
});