/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: WEB LAYOUT
 * Description: Website layout for each page
 * * */
import { Container } from '@material-ui/core';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
    return (
        <>
            {/*   Header  */}
            <Header />
            {/* Container */}
            <main>
                <Container>{children}</Container>
            </main>
            {/*   Footer  */}
            <Footer />
        </>
    );
}

export default Layout;
