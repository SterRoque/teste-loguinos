import {
   Handshake,
   LayoutDashboard,
   LayoutList,
   MapPin,
   Users,
} from 'lucide-react';

export const sidebarLinks = [
   {
      name: 'Maps',
      href: '/maps',
      icon: MapPin,
   },
   {
      name: 'Dashboard',
      href: '#',
      icon: LayoutDashboard,
   },
   {
      name: 'Colaboradores',
      href: '#',
      icon: Users,
   },
   {
      name: 'Parceiros',
      href: '#',
      icon: Handshake,
   },
   {
      name: 'Logística',
      href: '#',
      icon: LayoutList,
   },
];
