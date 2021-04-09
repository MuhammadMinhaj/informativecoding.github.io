/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: PROGRAMMING PAGE
 * Description: Core programming knowldage
 * * */

import { Box, Typography } from '@material-ui/core';
import Social from '../Social';

function ContentHead({ title, description, imgPath, Icon }) {
    return (
        <Box
            component="div"
            display="flex"
            style={{
                padding: '2rem',
                marginTop: '1rem',
                background: '#f5f5f5',
                borderRadius: '0.5rem',
            }}
        >
            <div style={{ maxWidth: '150px', marginRight: '1.5rem' }}>
                {imgPath && (
                    <img
                        src={imgPath}
                        style={{
                            boxShadow:
                                '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                            borderRadius: '1rem',
                            padding: '0.25rem',
                        }}
                        width="100%"
                        height="auto"
                        alt="Javascript"
                    />
                )}
                {Icon && (
                    <Icon
                        style={{
                            maxWidth: '130px',
                            width: '100%',
                            height: 'auto',
                            boxShadow:
                                '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                            borderRadius: '1rem',
                            padding: '0.25rem',
                            color: '#293742',
                        }}
                    />
                )}
            </div>
            <div>
                <Typography color="primary" variant="h4">
                    {title}
                </Typography>
                <br />
                <Typography variant="body1" color="textSecondary">
                    {description}
                </Typography>
                <Social />
            </div>
        </Box>
    );
}
export default ContentHead;
