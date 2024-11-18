import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AIA from './AIA';
import App from './App';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aia" element={<AIA />} />
      {/* Add other routes here */}
    </Routes>
  </Router>
);

export default AppRoutes;
