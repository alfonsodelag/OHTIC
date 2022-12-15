import "../styles/globals.css";

import { Provider } from "react-redux";
import store from "../public/src/app/store";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <main className="flex justify-between bg-gray-100">
        <Sidebar />
        <Component {...pageProps} />
        <RightSidebar />
      </main>
    </Provider>
  );
}

export default MyApp;
