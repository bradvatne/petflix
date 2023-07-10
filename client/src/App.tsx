import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthPage } from "./views/AuthPage";
import { HomePage } from "./views/HomePage";
import { AuthProvider } from "./components/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
