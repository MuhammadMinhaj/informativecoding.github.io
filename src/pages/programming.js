/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: PROGRAMMING PAGE
 * Description: Core programming knowldage
 * * */

import { Code as CodeIcon } from '@material-ui/icons';
import Content from '../components/Content';
import Layout from '../components/Layout';

const content = {
    title: 'Learn Programming',
    description: 'Learn the core concept of programming to this tutorials.',
    // imgPath: '/icons/js.png',
    Icon: CodeIcon,
};
function Programming() {
    return (
        <Layout>
            <Content contentHead={content} />
        </Layout>
    );
}
export default Programming;
