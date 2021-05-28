import React, {useState} from "react"
import MyPlantsDetails from "./MyPlantsDetails"


const Plant = (props)=>{

    const plant = props.plant

    const [isVisible, setIsVisible] = useState(false);

    // const [nickname, setNickname] = useState(plant.nickname)
    let nickname = plant.nickname

    const clickHandler = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
          <div id="plant-info">          
                <div className="holdFoundPlants">
                  <article key={plant.id}>
                    <div className="holdFoundImg">
                      <img src={plant.img} />
                    </div>

                    <h1>{nickname}</h1>

                    <h3 onClick={clickHandler}>{plant.type}</h3>
                    <MyPlantsDetails history = {props.history} isVisible={isVisible} plant={plant} />
                  </article>
                </div>
          </div>
        </>
    )
}

export default Plant