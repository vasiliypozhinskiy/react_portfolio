import React from 'react'
import classes from './FormsControls.module.scss'

const  FormControl = ({input, meta, child, ...props}) => {
    let hasError = (meta.touched && meta.error) || meta.submitError
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                {React.createElement(child, {...input, ...props})}
            </div>
            <div>
                {hasError && <span>{meta.error || meta.submitError}</span>}
            </div>
        </div>
    )
}

export const Textarea = ({...props}) => {
    return <FormControl {...props} child={'textarea'}></FormControl>
}

export const Input = ({...props}) => {
    return <FormControl {...props} child={'input'}></FormControl>
}
