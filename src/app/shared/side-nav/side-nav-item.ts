import { IconDefinition, faChartLine, faDashboard, faHouse, faMoneyBill1Wave, faToolbox } from '@fortawesome/free-solid-svg-icons';

export interface NavItem {
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
    },
    {
      number: '2',
      name: 'Dashboard',
      icon: faDashboard,
    },
    {
      number: '3',
      name: 'Spending',
      icon: faMoneyBill1Wave,
    },
    {
      number: '4',
      name: 'Analytics',
      icon: faChartLine,
    },
    {
      number: '5',
      name: 'Settings',
      icon: faToolbox,
    },
  ];
}
