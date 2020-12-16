import React from "react";


const Tweet = ({ username, name, date, message }) => {
  return (
    <div className="tweet">
      <div className="tweet-head">
        <h5>
          <span>{name} </span>
          <span className="username">@{username} </span>
        </h5>
        <small>{date}</small>
      </div>
      <p>{message}</p>
    </div>
  )
}

export default Tweet;