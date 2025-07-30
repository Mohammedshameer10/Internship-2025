import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './List'


function App() {

    const fruits=   [{name: "apple",calories:95},
                    {name:"Banana",calories:45},
                    {name:"Orange",calories:50},
                    {name:"pineapple",calories:107},
                    {name:"watermelon",calories:165 }]; 

    const vegetables=[{name: "Gabbage",calaories:68},
                    {name:"Potato",calories:104},
                    {name:"carrots",calories:70},
                    {name:"brocolli",calories:30},
                    {name:"onion",calories:20 }]; 


 return(
 <>
 <List items={fruits} category="Fruits" />
  <List items={vegetables} category="Vegetables" />
</>

);
}


export default App
