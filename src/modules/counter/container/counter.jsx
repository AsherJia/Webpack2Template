import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { increment, decrement } from '../actions/counter'

import './counter.scss'

const mapStateToProps = state =>
({
    counter: state.counter
})

const mapDispatchToProps = dispatch =>
({
    increment: bindActionCreators(increment, dispatch),
    decrement: bindActionCreators(decrement, dispatch)
})

@connect(mapStateToProps, mapDispatchToProps)
export default class Counter extends Component {
    static propTypes = {
        counter: PropTypes.object.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = { }
    }

    render() {
        const { number } = this.props.counter

        return (
            <div>
                <button onClick={this.props.increment}>increment</button>
                <button onClick={this.props.decrement}>decrement</button>
                <div className='fontColor'>
                    Counter:
                    <span>{ number }</span>
                </div>
            </div>
        )
    }
}
