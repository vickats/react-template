// i18n
import { useTranslation, Trans, withTranslation } from 'react-i18next';
import i18n from '../../../i18n';

// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------
const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: i18n.t('sidemenu.dashboard'),
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: i18n.t('sidemenu.user'),
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: i18n.t('sidemenu.tracking'),
    path: '/dashboard/tracking',
    icon: icon('ic_analytics'),
  },
  {
    title: i18n.t('sidemenu.settings'),
    path: '/dashboard/settings',
    icon: icon('ic_lock'),
  },
  {
    title: i18n.t('sidemenu.product'),
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: i18n.t('sidemenu.blog'),
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: i18n.t('sidemenu.login'),
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: i18n.t('sidemenu.signup'),
    path: '/signup',
    icon: icon('ic_user'),
  },
  {
    title: i18n.t('sidemenu.recover'),
    path: '/recover',
    icon: icon('ic_lock'),
  },
  {
    title: i18n.t('sidemenu.verifycode'),
    path: '/verifycode',
    icon: icon('ic_lock'),
  },
  {
    title: i18n.t('sidemenu.notfound'),
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
