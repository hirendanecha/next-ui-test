import React from "react";
import Head from "next/head";
import Image from "next/image";

import {
  Box,
  Button,
  Container,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Layout from "@/components/layout";
import Details from "@/components/Details";
import Carousel from "react-material-ui-carousel";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import img1 from "../../public/img/thumb1.png";
import img2 from "../../public/img/thumb2.png";

const images = [
  "/img/image1.png",
  "/img/image2.png",
  "/img/image3.png",
  "/img/image4.png",
  "/img/image5.png",
];

const sizes = ["XS", "S", "M", "L", "XXL"];

const ImageGrid = ({ images }) => {
  return images.map((img) => (
    <Box
      key={img}
      sx={{
        margin: 2,
        display: "flex",
        width: "auto",
        height: "300px",
        position: "relative",
      }}
    >
      <Image src={img} alt="" style={{ objectFit: "contain" }} fill />
    </Box>
  ));
};

const SizeButton = ({ value, selectedSize }) => (
  <Button sx={{ bgcolor: selectedSize === value ? "#000000" : "#E5E5E5" }}>
    {selectedSize}
  </Button>
);

export default function Home() {
  const [value, setValue] = React.useState("M");

  const handleChange = (event) => {
    setValue(event);
  };
  return (
    <>
      <Head>
        <title>Test Task</title>
        <meta name="description" content="Test Task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ margin: 2 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item md={3} sx={{ display: { xs: "none", md: "initial" } }}>
            <Details />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "initial", md: "none" } }}
          >
            <Carousel>
              {/* <ImageGrid images={images} /> */}
              {images.map((img) => (
                <Box
                  key={img}
                  sx={{
                    margin: 2,
                    display: "flex",
                    width: "auto",
                    height: "300px",
                    position: "relative",
                  }}
                >
                  <Image
                    src={img}
                    alt=""
                    style={{ objectFit: "contain" }}
                    fill
                  />
                </Box>
              ))}
            </Carousel>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "none", md: "initial" } }}
          >
            <ImageGrid images={images} />
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ position: "sticky", top: 80 }} pr={{ xs: 2, md: 3 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 400, fontSize: "48px" }}
              >
                JONATHAN SIMKHAI
              </Typography>
              <Typography fontWeight={400} fontSize={"14px"} gutterBottom>
                Lurex Linen Viscose Jacket in Conchigia
                <br />
                <strong> $225</strong>
              </Typography>
              <Typography fontWeight={400} fontSize={"14px"} my={"12px"}>
                <b>COLOR</b> CONCHIGLIA
              </Typography>
              <Box display={"flex"} gap={1}>
                <Box border="1px solid black">
                  <Image
                    content="fit"
                    src={img1}
                    width={75}
                    height={80}
                    alt="image1"
                  />
                </Box>
                <Box border="1px solid black">
                  <Image
                    sx={{ ml: "3px" }}
                    bgColor="inherit"
                    content="cover"
                    src={img2}
                    width={75}
                    height={80}
                    alt="image1"
                  />
                </Box>
              </Box>

              <Box
                mt={2}
                display={"flex"}
                justifyContent={"space-between"}
                justifyItems={"space-between"}
              >
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>Size L</Typography>
                </Box>
                <Box>
                  <Typography mr={"auto"} sx={{ textDecoration: "underline" }}>
                    SIZE GUIDE
                  </Typography>
                </Box>
              </Box>
              <Box gap={1}>
                {sizes.map((size) => (
                  <Button
                    onClick={() => handleChange(size)}
                    variant="outlined"
                    // color=
                    key={size}
                    sx={{
                      bgcolor: value !== size ? "#ffffff" : "#000000",
                      borderRadius: "20px",
                      mr: "4px",
                      w: "50px",
                      p: "4",
                      minWidth: "85px",
                      my: "4px",
                      ":disabled": {
                        textDecoration: "line-through",
                      },
                    }}
                    disabled={size === "XS"}
                  >
                    {size}
                  </Button>
                ))}
              </Box>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  borderRadius: "30px",
                  p: "12px",
                  backgroundColor: "#111111",
                }}
                fullWidth={true}
                endIcon={<ArrowRightAltIcon />}
                type="submit"
              >
                ADD TO BAG
              </Button>
              <Typography
                mt="12px"
                fontSize={"14px"}
                sx={{ fontWeight: 400, color: "#000000" }}
                gutterBottom
              >
                Get 4 intrest-free payments of $196.25 with Klarna LEARN MORE
              </Typography>
              <Typography
                mt="12px"
                fontSize={"14px"}
                sx={{ fontWeight: 400, color: "#000000" }}
                gutterBottom
              >
                Speak to a Personal Stylist CHAT NOW
              </Typography>
            </Box>{" "}
          </Grid>
        </Grid>
        <Container maxWidth="md" sx={{ pt: "6rem" }}>
          <Box
            sx={{
              margin: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: "14px",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              a note from the editor
            </Typography>
            <Typography
              sx={{
                fontSize: "2rem",
                textAlign: "center",
              }}
            >
              The Forte Lurex Linen Viscose Jacket in Mother of Pearl features
              lunar lavishness by night and by day: a blazer in a linen blend
              shot with lurex for a shimmering surface that shines like a star
              in the sky.
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              — By{" "}
              <Link
                href="#"
                style={{
                  textDecoration: "none",
                  fontWeight: 700,
                  color: "GrayText",
                }}
              >
                MINNA SHIM
              </Link>
              , Fashion Editor
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

Home.getLayout = (page) => <Layout>{page}</Layout>;
