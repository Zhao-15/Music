/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable import/no-extraneous-dependencies */
import { Icon } from '@iconify/react';
import { NoticeBar, ProgressBar } from 'antd-mobile';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useToggle } from 'ahooks';

export default function Mv() {
  const id = window.location.hash.substring(4);
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get(`https://netease-cloud-music-api-five-roan-88.vercel.app/mv/url?id=${id}`)
      .then((res) => {
        // console.log(res.data.data);
        setList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [list2, setList2] = useState([]);
  const [list3, setList3] = useState([]);
  useEffect(() => {
    axios
      .get(`https://netease-cloud-music-api-five-roan-88.vercel.app/mv/detail?mvid=${id}`)
      .then((res) => {
        // console.log(res.data.data);
        setList2(res.data.data.artists[0]);
        setList3(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [list4, setList4] = useState([]);
  useEffect(() => {
    axios
      .get(`https://netease-cloud-music-api-five-roan-88.vercel.app/mv/detail/info?mvid=${id}`)
      .then((res) => {
        console.log(res.data);
        setList4(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const One = [
    {
      icon: <Icon icon="mdi:like" />,
      text: `${list4.likedCount}`,
    },
    {
      icon: <Icon icon="ant-design:message-filled" />,
      text: `${list4.commentCount}`,
    },
    {
      icon: <Icon icon="basil:forward-solid" />,
      text: `${list4.shareCount}`,
    },
    {
      icon: <Icon icon="fluent:collections-24-filled" />,
      text: '收藏',
    },
  ];

  const [state, { toggle }] = useToggle(true);

  const url = useRef(null);
  const iconRef = useRef(null);
  const Mvplay = () => {
    const video = url.current;
    const icon = iconRef.current;
    if (video.paused) {
      video.play();
      icon.style.display = 'none';
    } else {
      video.pause();
      icon.style.display = 'block';
    }
  };

  const [currentTime, setCurrentTime] = useState(0);
  const update = () => {
    setCurrentTime(url.current.currentTime);
  };
  const ended = () => {
    url.current.currentTime = 0;
    url.current.play();
  };

  return (
    <div className="w-[100%] h-[100vh] bg-black text-white">
      <div className="pt-[12px] px-[22px] text-[26px] flex items-center justify-between">
        <NavLink to={-1}>
          <Icon icon="icon-park-outline:left" color="white" />
        </NavLink>
        <div className="flex items-center">
          <Icon icon="ri:picture-in-picture-2-fill" color="white" className="mr-[26px]" />
          <Icon icon="mdi:ellipsis-vertical" color="white" />
        </div>
      </div>
      <div className="w-[100vw] absolute top-[12%]">
        <video
          src={list.url}
          className="w-[100vw]"
          loop
          autoPlay
          onTimeUpdate={update}
          onEnded={ended}
          ref={url}
        />
        <div
          className="w-[100%] h-[100%] absolute top-0 left-0 flex items-center justify-center"
          onClick={() => Mvplay()}
        >
          <Icon
            icon="solar:play-bold"
            color="white"
            className="text-[14vw] opacity-30 hidden"
            ref={iconRef}
          />
        </div>
      </div>
      <div className="w-[100vw] absolute bottom-0">
        <div className="px-[4vw] flex justify-between items-end">
          <div>
            <div className="flex items-center mb-[10px]">
              <div className="w-[9.003vw] h-[9.003vw] rounded-[50%] bg-[#ffffff] flex items-center justify-center">
                <img src={list2.img1v1Url} alt="" className="w-[8vw] h-[8vw] rounded-[50%]" />
              </div>
              <div className="h-[6vw] mx-[2vw] text-[4vw] text-[#ffffff]">{list2.name}</div>
              <div className="w-[7.003vw] h-[5vw] text-[4vw] text-[#ffffff] bg-[#ed4b44] rounded-[2vw] flex justify-center items-center">
                <Icon icon="iconamoon:sign-plus-bold" />
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="w-[250px] text-[12px]">
                  <div className="w-[28px] h-[18px] absolute bg-[#949494] opacity-40" />
                  <span className="pl-1 pt-[0]">MV</span>
                  <span className="pt-[2px] ml-[10px]">{list3.name}</span>
                  {state ? null : (
                    <div className="w-[270px] h-[360px] text-[14px] overflow-auto mt-2">
                      {list3.desc}
                    </div>
                  )}
                </div>
                <div onClick={() => toggle()} className="">
                  {state ? <Icon icon="uiw:down" vFlip /> : <Icon icon="uiw:down" />}
                </div>
              </div>
            </div>
            <div className="flex mt-[16px] mb-[10px]">
              <div className="w-[4vw] h-[4vw] flex justify-center items-center">
                <Icon icon="fluent-mdl2:music-note" className="text-[4vw] text-[#b3b3b3]" />
              </div>
              <div className="w-[34vw]">
                <NoticeBar
                  icon=""
                  speed="25"
                  content={list3.name}
                  style={{
                    '--background-color': 'inherit',
                    '--font-size': '3.7vw',
                    border: 'none',
                    height: '5.4vw',
                  }}
                />
              </div>
              <div className="w-[4vw] h-[4vw] flex justify-center items-center">
                <Icon icon="mdi:heart-outline" className="text-[4vw] text-[#ffffff]" />
              </div>
            </div>
          </div>
          <div>
            {One.map((value, index) => {
              return (
                <div key={index} className="w-[10vw] h-[12.8vw] mb-[3vw] text-center">
                  <div className=" mb-[1vw] text-white text-[5vw]">{value.icon}</div>
                  <div className="text-[3vw]">{value.text}</div>
                </div>
              );
            })}
            <div className=" w-[10vw] h-[10vw] rounded-[50%] flex justify-center items-center">
              <img
                src={list3.cover}
                alt=""
                className="w-[7vw] h-[7vw] rounded-[50%] rotateAnimation"
              />
            </div>
          </div>
        </div>
        <div className="text-white">
          <ProgressBar
            rounded={false}
            style={{
              '--fill-color': 'white',
              '--track-color': '#5f5f5f',
              '--track-width': '1.1vw',
            }}
            percent={(currentTime / url.current?.duration) * 100}
          />
        </div>
        <div className=" w-[100%] flex items-center justify-between text-[#4d4d4d] p-[4vw] box-border text-[4vw]">
          发条评论结识有趣的人
          <Icon icon="material-symbols:expand-content-rounded" rotate={1} fontSize="5vw" />
        </div>
      </div>
    </div>
  );
}
