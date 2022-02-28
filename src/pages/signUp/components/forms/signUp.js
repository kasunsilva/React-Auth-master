import React from 'react'
import SubmitButton from '../../../../components/Buttons/ButtonSubmit'
import TextInput from '../../../../components/InputFields/TextInput'
import SignInLink from '../../../../components/Links/SignInLink'


function SignUp({
    submitStatus,
    value,
    onInputChange,
    onSubmit,
    formValidationResult }) {
    return (
        <div className="signup-user-form">
            <span className="header">Create Account</span>
            <form >
                <div className="form-group">
                    <div className="row">
                        <div className="col custom-grid">
                            <TextInput
                                inputId={'firstname'}
                                inputname={'firstname'}
                                inputType={'text'}
                                inputValue={value['firstname']}
                                inputFieldOnChnage={onInputChange}
                                inputLabel={'First name'}
                                autoFocus={true}
                                isValidField={formValidationResult['firstname'].status}
                                inputError={formValidationResult['firstname'].error}
                            />
                        </div>
                        <div className="col custom-grid">
                            <TextInput
                                inputId={'lastname'}
                                inputname={'lastname'}
                                inputValue={value['lastname']}
                                inputType={'text'}
                                inputFieldOnChnage={onInputChange}
                                inputLabel={'Last name'}
                                isValidField={formValidationResult['lastname'].status}
                                inputError={formValidationResult['lastname'].error}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col custom-grid">
                            <TextInput
                                inputId={'username'}
                                inputname={'username'}
                                inputValue={value['username']}
                                inputType={'text'}
                                inputFieldOnChnage={onInputChange}
                                inputLabel={'Username'}
                                isValidField={formValidationResult['username'].status}
                                inputError={formValidationResult['username'].error}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col custom-grid">
                            <TextInput
                                inputId={'rusername'}
                                inputname={'rusername'}
                                inputValue={value['rusername']}
                                inputType={'text'}
                                inputFieldOnChnage={onInputChange}
                                inputLabel={'Re-type username'}
                                isValidField={formValidationResult['rusername'].status}
                                inputError={formValidationResult['rusername'].error}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col custom-grid">
                            <TextInput
                                inputId={'password'}
                                inputname={'password'}
                                inputValue={value['password']}
                                inputType={'password'}
                                inputFieldOnChnage={onInputChange}
                                inputLabel={'Password'}
                                isValidField={formValidationResult['password'].status}
                                inputError={formValidationResult['password'].error}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col custom-grid">
                            <TextInput
                                inputId={'rpassword'}
                                inputname={'rpassword'}
                                inputValue={value['rpassword']}
                                inputType={'password'}
                                inputFieldOnChnage={onInputChange}
                                inputLabel={'Re-type password'}
                                isValidField={formValidationResult['rpassword'].status}
                                inputError={formValidationResult['rpassword'].error}
                            />
                        </div>
                    </div>
                </div>
                <SubmitButton
                    labelName={submitStatus ? "Submitting" : "Create account"}
                    customClassName="sign-in-btn"
                    action={(e) => onSubmit(e)}
                />
            </form>
            <SignInLink />
        </div>
    )
}


export default SignUp

