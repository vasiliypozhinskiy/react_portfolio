import axios from "axios";

export const sendEmail = (emailTopic, emailText) => {
    return axios.post('http://127.0.0.1:5000/api/send-email', {
        title: emailTopic,
        text: emailText
    }).then(response => response.data)
}
