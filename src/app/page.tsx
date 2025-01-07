'use client';

import { Input } from '@/src/components/Input';
import { PackageOpen } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import { loginService, LoginServiceData } from '../services/login-service';

export default function Home() {
   const [formData, setFormData] = useState<LoginServiceData>({
      email: '',
      password: '',
   });
   const [error, setError] = useState<string>('');
   const router = useRouter();

   async function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();

      try {
         await loginService(formData);
         router.push('/maps');
      } catch (error) {
         setError('Email ou senha está incorreto');
      }
   }

   function handleChangeInputValue(e: ChangeEvent<HTMLInputElement>) {
      const { name } = e.target;

      setFormData((prev) => ({
         ...prev,
         [name]: e.target.value,
      }));

      if (error) {
         setError('');
      }
   }

   return (
      <main className='flex justify-center items-center h-screen bg-blue-50'>
         <form
            className='flex flex-col h-fit max-w-96 w-full border rounded-xl p-14 bg-white'
            onSubmit={handleSubmit}>
            <div className='flex gap-2 justify-center items-center'>
               <PackageOpen />
               <h1 className='text-xl font-semibold'>Loguinos</h1>
            </div>
            <div className='flex flex-col gap-3 w-full mt-10'>
               <Input
                  placeholder='Email'
                  type='email'
                  name='email'
                  required
                  value={formData.email}
                  onChange={handleChangeInputValue}
               />
               <Input
                  placeholder='Senha'
                  type='password'
                  name='password'
                  required
                  value={formData.password}
                  onChange={handleChangeInputValue}
               />
               {error && <span className='text-red-600 text-xs'>{error}</span>}
               <Link
                  href={''}
                  className='flex self-end text-xs text-blue-600 font-semibold'>
                  Esqueceu sua senha?
               </Link>
            </div>

            <button
               className='w-full bg-blue-600 text-white rounded-lg h-9 mt-7 text-sm'
               type='submit'>
               Entrar
            </button>

            <p className='text-xs text-center mt-7'>
               Ainda não tem uma conta?{' '}
               <Link
                  href={''}
                  className='text-blue-600'>
                  Cadastre-se
               </Link>
            </p>
         </form>
      </main>
   );
}
