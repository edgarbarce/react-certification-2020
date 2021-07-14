import React from 'react';

function WithLayoutComponentLoading(Component) {
  return function WihComponentRendering({ hasError, isLoading, ...props }) {
    if (hasError) {
      return <p>There was an unexpected problem. Please refresh the page.</p>;
    }
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return <Component {...props} />;
  };
}

export default WithLayoutComponentLoading;
