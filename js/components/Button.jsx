import React from 'react';
import { Link } from 'react-router';

function Button(props) {
  return (
    <div className="row text-center">
      <Link className="btn bg-blue" to={props.to}>
        <h4>{props.text}</h4>
      </Link>
    </div>
  );
}

export default Button;
