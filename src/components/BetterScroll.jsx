/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useRef } from 'react';
import BScroll from '@better-scroll/core';
import { debounce } from 'lodash';

export default function BetterScroll(props) {
  const wrapperRef = useRef(null);
  useEffect(() => {
    const { refresh } = new BScroll(wrapperRef.current, props.config ?? {});
    const resizeFn = debounce(refresh, 300);
    window.addEventListener('resize', resizeFn);
    return () => {
      window.removeEventListener('resize', resizeFn);
    };
  }, [props.config, props.children]);

  return (
    <div
      ref={wrapperRef}
      style={{ overflow: 'hidden', height: '100px', ...(props.wrapperStyle ?? {}) }}
    >
      <div style={{ ...(props.contentStyle ?? {}) }}>{props.children}</div>
    </div>
  );
}
