/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: ALGORITHMS
 * Description: Algorithms Content
 * * */

import { ShowChart as ShowChartIcon } from '@material-ui/icons';
import Content from '../components/Content';
import Layout from '../components/Layout';

const content = {
    title: 'Algorithms',
    description: 'Learn the core concept of Algorithms to this tutorials.',
    Icon: ShowChartIcon,
};
function Algorithms() {
    return (
        <Layout>
            <Content contentHead={content} />
        </Layout>
    );
}
export default Algorithms;
