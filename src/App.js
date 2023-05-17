import { Routes, Route, Outlet } from 'react-router-dom'

import Navigation from './navigation/navigation.component'
import HomePage from './home-page/home-page.component'

const App = () => {
   return (
    <Routes>
     <Route element={<Navigation />}>
      <Route index element={<HomePage/>} />

     </Route>

    </Routes>
   )

}

export default App;