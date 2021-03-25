import React from "react";
import styles from "./Contacts.module.scss"
import EmailForm from "./EmailForm/EmailForm";
import gitIcon from "../../../../Assets/Images/github.png"
import vkIcon from "../../../../Assets/Images/vk-social-network-logo.png";
import emailIcon from "../../../../Assets/Images/envelope.png";
import phoneIcon from "../../../../Assets/Images/telephone-symbol-button.png"
import {sendEmail} from "../../../../utils/api";

const Contacts = (props) => {
    return (
        <div className={styles.container}>
            <ul className={styles.linkList}>
                <li><img src={gitIcon} alt="GitHub"/><a href="https://github.com/vasiliypozhinskiy/"
                                                        target="_blank"
                                                        rel="noreferrer">github.com/vasiliypozhinskiy</a></li>
                <li><img src={emailIcon} alt="Email"/><a href="mailto:vpozhinskii@mail.ru">vpozhinskii@mail.ru</a>
                </li>
                <li><img src={vkIcon} alt="VK"/><a href="https://vk.com/id10449750"
                                                   target="_blank"
                                                   rel="noreferrer">vk.com/vasiliypozhinskiy</a>
                </li>
                <li><img src={phoneIcon} alt="Phone"/><a href="tel:+79062405064">+7 (906) 240-50-64</a></li>
            </ul>
            <EmailForm sendEmail={sendEmail}/>
        </div>
    )
}

export default Contacts
