import React          from "react";
import { Link }       from "react-router";

export default class EventDetailRenderer extends React.Component {
  render() {
    return (
      <div className = "row">
        <div className = "column">
          <Link to={"/events/"+this.props.event.id}>
            {this.props.event.name}
          </Link>
        </div>
        <div className = "column">
          {this.props.event.sports}
        </div>
        <div className = "column">
          {this.props.event.place}
        </div>
      </div>
    );
  }
}
