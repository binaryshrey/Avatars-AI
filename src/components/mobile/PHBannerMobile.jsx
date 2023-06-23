import { Typography } from "@mui/material";
import React from "react";
import db from "../../data/db.json";



const PHBannerMobile = () => {
    
	return (
		<>
			<div style={{   backgroundImage: 'url(https://cdn.jsdelivr.net/gh/binaryshrey/Avatars-AI@main/static/banner.svg)', backgroundSize: 'cover', backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat', height:'1.5rem'}}>

                <div style={{alignItems:"center", display:"flex",justifyContent:"center", height:"1.5rem"}}>
                    <img alt="ph_logo" src="ph_logo.svg" height="24px"/>

                    <Typography variant="caption" component="div" style={{marginLeft:"20px",fontWeight:'500', fontSize:"10px"}}>
						Please
					</Typography>
                    <a href={db.phLink} target="_blank" rel="noreferrer" style={{  color: "#6A3A00", marginLeft:'4px','marginRight':'4px',  fontWeight: '500', fontSize:'10px'}}>
          			    support us
        		    </a>

                    <Typography variant="caption" component="div" style={{fontWeight:'500', fontSize:'10px'}}>
						on ProductHunt
					</Typography>
                
                </div>
			</div>
		</>
	);
};

export default PHBannerMobile; 