
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


import "./SwapPage.scss";

export default function SwapPage() {
    return (
        <div className='swap' id='swap'>
            <div className="swap__title heading-primary--sub">Stay tuned for our next release - it's so hot, it's been known to melt servers!</div>
            <div className="swap__title heading-primary--sub">Want to keep up with our shenanigans? Follow our progress and witness the magic unfold!</div>
            <Button className="subscribe__button contact-button-white" href="/#subscribe" variant='contained'>Subscribe</Button>
        </div>
    );
  }