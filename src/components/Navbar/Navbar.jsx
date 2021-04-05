/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: WEB NAVBAR
 * Description: Website navbar
 * * */

import {
    AppBar,
    Backdrop,
    Box,
    Container,
    Dialog,
    Drawer,
    Grid,
    IconButton,
    Toolbar,
    useMediaQuery,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Close as CloseIcon, Menu as MenuIcon, Search as SearchIcon } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import actionMethods from '../../../redux/actions/app';
import Logo from '../Logo';
import CustomSearch from '../Search';
import DropDown from './DropDown';
import style from './style.module.css';
import TabBar from './TabBar';

const { handleDropDown, handleClickMobileMenu } = actionMethods;
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        height: '100%',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const MobileView = () => {
    const { isOpenMobileMenu, isOpenMenu } = useSelector((state) => state).app;

    const dispatch = useDispatch();
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center">
                <Logo width="70px" height="70px" />
            </Box>
            <Box display="flex">
                <CustomSearch />
                <IconButton onClick={() => dispatch(handleClickMobileMenu())}>
                    <MenuIcon />
                </IconButton>
            </Box>
            <Drawer
                anchor="right"
                zIndex="1000"
                open={isOpenMobileMenu}
                onClose={() => dispatch(handleClickMobileMenu())}
            >
                <TabBar orientation="vertical" />
            </Drawer>
            <Dialog open={isOpenMenu} fullScreen>
                <AppBar position="static" color="default">
                    <Box display="flex" justifyContent="flex-start">
                        <IconButton onClick={() => dispatch(handleDropDown())}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </AppBar>

                <DropDown />
            </Dialog>
        </Box>
    );
};

const DesktopView = () => {
    const matches = useMediaQuery('(max-width:600px)');

    return (
        <Grid container>
            <Grid item sm={1}>
                <Logo width="70px" height="70px" />
            </Grid>
            <Grid item sm={10}>
                {!matches && (
                    <div className={style.navbar}>
                        <TabBar />
                        <DropDown />
                    </div>
                )}
            </Grid>
            <Grid item sm={1}>
                <Box
                    component="div"
                    height="100%"
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Box>
            </Grid>
        </Grid>
    );
};

export default function ButtonAppBar() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const { isOpenMenu } = useSelector((state) => state.app);
    const dispatch = useDispatch();

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Container>{isMobile ? <MobileView /> : <DesktopView />}</Container>
                </Toolbar>
            </AppBar>

            {!isMobile && <Backdrop onClick={() => dispatch(handleDropDown())} open={isOpenMenu} />}
        </div>
    );
}
