import { Provider } from 'react-redux'
import store from "./store/store";

import { Route, Routes } from 'react-router-dom';
import Board from './components/pages/board/Board';
import CardInfo from './components/organism/cardinfo/cardInfo';



export default function App(){



  return(

    <div className="App">
    <Provider store={store}>
 <Routes>
  <Route path='/' element={<Board/>}/>
  <Route path='/:Cid/:Lid/edit' element={<CardInfo/>} />
 </Routes>
    </Provider>

    </div>
  )
}