import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() =>{
    const initialState = {
        comments: ['Comment 0', 'Comment 1']
    };

    wrapped= mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});


it('has one <li> per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
});

it('shows the comment´s text', () => {
    expect(wrapped.render().text()).toContain('Comment 0');
    expect(wrapped.render().text()).toContain('Comment 1');
});