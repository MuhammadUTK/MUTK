import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResumeLayout from "./component/Resume/ResumeBody/ResumeLayout.jsx";
import Tariqon from "./component/Tariqon/Tariqon.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ResumeLayout />, // Component to render
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