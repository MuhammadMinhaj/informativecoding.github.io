/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title:   CONTENT FOOTER
 * Description: Content footer functionalities.
 * * */
import { Box, Button, IconButton } from '@material-ui/core';
import {
    Edit as EditIcon,
    KeyboardArrowLeft as KeyboardArrowLeftIcon,
    KeyboardArrowRight as KeyboardArrowRightIcon,
} from '@material-ui/icons';

function ContentFooter() {
    return (
        <Box
            component="div"
            display="flex"
            justifyContent="space-between"
            style={{ padding: '0.5rem' }}
        >
            <Button variant="text" startIcon={<EditIcon />}>
                Edit On Github
            </Button>
            <Box component="div" display="flex">
                <IconButton>
                    <KeyboardArrowLeftIcon />
                </IconButton>
                <IconButton>
                    <KeyboardArrowRightIcon />
                </IconButton>
            </Box>
        </Box>
    );
}
export default ContentFooter;
