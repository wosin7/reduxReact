import uuid from 'uuid'
import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions'

const initialState = {
  list: []
}

function comments(state = initialState, action) {
	switch(action.type) {
		case ADD_COMMENT:
			return  {
				...state,
				list: [
					...state.list,
					{
						id: uuid.v4(),
						text: action.text,
						votes: 0
					}
				]
			}
		case REMOVE_COMMENT:
			return {
				...state,
				comments: state.comments.filter(comment => comment.id !== action.id)
			};
		case EDIT_COMMENT:
			return {
				...state,
				comments: state.comments.map(comment => {
					if(comment.id == action.id){
						return {
							...comment,
							text: action.text
						}
					}
					return comment})
			};
		case THUMB_UP_COMMENT:
			return {
				...state,
				list: state.list.map(comment => {
					if (comment.id == action.id){
						return {
							...comment,
							votes: comment.votes + 1
						}
					}
					return comment
				})
			}
		case THUMB_DOWN_COMMENT:
			return {
				...state,
				list: state.list.map(comment => {
					if (comment.id == action.id){
						return {
							...comment,
							votes: comment.votes - 1
						}
					}
					return comment
				})
			}
		default:
			return state;
    }
}

export default comments;