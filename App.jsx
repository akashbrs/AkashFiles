import React from 'react';
import './App.css'

import UserCard from './components/UserCard';


import Counter from './components/Counter';
import ToggleText from './components/ToggleText';
import Text from './components/Text';



function App() {
  
  
 return(
 <>
  

  


<UserCard name="Akash" age={19} isPresent={true}/>

<Counter/>
<ToggleText/>
<Text/>

  
  

</>
 )
  
  
}

export default App
