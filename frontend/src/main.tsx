import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routes from "./const/routes.tsx";
import "./index.css"
const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <RouterProvider router={router}/>
    </>
)