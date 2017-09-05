import React, {Component} from 'react';
import { Link } from 'react-router-dom';



export default class CreatePost extends Component {

    constructor(props) {
    super(props);
      this.state = {
        authorsName: "",
        title: "",
        blog: ""
    }

      this.handleAuthorsName = this.handleAuthorsName.bind(this);
      this.handleTitle = this.handleTitle.bind(this);
      this.handleBlog = this.handleBlog.bind(this);
      this.addToList = this.addToList.bind(this);
    }

    addToList = (e) => {
      e.preventDefault();
      this.setState({authorsName: e.target.value, title: e.target.value, blog: e.target.value});
      let listBlog = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
        method: "POST",
        body: listBlog,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
      ).then(response => {
        console.log(response, "yay");

      }).catch(err => {
        console.log(err, "boo!");
      });
      this.setState({authorsName: '', title: '', blog: ''});
    }


    handleAuthorsName(event){
      this.setState({
      authorsName:event.target.value
    })

    }
    handleTitle(event){
      this.setState({
      title:event.target.value
    })

    }
    handleBlog(event){
      this.setState({
      blog:event.target.value
    })

    }
    render() {
      return (
          <div className="blogForm">
            <label htmlFor="authorsName"></label>
            <div className="formInput">
              <input  onChange={this.handleAuthorsName}
              type="text"
              className="form-control"
              id="author"
              placeholder="Enter Your Name or Email Address"
              value={this.state.authorsName}/>
            </div>

            <label htmlFor="title"></label>
            <div className="formInput">
              <input  onChange={this.handleTitle}
              type="text"
              className="form-control"
              id="title"
              placeholder="Title of Post"
              value={this.state.title}/>
            </div>

            <label htmlFor="blog"></label>
            <div className="formInput">
              <input  onChange={this.handleBlog}
              type="text"
              className="form-control"
              id="blog"
              placeholder="Blog Away"
              value={this.state.blog}/>
            </div>

          <button onClick={this.addToList} className="btn btn-primary"><Link to="/">Submit</Link></button>
        </div>

      );
    }

  }
