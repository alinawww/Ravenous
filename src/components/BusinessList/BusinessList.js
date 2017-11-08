import React from 'react'
import './BusinessList.css'

import Business from '../Business/Business'

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {this.props.businesses.map((business, i) => {
                    return <Business key={`business${i}`} business={business} />
                })}
            </div>
        )
    }
}

export default BusinessList
