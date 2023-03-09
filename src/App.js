import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import WatchPage from "./components/WatchPage";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import "./index.css";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import SuggestionVideos from "./components/SuggestionVideos";

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
      {
        path: "search/:id",
        element: <SuggestionVideos />,
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
