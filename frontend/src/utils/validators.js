export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

export const requiredField = (value) => {
    if (value) return undefined;
    return "Field is required";
}

export const maxLength = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength}`
    return undefined
}
