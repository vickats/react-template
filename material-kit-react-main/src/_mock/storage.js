import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
// import Button from 'src/theme/overrides/Button';

// i18n
import { useTranslation, Trans } from 'react-i18next';
import i18next from '../i18n';

// ----------------------------------------------------------------------

const storage = [...Array(12)].map((_, index) => ({
  id: faker.datatype.number({min:100,max: 10000}),
  // id: faker.datatype.uuid(),
  // avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  storage: faker.company.name(),
  subsidiary: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  // status: sample(['on transit', 'delayed', 'cancelled', 'delivered']),
  status: sample([i18next.t('page.tracking.table.row.status.cancelled'), i18next.t('page.tracking.table.row.status.ontransit'), i18next.t('page.tracking.table.row.status.delivered'), i18next.t('page.tracking.table.row.status.delayed')]),
  nf: sample(['waiting upload', 'file']),
}));

export default storage;
