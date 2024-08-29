import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropertyCard from "../componnents/Cards/PropertyCard";
import { getAllCourses, getAllProperty } from "../api";
import { CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  padding: 20px 0;
  height: 95vh;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 12px;
    flex-direction: column;
    overflow-y: scroll;
  }
  background: ${({ theme }) => theme.bg};
  margin: 0 20px;
  border-radius: 12px 12px 0 0;
`;
const Property = styled.div`
  padding: 12px;
  overflow: hidden;
  height: fit-content;
  @media (min-width: 768px) {
    width: 100%;
    overflow-y: scroll;
    height: 100%;
  }
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  @media (max-width: 750px) {
    gap: 14px;
  }
`;

const PropertyListing = () => {
  const [properties, setProperties] = useState([
    {
      _id: "12345",
      img: "https://via.placeholder.com/250",
      title: "Beautiful Beach House",
      desc: "A stunning house located near the beach with amazing sea views.",
      rating: "1.5",
      location: "Los, Angles",
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
  ]);

  return <div>PropertyListing</div>;
};

export default PropertyListing;
