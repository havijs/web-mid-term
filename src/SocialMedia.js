import * as React from 'react';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialMedia = () => {
    return (
        <Box sx={{ justifyContent: 'center', display: 'flex'}}>
            <TwitterIcon sx={{ backgroundColor: 'black', borderRadius: '100px', padding: '10px', color: 'white', margin: '10px' }}></TwitterIcon>
            <FacebookIcon sx={{ backgroundColor: 'black', borderRadius: '100px', padding: '10px', color: 'white', margin: '10px' }}></FacebookIcon>
            <InstagramIcon sx={{ backgroundColor: 'black', borderRadius: '100px', padding: '10px', color: 'white', margin: '10px' }}></InstagramIcon>
        </Box>
    );
};

export default SocialMedia;