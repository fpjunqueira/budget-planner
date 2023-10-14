import {
  IconDefinition,
  faChartLine,
  faDashboard,
  faHouse,
  faMoneyBill1Wave,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons';

export interface NavItem {
  routeLink: string;
  number: string;
  name: string;
  icon: IconDefinition;
}

export function navData(): NavItem[] {
  return [
    {
      number: '1',
      name: 'Home',
      icon: faHouse,
      routeLink: 'home'
    },
    {
      number: '2',
      name: 'Dashboard',
      icon: faDashboard,
      routeLink: 'dashboard'
    },
    {
      number: '3',
      name: 'Spending',
      icon: faMoneyBill1Wave,
      routeLink: 'spending'
    },
    {
      number: '4',
      name: 'Analytics',
      icon: faChartLine,
      routeLink: 'analytics'
    },
    {
      number: '5',
      name: 'Settings',
      icon: faToolbox,
      routeLink: 'settings'
    },
  ];
}
