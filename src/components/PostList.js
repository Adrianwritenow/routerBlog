import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
  render() {
    console.log('props', this.props.blogs)
    let data = this.props.blogs;
    let List = data.map((blog) => {
      let id = blog._id;
         return <li className="list-group-item" key={blog._id}>
        <Link to={`/show/${id}`}>
          {blog.title}
        </Link>
        </li>

    })
    return (
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1">
          <h1 className="headings">POSTS</h1>
          <hr/>
        </div>
        <div className="listContainer">
          {List}
        </div>
      </div>
    )
  }
}



export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'blogs': []
    }
  }

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger').then(results => {
          return results.json();
        }).then(data => {
          this.setState({blogs: data});
          console.log("state", this.state.blogs);
        })
  }
    render() {
      return(
        <div className>
          <List blogs={this.state.blogs}/>
        </div>
      );
    }
}
