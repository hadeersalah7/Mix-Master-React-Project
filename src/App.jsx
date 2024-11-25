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
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
      },
    },
  });
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error />,
      element: <HomeLayout />,
      children: [
        {
          index: true,
          errorElement: <SinglePageError />,
          loader: landingLoader(queryClient),
          element: <Landing />,
        },
        {
          path: "cocktail/:id",
          errorElement: <SinglePageError />,
          loader: cocktailLoader(queryClient),
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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
};
export default App;
