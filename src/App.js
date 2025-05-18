import "./App.css";
import AppRoutes from "./AppRoutes";
import Header from "./component/Header";

function App() {
  return (
    <div className="flex flex-col gap-y-[20px]">
      <Header />
     <AppRoutes/>
    </div>
  );
}

export default App;
