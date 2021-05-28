import React, {useState, useEffect} from 'react'

import store, { getPlants, addPlant } from '../../store'

import './findplants.scss'

const FindPlants = (props) => {

  const url = 'https://plantie.herokuapp.com'

  const [plants, setPlants] = useState([])
  const [filteredPlants,setFilteredPlants] = useState([])

    const getAllPlants = () => { 
    fetch(url + '/plants')
    .then((response) => response.json())
    .then((data) => {
      setPlants(data)
      setFilteredPlants(data)
      })
  
  }
    // const allPlants = [
    //     {
    //       name: 'Monstera', 
    //       species: 'Monstera deliciosa'
    //     },
    //     { 
    //       name: 'Parlour Palm', 
    //       species: 'Chamadorea elegans'
    //     }
    //   ]

    
    
   
    const plantList = filteredPlants.map((plant, index) => { 
      return (
        <div className="directoryContainer">
          <div key={index}>
            <div className="containSearchPlant">
              <img src={plant.img} />
            </div>
            <h1>{plant.type}</h1>
            <h2>{plant.binomial}</h2>
            <button onClick={() => store.dispatch(addPlant(plant))}>
              Add to Garden
            </button>
          </div>
        </div>
      );
  })

  useEffect(()=>{
    getAllPlants()
    },[])

 

    const handleChange = (e) => {
    e.preventDefault();
    setFilteredPlants(plants.filter(p => p.type.toLowerCase().includes(e.target.value.toLowerCase()) || p.binomial.toLowerCase().includes(e.target.value.toLowerCase())))
  }
  
    return (
      <>
        <div className="findContainer"> 
          <h1>Find a plant</h1>
          <form>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Search species..."
            />
          </form>
          <br></br>
          {plantList}
        </div>
      </>
    );
}

export default FindPlants
