'use client';
import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { renderToString } from 'react-dom/server';
import { PopupCustom } from '../PopupCustom';
import dynamic from 'next/dynamic';
import { IOrder } from '@/src/interfaces/order-interface';
import L from 'leaflet';
type MapProps = {
   orders: IOrder[];
};
export function Map({ orders }: MapProps) {
   const mapRef = useRef<L.Map | null>(null);
   useEffect(() => {
      if (typeof window === 'undefined') return;
      if (mapRef.current) {
         return;
      }
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
         mapRef.current = map;
         return () => {
            map.remove();
            mapRef.current = null;
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
