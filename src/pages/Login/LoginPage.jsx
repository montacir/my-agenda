import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginForm from './LoginForm';
import {login} from '../../actions';

class LoginPage extends Component {

    componentDidMount() {
        document.body.classList.add('login-body')
    }

    componentWillUnmount() {
        document.body.classList.remove('login-body')
    }

    render() {

        return (
            [
                <h2 className="form-heading" key={"title"}> login </h2>,
                <LoginForm login={this.props.login} key={"login"} hasError={this.props.isError && this.props.isFetching}/>
            ]
        );

    }
}

const mapStateToProps = (state) => {
    console.log('state',state);
    return state.login;
}
export default connect(mapStateToProps, {login})(LoginPage);