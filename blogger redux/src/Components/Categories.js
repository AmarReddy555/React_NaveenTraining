import React, {Component} from 'react';
//import {getCategories} from '../API/BloggerAPI'
import {getCategories} from '../actions'
import {connect} from 'react-redux'

// const AllCategories = {
//     code:'all',
//     name:'All' 
// }

class Categories extends Component{
    // state = {
    //     Categories:[]
    // }

    componentDidMount(){
        // getCategories()
        // .then(Categories=>{
        //     this.setState({
        //         Categories: [AllCategories, ...Categories]
        //     })
        // })
        // .catch((err)=>{
        //     console.log(err);
        // });
        this.props.getCategories();
    }

    OnSelectHandler = (cate) => {
        this.props.OnCategoryClick(cate);
    }

    render(){
        return(
            <ul className="list-group">
            {this.props.Categories.map((Category, index)=>{
                return <li key={index} 
                    className="list-group-item list-group-item-action"
                    onClick={ () => {this.props.OnCategoryClick(Category)}}
                    >{Category.name}</li>
            })}
            </ul>
        );
    }
};

const mapStoretoProps = (state) => {
    return{
        Categories: state.categories
    }
}

export default connect(mapStoretoProps,{getCategories:getCategories})(Categories);
