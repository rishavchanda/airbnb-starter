import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DatePicker } from "@mui/lab";
import { CircularProgress, Rating, TextField } from "@mui/material";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { bookProperty } from "../api";
import { openSnackbar } from "../redux/reducers/snackbarSlice";
import Button from "../componnents/Button";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  padding: 20px;
  height: 95vh;
  margin: 0 20px;
  background: ${({ theme }) => theme.bg};
  border-radius: 12px 12px 0 0;
  overflow-y: scroll;
`;

const Image = styled.img`
  width: 50%;
  border-radius: 6px;
  object-fit: cover;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
`;

const Price = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const Span = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: line-through;
  margin-left: 8px;
`;

const Percent = styled.span`
  font-size: 16px;
  color: green;
  margin-left: 8px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PropertyDetails = () => {
  const properties = [
    {
      _id: "12345",
      img: "https://via.placeholder.com/250",
      title: "Beautiful Beach House",
      desc: "A stunning house located near the beach with amazing sea views.",
      rating: "1.5",
      price: {
        org: 250,
        mrp: 300,
        off: 17,
      },
    },
    {
      _id: "12345",
      img: "https://via.placeholder.com/250",
      title: "Beautiful Beach House",
      desc: "A stunning house located near the beach with amazing sea views.",
      rating: "1.5",
      price: {
        org: 250,
        mrp: 300,
        off: 17,
      },
    },
    {
      _id: "12345",
      img: "https://via.placeholder.com/250",
      title: "Beautiful Beach House",
      desc: "A stunning house located near the beach with amazing sea views.",
      rating: "1.5",
      price: {
        org: 250,
        mrp: 300,
        off: 17,
      },
    },
    {
      _id: "12345",
      img: "https://via.placeholder.com/250",
      title: "Beautiful Beach House",
      desc: "A stunning house located near the beach with amazing sea views.",
      rating: "1.5",
      price: {
        org: 250,
        mrp: 300,
        off: 17,
      },
    },
    {
      _id: "12345",
      img: "https://via.placeholder.com/250",
      title: "Beautiful Beach House",
      desc: "A stunning house located near the beach with amazing sea views.",
      rating: "1.5",
      price: {
        org: 250,
        mrp: 300,
        off: 17,
      },
    },
    {
      _id: "12345",
      img: "https://via.placeholder.com/250",
      title: "Beautiful Beach House",
      desc: "A stunning house located near the beach with amazing sea views.",
      rating: "1.5",
      price: {
        org: 250,
        mrp: 300,
        off: 17,
      },
    },
    {
      _id: "12345",
      img: "https://via.placeholder.com/250",
      title: "Beautiful Beach House",
      desc: "A stunning house located near the beach with amazing sea views.",
      rating: "1.5",
      price: {
        org: 250,
        mrp: 300,
        off: 17,
      },
    },
    {
      _id: "12345",
      img: "https://via.placeholder.com/250",
      title: "Beautiful Beach House",
      desc: "A stunning house located near the beach with amazing sea views.",
      rating: "1.5",
      price: {
        org: 250,
        mrp: 300,
        off: 17,
      },
    },
    {
      _id: "12345",
      img: "https://via.placeholder.com/250",
      title: "Beautiful Beach House",
      desc: "A stunning house located near the beach with amazing sea views.",
      rating: "1.5",
      price: {
        org: 250,
        mrp: 300,
        off: 17,
      },
    },
    {
      _id: "12345",
      img: "https://via.placeholder.com/250",
      title: "Beautiful Beach House",
      desc: "A stunning house located near the beach with amazing sea views.",
      rating: "1.5",
      price: {
        org: 250,
        mrp: 300,
        off: 17,
      },
    },
    {
      _id: "12345",
      img: "https://via.placeholder.com/250",
      title: "Beautiful Beach House",
      desc: "A stunning house located near the beach with amazing sea views.",
      rating: "1.5",
      price: {
        org: 250,
        mrp: 300,
        off: 17,
      },
    },
  ];

  return <div>PropertyDetails</div>;
};

export default PropertyDetails;
