
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
    constructor() {
      super();
      this.state = {
      likes: 0,
      dislikes: 0,
      handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1
        }));
      },
      handleDislike:() => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1
        }));
      }
    }
  }
  render() {
    return (
     <>
      <div className="content-rating">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
          Sed commodo lacus vitae justo dignissim, vitae feugiat nunc tincidunt.<br/>
          Nullam vestibulum, nisi at convallis malesuada, nunc nisi aliquam lectus, vel efficitur nisi enim nec eros.<br/>
          Vivamus vehicula magna at sem ultrices, in faucibus neque tincidunt.<br/> 
          Praesent sagittis nibh at dui finibus, id volutpat tortor lacinia.
        </p>
        <div className="rating-buttons">
          <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
        </div>
      </div>
     </>
    );
  }
}

export default ContentRating;
