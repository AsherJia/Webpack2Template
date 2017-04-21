import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

import Counter from '../modules/counter/container/counter'
import Todo from '../modules/todos/container/todo'


export default () => {
    return (
        <div>
            <ul>
                <li><Link to='/todo'>todo</Link></li>
                <li><Link to='/'>Home</Link></li>
            </ul>
            <Route path='/' component={Counter} />
            <Route path='/todo' component={Todo} />
        </div>
    )
}
