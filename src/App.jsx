import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Summary from './Summary';
import Experiance from './Experiance';
import Projects from './Projects';
import { ContactForm } from './ContactForm';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Summary />
              <Projects />
              <Experiance />
            </>
          }
        />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <footer style={{ marginTop: "2rem" }}>All rights reserved 2025</footer>
    </Router>
  );
}

export default App;
