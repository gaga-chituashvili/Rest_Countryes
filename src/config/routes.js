import { routes } from "../constant/route";
import CountriesPage from "../pages/CountriesPage";
import DetailsPage from "../pages/DetailsPage"

const approutes = [
  { path: routes.home, Component: CountriesPage },
  { path: routes.detailsPath, Component: DetailsPage },
];

export default approutes;
