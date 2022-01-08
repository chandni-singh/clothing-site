import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../Redux/shop/shop.selector';
import CollectionPreview from '../CollectionPreview/CollectionPreview.component';
import './CollectionOverview.styles.scss';

const CollectionOverview = ({collections}) => (
    <div className='collection-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionOverview);


