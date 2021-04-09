/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: DATA STRUCTURES
 * Description: Data Structures Content
 * * */

import { DataUsage as DataUsageIcon } from '@material-ui/icons';
import Content from '../components/Content';
import Layout from '../components/Layout';

const content = {
    title: 'Data Structures',
    description: 'Learn the core concept of Data Structures to this tutorials.',
    Icon: DataUsageIcon,
};
function DataStructures() {
    return (
        <Layout>
            <Content contentHead={content} />
        </Layout>
    );
}
export default DataStructures;
