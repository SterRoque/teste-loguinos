import { cookies } from 'next/headers';

export async function verifyAuthenticationService() {
   const cookieStore = await cookies();
   const result = Boolean(cookieStore.get('token')?.value);

   return result;
}
