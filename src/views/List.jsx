/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable radix */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Tabs } from 'antd-mobile';
import { Icon } from '@iconify/react';

// mv排行榜
export default function List() {
  const [list, updateList] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/top/mv?limit=50&area=%E5%86%85%E5%9C%B0&cookie=200',
      )
      .then((res) => {
        console.log(res.data.data);
        updateList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [list2, updateList2] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/top/mv?limit=50&area=%E6%B8%AF%E5%8F%B0&cookie=200',
      )
      .then((res) => {
        // console.log(res.data.data);
        updateList2(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [list3, updateList3] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/top/mv?limit=50&area=%E6%AC%A7%E7%BE%8E&cookie=200',
      )
      .then((res) => {
        // console.log(res.data.data);
        updateList3(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [list4, updateList4] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/top/mv?limit=50&area=%E9%9F%A9%E5%9B%BD&cookie=200',
      )
      .then((res) => {
        // console.log(res.data.data);
        updateList4(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [list5, updateList5] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/top/mv?limit=50&area=%E6%97%A5%E6%9C%AC&cookie=200',
      )
      .then((res) => {
        // console.log(res.data.data);
        updateList5(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-[100%] bg-[#f1f1f1] pb-[50px] overflow-hidden">
      <div className="px-[15px] py-[11px]">
        <h3 className="text-[16px] font-black text-center">MV排行榜</h3>
      </div>
      <div>
        <Tabs
          activeLineMode="fixed"
          style={{
            color: '#9599a3',
            '--active-title-color': '#333',
            '--active-line-color': '#ee0a24',
            '--active-line-height': '3px',
            '--fixed-active-line-width': '15px',
          }}
        >
          <Tabs.Tab title="内地" key="aa">
            <div>
              {list.map((value, index) => {
                return (
                  <div key={index} className="w-[100%] h-[251px]">
                    <div className="w-[100%] h-[195px] rounded-[10px] bg-black relative">
                      <img
                        src={value.cover}
                        alt=""
                        className="rounded-[10px] bg-black w-[100%] h-[100%]"
                        onClick={() => window.location.assign(`/Mv#id=${value.id}`)}
                      />
                      <div className="text-white flex items-center absolute top-[10px] right-[10px]">
                        <Icon icon="ri:triangle-fill" color="white" rotate={1} />
                        {value.playCount > 100000
                          ? `${parseInt(value.playCount / 10000)}万`
                          : value.playCount}
                      </div>
                    </div>
                    <div className="ml-2">
                      <div className="text-[16px] text-[#222] font-[700] mt-[10px]">
                        {index < 3 ? (
                          <span className="text-[red]">{index + 1}</span>
                        ) : (
                          <span className="text-[#9c9c9c]">{index + 1}</span>
                        )}
                        <span className="ml-[10px]">{value.name}</span>
                      </div>
                      <div className="text-[#7c7c7c] text-[2vw] flex mt-[5px]">
                        {value.lastRank < 0 ? (
                          <div className="mr-[10px]">new</div>
                        ) : value.lastRank > index + 1 ? (
                          <div className="flex items-center mr-[10px]">
                            <Icon icon="mdi:triangle" color="red" />
                            {value.lastRank - (index + 1)}
                          </div>
                        ) : value.lastRank === index + 1 ? (
                          <div className="mr-[10px]"> -</div>
                        ) : (
                          <div className="flex items-center mr-[10px]">
                            <Icon icon="mdi:triangle" color="#48a4d2" rotate={2} />
                            {index + 1 - value.lastRank}
                          </div>
                        )}
                        {value.artists.map((item, ind) => {
                          return (
                            <div key={ind} className="ml-[5px]">
                              {ind > 0 ? `/${item.name}` : item.name}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Tabs.Tab>
          <Tabs.Tab title="港台" key="bb">
            <div>
              {list2.map((value, index) => {
                return (
                  <div key={index} className="w-[100%] h-[251px]">
                    <div className="w-[100%] h-[195px] rounded-[10px] bg-black relative">
                      <img
                        src={value.cover}
                        alt=""
                        className="rounded-[10px] bg-black w-[100%] h-[100%]"
                        onClick={() => window.location.assign(`/Mv#id=${value.id}`)}
                      />
                      <div className="text-white flex items-center absolute top-[10px] right-[10px]">
                        <Icon icon="ri:triangle-fill" color="white" rotate={1} />
                        {value.playCount > 100000
                          ? `${parseInt(value.playCount / 10000)}万`
                          : value.playCount}
                      </div>
                    </div>
                    <div>
                      <div className="text-[14px] text-[#222] font-black ">
                        {index < 3 ? (
                          <span className="text-[red]">{index + 1}</span>
                        ) : (
                          <span className="text-[#9c9c9c]">{index + 1}</span>
                        )}
                        <span className="ml-[10px]">{value.name}</span>
                      </div>
                      <div className="text-[#7c7c7c] text-[2vw] flex">
                        {value.lastRank < 0 ? (
                          <div className="mr-[10px]">new</div>
                        ) : value.lastRank > index + 1 ? (
                          <div className="flex items-center mr-[10px]">
                            <Icon icon="mdi:triangle" color="red" />
                            {value.lastRank - (index + 1)}
                          </div>
                        ) : value.lastRank === index + 1 ? (
                          <div className="mr-[10px]">-</div>
                        ) : (
                          <div className="flex items-center mr-[10px]">
                            <Icon icon="mdi:triangle" color="#48a4d2" rotate={2} />
                            {index + 1 - value.lastRank}
                          </div>
                        )}
                        {value.artists.map((item, ind) => {
                          return <div key={ind}>{ind > 0 ? `/${item.name}` : item.name}</div>;
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Tabs.Tab>
          <Tabs.Tab title="欧美" key="cc">
            <div>
              {list3.map((value, index) => {
                return (
                  <div key={index} className="w-[100%] h-[251px]">
                    <div className="w-[100%] h-[195px] rounded-[10px] bg-black relative">
                      <img
                        src={value.cover}
                        alt=""
                        className="rounded-[10px] bg-black w-[100%] h-[100%]"
                        onClick={() => window.location.assign(`/Mv#id=${value.id}`)}
                      />
                      <div className="text-white flex items-center absolute top-[10px] right-[10px]">
                        <Icon icon="ri:triangle-fill" color="white" rotate={1} />
                        {value.playCount > 100000
                          ? `${parseInt(value.playCount / 10000)}万`
                          : value.playCount}
                      </div>
                    </div>
                    <div>
                      <div className="text-[14px] text-[#222] font-black ">
                        {index < 3 ? (
                          <span className="text-[red]">{index + 1}</span>
                        ) : (
                          <span className="text-[#9c9c9c]">{index + 1}</span>
                        )}
                        <span className="ml-[10px]">{value.name}</span>
                      </div>
                      <div className="text-[#7c7c7c] text-[2vw] flex">
                        {value.lastRank < 0 ? (
                          <div className="mr-[10px]">new</div>
                        ) : value.lastRank > index + 1 ? (
                          <div className="flex items-center mr-[10px]">
                            <Icon icon="mdi:triangle" color="red" />
                            {value.lastRank - (index + 1)}
                          </div>
                        ) : value.lastRank === index + 1 ? (
                          <div className="mr-[10px]">-</div>
                        ) : (
                          <div className="flex items-center mr-[10px]">
                            <Icon icon="mdi:triangle" color="#48a4d2" rotate={2} />
                            {index + 1 - value.lastRank}
                          </div>
                        )}
                        {value.artists.map((item, ind) => {
                          return <div key={ind}>{ind > 0 ? `/${item.name}` : item.name}</div>;
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Tabs.Tab>
          <Tabs.Tab title="韩国" key="dd">
            <div>
              {list4.map((value, index) => {
                return (
                  <div key={index} className="w-[100%] h-[251px]">
                    <div className="w-[100%] h-[195px] rounded-[10px] bg-black relative">
                      <img
                        src={value.cover}
                        alt=""
                        className="rounded-[10px] bg-black w-[100%] h-[100%]"
                        onClick={() => window.location.assign(`/Mv#id=${value.id}`)}
                      />
                      <div className="text-white flex items-center absolute top-[10px] right-[10px]">
                        <Icon icon="ri:triangle-fill" color="white" rotate={1} />
                        {value.playCount > 100000
                          ? `${parseInt(value.playCount / 10000)}万`
                          : value.playCount}
                      </div>
                    </div>
                    <div>
                      <div className="text-[14px] text-[#222] font-black ">
                        {index < 3 ? (
                          <span className="text-[red]">{index + 1}</span>
                        ) : (
                          <span className="text-[#9c9c9c]">{index + 1}</span>
                        )}
                        <span className="ml-[10px]">{value.name}</span>
                      </div>
                      <div className="text-[#7c7c7c] text-[2vw] flex">
                        {value.lastRank < 0 ? (
                          <div className="mr-[10px]">new</div>
                        ) : value.lastRank > index + 1 ? (
                          <div className="flex items-center mr-[10px]">
                            <Icon icon="mdi:triangle" color="red" />
                            {value.lastRank - (index + 1)}
                          </div>
                        ) : value.lastRank === index + 1 ? (
                          <div className="mr-[10px]">-</div>
                        ) : (
                          <div className="flex items-center mr-[10px]">
                            <Icon icon="mdi:triangle" color="#48a4d2" rotate={2} />
                            {index + 1 - value.lastRank}
                          </div>
                        )}
                        {value.artists.map((item, ind) => {
                          return <div key={ind}>{ind > 0 ? `/${item.name}` : item.name}</div>;
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Tabs.Tab>
          <Tabs.Tab title="日本" key="ee">
            <div>
              {list5.map((value, index) => {
                return (
                  <div key={index} className="w-[100%] h-[251px]">
                    <div className="w-[100%] h-[195px] rounded-[10px] bg-black relative">
                      <img
                        src={value.cover}
                        alt=""
                        className="rounded-[10px] bg-black w-[100%] h-[100%]"
                        onClick={() => window.location.assign(`/Mv#id=${value.id}`)}
                      />
                      <div className="text-white flex items-center absolute top-[10px] right-[10px]">
                        <Icon icon="ri:triangle-fill" color="white" rotate={1} />
                        {value.playCount > 100000
                          ? `${parseInt(value.playCount / 10000)}万`
                          : value.playCount}
                      </div>
                    </div>
                    <div>
                      <div className="text-[14px] text-[#222] font-black ">
                        {index < 3 ? (
                          <span className="text-[red]">{index + 1}</span>
                        ) : (
                          <span className="text-[#9c9c9c]">{index + 1}</span>
                        )}
                        <span className="ml-[10px]">{value.name}</span>
                      </div>
                      <div className="text-[#7c7c7c] text-[2vw] flex">
                        {value.lastRank < 0 ? (
                          <div className="mr-[10px]">new</div>
                        ) : value.lastRank > index + 1 ? (
                          <div className="flex items-center mr-[10px]">
                            <Icon icon="mdi:triangle" color="red" />
                            {value.lastRank - (index + 1)}
                          </div>
                        ) : value.lastRank === index + 1 ? (
                          <div className="mr-[10px]">-</div>
                        ) : (
                          <div className="flex items-center mr-[10px]">
                            <Icon icon="mdi:triangle" color="#48a4d2" rotate={2} />
                            {index + 1 - value.lastRank}
                          </div>
                        )}
                        {value.artists.map((item, ind) => {
                          return <div key={ind}>{ind > 0 ? `/${item.name}` : item.name}</div>;
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Tabs.Tab>
        </Tabs>
      </div>
    </div>
  );
}
