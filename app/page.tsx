import { Input } from '@/src/components/Input';
import { PackageOpen } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
   return (
      <main className='flex justify-center items-center h-screen bg-blue-50'>
         <form className='flex flex-col h-fit max-w-96 w-full border rounded-xl p-14 bg-white'>
            <div className='flex gap-2 justify-center items-center'>
               <PackageOpen />
               <h1 className='text-xl font-semibold'>Loguinos</h1>
            </div>
            <div className='flex flex-col gap-3 w-full mt-10'>
               <Input
                  placeholder='Email'
                  type='email'
               />
               <Input
                  placeholder='Senha'
                  type='password'
               />
               <Link
                  href={''}
                  className='flex self-end text-xs text-blue-600 font-semibold'>
                  Esqueceu sua senha?
               </Link>
            </div>
            <button className='bg-blue-600 text-white rounded-lg h-9 mt-7 text-sm'>
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
