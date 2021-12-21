//react/next imports

import { useState } from 'react';

//Styles
import styles from '../styles/components/contact.module.scss';

function ContactForm({ data, cls }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(undefined);
  const [message, setMessage] = useState('');

  return (
    <form className={`${styles.form} ${styles[cls]}`}>
      <div className={styles.formHeading}>
        <h3>{data.formCaption}</h3>
      </div>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="John"
            required
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            required
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john.doe@mail.com"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="+918076515534"
            required
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className={styles.textAreaContainer}>
          <label htmlFor="lastName">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here"
            required
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>
        <div className={styles.btnContainer}>
          <button type="submit" className={styles.btn}>
            Send
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
