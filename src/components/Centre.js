import { Grid } from '@mui/material'
import React from 'react'

export default function Centre(props) {
  return (
    <Grid 
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx = {{minHeight :'100vh'}}>
            <Grid item xs = {1}>
                {props.children}
            </Grid>
    </Grid>
  )
}
