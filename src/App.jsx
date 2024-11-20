import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, About, Cocktail, Landing, Error, NewsLetter } from "./Pages";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error />,
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Landing />
        },
        {
          path: "cocktail",
          element: <Cocktail />
        },
        {
          path: "newsletter",
          element: <NewsLetter />
        },
        {
          path: "about",
          element: <About />
        },
      ]
    },
    {
      path: "/Error",
      element: <Error />
    },
  ])
  return <RouterProvider router={router} />;
};
export default App;
