export default {
  app: {
    footer: {
      madeByHtml: 'made by <a href="https://twitter.com/steida">steida</a>'
    },
    links: {
      home: 'Home',
      login: 'Login',
      me: 'Me (protected)',
      todos: 'Todos'
    }
  },
  auth: {
    form: {
      button: {
        login: 'Login',
        signup: 'Sign up'
      },
      hint: 'Hint: pass1',
      legend: 'Login / Sign Up',
      placeholder: {
        email: 'your@email.com',
        password: 'password'
      },
      wrongPassword: 'Wrong password.'
    },
    logout: {
      button: 'Logout'
    },
    login: {
      title: 'Login'
    },
    validation: {
      email: 'Email address is not valid.',
      password: 'Password must contain at least {minLength} characters.',
      required: `Please fill out {prop, select,
        email {email}
        password {password}
        other {'{prop}'}
      }.`
    }
  },
  forms: {
    basic: {
      email: {
        label: 'Email address:',
        placeholder: 'Email address'
      },
      password: {
        label: 'Password',
        placeholder: 'Password'
      },
      checkbox: {
        label: 'Check me out'
      },
      button: 'Submit'
    },
    description: 'Description from Intl...',
    inline: {
      email: {
        placeholder: 'Enter email'
      },
      password: {
        placeholder: 'Password'
      },
      button: 'Sign in'
    },
    horizontal: {
      email: {
        label: 'Email',
        placeholder: 'Email'
      },
      password: {
        label: 'Password',
        placeholder: 'Password'
      },
      checkbox: {
        label: 'Remember me'
      },
      button: 'Sign in'
    },
    title: 'Forms'
  },
  home: {
    description: 'Home page of Meteorboard admin panel.',
    menu: [
      {
        link: '/',
        title: 'Menu 1'
      },
      {
        link: '/',
        title: 'Menu 2'
      },
      {
        link: '/',
        title: 'Menu 3'
      },
      {
        link: '/',
        title: 'Menu 4'
      }
    ],
    infoHtml: '<a href="https://github.com/este/este">Este.js</a> dev stack.',
    title: 'Meteorboard',
    toCheck: {
      andMuchMore: 'And much more :-)',
      h2: 'Things to Check',
      isomorphicPage: 'Isomorphic page',
      // This is example of localized ordered list.
      list: [
        {
          key: 'source',
          text: 'Server rendering'
        },
        {
          key: 'development',
          text: 'Hot reload for styles, components, etc.'
        },
        {
          key: 'production',
          text: 'Performance and size of production build (<code>gulp -p</code>)'
        }
      ]
    }
  },
  me: {
    title: 'Me',
    welcome: 'Hi {email}. This is your secret page.'
  },
  notFound: {
    continueMessage: 'Continue here please.',
    header: 'This page isn\'t available',
    message: 'The link may be broken, or the page may have been removed.',
    title: 'Page Not Found'
  },
  todos: {
    add100: 'Add 100 Todos',
    clearAll: 'Clear All',
    clearCompleted: 'Clear Completed',
    empty: `It's rather empty here...`,
    leftList: `{size, plural,
      =0 {Nothing, enjoy}
      one {You are almost done}
      other {You have {size} tasks to go}
    }`,
    newTodoPlaceholder: 'What needs to be done?',
    title: 'Todos'
  },
  profile: {
    title: 'Profile'
  },
  settings: {
    title: 'Settings'
  },
  widgets: {
    description: 'Description from Intl...',
    dummyText: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.',
    title: 'Widgets and Boxes',
  },
};
