import React, {Component} from "react";
import PhotoTile from "../components/PhotoTile";

class PhotoContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      clickedOn: true
    };
  }

componentDidMount(){
    fetch(`https://api.nasa.gov/EPIC/api/natural/images?api_key=KeyGoesHere`)
    .then((response) => {
        let responseBody = response.json()
        return responseBody;
    })
    .then(responseBody => {
      this.setState({
        photos:responseBody.photos
        });
      });
    }

  render(){

    return(
      <div>
      <h3>"This is the Photo Container!"</h3>
    <PhotoTile/>
    </div>
    )
  }
}

export default PhotoContainer;
