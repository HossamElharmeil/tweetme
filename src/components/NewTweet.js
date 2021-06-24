import React, { Component } from 'react'
import { connect } from "react-redux"
import { handleAddTweet } from "../actions/tweets"

class NewTweet extends Component {
    state = {
        text: '',
    }

    handleChange = (event) => {
        event.preventDefault()

        const text = event.target.value
        this.setState(() => ({ text }))
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const { text } = this.state
        const { dispatch, id } = this.props
        
        dispatch(handleAddTweet(text, id))
    }

    render() {
        const { text } = this.state
        const leftLength = 280 - text.length

        return <div>
            <h3 className='center'>Compose New Tweet</h3>
            <form className='new-tweet' onSubmit={this.handleSubmit}>
                <textarea
                    className='textarea'
                    placeholder="What's happening"
                    value={this.state.text}
                    onChange={this.handleChange}
                    maxLength={280}
                />
                {leftLength < 81 && (
                    <div className='tweet-length'>
                        {leftLength}
                    </div>
                )}
                <button
                    className='btn'
                    type='submit'
                    disabled={text === ''}
                >
                    Submit
                </button>
            </form>
            
        </div>
    } 
}

export default connect()(NewTweet)