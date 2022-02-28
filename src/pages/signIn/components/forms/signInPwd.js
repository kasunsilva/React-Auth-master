import React from 'react'
import SubmitButton from '../../../../components/Buttons/ButtonSubmit'
import TextInput from '../../../../components/InputFields/TextInput'
import BackIcon from '../../icons/back.svg'

function SignInPwd({
    validUserName,
    varifyPasswordStatus,
    value,
    onInputChange,
    onSubmit,
    userValidationResult,
    redirectToUserForm }) {
    return (
        <div className="signin-password-form">
            <span className="back-icon" onClick={redirectToUserForm}><img alt="" src={BackIcon} /></span>
            <span className="header">Welcome</span>
            <span className="user-name">{validUserName}</span>
            <form >
                <TextInput
                    inputId={'password'}
                    inputType={'password'}
                    inputValue={value}
                    inputFieldOnChnage={onInputChange}
                    inputLabel={'Password'}
                    isValidField={userValidationResult.status}
                    inputError={userValidationResult.error}
                    autoFocus={true}
                />
                <SubmitButton
                    labelName={varifyPasswordStatus ? "Verifying" : "Sign in"}
                    customClassName="sign-in-btn"
                    action={(e) => onSubmit(e, 'password')}
                />
            </form >
        </div>
    )
}

export default SignInPwd

