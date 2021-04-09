import {
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    ExpandLess as ExpandLessIcon,
    ExpandMore as ExpandMoreIcon,
    FiberManualRecord as FiberManualRecordIcon,
    TrendingFlat as TrendingFlatIcon,
} from '@material-ui/icons';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

function CustomListItem({ title }) {
    const classes = useStyles();
    return (
        <ListItem button className={classes.nested}>
            <ListItemIcon>
                <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary={title} />
        </ListItem>
    );
}

function CollapseListItem({ title, subList }) {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <TrendingFlatIcon />
                </ListItemIcon>
                <ListItemText primary={title} />
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Divider />

            <Collapse in={open}>
                {!subList || subList.length === 0 ? (
                    <CustomListItem title="..." />
                ) : (
                    subList.map(({ ...args }) => <CustomListItem {...args} />)
                )}
            </Collapse>
        </>
    );
}
const copyFor = [
    {
        title: 'Introduction',
        subList: [{ title: 'Get Started' }, { title: 'Data Types' }, { title: 'Examples' }],
    },
    {
        title: 'Variables',
        subList: [{ title: 'What is variable?' }, { title: 'Examples' }],
    },
    {
        title: 'Data Types',
        subList: [{ title: 'Primitive Data' }, { title: 'Complex Data' }],
    },
    {
        title: 'Statement',
        subList: [
            { title: 'if' },
            { title: 'if...else' },
            { title: 'else...if' },
            { title: 'Examples' },
        ],
    },
];
const ContentListObject = [
    {
        title: 'Introduction',
        subList: [{ title: 'Get Started' }, { title: 'Data Types' }, { title: 'Examples' }],
    },
    {
        title: 'Variables',
        subList: [{ title: 'What is variable?' }, { title: 'Examples' }],
    },
    {
        title: 'Data Types',
        subList: [{ title: 'Primitive Data' }, { title: 'Complex Data' }],
    },
    {
        title: 'Statement',
        subList: [
            { title: 'if' },
            { title: 'if...else' },
            { title: 'else...if' },
            { title: 'Examples' },
        ],
    },
    ...copyFor,
    ...copyFor,
];
function TopicLists() {
    const classes = useStyles();

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    <Typography variant="button">Programming Made Easy</Typography>
                </ListSubheader>
            }
            className={classes.root}
        >
            <Divider />
            {ContentListObject.map(({ ...args }) => (
                <CollapseListItem {...args} />
            ))}
        </List>
    );
}
export default TopicLists;
