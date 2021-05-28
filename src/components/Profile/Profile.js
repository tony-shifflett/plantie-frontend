import React from "react"
import './profile.scss'

class Profile extends React.Component { 
    render() { 
        return (
          <div className="proContain">
            <div className="proMain">
              <div className="containProfile">
                <br></br>
                <div className="containProPic">
                  <img
                    className="proPic"
                    src="https://res-console.cloudinary.com/dnfumu7j3/thumbnails/transform/v1/image/upload//v1622168743/c2hlbGJ5LW1pbGxlci1fYWRwMjRhSDl6SS11bnNwbGFzaF96cWZkang=/drilldown"
                  />
                </div>
                <h1>Janie Appleseed</h1>
                <h2>About</h2>
                <p>Hi! I'm Jane and I love plants.</p>
              </div>
            </div>
          </div>
        ); 
     } 
  } 
  
  export  default Profile