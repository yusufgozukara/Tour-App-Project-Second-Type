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

  const removeTour = (id) => {
    const newTour = tours.filter((tour) =>  tour.id !== id);
    setTours(newTour)
  }

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

if(tours.length === 0){
  return (
    <main>
      <div className="title">
        <h2>No Tours Left</h2>
        <button onClick={()=> fetchTours()} className='btn'>Refresh</button>
      </div>
    </main>
  )
}

  return (<main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>
  );
}

export default App
