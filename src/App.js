import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import WatchPage from "./components/WatchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
