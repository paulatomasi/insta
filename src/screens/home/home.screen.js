import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SafeAreaView, FlatList } from 'react-native'
import Post from './components/post.component'
import ButtonUpdate from './components/button-update.component'

import { INavBar } from 'components'

import { loadFeed } from '../../store/actions/feed-actions'


export class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.props.loadFeed()
        
    }

    render() {
        return (
            <React.Fragment>
                <SafeAreaView style={{ flex: 1}}>
                <INavBar />
                <FlatList
                    data={this.props.feed}
                    keyExtractor={feed => `${feed.id}`}
                    renderItem={(feed) => <Post {...feed} />}
                    ListFooterComponent={<ButtonUpdate />}
                />
                </SafeAreaView>
            </React.Fragment>
            )
    }
}
const mapDispatchToProp = dispatch => {
    return {
        loadFeed: () => dispatch(loadFeed())
    }
}

const mapStateToProps = ({ feed }) => {
    return {
        feed: feed.feed
    }
}

export const HomeScreenConnected = connect(mapStateToProps, mapDispatchToProp)(HomeScreen)