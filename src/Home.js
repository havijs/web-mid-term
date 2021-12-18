import { Box, Button, Container, Grid, Typography } from "@mui/material";
import SocialMedia from './SocialMedia';

const Card = () => {
    return (
        <Grid xs={4} md={3} >
            <Button sx={{ margin: '5px', flexGrow: 1    , width: '100%'}}>
                <img style={{ width: '100%'}} src="https://kriesi.at/themes/enfold-elegant-portfolio/wp-content/uploads/sites/77/2018/04/logo-8-705x666.jpg"></img>
            </Button>
        </Grid>
    );
};

const Home = () => {
    return (
        <Container sx={{ marginTop: '100px', padding: '20px', fontWeight: 'bold'}}>
            <Box>
                <Typography variant="h2" component="h2">
                    Hi! I am Max and this is my portfolio. I can help you build a thriving business. Don't be shy, get in touch!
                </Typography>
            </Box>
            <Grid container spacing={2} sx={{ marginTop: '50px'}}>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </Grid>
        </Container>
    );
};

export default Home;