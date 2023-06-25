import { Typography } from "@mui/material";
import React from "react";
import db from "../data/db.json";



const PHBanner = () => {
    
	return (
		<>
			<div style={{   backgroundImage: 'url(https://cdn.jsdelivr.net/gh/binaryshrey/Avatars-AI@main/static/banner.svg)', backgroundSize: 'cover', backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat', height:'2.5rem'}}>

                <div style={{alignItems:"center", display:"flex",justifyContent:"center", height:"2.5rem"}}>
                    <img alt="ph_logo" src="ph_logo.svg" height="44px"/>
                    <Typography variant="subtitle1" component="div" style={{marginLeft:"20px",fontWeight:'500'}}>
						Please
					</Typography>
                    <a href={db.phLink} target="_blank" rel="noreferrer" style={{  color: "#6A3A00", marginLeft:'4px','marginRight':'4px',  fontWeight: '500'}}>
          			    support us
        		    </a>

                    <Typography variant="subtitle1" component="div" style={{fontWeight:'500'}}>
						on ProductHunt!
					</Typography>
                
                </div>
			</div>

            <div style={{alignItems:"center", display:"flex",justifyContent:"center", marginTop:'5rem'}}>
                <a href="https://www.producthunt.com/posts/avatars-ai?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-avatars&#0045;ai" target="_blank" rel="noreferrer">
                    <img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=401032&theme=dark&period=daily" alt="Avatars&#0032;AI - Personalised&#0032;AI&#0032;chat&#0032;companion&#0032;&#0045;&#0032;powered&#0032;by&#0032;GPT&#0045;4&#0032;&#0038;&#0032;Bard&#0032;AI | Product Hunt" style={{width: "250px", height: "54px"}} width="250" height="54" />
                </a>
            </div>
		</>
	);
};

export default PHBanner; 