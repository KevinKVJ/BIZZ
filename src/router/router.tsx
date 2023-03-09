import { RouteProps } from 'react-router-dom';

import ArticlePage from '@/views/ArticlePage/ArticlePage';
import IndexPage from '@/views/IndexPage/IndexPage';
import ProfilePage from '@/views/ProfilePage/ProfilePage';

const routeInfo: RouteProps[] = [
    {
        path: '/',
        element: <IndexPage />,
    },
    {
        path: '/profile',
        element: <ProfilePage />,
    },
    {
        path: '/article',
        element: <ArticlePage />,
    },
];

export default routeInfo;
