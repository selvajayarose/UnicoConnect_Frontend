import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "#df495b",
        padding: theme.spacing(2),
        color: "#fff",
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div>
            <footer className={classes.footer}>
                <Typography variant="subtitle1" align="left" component="p">
                    &copy; 2020 Stay Vista Pvt. Ltd. All rights reserved
                </Typography>
            </footer>
        </div>
    )
}

export default Footer;