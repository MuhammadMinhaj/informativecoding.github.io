/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: HOME PAGE
 * Description: Web Home Page
 * * */

import commonComponents from '../components/common';
import Explore from '../components/Explore';
import Layout from '../components/Layout';
import Sldie from '../components/Slide';
import Tutorials from '../components/Tutorials';

const { Margin } = commonComponents;
export default function name() {
    return (
        <>
            <Layout>
                <Margin />
                <Sldie />
                <Margin />
                <Tutorials />
                <Margin />
                <Explore />
                <Margin />
            </Layout>
        </>
    );
}
