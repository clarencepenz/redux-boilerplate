import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../../actions/postAction'

class Blog extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts
})

export default connect(mapStateToProps, {fetchPost})(Blog);