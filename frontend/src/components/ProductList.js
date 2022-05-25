import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Stack,
} from "@mui/material";

function ProductList() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="340"
        image="https://gateway.pinata.cloud/ipfs/QmbfwHU2xsTfGAKccVmewwJCkvorbNURoKgEUvM4bNfjHE"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="#441396">
          Bored Monkey
        </Typography>
        <Typography variant="body2" color="#441396">
          Decentralized NFT
        </Typography>
      </CardContent>
      {/* <CardActions> */}
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
          onClick={() => {
            alert("clicked");
          }}
        >
          Buy now
        </Button>
        <Typography sx={{ color: "#7742d0" }} size="medium" disabled>
          1.5 ETH
        </Typography>
      </Stack>
      {/* </CardActions> */}
    </Card>
  );
}

export default ProductList;
