import React from "react";
import "../styles/global.css"
import db from "../data/db.json";
import Box from "@mui/material/Box";
import { Icon } from "@mui/material";
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Waitlist from "./Waitlist";
import { keyframes } from '@mui/system'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const animated_text = keyframes`
	0% {
        background-position: 0% 50%;}
    100% {
        background-position: 100% 50%;
    }`
 

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius:'1rem',
  boxShadow: 24,
  p: 4,
};

const Header = () => {

	const [open, setOpen] = React.useState(false);
  	const handleOpen = () => setOpen(true);
  	const handleClose = () => setOpen(false);

	const downloadIcon = (
		<Icon sx={{ width: "100%", height: "100%", marginTop: "8x" }}>
			<img alt="play_store" src="play_store.svg" height={40} width={24}/>
		</Icon>
	);

	const AppStoreIcon = (
		<Icon sx={{ width: "100%", height: "100%", marginTop: "8px", paddingTop:"4px", paddingBottom:"4px"}}>
			<img alt="app_store" src="apple.svg" height={24} width={24}/>
		</Icon>
	);


	return ( 
		<>
			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<Box sx={{ width: "60vw", height: "80vh", marginLeft: "6rem" }} >

					<Typography variant="h2" component="div" sx={{ flexGrow: 1, marginTop: "4rem", fontWeight: "500" ,
						backgroundImage: `linear-gradient(to left, #ed8936, #ed64a6)`,
						WebkitBackgroundClip: "text",
						BackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						TextFillColor: "transparent",
						backgroundSize:'500% auto',
						animation: `${animated_text} 1.5s ease-in-out infinite alternate;`
					}}>
						{db.appName}
					</Typography>
					
					<Typography variant="h6" component="div" sx={{ flexGrow: 1, marginTop: "1rem", opacity: "0.5" }} >
						{db.description}
					</Typography>
					<Typography variant="caption" component="div" sx={{ flexGrow: 1, opacity: "0.5" }} >
						{db.descriptionNext}
					</Typography>

					<div style={{display:'flex', justifyContent:'start', marginTop:'2rem'}}>
						<div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
							<AvatarGroup max={5}>
								<Avatar alt="Remy" src="1.webp" sx={{ width: 36, height: 36 }} />
								<Avatar alt="Travis" src="2.webp" sx={{ width: 36, height: 36 }}/>
								<Avatar alt="Cindy" src="3.webp" sx={{ width: 36, height: 36 }}/>
								<Avatar alt="Walker" src="4.webp" sx={{ width: 36, height: 36 }}/>
								<Avatar alt="Alice" src="5.webp" sx={{ width: 36, height: 36 }} />
							</AvatarGroup>
							<div style={{marginLeft:'1rem'}}>
								<div style={{display:'flex'}}>
									<div data-sal="fade" data-sal-delay="100" data-sal-easing="ease"><img alt="star" src="star.svg" /></div>
									<div data-sal="fade" data-sal-delay="200" data-sal-easing="ease"><img alt="star" src="star.svg" /></div>
									<div data-sal="fade" data-sal-delay="300" data-sal-easing="ease"><img alt="star" src="star.svg" /></div>
									<div data-sal="fade" data-sal-delay="400" data-sal-easing="ease"><img alt="star" src="star.svg" /></div>
									<div data-sal="fade" data-sal-delay="500" data-sal-easing="ease"><img alt="star" src="star.svg" /></div>
								</div>
								<Typography variant="caption" component="div" sx={{ flexGrow: 1, opacity: "0.5" , marginLeft:'0.1rem'}} >
									Loved by 2000+ users
								</Typography>
							</div>
						</div>
						
					</div>


					<a href={db.appLink} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#000000"}}>
          				<Button sx={{ textTransform: "none", fontFamily: `"Helvetica Neue", "Roboto", "sans-serif"`, marginTop: "10rem", background: "#FFFFFF",
							":hover": { bgcolor: "#FFFFFF", color: "#000000",boxShadow:"rgba(255, 255, 255, 0.008) 0px 0.711888px 3.55944px 0px, rgba(255, 255, 255, 0.02) 0px 1.93769px 9.68843px 0px, rgba(255,255, 255, 0.043) 0px 4.25286px 21.2643px 0px, rgba(255, 255, 255,0.094) 0px 9.43828px 47.1914px 0px, rgba(255, 255, 255, 0.24) 0px 24px 120px 0px, rgba(255, 255, 255, 0.24) 0px 24px 400px 0px;"},
							borderRadius: "50px", paddingRight: "24px", paddingLeft: "32px", boxShadow: "rgba(255, 255, 255, 0.21) 0px 0.755195px 3.77597px -0.75px, rgba(255, 255, 255, 0.204) 0px 1.93034px 9.65168px -1.5px, rgba(255, 255, 255, 0.192) 0px 3.86188px 19.3094px -2.25px, rgba(255, 255, 255, 0.173) 0px 7.32867px 36.6434px -3px, rgba(255, 255, 255, 0.13) 0px 14.554px 72.77px -3.75px, rgba(255, 255, 255, 0.024) 0px 32px 160px -4.5px, rgba(255, 255, 255, 0.16) 0px 16px 180px 0px",}}
							variant="contained" startIcon={downloadIcon}>
								Download Now
						</Button>
        			</a>
          			<Button variant="outlined" sx={{ textTransform: "none", fontFamily: `"Helvetica Neue", "Roboto", "sans-serif"`, marginTop: "10rem", marginLeft:'3rem',
						borderRadius: "50px", paddingRight: "24px", paddingLeft: "32px"}} color="secondary"
						startIcon={AppStoreIcon} onClick={handleOpen}>
							&nbsp;&nbsp; Join Waitlist
					</Button>
					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
					<Box sx={modalStyle}> 
						<Waitlist handleClose={handleClose}/>
					</Box>
				</Modal>
				</Box>
				<Box sx={{ width: "300px", height: "640px", marginRight: "6rem", display: "flex", justifyContent: "flex-end",marginTop: "-5rem" }}>
					<img alt="play_store" src="header.svg" height="100%"  />
				</Box>
			</Box>
		</>
	);
};

export default Header;
