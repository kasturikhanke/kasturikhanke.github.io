import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AIA from './AIA';
import App from './App';
import IC from './ic';  // Updated to lowercase 'ic'
import PDFSpaces from './PDFSpaces';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aia" element={<AIA />} />
      <Route path="/ic" element={<IC />} />  {/* Add this route */}
      <Route path="/pdf-spaces" element={<PDFSpaces />} />
      {/* Add other routes here */}
    </Routes>
  </Router>
);

export default AppRoutes;