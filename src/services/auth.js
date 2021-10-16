const requestSignIn = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        user: {
          name: 'Maria Clara',
          email: 'maria@gmail.com',
          password: '123456',
        },
      });
    }, 2000);
  });
};

export default requestSignIn;
