import '../styles/globals.css'
import {Provider, useSelector} from "react-redux"
import store from "../redux/store"

function MyApp({ Component, pageProps }) {
  
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
    )
}

export default MyApp
