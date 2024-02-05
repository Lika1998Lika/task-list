import ReactDOM from 'react-dom/client'
import { App } from './components/app/app'

import 'bootstrap/dist/css/bootstrap.min.css'

const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);
root.render(
  <>
    <App />
  </>,
);