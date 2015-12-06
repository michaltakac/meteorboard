export default {
  name: 'Main menu',
  menuItems: [
    {
      title: 'Dashboard',
      link: '/',
      children: [],
      icon: 'fa fa-home fa-fw',
      notificationCount: null,
    },
    {
      title: 'UI Elements',
      link: null,
      children: [
        {
          title: 'Buttons',
          link: '/buttons',
          children: [],
          icon: 'sidebar-sub-link fa fa-circle-thin'
        },
        {
          title: 'Typography',
          link: '/typography',
          children: [],
          icon: 'sidebar-sub-link fa fa-circle-thin'
        }
      ],
      icon: 'fa fa-desktop fa-fw',
      notificationCount: 19,
    },
    {
      title: 'Charts',
      link: '/charts',
      children: [],
      icon: 'fa fa-bar-chart fa-fw',
      notificationCount: null,
    },
    {
      title: 'Forms',
      link: '/forms',
      children: [],
      icon: 'fa fa-pencil-square-o fa-fw',
      notificationCount: null,
    },
    {
      title: 'Tables',
      link: '/tables',
      children: [],
      icon: 'fa fa-table fa-fw',
      notificationCount: null,
    },
    {
      title: 'Widgets',
      link: '/widgets',
      children: [],
      icon: 'fa fa-star fa-fw',
      notificationCount: null,
    }
  ]
};
