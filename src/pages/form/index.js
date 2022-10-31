/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from "react";
import './fontawesome';
import { Flex, Button } from 'theme-ui';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Grid } from 'theme-ui';

// import {contactConfig} from "../form/content"


const FormIndex = () => {
  return(
<div class= "cont-form">
    <div class="contact-form container-form">
    <form>
        <div class="form">
            <div class="form-txt">
                <h1>Contact Us</h1>
                <span>As you might expect of a company that began as a high-end interiors contractor, we pay strict
                attention.</span>
                <h3>Our Location</h3>
                <p>PT XXX XXX</p>
                <h3>Office</h3>
                <p>Jalan xxx xxx<br/>Pos Code xxx</p>
                <div className="social-media" >
                    <a href="#" className="icon-circle">
                    <FontAwesomeIcon icon="fa-brands fa-facebook" className="fa"/>
                    </a>
                    <a href="#" className="icon-circle">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" className="fa"/>
                    </a>
                    <a href="#" className="icon-circle">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" className="fa"/>
                    </a>
                    </div>  
                    <div class="bck-home">
                    <button>Back to Homepage</button>
                    </div>

            </div>
            <div class="form-details">
                <input type="text" name="name" id="name" placeholder="Name" required/>
                <input type="email" name="email" id="email" placeholder="Email" required/>
                <textarea name="message" id="message" cols="52" rows="7" placeholder="Message" required></textarea>
                <button>SEND MESSAGE</button>
            </div>
        </div>
    </form>
</div>

</div>  


)

}

export default FormIndex;