import {configureStore} from '@reduxjs/toolkit';
import authReducer from './features/authSlice';

//Cria e configura o Redux Store
export default configureStore({
  //É a raiz -> Específica os states da aplicação
  reducer: {
    //auth -> define a chave do valor do estado final = Diz que queremos uma sessão auth no estado.
    // authReducer -> define que queremos que esta função seja a responsável pela atualização do estado sempre que uma ação seja disparada
    auth: authReducer,
  },
});
