/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { getToplistDetail, getPluylistDetail } from '../service';
import Card from '../components/Card';
import BetterScroll from '@/components/BetterScroll';

// 搜索页
function Search() {
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    getToplistDetail()
      .then((res) => {
        return Promise.all(
          res.data.list.slice(0, 10).map((item) => getPluylistDetail({ id: item.id })),
        );
      })
      .then((res) => {
        // console.log(res);
        setPlaylist(res.map((item) => item.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const str = [
    {
      text: '歌手',
      icon: <Icon icon="material-symbols:person" color="red" />,
    },
    {
      text: '曲风',
      icon: <Icon icon="clarity:book-solid" color="red" />,
    },
    {
      text: '专区',
      icon: <Icon icon="fluent-emoji-high-contrast:musical-notes" color="red" />,
    },
    {
      text: '识曲',
      icon: <Icon icon="mdi:microphone" color="red" />,
    },
  ];

  const data = ['林俊杰', '薛之谦', '唯一', '悬溺', '凤凰传奇'];

  return (
    <div style={{ backgroundColor: '#e3e3e3', paddingBottom: '40px' }}>
      <div
        style={{
          width: '100%',
          height: '75px',
          padding: '17px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Icon
          icon="radix-icons:arrow-left"
          onClick={() => {
            window.location.assign('/Home');
          }}
          style={{ fontSize: '30px', color: 'black' }}
        />
        <div
          style={{
            width: '270px',
            height: '38px',
            backgroundColor: 'white',
            borderRadius: '19px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Icon icon="material-symbols:search" style={{ fontSize: '20px', margin: '0 10px' }} />
          <input
            type="text"
            style={{ width: '200px', border: '0', outline: 'none' }}
            placeholder="张杰"
          />
        </div>
        <div style={{ fontSize: '14px' }}>搜索</div>
      </div>

      <div style={{ display: 'flex' }}>
        {str.map((value, index) => {
          return (
            <div
              key={index}
              style={{
                width: '25%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ fontSize: '20px', marginRight: '5px' }}>{value.icon}</div>
              <span style={{ fontSize: '14px' }}>{value.text}</span>
            </div>
          );
        })}
      </div>

      <div style={{ margin: '18px 10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ fontSize: '14px' }}>猜你喜欢</p>
          <Icon icon="material-symbols:refresh" />
        </div>
        <div style={{ display: 'flex', padding: '0 12px' }}>
          {data.map((item) => (
            <div
              style={{
                backgroundColor: 'white',
                fontSize: '12px',
                borderRadius: '25px',
                padding: '6px 10px',
                marginTop: '12px',
                marginRight: '8px',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <BetterScroll
        wrapperStyle={{ height: '650px' }}
        contentStyle={{ display: 'flex', width: '680%' }}
        config={{ scrollX: true, scrollY: false }}
      >
        {playlist.map((item) => (
          <Card dataSource={item} key={item.id} />
        ))}
      </BetterScroll>
    </div>
  );
}

export default Search;
