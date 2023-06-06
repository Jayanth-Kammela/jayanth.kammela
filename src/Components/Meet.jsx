import { Box, Button, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Meet = () => {
    return (
        <React.Fragment>
            <Box sx={{ background: '#171717', color: '#b0a6a6', padding: '2em' }}>
                <Container >
                    <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
                        <Typography variant="h3" mb={1}>
                            Let's Connect
                        </Typography>
                    </Grid>

                    <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
                        <Box margin={3}>
                            <Typography variant='body1' maxWidth={420}>
                                You can feel free to reach out via email.I'm open to discuss opportunites,collaboration, or any Frontend related inquires
                            </Typography>
                            <Link component={Button} onClick={() => window.location.href = 'mailto:chintu78299@gmail.com'} variant='contained' sx={{ margin: '1.4em', background: '#4B56D2', color: '#FFFF', paddingX: '2.2em' }}>E-mail</Link>
                        </Box>
                    </Grid>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default Meet