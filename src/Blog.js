import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box, Grid, Typography } from "@mui/material";

const MediaCard = () => {
    return (
        <Grid xs={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://kriesi.at/themes/enfold-elegant-portfolio/wp-content/uploads/sites/77/2018/04/mockup-6-705x666.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Invitation
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Welcome my friends this is your first post edit or delete it then start blogging.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        April, 17, 2018
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

const Blog = () => {
    return (
        <Box sx={{ marginTop: '100px', marginBottom: '100px', padding: '20px' }}>
            <Typography variant="h2" sx={{ marginBottom: '50px' }}>Blog – Here you can read the latest news regarding our projects and clients</Typography>
            <Grid container spacing={2}>
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
            </Grid>
        </Box>);
}

export default Blog;