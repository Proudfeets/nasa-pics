import React, {Component} from "react";
import PhotoTile from "../components/PhotoTile";

class PhotoContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: {},
      loading: true
    };
  }
  
componentDidMount(){
    fetch(`https://epic.gsfc.nasa.gov/api/natural?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
    .then((response) => {
        let responseBody = response.json()
        return responseBody;
    })
    .then(responseBody => {
      this.setState({
        image:{
          id:responseBody[0].identifier,
          image:responseBody[0].image,
          caption:responseBody[0].caption,
          year: responseBody[0].identifier.slice(0, 4),
          month: responseBody[0].identifier.slice(4,6),
          day: responseBody[0].identifier.slice(6,8)
        },
        loading:false
        }, () => console.log(this.state.image));
      });
    }

  render(){

    return(
      <div>
      <h3>Photo Courtesy of NASA's EPIC Program</h3>
      {this.state.loading ?
        ("Loading...") : 
        <PhotoTile
          image={this.state.image}
          />}
    </div>
    )
  }
}

export default PhotoContainer;
