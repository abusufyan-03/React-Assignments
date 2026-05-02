import ReactDOM from 'react-dom/client';
import Header from './components/Header.js'
import Body from './components/Body.js';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router';
import About from './components/About.js'
import Contact from './components/Contact.js';
import Error from './components/Error.js';
import RestaurantMenu from './components/RestaurantMenu.js';
import { lazy, Suspense } from 'react';
// import Grocery from './components/Grocery.js';


const Grocery = lazy(()=> import("./components/Grocery.js"))

const AppLayout = () => {
    return (
        <>
        <Header />
        <Outlet/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: '/About',
                element: <About/>
            },
            {
                path: '/Contact',
                element: <Contact/>
            },
            {
                path: '/restaurants/:id',
                element: <RestaurantMenu/>
            },
            {
                path: '/Grocery',
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            }
        ],
        errorElement: <Error/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);