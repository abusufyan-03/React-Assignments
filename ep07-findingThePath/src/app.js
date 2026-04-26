import ReactDOM from 'react-dom/client';
import Header from './components/Header.js'
import Body from './components/Body.js';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router';
import About from './components/About.js'
import Contact from './components/Contact.js';
import Error from './components/Error.js';


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
            }
        ],
        errorElement: <Error/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);