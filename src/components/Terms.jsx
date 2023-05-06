import React from "react";
import db from "../data/db.json";
import Typography from "@mui/material/Typography";



const Terms = () => {
    return(
            <>
                <Typography variant="h5" component="div" sx={{fontWeight:'550'}}>
                    Terms of Service
                </Typography>
                <Typography variant="body2" component="div" sx={{marginTop:'1rem', opacity:"0.6"}}>
                    Updated: Apr 15, 2023
                </Typography>
                <Typography variant="body2" component="div" sx={{marginTop:'1rem', opacity:"0.6"}}>
                    These Terms of Service ("Terms") govern your access and use of website (located under avatars-ai.chat domain) and mobile app - AVATARS AI (both the "Service"). By accessing or using the Service you are indicating your acceptance to be bound by these Terms. If you do not accept these Terms, you must not access or use the Service. IF YOU ARE DISSATISFIED WITH THESE TERMS OR ANY RULES, POLICIES, GUIDELINES OR PRACTICES APPLICABLE TO the Service, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USE OF the Service. We may revise these Terms at any time by updating this posting. Use of the Service after such revisions are posted will signify your agreement to the revised Terms. You should visit this page periodically to review these Terms and any revisions.
                    <br/><br/>
                    By downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You’re not allowed to copy or modify the app, any part of the app, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the app, and you also shouldn’t try to translate the app into other languages or make derivative versions. The app itself, and all the trademarks, copyright, database rights, and other intellectual property rights related to it, still belong to Zén Studio.

                    Zén Studio is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you’re paying for.

                    The AVATARS AI app stores and processes personal data that you have provided to us, to provide our Service. It’s your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the AVATARS AI app won’t work properly or at all.
                    <br/><br/>
                    The app does use third-party services that declare their Terms and Conditions.
                    <br/>
                    Link to Terms and Conditions of third-party service providers used by the app
                    <ul>
                        <li><a href="https://adapty.io/terms/" target="_blank" rel="noreferrer" style={{textDecoration:"None", color:"white"}}>Adapty</a></li>
                        <li><a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" style={{textDecoration:"None", color:"white"}}>Google Play Services</a></li>
                        <li><a href="https://firebase.google.com/terms/analytics" target="_blank" rel="noreferrer" style={{textDecoration:"None", color:"white"}}>Google Analytics for Firebase</a></li>

                    </ul>
                    <br/>
                    You should be aware that there are certain things that Zén Studio will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi or provided by your mobile network provider, but Zén Studio cannot take responsibility for the app not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data allowance left.

                    If you’re using the app outside of an area with Wi-Fi, you should remember that the terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third-party charges. In using the app, you’re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you’re using the app, please be aware that we assume that you have received permission from the bill payer for using the app.

                    Along the same lines, Zén Studio cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, Zén Studio cannot accept responsibility.

                    <br/><br/>
                    With respect to Zén Studio’s responsibility for your use of the app, when you’re using the app, it’s important to bear in mind that although we endeavor to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. Zén Studio accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.

                    At some point, we may wish to update the app. The app is currently available on Android – the requirements for the system(and for any additional systems we decide to extend the availability of the app to) may change, and you’ll need to download the updates if you want to keep using the app. Zén Studio does not promise that it will always update the app so that it is relevant to you and/or works with the Android version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device.

                    </Typography>

                <Typography variant="body2" component="div" sx={{marginTop:'1rem'}}>
                    <br/><br/>Fair Usage Policy
                </Typography>
                <Typography variant="body2" component="div" sx={{ opacity:"0.6"}}>
                    With our free plan, each user who sign ups for the service, receives 10 FREE prompts which can be used free of cost.
                    <br/>Our service also provides in-app subscriptions which are of weekly, monthly and limetime tenure called AVATARS AI-PRO. All PRO features are unlocked when a user purchases the AVATARS AI-PRO membership and the features stay unlocked as long as the subscription is active.
                    
                    For providing a better experience, we have few enforcements in place that's part of our Fair Usage Policy. Although you can generate unlimited words on the PRO plan, we don't allow multiple users sharing the same account and generation limits (200 req/day for any user) are there to deter automated/robotic behavior and prevent our API abuse. Our AI engine also restricts certain kinds of use cases/usage behavior and automatically adjusts some parameters temporarily depending on the abnormal, heavy usage pattern in a short time span. You might notice a deterioration in the quality of the output when such activity is detected by the system.
                    Hence, to prevent API abuse we restrict users with 20req/day while using our service. If we notice any abnormal behavior or an attempt to voilate our Fair Usage Policy, we may temporarily put your account in an inactive stage during which you may not be able to use our service or may permanently ban you from using our service. By subscribing to our PRO plan, you agree to follow the Fair Usage Policy as mentioned while subscribing to the PRO plan. 
                </Typography>


                <Typography variant="body2" component="div" sx={{marginTop:'1rem'}}>
                    <br/><br/>Changes to This Terms and Conditions

                </Typography>
                <Typography variant="body2" component="div" sx={{ opacity:"0.6"}}>
                    We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.
                    These terms and conditions are effective as of 2023-03-20.
                </Typography>



                <Typography variant="body2" component="div" sx={{marginTop:'1rem'}}>
                    <br/><br/>Contact Us
                </Typography>
                <Typography variant="body2" component="div" sx={{ opacity:"0.6"}}>
                    If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at  

                <a href={db.contact}target="_blank" rel="noreferrer" style={{textDecoration:"None", color:"white"}}> avatars.ai.chat@gmail.com</a>
                . This privacy policy page was created at 
                    <a href="https://app-privacy-policy-generator.nisrulz.com/" target="_blank" rel="noreferrer" style={{textDecoration:"None", color:"white"}}> App Privacy Policy Generator</a>
                
                </Typography>

            </>
    )
}

export default Terms