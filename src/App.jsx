import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import SmallHeader from "./components/SmallHeader/SmallHeader";
import SmallNav from "./components/SmallNav/SmallNav";

function App() {
  return (
    <main>
      <SmallHeader />
      <Header />
      <Outlet />
      <SmallNav />
    </main>
  );
}

export default App;
