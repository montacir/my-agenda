import React, {Component} from 'react';
import {reduxForm, Field, getFormValues} from 'redux-form';

class TextInput extends Component {
    render() {
        const {type, label, input, meta} = this.props;

        return (
            <div>
                <input {...input} type={type} placeholder={label} className="form-control"/>
                {
                    meta && meta.error && meta.touched && (
                        <div className="error">
                            {meta.error}
                        </div>
                    )
                }
            </div>
        )
    }
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }
    login(data){
        this.props.login(data);
    }

    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props;

        return (
            <div className="container log-row">
                <form className="form-signin" onSubmit={handleSubmit(this.login.bind(this))}>
                    <div className="login-wrap">
                        <Field
                            name="email" type="text" className="form-control" label="User ID" autoFocus
                            component={TextInput} validate={[required, isEmail]}
                        />
                        <Field name="password"
                               type="password" className="form-control" label="Password"
                               component={TextInput} validate={required}
                        />
                        <button className="btn btn-lg btn-success btn-block" type="submit" disabled={submitting}>LOGIN
                        </button>


                    </div>

                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1"
                         id="forgotPass"
                         className="modal fade">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal"
                                            aria-hidden="true">&times;</button>
                                    <h4 className="modal-title">Forgot Password ?</h4>
                                </div>
                                <div className="modal-body">
                                    <p>Enter your e-mail address below to reset your password.</p>
                                    <input type="text" name="email" placeholder="Email" autoComplete="off"
                                           className="form-control placeholder-no-fix"/>

                                </div>
                                <div className="modal-footer">
                                    <button data-dismiss="modal" className="btn btn-default" type="button">Cancel
                                    </button>
                                    <button className="btn btn-success" type="button">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </form>
            </div>

        )


    }

}

export const required = (value) => {
    if (!value) {
        return 'This field is required!'
    }
};
const isEmail = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined;


const mapStateToProps = (state) => (getFormValues('loginForm')(state));

export default reduxForm({
        form: 'loginForm',
    },
    mapStateToProps
)
(LoginForm);