import Layout from "../layout/layout";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import DestinationsPage from "../pages/destinations";
import ActivitiesPage from "../pages/activities";
import CulturePage from "../pages/cultures";
import AccommodationsPage from "../pages/accommodation";
import TourDetailPage from "../pages/destinations/detail";
import ActivityDetailPage from "../pages/activities/detail";


const router = createBrowserRouter([
   {
     path: "/",
     element: <Layout></Layout>,
     children: [
        {
          index: true,
          element: <Home></Home>
        },
        {
          path: '/destinations',
          element: <DestinationsPage></DestinationsPage>
        },
        {
          path: '/destinations/:id',
          element: <TourDetailPage></TourDetailPage>
        },
        {
          path: '/activities',
          element: <ActivitiesPage></ActivitiesPage>
        },
        {
          path: '/activities/:id',
          element: <ActivityDetailPage></ActivityDetailPage>
        },
        {
          path: '/cultures',
          element: <CulturePage></CulturePage>
        },
         {
          path: '/accommodations',
          element: <AccommodationsPage></AccommodationsPage>
        }
      ]
   }
])

export default router;