import { Box, Typography } from '@mui/material'
import React from 'react'
import veggiapp from "../assets/veggiapp.png";
import parking from "../assets/parking.png";
import HM from "../assets/HM.png";

const Project = () => {

    function LinkIcon() {
        return <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
        >
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
        </svg>
    }
    return (
        <React.Fragment>
            <section className='skill-card'>

                <div className="container p-2">
                    <Typography variant='p' component={'h2'} sx={{ color: '#FFFF', mb: 4 }}>Projects:</Typography>
                    <Box className='row' component={'div'} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="projectcard col-lg-3 col-md-5 col-sm-7 col-11 text-center">
                            <img src={HM} alt="" className="veggiapp" />
                            <Typography variant="p" component={'h5'} sx={{ color: '#FFFF', mt: 1 }}>
                                HM Web-App
                            </Typography>
                            <Box component={'a'} href={'https://healthmudraa.com/'} target='_blank' className="hover-svg">
                               <LinkIcon/>
                            </Box>
                        </div>

                        <div className="projectcard col-lg-3 col-md-5 col-sm-7 col-11 text-center">
                            <img src={veggiapp} alt="" className='veggiapp' />
                            <Typography variant='p' component={'h5'} sx={{ color: '#FFFF', mt: 1 }}>Veggi App</Typography>
                            <Box component={'a'} href={'https://github.com/Jayanth-Kammela/veggi-app'} target='_blank' className="hover-svg">
                               <LinkIcon/>
                            </Box>
                        </div>

                        <div className="projectcard col-lg-3 col-md-5 col-sm-7 col-11 text-center">
                            <img src={parking} alt="" className='veggiapp' />
                            <Typography variant='p' component={'h5'} sx={{ color: '#FFFF', mt: 1 }}>Parking Web-App</Typography>
                            <Box component={'a'} href={'https://github.com/Jayanth-Kammela/car-parking-mern'} target='_blank' className="hover-svg" >
                               <LinkIcon/>
                            </Box>
                        </div>

                    </Box>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Project