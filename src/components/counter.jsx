import React, { Component } from 'react';

class Counter extends Component {
    styles = {
        fontSize: 15,
        fontStyle: 'bold',
    }

    componentWillUnmount() {
        console.log('Counter - Unmount');
    }

    renderTags() {
        const { tags } = this.state;
        if (!tags.length) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
    }

    render() {
        console.log('Counter - Rendered');
        return (
            <div>
                {this.props.children}
                <span className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button className="btn btn-primary btn-sm" onClick={this.props.onAdd.bind(this, this.props.counter)}>Increment</button>
                <button className="btn btn-danger btn-sm m-2" onClick={this.props.onDelete.bind(this, this.props.counter.id)}>Delete</button>
            </div>
        );
    }

    getBadgeClass() {
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }


    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
