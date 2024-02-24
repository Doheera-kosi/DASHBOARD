import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Rating,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useGetProductsQuery } from "state/api";
import Header from "components/Header";

const Products = () => {
  const {data, isLoading} = useGetProductsQuery();
  console.log("data", data);

  return <Box>
    <Header title="PRODUCTS" subtitle="See your list of products." />
  </Box>;
};

export default Products;
