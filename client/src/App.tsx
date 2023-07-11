import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthPage } from "./views/AuthPage";
import { HomePage } from "./views/HomePage";
import { AuthProvider } from "./components/AuthProvider";
import { Provider } from "react-redux";
import store from "./store/reducer";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
