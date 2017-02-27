import React, {Component} from 'react'

class ConversationHistory extends Component {
  render(){
    return (
      <section className='col-md-9 conversations'>
        <h3 className='conversations conversations--title'>Conversation History</h3>
        <p className='conversations conversations--desc'>
          Get better immediate insight into your customers' needs with their conversation history.
        </p>
        <img className='conversations conversations--img' src={'https://www.kustomer.com/frassets/images/cross_channel_highlight_timeline.d071f1.png'} />
      </section>
    )
  }
}

export default ConversationHistory
