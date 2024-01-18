
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Feed from '../pages/feed/Feed';

const router = createBrowserRouter([
    {
        path:'/',
        element:<App />
    },
    {
        path:'feed',
        element:<Feed />
    },
])
export default router;