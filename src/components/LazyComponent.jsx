/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function LazyComponent(props) {
  const Component = React.lazy(() => import(`@/${props.path}`));

  return (
    <React.Suspense fallback={<div>加载中...</div>}>
      <Component />
    </React.Suspense>
  );
}
