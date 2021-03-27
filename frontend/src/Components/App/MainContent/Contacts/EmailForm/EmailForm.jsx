import React, {useEffect, useState} from "react";
import {Field, Form} from "react-final-form";
import {FORM_ERROR} from "final-form";
import {requiredField} from "../../../../../utils/validators";
import {Input, Textarea} from "../../../../Common/FormsControls/FormsControls";
import styles from "../../../../Common/FormsControls/FormsControls.module.scss"
import Button from "../../../../Common/Button/Button";

const EmailForm = (props) => {
    const [isMessageSent, setIsMessageSent] = useState(false)

    const submitEmailSending = async (data) => {
        let response = await props.sendEmail(data.emailTopic, data.emailText)
        if (response !== "200 OK") {
            return {[FORM_ERROR]: `${response}`}
        } else {
            setIsMessageSent(true)
        }
    }

    useEffect(() => {
        setTimeout(() => setIsMessageSent(false), 5000)
    }, [isMessageSent])

    return (
        <Form onSubmit={submitEmailSending}>
            {props => (
                <form onSubmit={event => {
                    props.handleSubmit(event).then(() => {
                        props.form.restart()
                    });
                }} className={styles.formControl}>
                    <div className={styles.fieldTitle}>
                        Topic
                    </div>
                    <div>
                        <Field name={'emailTopic'}
                               component={Input}
                               validate={requiredField}
                               autoComplete="off"
                        />
                    </div>
                    <div className={styles.fieldTitle}>
                        Type message here
                    </div>
                    <div>
                        <Field name={'emailText'}
                               component={Textarea}
                               validate={requiredField}
                        />
                    </div>
                    <div className={styles.formControl + " " + styles.error}>
                        {props.submitError && <span>{props.submitError}</span>}
                    </div>
                    <div>
                        <Button disabled={props.invalid || props.submitting || props.pristine}>Send message to me</Button>
                    </div>
                    {isMessageSent && <div className={styles.success}>Message sent
                    </div>}
                </form>)}
        </Form>
    )
}

export default EmailForm
