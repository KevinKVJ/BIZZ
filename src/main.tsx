import 'normalize.css';
import './index.scss';
// import 'virtual:windi.css';
import 'virtual:svg-icons-register';

import ReactDOM from 'react-dom/client';

import App from './App';

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
);
