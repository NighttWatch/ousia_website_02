
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


import "./SubscribeSection.scss";

export default function SubscribeSection() {
    return (
        <div className='subscribe' id='subscribe'>
            <img className="subscribe__logo" src='/branding/logo/ousia_logo_short.png' alt='ousia logo'/>
            <h2 className="subscribe__title heading-secondary--sub u-center-text">Leave Your Email to Get Informed About The OUSIA LOYALTY Program!</h2>
            <TextField
                    className="subscribe__input"
                    id="outlined-multiline-flexible"
                    label="Enter e-mail"
                    maxRows={5}
                    variant="filled"
            />
            <Button className="subscribe__button contact-button-primary" variant='contained'>Subscribe</Button>
        </div>
    );
  }