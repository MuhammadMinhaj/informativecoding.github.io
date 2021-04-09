/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: WEB FOOTTER
 * Description: Web footer section
 * * */
import { Container, Divider, Grid, Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import CustomList from './List';
import Social from './Social';

function GapDiv({ children }) {
    return <div style={{ padding: '2rem' }}>{children}</div>;
}
const languages = [
    {
        name: 'Javascript',
        url: '/javascript',
    },
    {
        name: 'Python',
        url: '/python',
    },
    {
        name: 'C',
        url: '/c',
    },
    {
        name: 'C++',
        url: '/c',
    },
    {
        name: 'Typescript',
        url: '/typescript',
    },
];
const resources = [
    {
        name: 'Programming',
        url: '/programming',
    },
    {
        name: 'Data Structures',
        url: '/datastructures',
    },
    {
        name: 'Algorithms',
        url: '/algorithms',
    },
    {
        name: 'Technologies',
        url: '/technologies',
    },
    {
        name: 'Random',
        url: '/random',
    },
];
const organization = [
    {
        name: 'About',
        url: '/about',
    },
    {
        name: 'Contribution',
        url: '/contribution',
    },
    {
        name: 'Privacy Policy',
        url: '/privacy-policy',
    },
    {
        name: 'Terms & Conditions',
        url: '/terms-conditions',
    },
    {
        name: 'Youtube',
        url: '/youtube',
    },
];
function Footer() {
    return (
        <footer style={{ background: '#f5f5f5' }}>
            <Container>
                <Grid container>
                    <Grid item sm={3}>
                        <GapDiv>
                            <Typography variant="h5">Languages</Typography>
                            <CustomList lists={languages} icon={<FiberManualRecordIcon />} />
                        </GapDiv>
                    </Grid>
                    <Grid item sm={3}>
                        <GapDiv>
                            <Typography variant="h5">Resources</Typography>
                            <CustomList lists={resources} icon={<TrendingFlatIcon />} />
                        </GapDiv>
                    </Grid>
                    <Grid item sm={3}>
                        <GapDiv>
                            <Typography variant="h5">Organization</Typography>
                            <CustomList lists={organization} icon={<FiberManualRecordIcon />} />
                        </GapDiv>
                    </Grid>
                    <Grid item sm={3}>
                        <GapDiv>
                            <Typography variant="h5">About</Typography>
                            <br />

                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                                maxime nam explicabo aliquid, laborum numquam dolores harum nisi
                                dolorem in?
                            </Typography>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                                maxime nam explicabo aliquid, laborum numquam dolores harum nisi
                                dolorem in?
                            </Typography>
                        </GapDiv>
                    </Grid>
                </Grid>
                <Divider />
                <div
                    style={{
                        padding: '0.5rem 0rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="button">Copyright All Reserved</Typography>
                    <Social />
                </div>
            </Container>
        </footer>
    );
}
export default Footer;
