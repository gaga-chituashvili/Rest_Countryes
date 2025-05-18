import "./App.css";
import CountriesPage from "./pages/CountriesPage";
import DetailsPage from "./pages/DetailsPage";
import Header from "./component/Header";

function App() {
  return (
    <div className="flex flex-col gap-y-[20px]">
      <Header />
      <CountriesPage />
      <DetailsPage />
    </div>
  );
}

export default App;
