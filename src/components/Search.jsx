// /**
//  * Date:01/04/2021
//  * Author: Muhammad Minhaj
//  * Title: SEARCH COMPONENT
//  * Description: Create Search Component
//  * * */
import { Divider, IconButton, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Search as SearchIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function CustomizedInputBase() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search In Bangla..."
                inputProps={{ 'aria-label': 'Search in bangla' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
        </div>
    );
}
