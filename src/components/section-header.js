import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, slogan, isWhite, titlefeature, subtitlefeature, sloganworkflow }) {
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      <div style={{ marginTop: 35, padding: 0 }}>
      {/* <Text
        as="p"
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isWhite ? 'white' : 'heading',
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan}
      </Text> */}
      <h2 style={{ fontFamily:"'DM Sans',sans-serif", fontSize: "20px",fontStyle: "bold", color: "#244886", }}>{titlefeature}</h2>
      <h2 style={{ fontFamily:"'DM Sans',sans-serif", fontSize: "20px",fontStyle: "bold", color: "#244886", }}>{slogan}</h2>
      <h2 style={{ fontFamily:"'DM Sans',sans-serif", fontSize: "45px",fontStyle: "bold", color: "white",}}>{sloganworkflow}</h2>

      </div>
      <Heading
        // as="h2"
        // sx={{
        //   variant: 'sectionHeader.title',
        //   color: isWhite ? 'white' : 'heading_secondary',
        // }}
      >
        {/* {title} */}
        <p style={{fontFamily:"'DM Sans',sans-serif", fontSize: "35px",color: 'black'}}>{subtitlefeature} </p>
        <p style={{fontFamily:"'DM Sans',sans-serif", fontSize: "35px",color: 'black'}}>{title} </p>

      </Heading>
    </Box>
  );
}
