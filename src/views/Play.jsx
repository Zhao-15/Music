/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { useToggle } from 'ahooks';
import { NavLink } from 'react-router-dom';

// 歌曲播放
export default function Play() {
  const id = window.location.hash.substring(4);
  const [list, updateList] = useState([]);
  const [list1, updateList1] = useState([]);
  useEffect(() => {
    axios
      .get(`https://netease-cloud-music-api-five-roan-88.vercel.app/song/detail?ids=${id}`)
      .then((res) => {
        // console.log(res.data.songs[0]);
        updateList(res.data.songs[0].al);
        updateList1(res.data.songs[0].ar[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 歌词
  const [list2, updateList2] = useState([]);
  useEffect(() => {
    axios
      .get(`https://netease-cloud-music-api-five-roan-88.vercel.app/lyric?id=${id}`)
      .then((res) => {
        // console.log(res.data.lrc);
        updateList2(res.data.lrc);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [list3, updateList3] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://netease-cloud-music-api-five-roan-88.vercel.app/song/url/v1?id=${id}&level=standard&cookie=`,
      )
      .then((res) => {
        console.log(res.data.data[0]);
        updateList3(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [state, { toggle }] = useToggle(true);

  const dun = useRef(null);
  const play = () => {
    const aud = dun.current;
    if (aud.paused) {
      aud.play();
    } else {
      aud.pause();
    }
  };

  const [lyrics, none] = useState(true);

  return (
    <div className="w-[100%] h-[100vh] bg-[#7f7f7f] relative">
      <div className="w-[100%] h-[100%] relative">
        <img
          src={list.picUrl}
          alt=""
          className="w-[100%] h-[100%] bg-no-repeat blur-xl brightness-50"
        />
      </div>
      <div className="w-[100%] h-[100%] absolute top-0">
        <div className="h-[56px] flex items-center justify-between px-[15px] text-[26px]">
          <div>
            <NavLink to={-1}>
              <Icon icon="teenyicons:down-outline" color="white" />
            </NavLink>
          </div>
          <div className="text-white">
            <p className="text-[14px] text-center">{list.name}</p>
            <div className="text-[2.8vw] flex items-center text-[#BCBFBF] justify-center">
              {list1.name}
              <div className="bg-[#84868B] ml-1 px-[1.6vw] py-[0.8vw] rounded-[15px] ">关注</div>
            </div>
          </div>
          <Icon icon="material-symbols:share-outline" color="white" />
        </div>
        <div
          className="h-[450px] w-[100vw] absolute mt-[56px]"
          style={{ display: lyrics ? 'block' : 'none' }}
          onClick={() => {
            none(false);
          }}
        >
          <div>
            <div>
              <div
                className="h-[40vw] w-[30vw] absolute left-[46%] origin-top-left z-30 duration-600"
                style={{
                  transform: state ? 'rotate(-10deg)' : 'rotate(-45deg)',
                }}
              >
                <img
                  src="https://admirable-jalebi-ce44af.netlify.app/static/needle-ab.png"
                  alt=""
                  className="h-[150px] absolute top-[-3.2vw] left-[-3.2vw]"
                />
              </div>
              <div className="w-[100%] absolute top-[54px]">
                <div>
                  <div className="absolute left-[10%] z-20">
                    <img
                      src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
                      alt=""
                      className="w-[300px]"
                    />
                  </div>
                  <div className="absolute left-[10%] z-20">
                    <img
                      src="https://admirable-jalebi-ce44af.netlify.app/static/disc_light.png"
                      alt=""
                      className="w-[300px]"
                    />
                  </div>
                </div>
                <div className="w-[188px] h-[188px] rounded-[50%] absolute top-[56px] left-[94px] ">
                  <img
                    src={list.picUrl}
                    alt=""
                    style={{ width: '186px', h: '186px', borderRadius: '50%' }}
                    className={state ? 'animate-[spin_10s_linear_infinite]' : ''}
                  />
                </div>
              </div>
              <div className="w-[100%] absolute top-[420px] flex justify-evenly text-[22px]">
                <div>
                  <Icon icon="icon-park-outline:like" color="white" />
                  {/* <Icon icon="icon-park-solid:like" color="red" /> */}
                </div>
                <div>
                  <Icon icon="el:download" color="white" />
                </div>
                <div>
                  <Icon icon="icon-park-outline:peoples-two" color="white" />
                </div>
                <div>
                  <Icon icon="icons8:comments" color="white" />
                </div>
                <div>
                  <Icon icon="prime:ellipsis-v" color="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[480px] absolute left-0 top-[-50px]">
          <div
            className="h-[430px] overflow-hidden"
            style={{ display: lyrics ? 'none' : 'block' }}
            onClick={() => {
              none(true);
            }}
          >
            <div>{list2.lyric}</div>
          </div>
        </div>
        <div className="w-[100%] absolute bottom-[7.5vw]">
          <div>
            <input type="range" value="0" min="0" max="100" className="w-[100%]" />
            <audio src={list3.url} autoPlay ref={dun} />
          </div>
          <div className="flex items-center justify-evenly text-[20px]">
            <div>
              <Icon icon="teenyicons:loop-outline" color="white" />
            </div>
            <div>
              <Icon icon="tabler:player-skip-back-filled" color="white" />
            </div>
            <div
              className="w-[44px] h-[44px] bg-white rounded-[50%] text-center leading-[50px] text-[36px]"
              onClick={() => {
                toggle();
                play();
              }}
            >
              {state ? (
                <Icon icon="gg:play-pause" className="mt-[4px] ml-[2px]" />
              ) : (
                <Icon icon="bi:play-fill" className=" text-[30px] ml-1" />
              )}
            </div>
            <div>
              <Icon icon="tabler:player-skip-back-filled" color="white" hFlip />
            </div>
            <div>
              <Icon icon="ri:play-list-2-fill" color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
