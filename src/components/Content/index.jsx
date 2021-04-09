/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: PROGRAMMING PAGE
 * Description: Core programming knowldage
 * * */

import { Card, Grid } from '@material-ui/core';
import commonComponents from '../common';
import ContentBody from './ContentBody';
import ContentFooter from './ContentFooter';
import ContentHead from './ContentHead';
import Topics from './TopicsList';

const { Margin } = commonComponents;

function Content({ contentHead }) {
    return (
        <>
            <ContentHead {...contentHead} />
            <br />
            <br />

            <Grid container>
                <Grid item sm={3}>
                    <Card>
                        <Topics />
                    </Card>
                </Grid>
                <Grid item sm={9}>
                    <Card style={{ marginLeft: '1rem' }}>
                        <ContentBody />
                        <ContentFooter />
                    </Card>
                </Grid>
            </Grid>
            <Margin />
        </>
    );
}
export default Content;
