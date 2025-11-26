import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import LoginPage from "./pages/Home/Login/page";
import RegisterRolePage from "./pages/Register/page";
import RegisterClientPage from "./pages/Register/client/page";
import RegisterFormProvider from "./components/RegisterFormProvider";
import OAuthCallbackPage from "./pages/Home/OAuthCallbackPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterRolePage />} />
      <Route path="/register/client" element={<RegisterClientPage />} />
      <Route path="/register/provider" element={<RegisterFormProvider />} />
        <Route path="/oauth/callback" element={<OAuthCallbackPage />} />
    </Routes>
  );
}

export default App;
