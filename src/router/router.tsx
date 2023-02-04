import { RouteProps } from 'react-router-dom';

import IndexPage from '@/views/indexPage/IndexPage';
import ProfilePage from '@/views/profilePage/ProfilePage';

// import IndexPage from '@/views/IndexPage/IndexPage';

const routeInfo: RouteProps[] = [
    {
        path: '/',
        element: <IndexPage />,
    },
    {
        path: '/profile',
        element: <ProfilePage />,
    },
];

export default routeInfo;
