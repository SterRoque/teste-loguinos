'use client';

import { Header } from '@/src/components/Header';
import { Sidebar } from '@/src/components/Sidebar';
import { cn } from '@/src/utils/cn';
import { useState } from 'react';

export default function Maps() {
   return (
      <div className='bg-gray-100 h-screen flex'>
         <Sidebar />
         <div className='w-full'>
            <Header />
            <main>conteudoooooooo</main>
         </div>
      </div>
   );
}
