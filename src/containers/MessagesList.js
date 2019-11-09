import { connect } from 'react-redux'
import MessagesListComponent from '../components/MessageList';

export const MessagesList = connect(state => ({
	messages: state.messages
}), {})(MessagesListComponent)