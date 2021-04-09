/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: WEB FOOTTER
 * Description: Web footer section
 * * */
import { Box, IconButton } from '@material-ui/core';
import {
    Facebook as FacebookIcon,
    GitHub as GithubIcon,
    LinkedIn as LinkedInIcon,
    YouTube as YoutubeIcon
} from '@material-ui/icons';

const links = [
    {
        icon: <FacebookIcon />,
        href: 'https://facebook.com',
    },
    {
        icon: <GithubIcon />,
        href: 'https://facebook.com',
    },
    {
        icon: <LinkedInIcon />,
        href: 'https://facebook.com',
    },
    {
        icon: <YoutubeIcon />,
        href: 'https://facebook.com',
    },
];

function Social() {
    return (
        <Box display="flex">
            {links.map(({ icon, href }) => (
                <IconButton color="primary" href={href}>
                    {icon}
                </IconButton>
            ))}
        </Box>
    );
}

export default Social;
