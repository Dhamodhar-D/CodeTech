import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Editor from './Editor';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/documents/:id" element={<Editor />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
