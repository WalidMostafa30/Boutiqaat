import { createRoot } from "react-dom/client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";
import AppRouter from "./routes/AppRouter.jsx";

createRoot(document.getElementById("root")).render(<AppRouter />);
