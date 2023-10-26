import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react';

// i18n
import { useTranslation, Trans } from 'react-i18next';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Stack } from '@mui/material';

// components
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Iconify from '../components/iconify';

// sections
import {
  AppNewsUpdate,
  AppOrderTimeline,
  AppWidgetSummary,
  // AppTasks,
  // AppCurrentVisits,
  // AppWebsiteVisits,
  // AppTrafficBySite,
  // AppCurrentSubject,
  // AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  // i18n
  const { t } = useTranslation();

  const theme = useTheme();

  /* Data is using Faker.js */
  return (
    <>
      <Helmet>
        <title> {t('dashboard.tab')}</title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 10 }}>
          {t('dashboard.welcome')}
        </Typography>
        {/* <div>
          <p>
            <Trans i18nKey="description.part1">
              Edit <code>src/App.js</code> and save to reload.
            </Trans>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              {t('description.part2')}
            </a>
          </p>
        </div> */}
        <Grid container spacing={3}>
          <Grid
            container
            spacing={3}
            sx={{
              width: '100%',
              maxWidth: 'unset',
              display: 'flex',
              justifyContent: 'space-between',
              paddingLeft: 6,
              paddingTop: 3,
              paddingBottom: 3,
              '& .carousel-root': { width: '100%' },
              '& .carousel-root > .carousel > .thumbs-wrapper': { display: 'none' },
              '& .carousel-root > .carousel.carousel-slider': { height: 400 },
              '& .carousel-root > .carousel.carousel-slider > .slider-wrapper': { height: '100%' },
              // flexWrap: 'wrap',
            }}
            xs={12}
          >
            <Carousel sx={{ width: '100%' }} autoPlay>
              {/* minimo de 2 imagens */}
              <div>
                <img alt="" src="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png" />
                {/* <p className="legend">Legend 1</p> */}
              </div>
              <div>
                <img alt="" src="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png" />
                {/* <p className="legend">Legend 1</p> */}
              </div>
            </Carousel>
          </Grid>
          <Grid
            container
            spacing={3}
            sx={{
              width: '100%',
              maxWidth: 'unset',
              display: 'flex',
              justifyContent: 'space-between',
              paddingLeft: 3,
              paddingTop: 3,

              // flexWrap: 'wrap',
            }}
            xs={12}
          >
            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary
                title={t('dashboard.track.transit.ontime')}
                total={7140}
                icon={'ant-design:field-time-outlined'}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary
                title={t('dashboard.track.transit.delay')}
                total={1352831}
                color="warning"
                icon={'ant-design:warning-outlined'}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary
                title={t('dashboard.track.delivered.ontime')}
                total={1723315}
                color="success"
                icon={'ant-design:check-circle-filled'}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary
                title={t('dashboard.track.delivered.delay')}
                total={234}
                color="error"
                icon={'ant-design:warning-filled'}
              />
            </Grid>
          </Grid>

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              sx={{ height: '100%' }}
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              sx={{ height: '100%' }}
              title="Current Visits"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              sx={{ height: '100%' }}
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              sx={{ height: '100%' }}
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid> */}

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              sx={{ height: '100%', '& .simplebar-placeholder': { display: 'none' } }}
              title={t('dashboard.news.title')}
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              sx={{ height: '100%' }}
              title={t('dashboard.orders.title')}
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              sx={{ height: '100%' }}
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              sx={{ height: '100%' }}
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
