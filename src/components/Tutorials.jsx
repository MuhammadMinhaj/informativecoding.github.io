// /**
//  * Date:05/04/2021
//  * Author: Muhammad Minhaj
//  * Title: SLIDE SHOW
//  * Description: Web Static Slide
//  * * */
import { Button, Grid, Typography } from '@material-ui/core';
import { ExpandMore as MoreIcon } from '@material-ui/icons';
import Card from './Card';

const initDescription = 'Learn to code with our beginner-friendly tutorials and examples...';

const tutorialsData = [
    {
        title: 'Javascript',
        description: initDescription,
        url: '/tutorials/javascript',
        iconUrl: '/icons/js.png',
    },
    {
        title: 'Python',
        description: initDescription,
        url: '/tutorials/javascript',
        iconUrl: '/icons/py.png',
    },
    {
        title: 'C',
        description: initDescription,
        url: '/tutorials/javascript',
        iconUrl: '/icons/c.png',
    },
    {
        title: 'C++',
        description: initDescription,
        url: '/tutorials/javascript',
        iconUrl: '/icons/c++.png',
    },
    {
        title: 'Java',
        description: initDescription,
        url: '/tutorials/javascript',
        iconUrl: '/icons/java.png',
    },
    {
        title: 'Typescript',
        description: initDescription,
        url: '/tutorials/javascript',
        iconUrl: '/icons/ts.png',
    },
];

function Tutorials() {
    return (
        <div>
            <Typography variant="h4" color="primary" align="center">
                Languages
            </Typography>
            <br />

            <Grid container>
                {tutorialsData.map(({ title, description, url, iconUrl }) => (
                    <Grid item sm={6} md={4} style={{ width: '100%' }}>
                        <Card title={title} description={description} url={url} iconUrl={iconUrl} />
                    </Grid>
                ))}
            </Grid>
            <br />

            <Button
                variant="outlined"
                color="primary"
                size="large"
                endIcon={<MoreIcon />}
                style={{ marginLeft: '0.5rem' }}
            >
                Get More
            </Button>
        </div>
    );
}

export default Tutorials;
