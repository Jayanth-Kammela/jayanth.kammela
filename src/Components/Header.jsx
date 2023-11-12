import React from 'react';
import { Box, Container, styled, Grid, Tooltip, Typography, Zoom, Link, Button } from "@mui/material";
import { motion } from "framer-motion";
import first from './jayanth.png';

const Header = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(4),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
    }));

    return (
        <React.Fragment>
            <Box component="header" position="relative" bgcolor={'#171717'} className='for-width'>
                <Box component="nav" position="absolute" width="100%">
                    <Container maxWidth='xlg' className='px-5'>
                        <Grid container flexDirection="row" alignItems="center">
                            <Tooltip TransitionComponent={Zoom} title='Jayanth'>
                                <Typography className='cursor-pointer' variant='subtitle1' color="#b0a6a6" fontWeight="regular" py={0.8125} mr={2}>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="2em"
                                        width="2em"
                                    >
                                        <path d="M20.59 12l-3.3-3.3a1 1 0 111.42-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 01-1.42 1.4l-4-4a1 1 0 010-1.4l4-4A1 1 0 016.7 8.7L3.4 12zm7.56 8.24a1 1 0 01-1.94-.48l4-16a1 1 0 111.94.48l-4 16z" />
                                    </svg>
                                </Typography>
                            </Tooltip>
                            <Box color={'#b0a6a6'} sx={{ display: { xs: "block", lg: "block" }, ml: "auto" }} >
                                <Box href='https://www.linkedin.com/in/jayanth-kammela-293b44242' component={'a'} color={'white'} target='_blank'>
                                    <svg className="ms-2"
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        height="1.4em"
                                        width="1.4em"
                                    >
                                        <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
                                    </svg>
                                </Box>
                                <Box href='https://www.linkedin.com/in/jayanth-kammela-293b44242' component={'a'} color={'white'} target='_blank'>
                                    <svg className="ms-2"
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        height="1.4em"
                                        width="1.4em"
                                    >
                                        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                    </svg>
                                </Box>
                                <Box href='https://github.com/Jayanth-Kammela' component={'a'} color={'white'} target='_blank'>
                                    <svg className="ms-2"
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        height="1.4em"
                                        width="1.4em"
                                    >
                                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                    </svg>
                                </Box>
                            </Box>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{ backgroundColor: "#171717", minHeight: "60vh", paddingTop: '1em', marginLeft: '0.7em' }} padding={2.2}>
                    <Container>
                        <CustomBox>
                            <Box sx={{ flex: "1", mt: 16 }} marginRight={'2em'}>
                                <motion.div
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1, duration: 1 }}
                                >
                                    <Typography variant="p" color="#b0a6a6" sx={{ fontWeight: "500", mt: 100, mb: 4, fontSize: '55px' }}>Hi, I am Jayanth,</Typography>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.5, duration: 1 }}
                                >
                                    <Typography variant='p' component={'p'} className='title'>FullStack Developer</Typography>
                                    <Typography variant="p" sx={{ fontSize: "18px", color: "#5A6473" }}>Passionate about crafting seamless User Interfaces and constantly expanding Skills</Typography>
                                </motion.div>
                            </Box>
                            <Box sx={{ mt: 1, mb: 4 }}>
                                <motion.img
                                    className='rounded-pill'
                                    src={`${first}`}
                                    alt="Jay"
                                    style={{ maxWidth: "100%", marginTop: "2rem", width: 400, height: '400px' }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.2, duration: 1 }}
                                />


                            </Box>
                        </CustomBox>
                    </Container>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default Header;



