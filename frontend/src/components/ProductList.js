import React, { useContext, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Stack,
} from "@mui/material";

import { WalletContext } from "../web3/WalletContex";
import Buy from "../web3/Shop";
import productsFile from "../Data/Products.json";

function ProductList() {
  const { wallet } = useContext(WalletContext);
  const [products] = useState(productsFile);

  async function buyProduct(id, price) {
    Buy(wallet, id, price);
  }

  return (
    <>
      {products.map((product) => (
        <Card key={product.id} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="340"
            image={product.image}
            alt={product.name}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#441396"
            >
              {product.name}
            </Typography>
            <Typography variant="body2" color="#441396">
              {product.description}
            </Typography>
          </CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
            sx={{
              mb: 2,
              mx: 2,
            }}
          >
            <Button
              sx={{ color: "#7742d0" }}
              size="medium"
              onClick={() => buyProduct(product.id, product.price)}
            >
              Buy now
            </Button>
            <Typography sx={{ color: "#7742d0" }} size="medium" disabled>
              1.5 ETH
            </Typography>
          </Stack>
        </Card>
      ))}
    </>
  );
}

export default ProductList;
