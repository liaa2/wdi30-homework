import React, {Component} from 'react';
function Image(props){
  return <img src={props.url} width="200" height="200"/>
}
class Library extends Component{
  render(){
    return(
      <div className="board-row">
        { this.props.images.map( (url) => <Image url={url} /> )}
      </div>
    )
  }
}
export default Library;
