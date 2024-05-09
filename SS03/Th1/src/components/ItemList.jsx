import React, { Component } from 'react'
import Item from './Item';

export default class ItemList extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <>
                {this.props.data.map((item, index) =>
                    <Item
                        key={index + 1}
                        data={item}
                        index={index}
                        onBuy={this.props.onBuy}
                        onSell = {this.props.onSell} />
                )}
            </>
        )
    }
}
