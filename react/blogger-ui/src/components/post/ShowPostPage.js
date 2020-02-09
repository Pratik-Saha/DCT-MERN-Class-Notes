import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startGetPosts } from '../../action/post'
function ShowPostPage(props){

    if(props.posts.length == 0){
        props.dispatch(startGetPosts())
    }
    return(
        <div>
            <h1>TOTAL USER POSTS - {props.posts.length}</h1>
            <ul>
                {
                    props.posts.map((post) => {
                        return <li key = {post.id}><Link to = {`/posts/${post.id}`}>{post.title}</Link></li>
                    })
                }
            </ul>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(ShowPostPage) 