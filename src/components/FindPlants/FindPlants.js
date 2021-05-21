import React, {useState, useEffect} from 'react'

const FindPlants = () => {
    const allPlants = [
        {
          name: 'Monstera', 
          species: 'Monstera deliciosa'
        },
        { 
          name: 'Parlour Palm', 
          species: 'Chamadorea elegans'
        }
      ]

    const [plants, setPlants] = useState([])
   
    const plantList = plants.map((plant, index) => { 
      return (   
      <div key={index} >
          <h1>{plant.name}</h1>
          <h2>{plant.species}</h2>
      </div>
      )
  })

  useEffect(() => { 
    setPlants(allPlants)
  }, [])
  
 
    const handleChange = (e) => {
    e.preventDefault();
    setPlants(allPlants.filter(p => p.species.toLowerCase().includes(e.target.value.toLowerCase()) ))
  }
  
    return (
        <>
        <form>
            <input
            onChange={handleChange}
            type="text"
            placeholder="Search species..."
            />   
        </form>
        {plantList}
        
        </>
    )
}

export default FindPlants
