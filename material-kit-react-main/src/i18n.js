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
          signup:{
            tab:'Sign Up | System',
            greetings:'Hi, Welcome!',
            form:{
              title:'Get registered',
              account:'Already have an account ?',
              login:'Login',
              name:'Name',
              lastname:'Lastname',
              id:'Id',
              email:'Email address',
              phoneNumber:'Phone Number',
              phoneMobile:'Phone Number (Mobile)',
              country:'Country',
              address:'Address',
              complement:'Complement',
              subsidiary:'Subsidiary',
              position:'Position',
              helperText:'The access level will be defined by the administrator after registration approval.',
              passwordTitle:'Register your password',
              passwordRules:{
                text:'The password must contain:',
                rule1:'8 to 14 characters;',
                rule2:'At least 1 uppercase letter;',
                rule3:'At least 1 lowercase letter;',
                rule4:'At least 1 number',
              },
              password:'Password',
              confirmPassword:'Confirm password',
              btn:{
                register:'Register'
              }
            }
          },
          login:{
            tab:'Login | System',
            // title:'Login',
            greetings:'Hi, Welcome back !',
            form:{
              title:'Sign in',
              noaccount:'Dont have an account ?',
              register:'Get started',
              or:'or',
              email:'Email address',
              password:'Password',
              remember:'Remember me',
              forgot:'Forgot password ?',
              btn:{
                login:'Login'
              }
            }            
          },
          recover:{
            tab:'Recovery | System',
            // title:'Login',
            greetings:'Hi, Welcome !',
            form:{
              title:'Let\'s recover your account',
              text:'For safety, first we need to send a verification code to you email to validate your identification',
              textcode:'Please, paste the verification code to be validated:',
              email:'Email address',
              code:'Code',
              btn:{
                send:'Send',
                validate:'Validate'
              }
            }
          },
          dashboard: {
            tab: 'Dashboard | System',
            welcome: 'Hi, Welcome back',
            account:{
              home:'Dashboard',
              settings:'Settings',
              logout:'Logout',
            },
            notifications:{
              title:'Notifications',
              text1:'You have',
              text2:'unread messages',
              markread:'Mark all as read',
              new:'New',
              before:'Before that',
              viewall:'View all'
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
                    edit:'Edit',
                    delete:'Delete',
                    filter:{
                      title:'Filter by',
                      category:{
                        verify:{
                          title:'Verified',
                          yes:'Yes',
                          no:'No',   
                        },
                        status:{
                          title:'Status',
                          active:'Active',
                          inactive:'Inactive'
                        }
                      }
                    }
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
                      text:'The user was removed and no longer has access to the system and a new registration must be created to do so.',
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
                      permission:'Access level'
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
                  },
                  edit:{
                    title:'Edit user',
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
                      permission:'Access level'
                    },
                    btn:{
                      save:'Save changes',
                      cancel:'Cancel'
                    },
                    confirm:{
                      title:'Do you want to save this changes?',
                      btn:{
                        confirm:'Yes, save',
                        cancel:'Back'
                      }
                    },
                    success:{
                      title:'Changes saved',
                      text:'An email will be sent to user with the changes details.',
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
                  id:'ID',
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
                    filter:{
                      title:'Filter by',
                      category:{
                        status:{
                          title:'Status',
                          delivered:'Delivered',
                          ontransit:'On transit',
                          delayed:'Delayed',
                          cancelled:'Cancelled'
                          
                        },
                        invoice:{
                          title:'Invoice',
                          file:'File',
                          toupload:'Waiting file'
                        }
                      }
                    }
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
                      text:'The order #41555 delivery was confirmed. \n\n The storage and the subsidiary in charge will receive a notification about this order status and its details.',
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
                      text1:'The order', 
                      text2:'deletion was confirmed. \n\n The storage and the subsidiary in charge will receive a notification about this order status and its details.',
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
                  permission:'Access level'
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
          signup:{
            tab:'Cadastrar | System',
            greetings:'Olá, Bem-vindo!',
            form:{
              title:'Cadastre-se',
              account:'Já tem uma conta ?',
              login:'Entrar',
              name:'Nome',
              lastname:'Sobrenome',
              id:'Id',
              email:'Email',
              phoneNumber:'Telefone',
              phoneMobile:'Telefone celular',
              country:'País',
              address:'Endereço',
              complement:'Complemento',
              subsidiary:'Subsidiária',
              position:'Ocupação',
              helperText:'O nível de acesso será definido pelo administrador após aprovação do cadastro.',
              passwordTitle:'Crie sua senha',
              passwordRules:{
                text:'A senha deve conter:',
                rule1:'De 8 a 14 caracteres;',
                rule2:'Pelo menos 1 letra maiúscula;',
                rule3:'Pelo menos 1 letra minúscula;',
                rule4:'Pelo menos 1 número',
              },
              password:'Senha',
              confirmPassword:'Confirmar senha',
              btn:{
                register:'Cadastrar'
              }
            }
          },
          login:{
            tab:'Entrar | System',
            // title:'Login',
            greetings:'Olá, bem-vindo !',
            form:{
              title:'Entrar',
              noaccount:'Não tem uma conta ?',
              register:'Registre-se',
              or:'ou',
              email:'Endereço de email',
              password:'Senha',
              remember:'Lembrar-me',
              forgot:'Esqueceu a senha ?',
              btn:{
                login:'Entrar'
              }
            } 
          },
          recover:{
            tab:'Recuperação | System',
            // title:'Login',
            greetings:'Olá, bem-vindo !',
            form:{
              title:'Vamos recuperar a sua conta',
              text:'Por segurança, primeiro precisamos enviar um código de verificação para o seu email para validar sua identificação.',
              email:'Endereço de email',
              textcode:'Por favor, cole o código de verificação para ser validado:',
              code:'Código',
              btn:{
                send:'Enviar',
                validate:'Validar'
              }
            }
          },
          dashboard: {
            tab: 'Painel do Usuário | System',
            welcome: 'Olá, bem-vindo!',
            account:{
              home:'Painel do Usuário',
              settings:'Configurações',
              logout:'Encerrar sessão',
            },
            notifications:{
              title:'Notificações',
              text1:'Você tem',
              text2:'mensagens não lidas',
              markread:'Marcar tudo como lido',
              new:'Novo',
              before:'Antes disso',
              viewall:'ver tudo'
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
            notfound: 'Erro',
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
                    edit:'Editar',
                    delete:'Deletar',
                    filter:{
                      title:'Filtrar por',
                      category:{
                        verify:{
                          title:'Verificado',
                          yes:'Sim',
                          no:'Não',   
                        },
                        status:{
                          title:'Status',
                          active:'Ativo',
                          inactive:'Inativo'
                        }
                      }
                    }
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
                      text:'O usuário foi excluído e não tem mais acesso ao sistema e para tal deverá ser criado um novo cadastro.',
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
                      permission:'Nível de Acesso'
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
                  },
                  edit:{
                    title:'Editar usuário',
                    text:'Editar usuário',
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
                      permission:'Nível de Acesso'
                    },
                    btn:{
                      save:'Salvar mudanças',
                      cancel:'Cancelar'
                    },
                    confirm:{
                      title:'Deseja alterar este usuário ?',
                      btn:{
                        confirm:'Sim, alterar',
                        cancel:'Voltar'
                      }
                    },
                    success:{
                      title:'Usuário alterado',
                      text:'Um email será enviado ao usuário com os detalhes da alteração.',
                      btn:{
                       close:'Fechar' 
                      }
                    }
                  },
                }
              }
            },
            tracking: {
              tab:'Rastreamento',
              title:'Rastreamento',
              table:{
                head:{
                  select:'selecionado(s)',
                  id:'ID',
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
                    filter:{
                      title:'Filtrar por',
                      category:{
                        status:{
                          title:'Status',
                          delivered:'Entregue',
                          ontransit:'Em trânsito',
                          delayed:'Atrasado',
                          cancelled:'Cancelado'
                          
                        },
                        invoice:{
                          title:'Nota Fiscal',
                          file:'Arquivo',
                          toupload:'Aguardando arquivo'
                        }
                      }
                    }
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
                      text1:'A exclusão do pedido',
                      text2:'foi confirmada. \n\n O distribuidor e a filial encarregados irão receber uma notificação sobre o status desse pedido e seus detalhes.',
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
                  permission:'Nível de Acesso'
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
          signup:{
            tab:'Registrar | System',
            greetings:'Hola, bienvenido!',
            form:{
              title:'Registro',
              account:'¿Ya tienes una cuenta?',
              login:'Acceso',
              name:'Nombre',
              lastname:'Apellido',
              id:'Id',
              email:'Correo electrónico',
              phoneNumber:'Teléfono',
              phoneMobile:'Teléfono móvil',
              country:'País',
              address:'Direccíon',
              complement:'Complementar',
              subsidiary:'Subsidiaria',
              position:'Ocupación',
              helperText:'El nivel de acceso será definido por el administrador después de la aprobación del registro.',
              passwordTitle:'Registra tu contraseña',
              passwordRules:{
                text:'La contraseña debe contener:',
                rule1:'8 a 14 caracteres;',
                rule2:'Al menos 1 letra mayúscula;',
                rule3:'Al menos 1 letra minúscula;',
                rule4:'Al menos 1 número',
              },
              password:'Contraseña',
              confirmPassword:'Confirmar contraseña',
              btn:{
                register:'Registrar'
              }
            }
          },
          login:{
            tab:'Acceso | System',
            // title:'Login',
            greetings:'Hola, bienvenido !',
            form:{
              title:'Iniciar sesión',
              noaccount:'¿No tienes una cuenta?',
              register:'Registro',
              or:'o',
              email:'Correo electrónico',
              password:'Contraseña',
              remember:'Acuérdate de mí',
              forgot:'Has olvidado tu contraseña ?',
              btn:{
                login:'Acceso'
              }
            } 
          },
          recover:{
            tab:'Recuperación | System',
            // title:'Login',
            greetings:'¡Hola, bienvenido!',
            form:{
              title:'Recuperemos tu cuenta',
              text:'Por seguridad, primero debemos enviar un código de verificación a su correo electrónico para validar su identificación.',
              email:'Correo electrónico',
              textcode:'Por favor, pegue el código de verificación para ser validado:',
              code:'Código',
              btn:{
                send:'Enviar',
                validate:'Validar'
              }
            }
          },
          dashboard: {
            tab: 'Panel de usuario | System',
            welcome: 'Hola, bienvenido!',
            account:{
              home:'Panel de usuario',
              settings:'Ajustes',
              logout:'Cerrar sesión',
            },
            notifications:{
              title:'Notificaciones',
              text1:'Tú tienes',
              text2:'mensajes no leídos',
              markread:'Marcar todo como leido',
              new:'Nuevo',
              before:'Antes de que',
              viewall:'Verlo todo'
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
            notfound: 'Erro',
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
                    edit:'Editar',
                    delete:'Deletar',
                    filter:{
                      title:'Filtrar por',
                      category:{
                        verify:{
                          title:'Verificado',
                          yes:'Sí',
                          no:'No',   
                        },
                        status:{
                          title:'Status',
                          active:'Activo',
                          inactive:'Inactivo'
                        }
                      }
                    }                   
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
                      text:'El usuario ha sido eliminado y ya no tiene acceso al sistema y para ello deberá crear un nuevo registro.',
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
                      permission:'Nivel de acceso'
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
                  },
                  edit:{
                    title:'Editar usuario',
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
                      permission:'Nivel de acceso'
                    },
                    btn:{
                      save:'Guardar cambios',
                      cancel:'Cancelar'
                    },
                    confirm:{
                      title:'¿Quieres cambiar este usuario?',
                      btn:{
                        confirm:'Sí, alterar',
                        cancel:'Volver'
                      }
                    },
                    success:{
                      title:'Usuario cambiado',
                      text:'Se enviará un correo electrónico al usuario con los detalles del cambio.',
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
                  id:'ID',
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
                          title:'Status',
                          delivered:'Entregado',
                          ontransit:'En transito',
                          delayed:'Atrasado',
                          cancelled:'Cancelado'
                          
                        },
                        invoice:{
                          title:'Factura',
                          file:'Archivo',
                          toupload:'Archivo a cargar'
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
                      text:'Se ha confirmado la entrega del pedido. \n\n El distribuidor y la filial responsable recibirá una notificación sobre el estado de este pedido y sus detalles.',
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
                      text1:'Se ha confirmado la eliminación del pedido n.º',
                      text2: 'El distribuidor y la filial responsable recibirán una notificación sobre el estado de este pedido y sus detalles.',
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
                  permission:'Nivel de acceso'
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
