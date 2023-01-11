import React, { Component } from "react";
import Photo3 from "./Photo3.jpg";

class Sandy extends Component {
  render() {
    return (
      <div>
        <h2>Sandy</h2>
        <img style={{ width:300, height: 450}} img alt="Sandy" src ={Photo3} />
        <p>Sandy is a 5 year old malteese/shih tzu mix. We inherited
    her from my late aunt. She has had a really hard year adjusting to 
    a new home but is really sweet and loves to snuggle. 
        </p>
      </div>
    );
  }
}
 
export default Sandy;