import React from 'react';

import Typography from 'material-ui/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import '../css/footer.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
    },
});

const Footer = () =>
    <div className='footer'>
        <MuiThemeProvider theme={theme}>
            <Typography variant='body2' color="primary">
                Дмитрий Гайдук 2018
        </Typography>
        </MuiThemeProvider>
    </div>;


export default Footer;