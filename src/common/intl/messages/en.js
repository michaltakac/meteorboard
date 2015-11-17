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
    charts: {
      lineChart: {
        chartData: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'My First dataset',
              fillColor: 'rgba(220,220,220,0.2)',
              strokeColor: 'rgba(220,220,220,1)',
              pointColor: 'rgba(220,220,220,1)',
              pointStrokeColor: '#fff',
              pointHighlightFill: '#fff',
              pointHighlightStroke: 'rgba(220,220,220,1)',
              data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
              label: 'My Second dataset',
              fillColor: 'rgba(151,187,205,0.2)',
              strokeColor: 'rgba(151,187,205,1)',
              pointColor: 'rgba(151,187,205,1)',
              pointStrokeColor: '#fff',
              pointHighlightFill: '#fff',
              pointHighlightStroke: 'rgba(151,187,205,1)',
              data: [28, 48, 40, 19, 86, 27, 90]
            }
          ]
        },
        chartOptions: {
          responsive: true,
          ///Boolean - Whether grid lines are shown across the chart
          scaleShowGridLines : true,
          //String - Colour of the grid lines
          scaleGridLineColor : 'rgba(0,0,0,.05)',
          //Number - Width of the grid lines
          scaleGridLineWidth : 1,
          //Boolean - Whether to show horizontal lines (except X axis)
          scaleShowHorizontalLines: true,
          //Boolean - Whether to show vertical lines (except Y axis)
          scaleShowVerticalLines: true,
          //Boolean - Whether the line is curved between points
          bezierCurve : true,
          //Number - Tension of the bezier curve between points
          bezierCurveTension : 0.4,
          //Boolean - Whether to show a dot for each point
          pointDot : true,
          //Number - Radius of each point dot in pixels
          pointDotRadius : 4,
          //Number - Pixel width of point dot stroke
          pointDotStrokeWidth : 1,
          //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
          pointHitDetectionRadius : 20,
          //Boolean - Whether to show a stroke for datasets
          datasetStroke : true,
          //Number - Pixel width of dataset stroke
          datasetStrokeWidth : 2,
          //Boolean - Whether to fill the dataset with a colour
          datasetFill : true,
          //String - A legend template
          legendTemplate : '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
        }
      }
    },
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
    stubData: [
      {
        firstName: 'Mark',
        lastName: 'Otto',
        username: '@mdo'
      },
      {
        firstName: 'Jacob',
        lastName: 'Thornton',
        username: '@fat'
      },
      {
        firstName: 'Larry',
        lastName: 'Bird',
        username: '@twitter'
      },
    ],
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
