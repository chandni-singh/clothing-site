import React from 'react';
import {withRouter} from '../../utilities/withRouter.hook';
import './MenuItem.scss';

function MenuItem({title, imageUrl, size, linkUrl, history, match}) {
    return(
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}} />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);