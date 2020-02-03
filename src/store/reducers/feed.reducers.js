import { REQUEST_DATA } from '../actions/action-types'

const initialState = {
    feed: [{ 
        id: 0, 
        image: require('../../assets/lud2.png'), 
        imageAuthor: require('../../assets/lud3.jpg'),
        author: '', 
        location: ''
    }]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_DATA :
            return {
                feed: action.payload.feed
            }
        default: 
            return state
    }
}

export default reducer