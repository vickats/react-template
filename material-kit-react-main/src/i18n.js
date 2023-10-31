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
                },
                modal:{
                  delete:{
                    title:'Confirm deletion',
                    text:'Do you want to confirm delivery? \n\n After confirmation, this user will no longer have access and the operator is responsible for any discrepancies.',
                    btn:{
                      confirm:'Yes, I confirm',
                      close:'No, I do not confirm '
                    },
                    success:{
                      title:'Deletion confirmed',
                      text:'The user was removed. \n\n The user no longer has access to the system and a new registration must be created to do so.',
                      btn:{
                        close:'Close'
                      }
                    }
                  },
                  create:{
                    title:'Create new user',
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
                    },
                    btn:{
                      create:'Create user',
                      cancel:'Cancel'
                    },
                    confirm:{
                      title:'Do you want to create this user ?',
                      btn:{
                        confirm:'Yes, create',
                        cancel:'Back'
                      }
                    },
                    success:{
                      title:'User created',
                      text:'A verification link will be sent to the registered email.',
                      btn:{
                       close:'Close' 
                      }
                    }
                  }
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
                    edit:'Edit',
                    delete:'Delete',
                  }
                },
                pagination:{
                  title: 'Results per page:'
                },
                modal:{
                  nf:{
                    title:'Invoice',
                    options:{
                      share:'Share',
                      print:'Print'
                    },
                    btn:{
                      close:'Close'
                    }
                  },
                  confirm:{
                    title:'Confirm delivery',
                    text:'Do you want to confirm delivery? \n\n After confirmation, this tracking will be closed and the operator is responsible for any discrepancies.',
                    btn:{
                      confirm:'Yes, I confirm',
                      close:'No, I do not confirm '
                    },
                    success:{
                      title:'Delivery confirmed',
                      text:'The order #41555 delivery was confirmed. \n\n The subsidiary in charge will receive a notification about this order status and its details.',
                      btn:{
                        close:'Close'
                      }
                    }
                  },
                  delete:{
                    title:'Confirm deletion',
                    text:'Do you want to confirm delivery? \n\n After confirmation, this tracking will be closed and the operator is responsible for any discrepancies.',
                    btn:{
                      confirm:'Yes, I confirm',
                      close:'No, I do not confirm '
                    },
                    success:{
                      title:'Deletion confirmed',
                      text:'The order #41555 deletion was confirmed. \n\n The storage and the subsidiary in charge will receive a notification about this order status and its details.',
                      btn:{
                        close:'Close'
                      }
                    }
                  }                 
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
                section:{
                  whereNotify:{
                    title:'Where to notify me',
                    text:'Choose the best way to receive notifications',
                    options:{
                      all:'All options',
                      email:'Email',
                      desktop:'Desktop Push',
                      mobile:'Mobile/App Push'
                    }
                  },
                  tasks:{
                    title:'Tasks',
                    text:'Receive the most important tasks updates, for you or your team',
                    options:{
                      all:'All options',
                      owner:{
                        you:'Assigned to you',
                        team:'Assigned to your team'
                      },
                      expiration:{
                        title:'Expiration',
                        twodays:'2 days before',
                        fivedays:'5 days before',
                      },
                      status:{
                        title:'Status',
                        open:'Open',
                        processing:'Ongoing',
                        expired:'Expired',
                        done:'Done',
                      }
                    }
                  },
                  tracking:{
                    title:'Tracking',
                    text:'Track your orders invoice and/or status',
                    options:{
                      all:'All options',
                      bystatus:{
                        title:'By Status',
                        ontransit:'On transit',
                        delayed:'Delayed',
                        delivered:'Delivered',
                        cancelled:'Cancelled'
                      },
                      invoice:{
                        title:'Invoice',
                        invoice:'Invoice update',
                      }
                    }
                  },
                  user:{
                    title:'User',
                    text:'Follow up the user activities organization',
                    options:{
                      all:'All options',
                      new:'New Users',
                      info:'Information update',
                      deletion:'Users deletion',
                      verification:'User verification',
                      status:'Status update'
                    }
                  }
                }
              },
              privacy:{
                tab:'Privacy & Security',
                options:{
                  all:'All options',
                  store:'Allow my information to be stored',
                  share:'Allow my information to be shared with third-party partners',
                  location:'Allow my location to be access when asked',
                  camera:'Allow my camera to be access when asked',
                  mic:'Allow my microphone to be access when asked',
                  docs:'Allow my documents/images to be access when asked'
                }
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
                },
                modal:{
                  delete:{
                    title:'Confirmar exclusão',
                    text:'Deseja confirmar essa exclusão ? \n\n Após a confirmação, esse usuário não terá mais acesso e é de responsabilidade do operador qualquer divergência.',
                    btn:{
                      confirm:'Sim, confirmar',
                      close:'Não, não confirmar'
                    },
                    success:{
                      title:'Exclusão confirmada',
                      text:'O usuário foi excluído. \n\n O usuário não tem mais acesso ao sistema e para tal deverá ser criado um novo cadastro.',
                      btn:{
                        close:'Fechar'
                      }
                    }
                  },
                  create:{
                    title:'Criar novo usuário',
                    text:'Criar novo usuário',
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
                    },
                    btn:{
                      create:'Criar usuário',
                      cancel:'Cancelar'
                    },
                    confirm:{
                      title:'Deseja criar este usuário ?',
                      btn:{
                        confirm:'Sim, criar',
                        cancel:'Voltar'
                      }
                    },
                    success:{
                      title:'Usuário criado',
                      text:'Será enviado um link de verificação para o email informado.',
                      btn:{
                       close:'Fechar' 
                      }
                    }
                  } 
                }
              }
            },
            tracking: {
              tab:'Rastreamento',
              title:'Rastreamento',
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
                    edit:'Editar',
                    delete:'Deletar',
                  }
                },
                pagination:{
                  title: 'Resultados por página:'
                },
                modal:{
                  nf:{
                    title:'Nota Fiscal',
                    options:{
                      share:'Compartilhar',
                      print:'Imprimir'
                    },
                    btn:{
                      close:'Fechar'
                    }
                  },
                  confirm:{
                    title:'Confirmar entrega',
                    text:'Deseja confirmar essa entrega ? \n\n Após a confirmação, esse rastreamento será encerrado e é de responsabilidade do operador qualquer divergência.',
                    btn:{
                      confirm:'Sim, confirmar',
                      close:'Não confirmar '
                    },
                    success:{
                      title:'Entrega confirmada',
                      text:'A entrega do pedido #41555 foi confirmada. \n\n O distribuidor e a filial encarregados irá receber uma notificação sobre o status desse pedido e seus detalhes.',
                      btn:{
                        close:'Fechar'
                      }
                    }
                  },
                  delete:{
                    title:'Confirmar exclusão',
                    text:'Deseja confirmar essa exclusão ? \n\n Após a confirmação, esse rastreamento será encerrado e é de responsabilidade do operador qualquer divergência.',
                    btn:{
                      confirm:'Sim, confirmar',
                      close:'Não, não confirmar'
                    },
                    success:{
                      title:'Exclusão confirmada',
                      text:'A exclusão do pedido #41555 foi confirmada. \n\n O distribuidor e a filial encarregados irão receber uma notificação sobre o status desse pedido e seus detalhes.',
                      btn:{
                        close:'Fechar'
                      }
                    }
                  }             
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
                section:{
                  whereNotify:{
                    title:'Onde me notificar',
                    text:'Escolha onde receber suas notificações',
                    options:{
                      all:'Todas as opções',
                      email:'Email',
                      desktop:'Notificação Desktop',
                      mobile:'Notificação Mobile/App'
                    }
                  },
                  tasks:{
                    title:'Tarefas',
                    text:'Receba as atualizações de tarefas mais importantes, para você ou sua equipe',
                    options:{
                      all:'Todas as opções',
                      owner:{
                        you:'Atribuído a você',
                        team:'Atribuído ao seu time'
                      },
                      expiration:{
                        title:'Vencimento',
                        twodays:'2 dias antes',
                        fivedays:'5 dias antes',
                      },
                      status:{
                        title:'Status',
                        open:'Aberto',
                        processing:'Em andamento',
                        expired:'Expirado',
                        done:'Concluído',
                      }
                    }
                  },
                  tracking:{
                    title:'Rastreamento',
                    text:'Rastreie a nota fiscal e/ou o status do seu pedido.',
                    options:{
                      all:'Todas as opções',
                      bystatus:{
                        title:'Por status',
                        ontransit:'Em trânsito',
                        delayed:'Atrasado',
                        delivered:'Entregue',
                        cancelled:'Cancelado'
                      },
                      invoice:{
                        title:'Nota Fiscal',
                        invoice:'Atualização de nota fiscal',
                      }
                    }
                  },
                  user:{
                    title:'Usuário',
                    text:'Acompanhe as atualizações das atividades dos usuários',
                    options:{
                      all:'Todas as opções',
                      new:'Novos usuários',
                      info:'Informações atualizadas',
                      deletion:'Remoção de usuários',
                      verification:'Verificação de usuários',
                      status:'Status atualizados'
                    }
                  }
                }
              },
              privacy:{
                tab:'Privacidade & Segurança',
                options:{
                  all:'Todas as opções',
                   store:'Permitir que minhas informações sejam armazenadas',
                   share:'Permitir que minhas informações sejam compartilhadas com parceiros terceirizados',
                   location:'Permitir que minha localização seja acessada quando solicitado',
                   camera:'Permitir que minha câmera seja acessada quando solicitado',
                   mic:'Permitir que meu microfone seja acessado quando solicitado',
                   docs:'Permitir que meus documentos/imagens sejam acessados quando solicitado'
                }
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
                },
                modal:{
                  delete:{
                    title:'Confirmar eliminacíon',
                    text:'¿Quieres confirmar esta eliminación? \n\nDespués de la confirmación, este usuario ya no tendrá acceso y cualquier discrepancia será responsabilidad del operador.',
                    btn:{
                      confirm:'Sí, confirmar',
                      close:'No confirmar '
                    },
                    success:{
                      title:'Eliminacíon confirmada',
                      text:'El usuario ha sido eliminado. \n\nEl usuario ya no tiene acceso al sistema y para ello deberá crear un nuevo registro.',
                      btn:{
                        close:'Cerrar'
                      }
                    }
                  },
                  create:{
                    title:'Crear nuevo usuario',
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
                    },
                    btn:{
                      create:'Crear usuario',
                      cancel:'Cancelar'
                    },
                    confirm:{
                      title:'¿Quieres crear este usuario?',
                      btn:{
                        confirm:'Sí, crear',
                        cancel:'Volver'
                      }
                    },
                    success:{
                      title:'Usuario creado',
                      text:'Se enviará un enlace de verificación al correo electrónico proporcionado.',
                      btn:{
                       close:'Cerrar' 
                      }
                    }
                  } 
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
                    edit:'Editar',
                    delete:'Borrar',
                    filter:{
                      title:'Filtrar por',
                      category:{
                        status:{
                          title:'',
                          delivered:'',
                          ontransit:'',
                          delayed:'',
                          cancelled:''
                          
                        },
                        invoice:{
                          title:'',
                          file:'',
                          toupload:''
                        }
                      }
                    }
                  }
                },
                pagination:{
                  title: 'Resultados por página:'
                },
                modal: {
                  nf:{
                    title:'Factura',
                    options:{
                      share:'Compartir',
                      print:'Imprimir'
                    },
                    btn:{
                      close:'Cerrar'
                    }
                  },
                  confirm:{
                    title:'Confirmar entrega',
                    text:'¿Quieres confirmar esta entrega? \n\n Después de la confirmación, este rastreo se cerrará y el operador será responsable de cualquier discrepancia.',
                    btn:{
                      confirm:'Sí, confirmar',
                      close:'No confirmar '
                    },
                    success:{
                      title:'Entrega confirmada',
                      text:'Se ha confirmado la entrega del pedido n.º 41555. \n\n El distribuidor responsable recibirá una notificación sobre el estado de este pedido y sus detalles.',
                      btn:{
                        close:'Cerrar'
                      }
                    }
                  },
                  delete:{
                    title:'Confirmar eliminacíon',
                    text:'¿Quieres confirmar esta eliminación? \n\nDespués de la confirmación, este seguimiento se cerrará y cualquier discrepancia será responsabilidad del operador.',
                    btn:{
                      confirm:'Sí, confirmar',
                      close:'No confirmar '
                    },
                    success:{
                      title:'Eliminacíon confirmada',
                      text:'Se ha confirmado la eliminación del pedido n.º 41555. \n\nEl distribuidor responsable y la filial recibirán una notificación sobre el estado de este pedido y sus detalles.',
                      btn:{
                        close:'Cerrar'
                      }
                    }
                  }     
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
                section:{
                  whereNotify:{
                    title:'Donde notificarme',
                    text:'Elige dónde recibir tus notificaciones',
                    options:{
                      all:'Todas las opciones',
                      email:'Email',
                      desktop:'Notificación Desktop',
                      mobile:'Notificación Mobile/App'
                    }
                  },
                  tasks:{
                    title:'Tareas',
                    text:'Reciba las actualizaciones de tareas más importantes, para usted o su equipo',
                    options:{
                      all:'Todas las opciones',
                      owner:{
                        you:'Asignado a ti',
                        team:'Asignado a tu equipo'
                      },
                      expiration:{
                        title:'Vencimiento',
                        twodays:'2 días antes',
                        fivedays:'5 días antes',
                      },
                      status:{
                        title:'Status',
                        open:'Abierto',
                        processing:'En curso',
                        expired:'Caducado',
                        done:'Concluido',
                      }
                    }
                  },
                  tracking:{
                    title:'Rastreo',
                    text:'Rastrear la factura y/o el estado de sus pedidos',
                    options:{
                      all:'Todas as opciones',
                      bystatus:{
                        title:'Por status',
                        ontransit:'En transito',
                        delayed:'Atrasado',
                        delivered:'Entregado',
                        cancelled:'Cancelado'
                      },
                      invoice:{
                        title:'Factura',
                        invoice:'Atualização de factura',
                      }
                    }
                  },
                  user:{
                    title:'Usuario',
                    text:'Siga las actualizaciones de la actividad del usuario',
                    options:{
                      all:'Todas las opciones',
                      new:'Nuevos usuarios',
                      info:'Información actualizada',
                      deletion:'Eliminación de usuario',
                      verification:'Verificación de usuario',
                      status:'Status actualizado'
                    }
                  }
                }
              },
              privacy:{
                tab:'Privacidad y Seguridad',
                options:{
                  all:'Todas las opciones',
                  store:'Permitir que mi información sea almacenada',
                  share:'Permitir que mi información se comparta con socios externos',
                  location:'Permitir acceso a mi ubicación cuando se me solicite',
                  camera:'Permitir acceso a mi cámara cuando se me solicite',
                  mic:'Permitir acceso a mi micrófono cuando se me solicite',
                  docs:'Permitir el acceso a mis documentos/imágenes cuando se me solicite'
                }
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
