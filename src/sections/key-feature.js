/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import prodesign from 'assets/key-feature/prodesign.jpg';
import uiux from 'assets/key-feature/uiux.jpg';
import bestquality from 'assets/key-feature/bestquality.jpg';
import seo from 'assets/key-feature/seo.jpg';
import trust from 'assets/key-feature/trust.jpg'
import support from 'assets/key-feature/support.jpg';

const data = [
  {
    id: 1,
    imgSrc: prodesign,
    altText: 'Professional Design',
    title: 'Professional Design',
    text:
      'Website yang didesain dengan optimal untuk meningkatkan kredibilitas bisnis Anda.',
  },
  {
    id: 2,
    imgSrc: uiux,
    altText: 'UI/UX',
    title: 'Friendly UI/UX Design',
    text:
      'Visual yang nyaman dan menarik perhatian, mudah digunakan sesuai dengan fungsi utamanya.',
  },
  {
    id: 3,
    imgSrc: bestquality,
    altText: 'Product',
    title: 'High Quality Product',
    text:
      'Website telah dirancang fungsional dan memiliki kompatibilitas tinggi.',
  },
      {
        id: 4,
        imgSrc: seo,
        altText: 'SEO',
        title: 'Seo Friendly',
        text:
          'Optimasi seo untuk memperkuat Brand Awareness dan meningkatkan peforma website Anda.',
      },
      {
        id: 5,
        imgSrc: trust,
        altText: 'Guaranteed',
        title: 'Guaranteed',
        text:
          'Tokodev memberikan garansi penuh atas kepuasan pelanggan yang menjadi prioritas kami.',
      },
      {
        id: 6,
        imgSrc: support,
        altText: 'Support',
        title: 'Fast Maintenance Support',
        text:
          'Tokodev memberikan support secara korektif dan preventif agar website berjalan dengan lancar.  ',
      },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          titlefeature="Kenapa Harus Tokodev?"
          subtitlefeature="Keuntungan membuat website bersama Tokodev"
        /> 

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
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
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
