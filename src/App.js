import "./App.css";
import AppRoutes from "./AppRoutes";
import Header from "./component/Header";
import ScrollUp from "./component/ScrollUp";

function App() {
  return (
    <div className="flex flex-col gap-y-[20px] dark:bg-slate-500">
      <Header />
     <AppRoutes/>
     <ScrollUp/>
    </div>
  );
}

export default App;
