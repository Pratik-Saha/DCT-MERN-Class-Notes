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
        <div className="row">
            <div className="col-md-7 offset-md-3">
                <h2>TOTAL USER POSTS - {props.posts.length}</h2>
                <ul className="list-group">
                    {
                        props.posts.map((post) => {
                            return <li key = {post.id} className="list-group-item"><Link to = {`/posts/${post.id}`}>{post.title}</Link></li>
                        })
                    }
                </ul> 
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(ShowPostPage) 