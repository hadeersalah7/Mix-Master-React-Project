import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  About,
  Cocktail,
  Landing,
  Error,
  NewsLetter,
  SinglePageError,
} from "./Pages";
import { loader as landingLoader } from "./Pages/Landing";
import { loader as cocktailLoader } from "./Pages/Cocktail";
import { action as newsletterAction } from "./Pages/NewsLetter";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error />,
      element: <HomeLayout />,
      children: [
        {
          index: true,
          errorElement: <SinglePageError />,
          loader: landingLoader,
          element: <Landing />,
        },
        {
          path: "cocktail/:id",
          errorElement: <SinglePageError />,
          loader: cocktailLoader,
          element: <Cocktail />,
        },
        {
          path: "newsletter",
          element: <NewsLetter />,
          action: newsletterAction,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
    {
      path: "/Error",
      element: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
