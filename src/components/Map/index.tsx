'use client';

import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { renderToString } from 'react-dom/server';
import { PopupCustom } from '../PopupCustom';
import dynamic from 'next/dynamic';
import { IOrder } from '@/src/interfaces/order-interface';

type MapProps = {
   orders: IOrder[];
};

export function Map({ orders }: MapProps) {
   useEffect(() => {
      if (typeof window === 'undefined') return;

      import('leaflet').then((L) => {
         const map = L.map('map').setView(
            [orders[0].latitude, orders[0].longitude],
            13,
         );

         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
               '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
         }).addTo(map);

         orders.forEach((order) => {
            const marker = L.marker([order.latitude, order.longitude]).addTo(
               map,
            );
            const popup = renderToString(<PopupCustom order={order} />);
            marker.bindPopup(popup);
         });

         return () => {
            map.remove();
         };
      });
   }, [orders]);

   return (
      <div
         id='map'
         className='h-[500px] w-full rounded-xl shadow-xl'
      />
   );
}

export const DynamicMap = dynamic(() => Promise.resolve(Map), { ssr: false });
