import { Box, Button, Input, TextField, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Typography>Subscribe</Typography>
            <Typography>Get our latest news, tips and tricks</Typography>
            <Box sx={{ marginTop: '10px'}}>
                <Input placeholder="E-Mail"></Input>
                <Button color="primary" variant="outlined" sx={{marginLeft: '10px'}}>Submit</Button>
            </Box>
        </Box>
    );
};

export default Footer;