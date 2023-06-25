import { Typography } from "@mui/material";
import React from "react";
import db from "../../data/db.json";



const PHBannerMobile = () => {
    
	return (
		<>
			<div style={{   backgroundImage: 'url(https://cdn.jsdelivr.net/gh/binaryshrey/Avatars-AI@main/static/banner.svg)', backgroundSize: 'cover', backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat', height:'1.8rem'}}>

                <div style={{alignItems:"center", display:"flex",justifyContent:"center", height:"1.8rem"}}>
                    <img alt="ph_logo" src="ph_logo.svg" height="30px"/>

                    <Typography variant="caption" component="div" style={{marginLeft:"16px",fontWeight:'500', fontSize:"11px"}}>
						Please
					</Typography>
                    <a href={db.phLink} target="_blank" rel="noreferrer" style={{  color: "#6A3A00", marginLeft:'4px','marginRight':'4px',  fontWeight: '500', fontSize:'11px'}}>
          			    support us
        		    </a>

                    <Typography variant="caption" component="div" style={{fontWeight:'500', fontSize:'11px'}}>
						on ProductHunt!
					</Typography>
                
                </div>
			</div>
		</>
	);
};

export default PHBannerMobile; 