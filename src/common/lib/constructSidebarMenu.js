// Function for constructing sidebar menus.
export default function constructSidebarMenu(title, link, children = [], icon = null, isActive = false, isChildActive = false) {
  const uuid =  Math.random();

  return {
    uuid: uuid,
    title: () => title,
    isActive: () => isActive,
    isChildActive: () => isChildActive,
    link: () => link,
    icon: () => icon,
    hasChild: () => !!children.length,
    children: () => children
  };
}
