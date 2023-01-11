import React, { Component } from "react";
import Photo1 from './Photo1.jpg';


class DaisyBelle extends Component {
  render() {
    return (
      <div>
        <h2>DaisyBelle</h2>
        <img style={{ width:300, height: 450}} img alt="DaisyBelle" src ={Photo1} />
        <p>DaisyBelle is a 12 year old shih tzu/yorkie mix.</p>
        <p>Here is a list of things she likes:</p>
        <ol>
          <li>Treats</li>
          <li>Belly rubs</li>
          <li>Sitting in a sunbeam</li>
          
        </ol>
      </div>
    );
  }
}
 
export default DaisyBelle;