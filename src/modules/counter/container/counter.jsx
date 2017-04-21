import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { increment, decrement, autoIncrement } from '../actions/counter'

import './counter.scss'

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.object.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        autoIncrement: PropTypes.func.isRequired
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
                <button onClick={this.props.autoIncrement}>autoIncrement</button>
                <div className='fontColor'>
                    Counter:
                    <span>{ number }</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>
({
    counter: state.counter
})

const mapDispatchToProps = dispatch =>
({
    increment: bindActionCreators(increment, dispatch),
    decrement: bindActionCreators(decrement, dispatch),
    autoIncrement: bindActionCreators(autoIncrement, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
