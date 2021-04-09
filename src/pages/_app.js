/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: APPLICATION ROOT COMPONENT
 * Description: Applciation root component
 * * */
import { createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import store from '../../redux';
import '../../styles/globals.css';

function Application({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

wrapper.withRedux(Application);

export default Application;
