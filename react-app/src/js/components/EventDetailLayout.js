import React                      from "react";
import { getEvent }               from '../api/Api';

export default class EventDetailLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_loaded: false,
      event: {}
    }
  }

  componentDidMount() {
    if (this.props.id) {
      getEvent(this.props.id).then(response => {
        this.setState({
          is_loaded: true,
          event: response
        })
      })
    }
  }

  render() {
    if (!this.state.is_loaded) {
      return <div></div>
    }
    return (
      <div>
        <div className = "header">Summary</div>
        <br></br>
        <div className = "form-group">
          <div className = "label">Name:</div> <div className = "value">{this.state.event.name}</div>
        </div>
        <div className = "form-group">
          <div className = "label">Sport:</div> <div className = "value">{this.state.event.sports}</div>
        </div>
        <div className = "form-group">
          <div className = "label">Last Organised:</div> <div className = "value">{this.state.event.last_organised}</div>
        </div>
        <div className = "form-group">
          <div className = "label">Place:</div> <div className = "value">{this.state.event.place}</div>
        </div>
      </div>
    );
  }

}
