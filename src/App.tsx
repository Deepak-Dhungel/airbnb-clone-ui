import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AddProperty from "./pages/protected-routes/AddProperty";
import Header from "./components/header/Header";
import { AddPropertyContextProvider } from "./context/AddPropertyContext";
import { AuthenticationContextProvider } from "./context/AuthenticationContext";
import PropertyDetail from "./pages/PropertyDetail";
import UserAccount from "./pages/protected-routes/MyAccount";
import Login from "./pages/Login";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <AuthenticationContextProvider>
        <AddPropertyContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-property" element={<AddProperty />} />
            <Route path="/property/:propertyId" element={<PropertyDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/my-account" element={<UserAccount />} />
          </Routes>
          <Footer />
        </AddPropertyContextProvider>
      </AuthenticationContextProvider>
    </div>
  );
}

export default App;
