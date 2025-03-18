import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import SmallHeader from "./components/SmallHeader/SmallHeader";
import SmallNav from "./components/SmallNav/SmallNav";
import { useEffect, useState } from "react";
import loader from "./assets/loader/loader.gif";

function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timeout = setTimeout(() => setLoading(false), 3000); 

  window.addEventListener("load", () => setLoading(false)); 

  return () => {
    clearTimeout(timeout);
    window.removeEventListener("load", () => setLoading(false));
  };
}, []);
  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <img loading="lazy" width={"150px"} src={loader} />
        </div>
      ) : (
        <main>
          <SmallHeader />
          <Header />
          <Outlet />
          <SmallNav />
        </main>
      )}
    </>
  );
}

export default App;
