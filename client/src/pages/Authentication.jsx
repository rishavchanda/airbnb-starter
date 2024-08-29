import { Modal } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import Background from "../utils/Images/Background.svg";
import { Close } from "@mui/icons-material";
import SignIn from "../componnents/SignIn";
import Signup from "../componnents/Signup";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),
    url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 50%;
  padding: 2px;
  width: 32px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${({ theme }) => theme.secondary + 20};
  }
`;

const Text = styled.p`
  display: flex;
  gap: 12px;
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.secondary + 90};
  margin-top: 16px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
const TextButton = styled.div`
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
`;

const Authentication = () => {
  return <div>Authentication</div>;
};

export default Authentication;
