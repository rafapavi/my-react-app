import React, { Component } from 'react';

import Counter from './counter';

class Counters extends Component {
    constructor() {
        super()
        console.log('Counters - Constructor');
    }

    componentDidMount() {
        console.log('Counters - Mounted');
    }

    render() {
        console.log('Counters - Rendered');
        const { onReset, onIncrement, onDelete, counters } = this.props;
        return (
            <div>
                <button className="btn btn-primary btn-sm m-2" onClick={onReset}>Reset</button>
                {
                    counters.map(counter =>
                        // Key used internally by react
                        <Counter key={counter.id} counter={counter} onAdd={onIncrement} onDelete={onDelete}>
                            <h4>Counter #{counter.id}</h4>
                        </Counter>
                    )
                }
            </div>
        );
    }
}

export default Counters;