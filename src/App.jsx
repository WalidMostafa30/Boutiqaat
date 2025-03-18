import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import SmallHeader from "./components/SmallHeader/SmallHeader";
import SmallNav from "./components/SmallNav/SmallNav";
import { useEffect, useState } from "react";
import loader from "./assets/loader/loader.gif";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <img width={"150px"} src={loader} />
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
