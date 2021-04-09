/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: PROGRAMMING PAGE
 * Description: Core programming knowldage
 * * */

import { CardContent, Typography } from '@material-ui/core';

const titles = ['Data Types', 'Variables', 'Statement', 'Function', 'Regular Expression'];

const ContentComponent = ({ title }) => (
    <>
        <Typography variant="h5">What is {title} in Programming?</Typography>
        <br />
        <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore est illum ipsum
            laboriosam sequi aliquam doloremque animi qui? Voluptates a, voluptas nulla consequuntur
            ut nisi esse aut ad provident voluptatibus.
        </Typography>
        <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore est illum ipsum
            laboriosam sequi aliquam doloremque animi qui? Voluptates a, voluptas nulla consequuntur
            ut nisi esse aut ad provident voluptatibus.
        </Typography>
        <br />
        <br />
        <br />
    </>
);

function ContentBody() {
    return (
        <CardContent>
            {titles.map((t) => (
                <ContentComponent title={t} />
            ))}
        </CardContent>
    );
}
export default ContentBody;
