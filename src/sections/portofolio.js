/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image , Grid} from 'theme-ui';
import SectionHeader from 'components/section-header';
import GridLayout from "react-grid-layout";
import styled from "styled-components";
import Rating from 'components/rating';
import ButtonGroup from 'components/button-group';
import imgscroll1 from 'assets/portofolio/pelican.png';
import imgscroll2 from 'assets/portofolio/kurma-madinah.png';
import imgscroll3 from 'assets/portofolio/pertamina - cepu.png';
import imgscroll4 from 'assets/portofolio/mamoka.png';
import imgscroll5 from 'assets/portofolio/bahari.png';
import imgscroll6 from 'assets/portofolio/Mail Campaign - azana.png';


const data = [

  {
      id: 1,
      title: 'Jakarta Garden City',
      imgscroll: imgscroll1,
      cscreen: 'screen1',
      name: 'JGC'

  },
  {
      id: 2,
      title: 'Kurma Madinah',
      imgscroll: imgscroll2,
      cscreen: 'screen2',
      name: 'Kurma Madinah'
  },
  {
      id: 3,
      title: 'PT Pertamina',
      imgscroll: imgscroll3,
      cscreen: 'screen3',
      name: 'Pertamina'
  },
  {
      id: 4,
      title: 'Warteg Kharisma Bahari',
      imgscroll: imgscroll4,
      cscreen: 'screen4',
      name: 'Warteg Kharisma Bahari'
},
{
      id: 5,
      title: 'Warteg Mamoka Bahari',
      imgscroll: imgscroll5,
      cscreen: 'screen5',
      name: 'Warteg Mamoka Bahari'
},
{
      id: 5,
      title: 'PT Solution Indo',
      imgscroll: imgscroll6,
      cscreen: 'screen6',
      name: 'Solution Indo',
      text: 'deka',
},
];

const responsive = {
  desktop: {
      breakpoint: {
          max: 3000,
          min: 1619
      },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
      breakpoint: {
          max: 1619,
          min: 1024
      },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
      breakpoint: {
          max: 1024,
          min: 640
      },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
      breakpoint: {
          max: 639,
          min: 0
      },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
  },
};

const layout = [
  { i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1 },
  { i: "dark-magician", x: 1, y: 0, w: 1, h: 1 },
  { i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
  { i: "spell-caster", x: 3, y: 0, w: 1, h: 1 },
  { i: "summoned-skull", x: 4, y: 0, w: 1, h: 1 }
];

const GridItemWrapper = styled.div`
  background: #f5f5f5;
`;

const GridItemContent = styled.div`
  padding: 8px;
`;

const Root = styled.div`
  padding: 16px;
`;

export default function PortofolioCard() {
  return (
    <section id="portofolio" sx={{ variant: 'section.portofolio' }}>
  <Container>
    <SectionHeader slogan="Portofolio" title="Meet Client Satisfaction" />
  </Container>
  {/* <Root>
      <GridLayout layout={layout} cols={5} rowHeight={300} width={1000}>
        <GridItemWrapper key="blue-eyes-dragon">
          <GridItemContent>Blue Eyes Dragon</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="dark-magician">
          <GridItemContent>Dark Magician</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="kuriboh">
          <GridItemContent>Kuriboh</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="spell-caster">
          <GridItemContent>Spell Caster</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="summoned-skull">
          <GridItemContent>Summoned Skull</GridItemContent>
        </GridItemWrapper>
      </GridLayout>
    </Root>
   */}
  <Grid sx={styles.grid}> 
    {data.map((item) => ( <Box>
      <Heading as="h3" sx={styles.title}> {item.title} </Heading>
      <div class="container">
        <div className={styles.overlapGrid}>
          <div class="col-md-4 col-md-offset-4 content">
            <div class={item.cscreen}>
              <Image src={item.imgscroll} alt="Client Image" />
            </div>

          
          </div>
        </div>
      </div>
    </Box> ))} </Grid>
</section>
 );
}

    
const styles = {
  title: {
      fontSize: '[1, 2]',
      textAlign: 'center',
      fontWeight: 700,
      mb: [3, null, null, '22px'],
      color: 'text',
      lineHeight: 1.6,
  },
  grid: {
      px: [0, null, null, '40px', null, '80px'],
      pt: [0, null, null, null, null, null, null, 3],
      gridGap: ['35px 0', null, '40px 0'],
      gridTemplateColumns: [
          'repeat(1,1fr)',
          null,
          'repeat(2,1fr)',
          null,
          'repeat(3,1fr)',
          null,
          'repeat(3,1fr)',
      ],
      
      width: ['100%', '80%', '100%'],
      mx: 'auto',
      '& > div': {
          px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
      },


  },
}

 
  
  

  