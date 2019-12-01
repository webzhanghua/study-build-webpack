'use strict'

// import React from 'react'
// import ReactDom from 'react-dom'
// import './search.less'
// import '../../common'
// import logo from './img/logo.png'
// import largeNumTest from 'large-num-test'
const React = require('react')
require('./search.less')
const logo = require('./img/logo.png')
const largeNumTest = require('large-num-test')
class Search extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            Text: null
        }
    }
    loadComponent() {
        import('./text.js').then((Text) => {
            this.setState({
                Text: Text.default
            })
        })
    }
    render() {
        const { Text } = this.state
        return <div class="search-text">
            Search Text content99988877766
            {
                Text ? <Text /> : null
            }{
                largeNumTest('99', 1)
            }
            <img onClick={this.loadComponent.bind(this)} src={logo} />
        </div>
    }
}


module.exports = <Search />

