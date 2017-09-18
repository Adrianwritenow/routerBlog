import React, {Component} from 'react';

class View extends Component {
  render() {
    let details =this.props.details;
    return (
      <div className="col-lg-8 col-lg-offset-2 card">
        <div className="profile">
          <i className="fa fa-space-shuttle" aria-hidden="true"></i>
          <h3 className="headings">
            {details.authorsName}
          </h3>
          <hr/>
          <h4 className="sub-headings">Details</h4>
          <dl className="dl-horizontal">
            <dt>Title</dt>
            <dd>{details.title}</dd>
            <dt>Post</dt>
            <dd>{details.blog}</dd>
          </dl>
        </div>
      </div>
      )
    }
  }

class ShowPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'details': {},
    }
  }

  componentDidMount() {
    let {id}= this.props.match.params;
    const url= `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      this.setState({
        details:data,
      })
    });

}

  render() {
    return (
      <div className="app-body offset col-lg-10 col-lg-offset-1">
        <div className="rowDetail">
          <div className="col-lg-8 col-lg-offset-2">
              <h1>Message Details</h1>
          </div>
        <View details={this.state.details}/>
        </div>
      </div>
    );
  }
}

export default ShowPost;
