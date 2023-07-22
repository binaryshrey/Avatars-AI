import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const AccountDeletionRedirect = () => {

    const [countdown, setCountdown] = React.useState(5);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        if (countdown === 0) {
            clearInterval(timer);
            window.location.href = 'https://forms.fillout.com/t/arM1wRrzpHus';
        }
   
        return () => clearInterval(timer);
    }, [countdown]);


	return (
        <div style={{ display:'flex',overflow:'hidden', flexDirection:'column'}}>
            <div style={{flex: 1, overflowY:'scroll'}}>
                <Box sx={{  marginTop:"8rem", display:'flex',justifyContent:'center'}} >
                    <Typography variant="h6" component="div" >
                        Avatars AI
                    </Typography>
                </Box>
                <Box sx={{  marginTop:"4rem", display:'flex',justifyContent:'center'}} >
                    <Typography variant="h6" component="div" >
                        Adherence to Google Play's Data Safety Policy 🔖
                    </Typography>
                </Box>
                <Box sx={{  marginTop:"10rem", display:'flex',justifyContent:'center'}} >
                    <Typography variant="body2" component="div" sx={{marginTop:'2rem'}}>
                        Redirecting in {countdown}
                    </Typography>
                </Box>
            </div>
        </div>
    )
};

export default AccountDeletionRedirect;
