import React from "react";

// styles
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.description}>
          <span className={styles.hello}>say hello</span>
          <p className={styles.para}>
            I’m intrested in freelance opportunities, web development and web
            designing, large and small projects however, if you have any other
            requests or questions, my inbox is always open, feel free to contact
            me and say hi, I will do my best to get back to you!
          </p>
          <span className={styles.icon}>
            <svg
              width="162"
              height="150"
              viewBox="0 0 162 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M49 14H1V62H49V14ZM0 13V63H50V13H0Z"
                fill="#569CD6"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M124 39H26V137H124V39ZM25 38V138H125V38H25Z"
                fill="#569CD6"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M161 1H88V74H161V1ZM87 0V75H162V0H87Z"
                fill="#569CD6"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M36 126H13V149H36V126ZM12 125V150H37V125H12Z"
                fill="#569CD6"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M134 129H116V147H134V129ZM115 128V148H135V128H115Z"
                fill="#569CD6"
              />
            </svg>
          </span>
        </div>
        <div className={styles.emailContainer}>
          <form action="POST" data-netlify="true" className={styles.email}>
            <div className={styles.NameEmail}>
              <input type="text" name="name" id="name" placeholder="Name" />
              <input type="text" name="email" id="email" placeholder="Email" />
            </div>
            <div className={styles.subject}>
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Subject"
              />
            </div>
            <div className={styles.messageContainer}>
              <textarea
                className={styles.message}
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <div className={styles.btnContainer}>
              <button type="submit" className={styles.btn}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
