import { REQUEST_DATA } from './action-types'

export const loadFeed = () => {
    return {
        type: REQUEST_DATA,
        payload: {
            feed: [
                { id: Math.random(), image: require('../../assets/lud2.png'), imageAuthor: require('../../assets/lud3.jpg'), author: 'lud', location: 'São Paulo, Brasil' }, 
                { id: Math.random(), image: require('../../assets/lud4.jpg'), imageAuthor: require('../../assets/lud3.jpg'), author: 'lud', location: 'São Paulo, Brasil' }
            ] 

        }
    }
}