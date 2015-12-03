export default {
  name: 'Profile menu',
  menuItems: [
    {
      title: 'Profile',
      link: '/profile',
      children: [],
      icon: 'fa fa-user fa-fw',
    },
    {
      title: 'Messages',
      link: '#',
      children: [],
      icon: 'fa fa-envelope fa-fw',
      notificationCount: 4,
    },
    {
      title: 'Comments',
      link: '#',
      children: [],
      icon: 'fa fa-comment fa-fw',
      notificationCount: 19,
    },
    {
      title: 'Storage',
      link: '#',
      children: [],
      icon: 'fa fa-database fa-fw',
    },
    {
      title: 'Calendar',
      link: '#',
      children: [],
      icon: 'fa fa-calendar fa-fw',
    }
  ]
};
