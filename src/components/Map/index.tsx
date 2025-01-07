'use client';
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export function Map() {
   useEffect(() => {
      const map = L.map('map').setView([-23.55052, -46.633308], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const marker = L.marker([-23.55052, -46.633308]).addTo(map);
      marker.bindPopup('<b>São Paulo</b><br>Este é um exemplo!').openPopup();

      return () => {
         map.remove();
      };
   }, []);

   return (
      <div
         id='map'
         className='h-[350px] w-full'
      />
   );
}
