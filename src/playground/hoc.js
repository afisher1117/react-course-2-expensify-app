// Higher order component
// A component that renders another component
// Reuse code - Render Hijacking - Prop Manipulation - Abstract State


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>This is private info, please don't share!</p>
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => {
    if (props.isAuthenticated) {
      return (
        <div>
          <p>This is private info, please don't share!</p>
          <WrappedComponent {...props} />
        </div>
      );
    } else {
      return (
        <div>
          <h2>Please Login to continue...</h2>
        </div>
      );
    }
  }
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="BOOM! These are the details" />, document.getElementById('app'));