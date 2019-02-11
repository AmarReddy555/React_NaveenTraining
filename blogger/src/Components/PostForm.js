import React,{Component} from 'react'
import {addPost} from '../API/BloggerAPI'


class PostForm extends Component{
    
    categories = [
        {
           "name": "React",
           "code": "react"
        },
        {
           "name": "Redux",
           "code": "redux"
        },
        {
           "name": "Angular",
           "code": "angular"
        },
        {
           "name": "ES6",
           "code": "es6"
        },
        {
           "name": "Java",
           "code": "java"
        }
     ]

    state = {
        title: '',
        body:'',
        author:'',
        category:''
    }

    OnTitleHandler = (event) => {
        this.setState({
            title : event.target.value
        });
    }

    OnBodyHandler = (event) => {
        this.setState({
            body : event.target.value
        });
    }

    OnauthorHandler = (event) => {
        this.setState({
            author : event.target.value
        });
    }

    OnCategoryHandler = (event) => {
        this.setState({
            category : event.target.value
        });
    }

    onFormSubmitHandler = (e) => {
        e.preventDefault();
        //this.props.onSubmit(this.state);
        this.HandleNewPost(this.state)
    }

    HandleNewPost = (NewPost) => {
        addPost(NewPost)
        .then(post=>{
            console.log('Add Post Successful');
            console.log('New Post: ', post);
            //this.setState({posts: [NewPost, ...this.state.posts]})
            this.props.history.push('/posts');
        })
        .catch(err=>{
            console.log(err);
        })
        
    }

    render(){
        return(
            <div className="col-md-12">
            <h3 className="mr-3">Post Form</h3>
        
            <div className="card  bg-light">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" 
                            name="title" placeholder="Enter title" value={this.state.title}
                            onChange={(event)=>this.OnTitleHandler(event)} />
                        </div>
                        <div className="form-group">
                        <label htmlFor="body">Body</label>
                        <textarea className="form-control" id="body"
                            name="body" placeholder="Enter body" rows="3" cols="30" 
                                onChange={this.OnBodyHandler}
                                value={this.state.body}></textarea>
                        </div>
                        <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" className="form-control" id="author" name="author" 
                            placeholder="Enter author" onChange={this.OnauthorHandler}
                            value={this.state.author} />
                        </div>
                        <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select required className="form-control" id="category" name="category" 
                            onChange={this.OnCategoryHandler} value={this.state.category}>
                            <option value=""></option>
                            {/* <!-- categories --> */}
                            {this.categories.map((category, index)=>{
                                return <option key={index} value={category.code}>{category.name}</option>
                            })}
                        </select>
                        </div>
        
                        <button type="submit" className="btn btn-primary" onClick={this.onFormSubmitHandler}>Save</button>
                    </form>
                </div>
            </div>
            </div>
        );
    }
};

export default PostForm;