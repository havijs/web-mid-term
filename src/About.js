import { Box, Grid, Typography } from "@mui/material";

const About = () => {
    return (
        <Box sx={{ marginTop: '100px', padding: '20px'}}>
            <Typography variant="h2">A little bit about me and how I became the designer I am today</Typography>
            <Grid spacing={1    } container sx={{marginTop: '50px'}}>
                <Grid xs={6}>
                    <Typography variant="h4">What I can do for you</Typography>
                    <Typography variant="p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography variant="h4">How I usually work</Typography>
                    <Typography variant="p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography variant="h4">Skills</Typography>
                    <Typography variant="p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</Typography>
                </Grid>
            </Grid>
        </Box>);
};

export default About;