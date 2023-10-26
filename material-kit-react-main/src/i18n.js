import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-http-backend';

i18n
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          // description: {
          //   part1: 'Edit <1>src/App.js</1> and save to reload.',
          //   part2: 'Learn React',
          // },
          dashboard: {
            tab: 'Dashboard | System',
            welcome: 'Hi, Welcome back',
            account:{
              home:'Dashboard',
              settings:'Settings',
              logout:'Logout',
            },
            track: {
              transit: {
                ontime: 'In transit on time',
                delay: 'In transit with delay',
              },
              delivered: {
                ontime: 'Delivered on time',
                delay: 'Delivered with delay',
              },
            },
            news: {
              title: 'News update',
            },
            orders: {
              title: 'Order timeline',
            },
          },
          sidemenu: {
            dashboard: 'dashboard',
            user: 'user',
            tracking: 'tracking',
            settings: 'settings',
            product: 'product',
            blog: 'blog',
            login: 'login',
            signup: 'signup',
            recover: 'recover',
            verifycode: 'verify code',
            notfound: 'not found',
          },
          page: {
            user: {
              tab: 'User | System',
              title: 'User',
              btn: {
                newuser: 'New User',
              },
              table:{
                head:{
                  select:'selected',
                  name: 'Name',
                  company: 'Company',
                  role: 'Role',
                  verified: 'Verified',
                  status: 'Status',
                },
                row:{
                  status:{
                    active:'active',
                    banned:'disabled',
                  },
                  // status: ['active', 'disabled'],
                  verified:{
                    yes:'yes',
                    no: 'no'
                  },
                  // verified:['yes','no'],
                  search:{
                    placeholder:'Looking for someone ?',
                    notfound:'Not Found',
                    noresults:'No results found for',
                    try:'Try checking for typos or using complete words.',
                  },
                  options:{
                    share:'Share',
                    excel:'Download Excel',
                  }
                },
                pagination:{
                  title: 'Results per page:'
                }
              },
            },
            tracking: {
              tab:'Tracking | System',
              title:'Tracking',
              table:{
                head:{
                  select:'selected',
                  storage:'Storage',
                  subsidiary:'Subsidiary',
                  status:'Status',
                  nf:'Invoice',
                  deliveryVerification:'Delivery Verification'
                },
                row:{
                  status:{
                    cancelled:'Cancelled',
                    ontransit:'On Transit',
                    delivered:'Delivered',
                    delayed:'Delayed',
                  },
                  link:'file',
                  btn:{
                    upload:'Upload File',
                    finished:'Concluded',
                    confirm:'Confirm'
                  },
                  search:{
                    placeholder:'Looking for something ?',
                    notfound:'Not Found',
                    noresults:'No results found for',
                    try:'Try checking for typos or using complete words.',
                  },
                  options:{
                    share:'Share',
                    excel:'Download Excel',
                  }
                },
                pagination:{
                  title: 'Results per page:'
                }
              },
            },
            settings:{
              tab:'Settings | System',
              title:'Settings',
              myaccount:{
                tab:'My Account',
                fields:{
                  name:'Name',
                  lastname:'Lastname',
                  email:'Email',
                  phoneNumber:'Phone Number',
                  phoneMobile:'Phone Mobile',
                  country:'Country',
                  address:'Address',
                  complement:'Complement',
                  subsidiary:'Subsidiary',
                  position:'Position',
                  permission:'Permission'
                }
              },
              notifications:{
                tab:'Notifications',
              },
              privacy:{
                tab:'Privacy & Security',
              },
              helperText:'Some information are managed by your company. To change it, contact your support.',
              btn:{
                save:'Save'
              }
            }            
          },
        },
      },
      pt: {
        translation: {
          // description: {
          //   part1: 'Configure <1>src/App.js</1> e salve para recarregar.',
          //   part2: 'Aprenda React',
          // },
          dashboard: {
            tab: 'Painel do Usuário | System',
            welcome: 'Olá, bem-vindo!',
            account:{
              home:'Painel do Usuário',
              settings:'Configurações',
              logout:'Encerrar sessão',
            },
            track: {
              transit: {
                ontime: 'Em trânsito no prazo',
                delay: 'Em trânsito com atraso',
              },
              delivered: {
                ontime: 'Entregue no prazo',
                delay: 'Entregue com atraso',
              },
            },
            news: {
              title: 'Últimas atualizações',
            },
            orders: {
              title: 'Histórico de Pedidos',
            },
          },
          sidemenu: {
            dashboard: 'painel do usuário',
            user: 'usuário',
            tracking: 'monitoramento',
            settings: 'configurações',
            product: 'produtos',
            blog: 'blog',
            login: 'entrar',
            signup: 'cadastrar',
            recover: 'recuperar',
            verifycode: 'verificar',
            notfound: 'ops!',
          },
          page: {
            user: {
              tab: 'Usuário',
              title: 'Usuário',
              btn: {
                newuser: 'Novo Usuário',
              },
              table:{
                head:{
                  select:'selecionado(s)',
                  name: 'Nome',
                  company: 'Empresa',
                  role: 'Função',
                  verified: 'Verificado',
                  status: 'Status',
                },
                row:{
                  status:{
                    active:'ativo',
                    banned:'desativado',
                  },
                  // status: ['ativo', 'desativado'],
                  verified:{
                    yes:'sim',
                    no: 'não'
                  },
                  // verified:['sim','não'],
                  search:{
                    placeholder:'Procurando alguém ?',
                    notfound:'Não encontrado',
                    noresults:'Nenhum resultado foi encontrado para',
                    try:'Verifique se há erros de digitação ou palavras incompletas.',
                  },
                  options:{
                    share:'Compartilhar',
                    excel:'Baixar Excel',
                  }
                },
                pagination:{
                  title: 'Resultados por página:'
                }
              }
            },
            tracking: {
              tab:'Controle',
              title:'Controle',
              table:{
                head:{
                  select:'selecionado(s)',
                  storage:'Distribuidor',
                  subsidiary:'Filial',
                  status:'Status',
                  nf:'Nota Fiscal',
                  deliveryVerification:'Confirmação de Entrega'
                },
                row:{
                  status:{
                    cancelled:'Cancelado',
                    ontransit:'Em transito',
                    delivered:'Entregue',
                    delayed:'Atrasado',
                  },
                  link:'arquivo',
                  btn:{
                    upload:'Carregar arquivo',
                    finished:'Finalizado',
                    confirm:'Confirmar'
                  },
                  search:{
                    placeholder:'Procurando algo ?',
                    notfound:'Não encontrado',
                    noresults:'Nenhum resultado foi encontrado para',
                    try:'Verifique se há erros de digitação ou palavras incompletas.',
                  },
                  options:{
                    share:'Compartilhar',
                    excel:'Baixar Excel',
                  }
                },
                pagination:{
                  title: 'Resultados por página:'
                }
              }            
            },
            settings:{
              tab:'Configurações | System',
              title:'Configurações',
              myaccount:{
                tab:'Minha Conta',
                fields:{
                  name:'Nome',
                  lastname:'Sobrenome',
                  email:'Email',
                  phoneNumber:'Telefone',
                  phoneMobile:'Celular',
                  country:'País',
                  address:'Endereço',
                  complement:'Complemento',
                  subsidiary:'Filial',
                  position:'Ocupação',
                  permission:'Acesso'
                }
              },
              notifications:{
                tab:'Notificações',
              },
              privacy:{
                tab:'Privacidade & Segurança',
              },
              helperText:'Algumas informações são gerenciadas pela sua empresa. Para alterá-las, entre em contato com seu suporte.',
              btn:{
                save:'Salvar'
              }
            },            
          },
        },
      },
      es: {
        translation: {
          // description: {
          //   part1: 'Configure <1>src/App.js</1> y guárdelo para recargarlo.',
          //   part2: 'Aprender React',
          // },
          dashboard: {
            tab: 'Panel de usuario | System',
            welcome: 'Hola, bienvenido!',
            account:{
              home:'Panel de usuario',
              settings:'Ajustes',
              logout:'Cerrar sesión',
            },
            track: {
              transit: {
                ontime: 'En tránsito a tiempo',
                delay: 'En tránsito con retraso',
              },
              delivered: {
                ontime: 'Entregado a tiempo',
                delay: 'Entregado con retraso',
              },
            },
            news: {
              title: 'Últimas actualizaciones',
            },
            orders: {
              title: 'Historial de pedidos',
            },
          },
          sidemenu: {
            dashboard: 'panel de usuario',
            user: 'usuario',
            tracking: 'rastreo',
            settings: 'ajustes',
            product: 'productos',
            blog: 'blog',
            login: 'acceso',
            signup: 'registrar',
            recover: 'recuperar',
            verifycode: 'verificar',
            notfound: 'ops!',
          },
          page: {
            user: {
              tab: 'Usuario',
              title: 'Usuario',
              btn: {
                newuser: 'Nuevo Usuario',
              },
              table:{
                head:{
                  select:'seleccionado(s)',
                  name: 'Nombre',
                  company: 'Empresa',
                  role: 'Función',
                  verified: 'Verificado',
                  status: 'Status',
                },
                row:{
                  status:{
                    active:'activo',
                    banned:'desactivado',
                  },
                  // status: ['activo', 'desactivado'],
                  verified:{
                    yes:'si',
                    no: 'no'
                  },
                  // verified:['si','no'],
                  search:{
                    placeholder:'Buscando a alguien ?',
                    notfound:'No encontrado',
                    noresults:'No se encontraron resultados para',
                    try:'Compruebe si hay errores tipográficos o palabras incompletas.',
                  },
                  options:{
                    share:'Compartir',
                    excel:'Descargar Excel',
                  }
                },
                pagination:{
                  title: 'Resultados por página:'
                }
              }
            },
            tracking: {
              tab:'Rastreo',
              title:'Rastreo',
              table:{
                head:{
                  select:'seleccionado(s)',
                  storage:'Distribuidor',
                  subsidiary:'Subsidiario',
                  status:'Status',
                  nf:'Factura',
                  deliveryVerification:'Confirmacion de Envio'
                },
                row:{
                  status:{
                    cancelled:'Cancelado',
                    ontransit:'En transito',
                    delivered:'Entregado',
                    delayed:'Atrasado',
                  },
                  link:'archivo',
                  btn:{
                    upload:'Subir Archivo',
                    finished:'Finalizado',
                    confirm:'Confirmar'
                  },
                  search:{
                    placeholder:'Buscando algo ?',
                    notfound:'No encontrado',
                    noresults:'No se encontraron resultados para',
                    try:'Compruebe si hay errores tipográficos o palabras incompletas.',
                  },
                  options:{
                    share:'Compartir',
                    excel:'Descargar Excel',
                  }
                },
                pagination:{
                  title: 'Resultados por página:'
                }
              }
            },
            settings:{
              tab:'Ajustes | System',
              title:'Ajustes',
              myaccount:{
                tab:'Mi Cuenta',
                fields:{
                  name:'Nombre',
                  lastname:'Apellido',
                  email:'Email',
                  phoneNumber:'Teléfono',
                  phoneMobile:'Teléfono móvil',
                  country:'País',
                  address:'Direccíon',
                  complement:'Complementar',
                  subsidiary:'Subsidiaria',
                  position:'Ocupación',
                  permission:'Acceso'
                }
              },
              notifications:{
                tab:'Notificaciones',
              },
              privacy:{
                tab:'Privacidad y Seguridad',
              },
              helperText:'Parte de la información es gestionada por su empresa. Para cambiarlo, contacta con tu soporte.',
              btn:{
                save:'Guardar'
              }
            }
          },
        },
      },
    },
  });

export default i18n;
