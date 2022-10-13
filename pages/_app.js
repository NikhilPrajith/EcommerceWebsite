// import App from 'next/app'

import { AuthProvider } from "../context/Authentication/AuthProvider"
import AuthStateChanged from "../context/Authentication/AuthStateChanged";

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <AuthStateChanged>
                <Component {...pageProps} />
            </AuthStateChanged>
        </AuthProvider>
    );
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }


  /*
    Todo:
        Do proper protected routing for the amin portal visiting, etc
        Change jsx styling in admin and index to use global.css, which you need to import and write here.
        Change router.push in authProvider logout
        Do loading sign/UI for all the pages that require it.
  */
  
  export default MyApp