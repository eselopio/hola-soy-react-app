import React from 'react';
import PropTypes from 'prop-types';

const AprovalCard = ({children, onSelectoption}) => {
    
    const handleClick = (author) => {
        console.log(" evento click en componente hijo ", author);
        onSelectoption(author);
    }
    const { props: { author , date} } = children;
    
    return (
        <div className="ui card" key={date}>
            <div className="content"> {children} </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button" onClick={() => handleClick(author)} > Approve </div>
                    <div className="ui basic orange button"> Need Work </div>
                </div>
            </div>
        </div>
    ) 
}

AprovalCard.propTypes = {
    children: PropTypes.element.isRequired
};

export default AprovalCard;