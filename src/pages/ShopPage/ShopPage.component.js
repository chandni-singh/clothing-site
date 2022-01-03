import React from 'react';
import SHOP_DATA from './Shop.data';
import CollectionPreview from '../CollectionPreview/CollectionPreview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { collections: SHOP_DATA }
    }

    render() {
        return(
            <div className='shop'>
                {this.state.collections.map(({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps} />)}
            </div>
        )
    }
}

export default ShopPage;