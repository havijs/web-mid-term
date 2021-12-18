import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const NavbarButton = (props) => {
    return (<Button
        onClick={props.onClick}
        sx={{
            margin: 0,
            color: props.selected ? 'black': 'white',
            backgroundColor: props.selected ? 'white' : 'black'
        }}>{props.children}</Button>);
}

const Navbar = (props) => {
    const {selectedButton, setSelectedButton}= props;
    const handleHomeOnClick = () => {
        setSelectedButton(1);
    };
    const handleAboutOnClick = () => {
        setSelectedButton(2);
    };
    const handleBlogOnClick = () => {
        setSelectedButton(3);
    };
    const handleContentOnClick = () => {
        setSelectedButton(4);
    };
    return (
        <AppBar position="static">
            <Container maxWidth="xl" sx={{ backgroundColor: 'black' }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography>Enfold</Typography>
                    <Box>
                        <NavbarButton id='1' selected={ selectedButton == 1} onClick={handleHomeOnClick} >Home</NavbarButton>
                        <NavbarButton id='2' selected={ selectedButton == 2} onClick={handleAboutOnClick} >About</NavbarButton>
                        <NavbarButton id='3' selected={ selectedButton == 3} onClick={handleBlogOnClick} >Blog</NavbarButton>
                        <NavbarButton id='4' selected={ selectedButton == 4} onClick={handleContentOnClick} >Contact</NavbarButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;