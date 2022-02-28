import React from 'react'

function ButtonSubmit({ labelName, customClassName, id, type, action }) {
    return (
        <div className={ `button-container ${customClassName}`} >
            <button 
                type={type ? type : "button"}
                className="btn btn-primary" 
                id={id}
                onClick={type !== 'submit' && action}>{ labelName }
            </button>
        </div>
    )
}

export default ButtonSubmit

