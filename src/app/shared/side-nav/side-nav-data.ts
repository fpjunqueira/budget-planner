import {
  IconDefinition,
  faChartLine,
  faCircleDollarToSlot,
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
      name: 'Cash Flow',
      icon: faCircleDollarToSlot,
      routeLink: 'flow'
    },
    {
      number: '3',
      name: 'Dashboard',
      icon: faDashboard,
      routeLink: 'dashboard'
    },
    {
      number: '4',
      name: 'Spending',
      icon: faMoneyBill1Wave,
      routeLink: 'spending'
    },
    {
      number: '5',
      name: 'Analytics',
      icon: faChartLine,
      routeLink: 'analytics'
    },
    {
      number: '6',
      name: 'Settings',
      icon: faToolbox,
      routeLink: 'settings'
    },
  ];
}
