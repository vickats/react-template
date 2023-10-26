import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// i18n
import { useTranslation, Trans } from 'react-i18next';
import i18next from '../i18n';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  // avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  // status: sample(['active', 'disabled']),
  status: sample([i18next.t('page.user.table.row.status.active'), i18next.t('page.user.table.row.status.banned')]),
  role: sample([
    'Leader',
    'Manager',
    'Analyst',
    'Associate',
    'Partner',
  ])
  // faker.random.words(),
}));

export default users;
