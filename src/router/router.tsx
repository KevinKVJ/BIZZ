import { RouteProps } from 'react-router-dom';

import IndexPage from '@/views/indexPage/IndexPage';

// import IndexPage from '@/views/IndexPage/IndexPage';

const routeInfo: RouteProps[] = [
    {
        path: '/',
        element: <IndexPage />,
    },
];

export default routeInfo;
