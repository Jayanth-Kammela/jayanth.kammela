import { Box, Typography } from '@mui/material'
import React from 'react'

const SkillCard = () => {
  return (
    <React.Fragment>
      <section className='skill-card'>
        <div className="container p-2">
          <Typography variant='p' component={'h2'} sx={{ color: '#FFFF', mb: 2 }}>Skills:</Typography>
          <Box className='row' component={'div'} sx={{ display: 'flex', justifyContent: 'center' }}>

            <div className="cardx col-lg-3 col-md-5 col-sm-7 col-10">
              <Typography component={'p'} sx={{ color: '#FFFF', mb: 2 }}>Frontend</Typography>
              <span className="html">HTML</span>
              <span className="html">CSS</span>
              <div style={{ margin: '20px 0px' }}>
                <span className="html">Bootstrap</span>
              </div>
              <div style={{ margin: '20px 0px' }}>
                <span className="html">JavaScript</span>
              </div>
              <div style={{ margin: '20px 0px' }}>
                <span className="html">React (Js & Ts)</span>
              </div>
              <div style={{ margin: '20px 0px' }}>
                <span className="html">React Native</span>
              </div>
            </div>

            <div className="cardx col-lg-3 col-md-5 col-sm-7 col-10">
              <Typography component={'p'} sx={{ color: '#FFFF', mb: 2 }}>Backend</Typography>
              <div style={{ margin: '20px 0px' }}>
                <span className="html">Express</span>
                <span className="html">Mongodb</span>
              </div>
            </div>

            <div className="cardx col-lg-3 col-md-5 col-sm-7 col-10">
              <Typography component={'p'} sx={{ color: '#FFFF', mb: 2 }}>Others</Typography>
              <div style={{ margin: '20px 0px' }}>
                <span className="html">Git</span>
              </div>
            </div>

          </Box>
        </div>
      </section>
    </React.Fragment>
  )
}

export default SkillCard