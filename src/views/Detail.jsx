/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable radix */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { SearchOutline, MoreOutline } from 'antd-mobile-icons';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { useToggle } from 'ahooks';
import BetterScroll from '@/components/BetterScroll';

// 歌单详情
export default function Detail() {
  const id = window.location.hash.substring(4);

  const [list, updateList] = useState([]);
  const [list1, updateList1] = useState([]);
  const [list2, updateList2] = useState([]);
  useEffect(() => {
    axios
      .get(`https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=${id}`)
      .then((res) => {
        // console.log(res.data.playlist);
        updateList(res.data.playlist);
        updateList1(res.data.playlist.creator);
        updateList2(res.data.playlist.tags);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [list3, updateList3] = useState([]);
  useEffect(() => {
    axios
      .get(`https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/track/all?id=${id}`)
      .then((res) => {
        console.log(res.data.songs);
        updateList3(res.data.songs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [list4, updateList4] = useState([]);
  useEffect(() => {
    axios
      .get(`https://netease-cloud-music-api-five-roan-88.vercel.app/related/playlist?id=${id}`)
      .then((res) => {
        // console.log(res.data.playlists);
        updateList4(res.data.playlists);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [state, { toggle }] = useToggle(true);

  return (
    <div>
      <div className="bg-[#486D8D] px-[14px] pb-[20px] pt-[50px]">
        <div className="h-[50px] w-[100%] leading-[50px] flex items-center justify-between text-[24px] text-white bg-[#486D8D] fixed top-0 left-0 px-[14px]">
          <div className="flex items-center">
            <Icon
              icon="radix-icons:arrow-left"
              onClick={() => {
                window.location.assign('/Home');
              }}
              className="text-white"
            />
            <div className="ml-[18px] text-[18px]">歌单</div>
          </div>
          <div>
            <SearchOutline className="ml-[10px] mr-[3px]" />
            <MoreOutline className="rotate-90" style={{ marginLeft: '18px' }} />
          </div>
        </div>
        <div>
          {state ? (
            <>
              <div className="w-[302px] flex justify-between">
                <div className="w-[90px] h-[90px] relative">
                  <div className="w-[78px] h-[30px] rounded-[10px] bg-white ml-[6px] opacity-30" />
                  <img
                    src={list.coverImgUrl}
                    alt=""
                    className="w-[90px] h-[90px] rounded-[15px] mt-[-27px] relative z-10"
                  />
                  {list.playCount > 10000 ? (
                    <div className=" flex items-center absolute top-[2vw] right-[2vw] text-[3.2vw] font-bold text-[#ffffff] z-20">
                      <Icon icon="maki:triangle" rotate={1} className="text-[2.934vw]" />
                      {parseInt(list.playCount / 10000)}万
                    </div>
                  ) : (
                    <div className=" flex items-center absolute top-[2vw] right-[2vw] text-[3.2vw] font-bold text-[#ffffff] z-20">
                      <Icon icon="maki:triangle" rotate={1} className="text-[2.934vw]" />
                      {list.playCount}
                    </div>
                  )}
                </div>
                <div className="w-[206px] h-[90px]">
                  <h5 className="text-[14px] text-white">{list.name}</h5>
                  <div className="flex items-center text-[12px] mt-1 text-white">
                    <img src={list1.avatarUrl} alt="" className="w-[23px] rounded-[50%]" />
                    <div className="opacity-60 mx-[5px]">{list1.nickname}</div>
                    <div className="w-[60px] h-[28px] bg-[#9c9c9c] bg-opacity-50 text-center leading-[28px] rounded-[14px]">
                      +关注
                    </div>
                  </div>
                  <div className="flex text-white text-[12px] mt-[5px]">
                    {list2.map((value, index) => {
                      return (
                        <div
                          key={index}
                          className="px-[6px] py-[2px] bg-[#9c9c9c] bg-opacity-50 mr-[5px] text-center leading-[22px] rounded-[5px]"
                        >
                          {value} &gt;
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-white mt-[14px]">
                <div className="w-[310px] h-[18px] text-[12px] opacity-60 overflow-x-hidden">
                  {list.description}
                </div>
                <div>&gt;</div>
              </div>
            </>
          ) : (
            <div>
              <div className="w-[100%] h-[10vw] flex items-center text-[3.2vw] text-[#ffffff]">
                喜欢这个歌单的用户也听了
              </div>
              <div>
                <BetterScroll
                  wrapperStyle={{ height: '150px' }}
                  contentStyle={{ display: 'flex', width: '170%' }}
                  config={{ scrollX: true, scrollY: false, click: true }}
                >
                  {list4.map((value, index) => {
                    return (
                      <div key={index} className="w-[105px] mr-[10px]">
                        <div className="w-[96px] h-[30px] rounded-[10px] bg-white ml-[6px] opacity-30" />
                        <img
                          src={value.coverImgUrl}
                          alt=""
                          className="w-[105px] h-[105px] rounded-[10px] mt-[-26px] relative z-10"
                        />
                        <div className="text-[12px] text-white">{value.name}</div>
                      </div>
                    );
                  })}
                </BetterScroll>
              </div>
            </div>
          )}
          <div
            onClick={() => toggle()}
            className="h-[22px] w-[22px] rounded-[11px] text-center leading-[26px] absolute right-[20px] top-[50px] bg-[#9c9c9c] bg-opacity-50 text-[12px]"
          >
            {state ? (
              <Icon icon="teenyicons:down-outline" color="white" />
            ) : (
              <Icon icon="teenyicons:down-outline" vFlip color="white" />
            )}
          </div>
        </div>
        <div className="flex text-white text-center leading-[37px] justify-between mt-[14px]">
          <div className="w-[108px] h-[37px] bg-[#9c9c9c] bg-opacity-50 rounded-[40px] flex items-center justify-center">
            <Icon icon="basil:forward-solid" className="mr-[5px] text-[24px]" />
            {list.shareCount}
          </div>
          <div className="w-[108px] h-[37px] bg-[#9c9c9c] bg-opacity-50 rounded-[40px] flex items-center justify-center">
            <Icon icon="ant-design:message-filled" className="mr-[5px] text-[24px]" />
            {list.commentCount}
          </div>
          <div className="w-[108px] h-[37px] bg-[red] rounded-[40px] flex items-center justify-center">
            <Icon icon="mdi:star-plus" className="mr-[5px] text-[24px]" />
            {list.subscribedCount > 10000
              ? `${parseInt(list.subscribedCount / 10000)}万`
              : list.subscribedCount}
          </div>
        </div>
      </div>
      <div className="w-[100%] mt-[-10px] rounded-[15px] bg-white px-[14px]">
        <div
          className="h-[50px] flex justify-between items-center"
          style={{ position: 'sticky', top: '13.5vw', backgroundColor: 'white' }}
        >
          <div className="flex items-center">
            <Icon icon="carbon:play-filled" color="red" className="text-[30px]" />
            <div className="text-[14px] ml-[15px] mr-[9px]">
              播放全部
              <span className="text-[#8c9094] text-[12px] ml-[5px]">({list3.length})</span>
            </div>
          </div>
          <div className="text-[20px]">
            <Icon icon="clarity:download-line" />
            <Icon icon="octicon:multi-select-16" className="ml-[19px]" />
          </div>
        </div>
        <div>
          {list3.map((value, index) => {
            return (
              <div
                key={index}
                className="h-[52px] text-[14px] text-[#949797] flex items-center justify-between"
                onClick={() => window.location.assign(`/Play#id=${value.id}`)}
              >
                <div className="ml-[10px]">{index + 1}</div>
                <div className="w-[240px] overflow-hidden">
                  <div className="w-[188px] h-[20px] overflow-hidden">
                    <span className="text-[#333333] mr-[5px]">{value.name}</span>
                    <span>{value.alia.length === 0 ? null : `[ "${value.alia}" ]`} </span>
                  </div>
                  <div className="text-[12px] flex items-center mt-1">
                    {value.fee === 1 ? (
                      <div>
                        <span className="border-solid border-[1px] border-[red] text-[red] text-[0.032rem] mr-1">
                          vip
                        </span>
                        <span className="border-solid border-[1px] border-[#60BDEF] text-[#60BDEF] text-[0.032rem] mr-1">
                          试听
                        </span>
                      </div>
                    ) : null}
                    {value.ar[0].name}-{value.name}
                  </div>
                </div>
                <div className="text-[20px]">
                  <Icon icon="arcticons:fpt-play" className="mr-[18px]" />
                  <Icon icon="mdi:ellipsis-vertical" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
