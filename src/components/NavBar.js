import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import abclogo from '../assets/group.svg';
import hrclogo from '../assets/logo.svg';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom:theme.spacing(1),
    backgroundColor:"rgba(45, 66,80,255)",
    '@media all': {
        minHeight: 68.1,
    },
}));


export default function NavBar() {
  return (
      <AppBar position="static">
        <StyledToolbar>
            <img  src={abclogo} alt="ABC Logo"/>
            <Typography
            variant="h5"
            component="div"
            align="center"
            sx={{ flexGrow: 0.87, alignSelf: 'flex-end'}}
            >
                <img src={hrclogo} alt="Highradius Logo" />
            </Typography>
        </StyledToolbar>    
      </AppBar>
  );
}
