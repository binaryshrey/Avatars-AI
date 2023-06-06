import React from "react";
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { Button } from "@mui/material";
import { keyframes } from '@mui/system'

const animated_text = keyframes`
	0% {
        background-position: 0% 50%;}
    100% {
        background-position: 100% 50%;
    }`


const Waitlist = ({handleClose}) => {
	return (
		<div>
			<Typography variant="body2" component="div" sx={{ textAlign:'center' }} >
				🟢 &nbsp; Get Notified.
			</Typography>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginTop: "3rem", fontWeight: "500" , textAlign:'center',
				backgroundImage: `linear-gradient(to left, #674ea7, #45818e)`,
				WebkitBackgroundClip: "text",
				BackgroundClip: "text",
        		WebkitTextFillColor: "transparent",
				TextFillColor: "transparent",
				backgroundSize:'500% auto',
				animation: `${animated_text} 1.5s ease-in-out infinite alternate;`
			}}>
				Interested in iOS app?
			</Typography>
            <Typography variant="caption" component="div" sx={{ textAlign:'center' , marginTop:'3rem'}} >
				Get an email notification as soon as
			</Typography>
             <Typography variant="caption" component="div" sx={{ textAlign:'center' }} >
                Avatars AI is available on the App-Store!
			</Typography>
            <Typography variant="h4" component="div" sx={{ textAlign:'center' , marginTop:'3rem'}} >
				Priority access

			</Typography>


            <Typography variant="caption" component="div" sx={{ textAlign:'center' }} >
                Join the waiting queue to be the first to get an early access
			</Typography>
        

            <div style={{textAlign:'center', margin:'3rem'}}>
                <a href="https://forms.fillout.com/t/qD4BtaAp1Rus" target="_blank" rel="noopener noreferrer" style={{textDecoration : "none"}}>
                    <Paper
                        component="form"
                        sx={{ p: '4px', display: 'flex', justifyContent:"space-evenly" , textAlign:'center'}}>
                    
                        <InputBase
                            sx={{ ml: 1, mr:1, flex: 1 }}
                            placeholder="Your email here"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        /> 
                        <Button sx={{background:"#000", color:'#b4a7d6'}} onClick={handleClose}>Notify Me</Button>    
                    </Paper>
                </a>
            </div>

            <Typography variant="caption" component="div" sx={{ textAlign:'center', opacity:0.4 }} >
                PS: don't forget to check your inbox. 
			</Typography>
            <Typography variant="caption" component="div" sx={{ textAlign:'center', opacity:0.4  }} >
                You will get a verification email right after clicking on this button.
			</Typography>
		</div>
	);
};

export default Waitlist;
