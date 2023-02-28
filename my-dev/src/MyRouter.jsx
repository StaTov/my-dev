import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./components/root/Root";
import ErrorPage from "./components/error/ErrorPage";
import MyCode from "./components/myCode/MyCode";
import About from "./components/about/About";

const MyRouter = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    path: '/',
                    element: <MyCode/>
                },
                {
                    path: '/about',
                    element: <About/>
                }
            ]
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}


export default MyRouter;