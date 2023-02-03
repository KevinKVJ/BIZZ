import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import routeInfo from './router/router';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {routeInfo.map(({ path, element }, index) => (
                    <Route path={path as string} element={element} key={index} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
