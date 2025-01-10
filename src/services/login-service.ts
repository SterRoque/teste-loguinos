import { api } from '../lib/axios';

export type LoginServiceData = {
   email: string;
   password: string;
};

// Isto é um login fake provisório
export async function loginService({ email, password }: LoginServiceData) {
   const { data } = await api.post('/auth', {
      email,
      password,
   });

   return data;
}
