import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
console.log(url);

function App() {
  const [loading, SetLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    SetLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      SetLoading(false)
      setTours(tours)
      
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    fetchTours()
    SetLoading(false)
  }, [])
  

if(loading){
  return(
    <main><Loading/></main>
  )
}

  return (<main>
    <Tours/>
  </main>
  );
}

export default App
