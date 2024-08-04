import styles from "./ContactForm.module.css"
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdMail } from "react-icons/md";


function ContactForm() {
function onSubmit(event){
    event.preventDefault()
    console.log(event)

}


    return (
        <section className={styles.contactContainer}>
            <div className={styles.formSection}>
                <div className={styles.topBtn}>
                    <Button text="Chat" icon={<MdMessage fontSize={"1.2vw"} />} />
                    <Button text="Call" icon={<IoMdCall fontSize={"1.2vw"} />} />
                </div>
                <Button isOutline={true} text="Email" icon={<MdMail fontSize={"1.2vw"} />} />
                <form action="" onSubmit={onSubmit}>
                    <div className={styles.formControl}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" id="text" rows="8"></textarea>
                    </div>
                    <div>
                        <Button isOutline={true} text="Submit" fontSize={"1.2vw"} />
                    </div>
                </form>


            </div>
            <div className={styles.formImage}>
                <img src="/images/contact1.png" alt="" />
            </div>

        </section>
    )
}

export default ContactForm