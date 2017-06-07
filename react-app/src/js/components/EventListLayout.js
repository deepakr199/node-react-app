import React                                  from "react";
import { getEvents, getEvent }                from '../api/Api';

import EventDetailLayout                      from "./EventDetailLayout";
import EventDetailRenderer                    from "./EventDetailRenderer";

export default class EventListLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    getEvents().then(response => {
      this.setState({
        events: response
      })
    })
  }

  render() {
    return (
      <div>
      <div className = "list-block">
        {this.renderGetEvents()}
      </div>
      <div className = "detail-block">
      {this.renderGetEvent(this.props.params.id)}
      </div>
      </div>
    );
  }

  renderGetEvents() {
    return (
      <div>
        <div className = "row">
          <div className = "column-bold">Event</div>
          <div className = "column-bold">Sport</div>
          <div className = "column-bold">Place</div>
        </div>
        {this.state.events.map(event =>
          <EventDetailRenderer key={event.id} event={event} />
        )}
      </div>
    )
  }

  renderGetEvent(id) {
    return <EventDetailLayout id={id}/>
  }
}
