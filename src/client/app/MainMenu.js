export default {
  name: 'Main menu',
  menuItems: [
    {
      title: 'Dashboard',
      link: null,
      children: [
        {
          title: 'Submenu 1',
          link: '#',
          children: [],
          icon: 'sidebar-sub-link fa fa-circle-thin'
        },
        {
          title: 'Submenu 2',
          link: '#',
          children: [],
          icon: 'sidebar-sub-link fa fa-circle-thin'
        },
        {
          title: 'Submenu 3',
          link: '#',
          children: [],
          icon: 'sidebar-sub-link fa fa-circle-thin'
        }
      ],
      icon: 'fa fa-signal fa-fw',
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
      title: 'Widgets',
      link: '/widgets',
      children: [],
      icon: 'fa fa-star fa-fw',
      notificationCount: null,
    }
  ]
};
