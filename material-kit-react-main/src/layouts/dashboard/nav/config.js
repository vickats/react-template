// i18n
import { useTranslation, Trans, withTranslation } from 'react-i18next';
import i18n from '../../../i18n';

// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------
const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    // title: <Trans i18nKey="sidemenu.dashboard" />,
    // title: t('sidemenu.dashboard'),
    // title: i18n.t(),
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    // title: <Trans i18nKey="sidemenu.user" />,
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'tracking',
    // title: <Trans i18nKey="sidemenu.tracking" />,
    path: '/dashboard/tracking',
    icon: icon('ic_analytics'),
  },
  {
    title: 'settings',
    // title: <Trans i18nKey="sidemenu.settings" />,
    path: '/dashboard/settings',
    icon: icon('ic_lock'),
  },
  {
    title: 'product',
    // title: <Trans i18nKey="sidemenu.product" />,
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    // title: <Trans i18nKey="sidemenu.blog" />,
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    // title: <Trans i18nKey="sidemenu.login" />,
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'signup',
    // title: <Trans i18nKey="sidemenu.signup" />,
    path: '/signup',
    icon: icon('ic_user'),
  },
  {
    title: 'recover',
    // title: <Trans i18nKey="sidemenu.recover" />,
    path: '/recover',
    icon: icon('ic_lock'),
  },
  {
    title: 'verifycode',
    // title: <Trans i18nKey="sidemenu.verifycode" />,
    path: '/verifycode',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    // title: <Trans i18nKey="sidemenu.notfound" />,
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
