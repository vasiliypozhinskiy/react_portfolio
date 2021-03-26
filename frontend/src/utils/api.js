import axios from "axios";

export const sendEmail = (emailTopic, emailText) => {
    return axios.post('http://localhost/api/send-email', {
        title: emailTopic,
        text: emailText
    }).then(response => response.data)
}
