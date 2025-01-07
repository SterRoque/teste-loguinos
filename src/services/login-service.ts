export type LoginServiceData = {
   email: string;
   password: string;
};

// Isto é um login fake provisório
export async function loginService({ email, password }: LoginServiceData) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (email === 'teste@gmail.com' && password === 'teste123') {
            resolve({
               token: '123',
            });
            return;
         }

         reject();
      }, 3000);
   });
}
