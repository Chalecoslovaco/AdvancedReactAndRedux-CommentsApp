import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

class App extends Component {
    renderButton() {
        const text = this.props.auth ? 'Sign Out' : 'Sign In';             
        return <button onClick={() => this.props.changeAuth(!this.props.auth)}>{text}</button>;
    }

    renderHeader(){
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post a New CommentBox</Link>
                </li>
                <li>
                    {this.renderButton()}
                </li>            
            </ul>
        );
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox} />
                <Route path="/" exact component={CommentList} />
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
};

export default connect(mapStateToProps, actions)(App);