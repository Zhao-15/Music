/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';
import React from 'react';

function Card(props) {
  // console.log(props.dataSource);
  return (
    <div
      style={{
        width: '245px',
        marginLeft: '9px',
        backgroundColor: 'white',
        paddingRight: '25px',
        borderRadius: '8px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          height: '46px',
          marginLeft: '7px',
          borderBottom: '2px solid #dfdfdf',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ margin: '0 14px' }}>{props.dataSource.playlist.name}</div>
        <div
          style={{
            width: '50px',
            height: '20px',
            padding: '0 7px',
            backgroundColor: '#dfdfdf',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Icon icon="mdi:triangle" rotate={1} style={{ fontSize: '10px' }} />
          <p style={{ fontSize: '12px' }}>播放</p>
        </div>
      </div>
      <div style={{ padding: '0 10px' }}>
        {props.dataSource.playlist.tracks.map((value, index) => {
          return index < 20 ? (
            <div
              key={index}
              style={{ height: '20px', margin: '10px 0', overflow: 'hidden', fontSize: '12px' }}
            >
              <span style={{ color: index < 3 ? 'red' : '#9b99a6', margin: ' 0 10px' }}>
                {index + 1}
              </span>
              <span>{value.name}</span>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default Card;
