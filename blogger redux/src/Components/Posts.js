import React,{Component} from 'react';
import PostDetail from './PostDetail'
//import {getPosts} from '../API/BloggerAPI';
import Categories from './Categories';
import {connect} from 'react-redux';
import {GetPosts} from '../actions'


class Posts extends Component {

    constructor(props){
        super(props);
        
        this.state = {
             Category:{code:'all', name:'all'}
        }

        console.log('Constructor');
    }

    componentDidMount(){
        // console.log('Component Did Mount');
        // getPosts()
        // .then((posts)=>{
        //     console.log(posts);
        //     this.setState({
        //         posts: posts
        //     })
        // })
        // .catch((err)=>{
        //     console.log(err);
        // });
        this.props.GetPosts();
    }

    componentDidUpdate(){
        console.log('ComponentDidUpdate');
    }

    OnCategoryClick = (Category) => {
        this.setState({
            Category
        })
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    renderPostDetaileElements(){
        let filteredPosts = this.props.posts;

        if(this.state.Category.code!=='all'){
            filteredPosts = this.props.posts.filter((post)=>{
                return post.category === this.state.Category.code
            });
        }

        return filteredPosts.map((post, index)=>{
            return <PostDetail 
                key={index} 
                post={post} />
        });
    }

    btnclickedHandler = () => {
        console.log(this.props.history)
        this.props.history.push('/posts/new');
    }

    render(){
        console.log('Render Is Invoked');

        return( 
            <div>
                <button className="btn btn-success btn-sm m-2"
                    onClick={this.btnclickedHandler} >New Post</button>
                <div className="col-md-4 col-lg-4 col-sm-4">
                    <Categories OnCategoryClick={this.OnCategoryClick} />
                </div>
                <div className="col-md-8 col-sm-8 col-lg-8">
                {this.renderPostDetaileElements()}
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return{
        posts:state.posts
    }
}

export default connect(mapStatetoProps, {GetPosts: GetPosts})(Posts);