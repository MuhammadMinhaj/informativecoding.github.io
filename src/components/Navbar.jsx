/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: WEB NAVBAR
 * Description: Website navbar
 * * */

import { AppBar, Container, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Container>
                        <img
                            src="/logos/dark.png"
                            alt="Dark"
                            style={{ width: '70px', height: '70px', padding: '0.25rem' }}
                        />
                    </Container>
                </Toolbar>
            </AppBar>
        </div>
    );
}
