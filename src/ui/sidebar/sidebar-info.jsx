export const sidebarMenu = () => {
  return [
    {
      id: '1',
      name: 'Dashboard',
      subMenus: [],
      icon: null
    },
    {
      id: '2',
      name: 'Orders',
      icon: null,
      subMenus: [
        {
          id: '2.1',
          name: 'Orders In',
          subMenus: []
        },
        {
          id: '2.1',
          name: 'Orders Out',
          subMenus: []
        }
      ]
    },
    {
      id: '3',
      name: 'Finance',
      icon: null,
      subMenus: [
        {
          id: '3.1',
          name: 'Coins',
          subMenus: []
        },
        {
          id: '3.1',
          name: 'Echange rate',
          subMenus: []
        }
      ]
    }
  ]
}
