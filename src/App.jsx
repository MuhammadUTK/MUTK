import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Resume from "./component/Resume/Resume.jsx";
import Tariqon from "./component/Tariqon/Tariqon.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Resume />, // Component to render
    },
    {
        path: "/tariqon",
        element: <Tariqon />,
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;