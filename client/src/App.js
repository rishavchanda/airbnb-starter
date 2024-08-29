import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componnents/Navbar";
import { useState } from "react";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import { useSelector } from "react-redux";
import ToastMessage from "./componnents/ToastMessage";
import PropertyDetails from "./pages/PropertyDetails";
import PropertyListing from "./pages/PropertyListing";
import background from "./utils/Images/Background.svg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
    url(${({ background }) => background});
  background-size: cover;
  background-repeat: no-repeat;
`;

function App() {
  return <div>App</div>;
}

export default App;
