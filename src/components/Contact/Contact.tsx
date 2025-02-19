import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="tusharthakre2001@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="tusharthakre2001@gmail.com">adityapatil210601@gmail.com</a>
        </div>
        <div>
        <a href="tel:+916264577761"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+916264577761">(+91) 9403408055</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}