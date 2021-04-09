// /**
//  * Date:05/04/2021
//  * Author: Muhammad Minhaj
//  * Title: CARD COMPONENT
//  * Description: ...
//  * * */
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowForward as ArrowForwardIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: '0.5rem',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 200,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
}));

export default function MediaControlCard({ title, description, url, iconUrl }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} raised elevation={3}>
            <div className={classes.details}>
                <CardActionArea href={url}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {title}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {description}
                        </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                        <Button
                            href={url}
                            color="primary"
                            size="small"
                            endIcon={<ArrowForwardIcon />}
                        >
                            Learn
                        </Button>
                    </div>
                </CardActionArea>
            </div>

            <CardMedia className={classes.cover} image={iconUrl} title={title} />
        </Card>
    );
}
