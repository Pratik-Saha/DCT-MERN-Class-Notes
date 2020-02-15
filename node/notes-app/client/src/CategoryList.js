import React from 'react'
import axios from 'axios'

class CategoryList extends React.Component{
    constructor(){
        super()
        this.state = {
            categories: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3033/categories')
            .then((response) => {
                const categories = response.data
                this.setState({
                    categories
                })
            })
    }

    render(){
        console.log(this.state.categories)
        return(
            <div>
                CategoryList items - {this.state.categories.length}
            </div>
        )
    }
}

export default CategoryList