import { routes } from "../constant/route";
import CountriesPage from "../pages/CountriesPage";
import DetailsPage from "../pages/DetailsPage"

const approutes = [
  { path: routes.home, Component: CountriesPage },
  { path: routes.details, Component: DetailsPage },
];

export default approutes;
