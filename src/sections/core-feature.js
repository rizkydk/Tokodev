

/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading, Button } from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";
import { useState } from "react";
import CoreFeatureThumb from "assets/coreFeature.jpg";
import CoreFeatureThumb1 from "assets/paymentThumb.png";
import CoreFeatureThumb2 from 'assets/landing-page(Tokodev).jpg';
import CoreFeatureThumb3 from 'assets/landing-page(JGC).jpg'
import CoreFeatureThumb4 from 'assets/landing-page(Education).jpg'
import CoreFeatureThumb5 from 'assets/landing-page(kurma).jpg';
import CoreFeatureThumb6 from 'assets/landing-page(Enter).jpg';



import Briefcase from "assets/core-feature/briefcase.svg";
import Secure from "assets/core-feature/secure.svg";

export default function CoreFeature() {
  const data = {
    // subTitle: 'Core features',
    title: "Website seperti apa yang sesuai dengan bisnis Anda?",
    features: [
      {
        id: 1,
        imgSrc: CoreFeatureThumb2,
        altText: "Company Profile",
        title: "Company Profile",
      },
      {
        id: 2,
        imgSrc: CoreFeatureThumb5,
        altText: "E-commerce",
        title: "E-commerce",
      },
      {
        id: 3,
        imgSrc: CoreFeatureThumb4,
        altText: "Education",
        title: "Education",
      },
      {
        id: 4,
        imgSrc: CoreFeatureThumb1,
        altText: "Government",
        title: "Government",
      },
      {
        id: 5,
        imgSrc: CoreFeatureThumb3,
        altText: "Business",
        title: "Business",
      },
      {
        id: 6,
        imgSrc: CoreFeatureThumb6,
        altText: "Entertainment",
        title: "Entertainment",
      },
      {
        id: 7,
        altText: "News Portal",
        title: "News Portal",
        imgSrc: CoreFeatureThumb1,
      },
      {
        id: 8,
        imgSrc: CoreFeatureThumb1,
        altText: "Event",
        title: "Event",
      },
      {
        id: 9,
        imgSrc: CoreFeatureThumb1,
        altText: "Forum",
        title: "Forum",
      },
      {
        id: 10,
        imgSrc: CoreFeatureThumb1,
        altText: "Blog",
        title: "Blog",
      },
    ],
  };

  const [hoverId, setHoverId] = useState();

  const handleMouseOver = (id) => {
    setHoverId(id);
  };

  const handleMouseOut = () => {
    setHoverId(null);
  };

  var hoveredImageIndex = data.features.find((f) => f.id == hoverId)?.imgSrc;
  if (!hoveredImageIndex) hoveredImageIndex = CoreFeatureThumb;

  return (
    <section sx={styles.coreFeature}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          {hoveredImageIndex && <Image src={hoveredImageIndex} />}
        </Box>

        <Box sx={styles.contentBox}>
          <Box sx={styles.headingTop}>
            <TextFeature subTitle={data.subTitle} title={data.title} />
          </Box>

          <Grid gap="0px 0" width={150} columns={3} sx={styles.grid}>
            {data.features.map((item) => (
              <Box sx={styles.card} key={data.id}>
                {/* <Image src={item.imgSrc} alt={item.altText} sx={styles.img} /> */}
                <Box sx={styles.wrapper}>
                    <div
                    class="contentwhat"
                    onMouseOver={() => handleMouseOver(item.id)}
                    onMouseOut={handleMouseOut}
                  >
                    <Button className="donate__btnn" sx={styles.wrapper.title}>{item.title} </Button>
                    {/* <Text sx={styles.wrapper.title}>{item.id}</Text>       */}
                  </div>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    // position: "relative",
    "&::before": {
      position: "absolute",
      content: '""',
      top: ["auto", null, null, "50%"],
      bottom: ["100px", 0, null, "auto"],
      left: 0,
      background: "linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)",
      height: [350, 550, "60%"],
      width: "50%",
      zIndex: -1,
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
      transform: ["translateY(0)", null, null, "translateY(-50%)"],
    },
  },
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: ["column", null, null, "row"],
  },
  thumbnail: {
    pl: [0, 5, 0, null, 7, 0],
    pr: [0, 5, null, null, null, 75, 0],
    order: [2, null, null, 0],

  },
  
  contentBox: {
    width: ["100%", 450, 550, 350, 500, 570],
    pr: [0, null, "auto", null, null, 80],
    pl: "auto",
    flexShrink: 0,
  },
  headingTop: {
    pl: [0, null, null, null, "35px", null, "55px", 6],
    mb: [3, null, null, null, 1],
    textAlign: ["center", null, null, "left"],
  },
  grid: {
    p: ["0 0px 35px", null, null, null, "0 20px 40px", null, "0 40px 40px", 0],
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    p: [
      "0 17px 20px",
      null,
      null,
      "0 0 20px",
      "20px 15px 17px",
      null,
      null,
      "25px 30px 23px",
    ],
    backgroundColor: "white",
    borderRadius: "10px",
    transition: "all 0.3s",
    width: ["100%", "85%", null, "100%"],
    mx: "auto",
    "&:hover": {
      boxShadow: [
        "0px 0px 0px rgba(0, 0, 0, 0)",
        null,
        null,
        null,
        "0px 8px 24px rgba(69, 88, 157, 0.07)",
      ],
    },
  },

  img: {
    width: ["50px", null, "55px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, 4],
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: 3,
      color: "#FFFFFF",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, 3],
          },

    title: {
      fontSize: 15,
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },

    // '.donate__btnn': {
    //   flexShrink: 0,
    //   mr: [15, 20, null, null, 0],
    //   ml: ['auto', null, null, null, 0],
    // },
    '.donate__btnn': {
      color: 'primary',
      backgroundColor: 'white',
      border: 'solid',
      borderColor: 'primary',
      '&:hover': {
        // boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',
        backgroundColor: 'primary',
        color: 'white',
      },
    },
   
  },
}
