import React from 'react'
import Banner from './components/banner/banner'
import NavBar from './components/Navbar/navbar'
import RowPost from './components/rowPost/RowPost'
import {orginals,action,comody,Romance,Horror} from './url'

// navbar

function App() {
  return (
    <div>
<NavBar />
<Banner/>
<RowPost url={orginals} title='Netflix Orginals'/>
<RowPost url={action} title='Action' isSmall />
<RowPost url={comody} title='Comody' isSmall />
<RowPost url={Romance} title='Romance' isSmall />
<RowPost url={Horror} title='Horror' isSmall />
    </div>
  )
}

export default App


