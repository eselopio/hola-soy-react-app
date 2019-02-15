import React from 'react';
import PropTypes from 'prop-types';

const PullRequestDetail = ({author, avatar, date, content}) => {
    return (
        <div className="comment" key={date}>
            <a href="/" className="avatar">
                <img alt="avatar" src={avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                 {author}
                </a>
                <div className="metadata">
                    <span className="date"> {date} </span>
                </div>
                <div className="text">{content}</div>
            </div>
        </div>        
    )
};

PullRequestDetail.propTypes = {
    author: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default PullRequestDetail