import { verifyAuthenticationService } from '@/src/services/verify-authentication-service';
import { redirect } from 'next/navigation';

export default async function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const isAuthenticated = await verifyAuthenticationService();

   if (isAuthenticated) {
      return redirect('/maps');
   }

   return children;
}
