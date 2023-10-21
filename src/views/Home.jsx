/* eslint-disable react/no-unknown-property */
/* eslint-disable react/button-has-type */
/* eslint-disable radix */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import {
  UnorderedListOutline,
  AudioOutline,
  ScanningOutline,
  SearchOutline,
  MoreOutline,
} from 'antd-mobile-icons';
import { Popup, Swiper, Space, Button } from 'antd-mobile';
import axios from 'axios';
import { Icon } from '@iconify/react';
// import { NavLink } from 'react-router-dom';
import { Switch } from 'antd';
import dayjs from 'dayjs';
import BetterScroll from '@/components/BetterScroll';

// 首页
export default function Home() {
  const [list, updateList] = useState([]);
  const [list3, updateList3] = useState([]);
  const [list4, updateList4] = useState([]);
  const [list5, updateList5] = useState([]);
  const [list8, updateList8] = useState([]);
  useEffect(() => {
    axios
      .get('https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/block/page')
      .then((res) => {
        // console.log(res.data.data.blocks);
        updateList(res.data.data.blocks[0].extInfo.banners);
        updateList3(res.data.data.blocks[1].creatives);
        updateList4(res.data.data.blocks[2].creatives);
        updateList5(res.data.data.blocks[3].creatives);
        updateList8(res.data.data.blocks[1].creatives[0].resources);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const items = list.map((value, index) => (
    <Swiper.Item key={index}>
      <div>
        <img src={value.pic} alt="" className="w-[338px] h-[136px] rounded-[16px] border-black" />
      </div>
    </Swiper.Item>
  ));

  const [list2, updateList2] = useState([]);
  useEffect(() => {
    axios
      .get('https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/dragon/ball')
      .then((res) => {
        // console.log(res.data.data);
        updateList2(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [list6, updateList6] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/topic/detail/event/hot?actid=111551188&cookie=',
      )
      .then((res) => {
        // console.log(res.data.events);
        updateList6(res.data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [list7, updateList7] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=${
          Date.now() - 1000 * 60 * 60 * 24
        }&endTime=${Date.now()}&cookie=`,
      )
      .then((res) => {
        // console.log(res.data.data.calendarEvents);
        updateList7(res.data.data.calendarEvents);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [visible, setVisible] = useState(false);
  const one = [
    {
      icon: <Icon icon="solar:letter-line-duotone" className="mr-[10px]" />,
      text: '我的消息',
      span: '',
    },
    {
      icon: <Icon icon="simple-icons:shell" className="mr-[10px]" />,
      text: '云贝中心',
      span: '签到',
    },
    {
      icon: <Icon icon="tabler:bulb" className="mr-[10px]" />,
      text: '创作者中心',
      span: '',
    },
  ];
  const two = [
    {
      icon: <Icon icon="emojione-monotone:dotted-six-pointed-star" className="mr-[10px]" />,
      text: '趣测',
      span: '查看今日运势',
    },
    {
      icon: <Icon icon="ion:ticket-outline" className="mr-[10px]" />,
      text: '云村有票',
      span: '',
    },
    {
      icon: <Icon icon="mdi:help-box-outline" className="mr-[10px]" />,
      text: '多多西西口袋',
      span: '',
    },
    {
      icon: <Icon icon="ph:bag-thin" className="mr-[10px]" />,
      text: '商店',
      span: '',
    },
    {
      icon: (
        <Icon
          icon="streamline:interface-signal-square-heart-line-stats-beat-square-graph"
          className="mr-[10px]"
        />
      ),
      text: 'Beat专区',
      span: '顶尖制作邀你创作',
    },
    {
      icon: <Icon icon="tabler:bell" className="mr-[10px]" />,
      text: '口袋彩铃',
      span: '',
    },
    {
      icon: <Icon icon="mingcute:game-1-line" className="mr-[10px]" />,
      text: '游戏专区',
      span: '音乐浇灌治愈花园',
    },
  ];
  const three = [
    {
      icon: <Icon icon="basil:settings-outline" className="mr-[10px]" />,
      text: '设置',
      span: '',
    },
    {
      icon: <Icon icon="line-md:moon" className="mr-[10px]" />,
      text: '深色模式',
      span: '',
      switch: true,
    },
    {
      icon: <Icon icon="lucide:alarm-clock" className="mr-[10px]" />,
      text: '定时关闭',
      span: '',
    },
    {
      icon: <Icon icon="ph:t-shirt" className="mr-[10px]" />,
      text: '个性装扮',
      span: '',
    },
    {
      icon: <Icon icon="iconoir:headset-issue" className="mr-[10px]" />,
      text: '边听边存',
      span: '未开启',
    },
    {
      icon: <Icon icon="iconoir:headset-issue" className="mr-[10px]" />,
      text: '在线听歌免流量',
      span: '',
    },
    {
      icon: <Icon icon="material-symbols:featured-play-list-outline-sharp" className="mr-[10px]" />,
      text: '音乐黑名单',
      span: '未开启',
    },
    {
      icon: <Icon icon="mdi:forbid" className="mr-[10px]" />,
      text: '青少年模式',
      span: '未开启',
    },
    {
      icon: <Icon icon="ep:alarm-clock" className="mr-[10px]" />,
      text: '音乐闹钟',
      span: '',
    },
  ];
  const four = [
    {
      icon: <Icon icon="fluent:document-bullet-list-16-regular" className="mr-[10px]" />,
      text: '我的订单',
    },
    {
      icon: <Icon icon="ion:ticket-outline" className="mr-[10px]" />,
      text: '优惠卷',
    },
    {
      icon: <Icon icon="teenyicons:headset-outline" className="mr-[10px]" />,
      text: '我的客服',
    },
    {
      icon: <Icon icon="ph:share" className="mr-[10px]" />,
      text: '分享网易云音乐',
    },
    {
      icon: <Icon icon="akar-icons:paper" className="mr-[10px]" />,
      text: '个人信息收集及使用清单',
    },
    {
      icon: <Icon icon="solar:checklist-minimalistic-linear" className="mr-[10px]" />,
      text: '个人信息第三方共享清单',
    },
    {
      icon: (
        <Icon
          icon="streamline:interface-security-shield-1-shield-protection-security-defend-crime-war-cover"
          className="mr-[10px]"
        />
      ),
      text: '个人信息与隐私保护',
    },
    {
      icon: <Icon icon="quill:warning-alt" className="mr-[10px]" />,
      text: '关于',
    },
  ];

  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);

  return (
    <div className=" bg-[#f1f1f1] pb-[60px] overflow-hidden">
      {/* 顶部 */}
      <div className=" bg-gradient-to-b from-[#e6e6fb] to-[#f1f1f1]">
        <div className=" h-[74px] p-[11px] flex justify-evenly items-center">
          <UnorderedListOutline
            className="text-[26px]"
            onClick={() => {
              setVisible(true);
            }}
          />
          <Popup
            visible={visible}
            onMaskClick={() => {
              setVisible(false);
            }}
            position="left"
            bodyStyle={{ width: '316px' }}
          >
            <div className="bg-[#f1f1f1] px-[18px] pb-[25px] h-[100vh] overflow-auto">
              <div className="w-[100%] h-[60px] flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-[26px] h-[26px] rounded-[13px] bg-white mr-[8px] text-center">
                    <Icon icon="ooui:user-avatar" color="#eabdbd" className="text-[20px]" />
                  </div>
                  {/* <NavLink to="/Login"> */}
                  <div
                    onClick={() => {
                      window.location.assign('/Login');
                    }}
                    className="text-black"
                  >
                    立刻登录 &gt;
                  </div>
                  {/* </NavLink> */}
                </div>
                <div>
                  <Icon icon="teenyicons:scan-outline" />
                </div>
              </div>
              <div className="w-[100%] h-[104px] rounded-[20px] bg-[#5a5a5a] px-[15px]">
                <div className="h-[38px] flex items-center justify-between pt-[10px]">
                  <div className="text-white">开通黑胶VIP</div>
                  <div className="w-[62px] h-[26px] border-[2px] rounded-[12px] text-[#9e8f8f] text-center">
                    会员中心
                  </div>
                </div>
                <div className="text-[#9e8f8f] h-[30px] border-b-[2px] border-black">
                  点击恢复超21项专属特权
                </div>
                <div className="flex items-center justify-between text-[12px] text-[#9e8f8f]">
                  <div>受邀专项，黑胶VIP低至0.27元/秒</div>
                  <div className="w-[30px] h-[30px] bg-[red] text-white text-[12px]">受邀专享</div>
                </div>
              </div>
              <div className="w-[100%] rounded-[20px] bg-white px-[15px] text-[14px] mt-[15px]">
                {one.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className="h-[45px] flex items-center justify-between px-[14px]"
                    >
                      <div className="flex items-center">
                        {value.icon}
                        {value.text}
                      </div>
                      <div>
                        <span className="text-[#a7a7a7] text-[12px]">{value.span}</span> &gt;
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-[100%] rounded-[20px] bg-white text-[14px] mt-[15px]">
                <div className="text-[#969696] px-[15px] py-[11px]">音乐服务</div>
                <div className=" px-[15px]">
                  {two.map((value, index) => {
                    return (
                      <div
                        key={index}
                        className="h-[45px] flex items-center justify-between px-[14px]"
                      >
                        <div className="flex items-center">
                          {value.icon}
                          {value.text}
                        </div>
                        <div>
                          <span className="text-[#a7a7a7] text-[12px]">{value.span}</span> &gt;
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-[100%] rounded-[20px] bg-white text-[14px] mt-[15px]">
                <div className="text-[#969696] px-[15px] py-[11px] border-b-[1px]">其他</div>
                <div className=" px-[15px]">
                  {three.map((value, index) => {
                    return (
                      <div
                        key={index}
                        className="h-[45px] flex items-center justify-between px-[14px]"
                      >
                        <div className="flex items-center">
                          {value.icon}
                          {value.text}
                        </div>
                        <div>
                          <span className="text-[#a7a7a7] text-[12px]">{value.span}</span>
                          {value.switch ? <Switch /> : '>'}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-[100%] rounded-[20px] bg-white px-[15px] text-[14px] mt-[15px]">
                {four.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className="h-[45px] flex items-center justify-between px-[14px]"
                    >
                      <div className="flex items-center">
                        {value.icon}
                        {value.text}
                      </div>
                      <div>&gt;</div>
                    </div>
                  );
                })}
              </div>
              <div className="w-[100%] h-[45px] text-[red] bg-white mt-[15px] mx-auto rounded-[15px] text-[14px] text-center leading-[45px]">
                关闭云音乐
              </div>
            </div>
          </Popup>
          <div
            onClick={() => {
              window.location.assign('/Search');
            }}
            className="flex items-center w-[280px] h-[34px] bg-gradient-to-r from-[#d9ddfd] to-[#f3d9ef] border-[2px] border-[#cccef7] rounded-[17px] text-[#8189a1] text-[16px]"
          >
            <SearchOutline className="ml-[10px] mr-[3px]" />
            <input
              type="text"
              className="h-[100%] w-[220px] bg-transparent outline-none border-[0]"
              placeholder="Love Is Gone(Acoustic)"
            />
            <ScanningOutline />
          </div>
          <AudioOutline className="text-[24px]" />
        </div>
        <div className="w-[338px] h-[136px] m-auto">
          <div>
            <Swiper autoplay loop>
              {items}
            </Swiper>
          </div>
        </div>
      </div>
      {/* 菜单 */}
      <BetterScroll
        wrapperStyle={{ height: '75px' }}
        contentStyle={{ display: 'flex', width: '200%' }}
        config={{ scrollX: true, scrollY: false }}
      >
        <div className="pl-[20px] flex">
          {list2.map((value, index) => {
            return (
              <div key={index} className="w-[48px] mr-[22px]">
                <img src={value.iconUrl} alt="" className="w-[48px] m-auto" />
                <p className="text-center text-[12px] text-[#666f7d]">{value.name}</p>
              </div>
            );
          })}
        </div>
      </BetterScroll>
      {/* 推荐歌单 */}
      <div className="mt-[10px] px-[15px]">
        <div className="flex items-center justify-between text-[18px]">
          <span>推荐歌单 &gt; </span>
          <Space direction="vertical">
            <>
              <Button
                onClick={() => {
                  setVisible1(true);
                }}
                className="p-[0] border-[0px] bg-[#f1f1f1]"
              >
                <MoreOutline className="rotate-90" />
              </Button>
              <Popup
                visible={visible1}
                onMaskClick={() => {
                  setVisible1(false);
                }}
                onClose={() => {
                  setVisible1(false);
                }}
              >
                <div className="py-[3vw]">
                  <div
                    className="pl-[6vw] pb-3 text-[#8d8d8d]"
                    style={{ borderBottom: '1px solid #939ba1' }}
                  >
                    推荐歌单
                  </div>
                  <div className="mt-3 px-[6vw]">
                    <p className="text-black mt-[4vw] text-[5vw] flex items-center">
                      <Icon icon="iconamoon:like-light" class="w-[6vw] h-[6vw] mr-[2vw]" />
                      <p className="ml-3 text-[3vw]">优先推荐</p>
                    </p>
                    <p className="text-black mt-[4vw] text-[5vw] flex items-center">
                      <Icon icon="basil:heart-off-outline" class="w-[6vw] h-[6vw] mr-[2vw]" />
                      <p className="ml-3 text-[3vw]">减少推荐</p>
                    </p>
                    <p className="text-black mt-[4vw] text-[5vw] flex items-center">
                      <Icon icon="icon-park-outline:more-two" class="w-[6vw] h-[6vw] mr-[2vw]" />
                      <p className="ml-3 text-[3vw]">更多内容</p>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setVisible1(false);
                  }}
                  className="h-[22px] w-[22px] rounded-[50%] border-[0px] bg-[#bbbbbb] flex items-center justify-center text-[20px] absolute top-[8px] right-[16px]"
                >
                  <Icon icon="ic:baseline-close" />
                </button>
              </Popup>
            </>
          </Space>
        </div>
        <BetterScroll
          wrapperStyle={{ height: '170px' }}
          contentStyle={{ display: 'flex', width: '205%' }}
          config={{ scrollX: true, scrollY: false, click: true }}
        >
          <div className="h-[170px] pt-1 flex">
            {list3.map((value, index) => {
              return (
                <div>
                  {value.resources.length === 1 ? (
                    <div
                      key={index}
                      className="w-[116px] h-[152px] relative"
                      onClick={() => window.location.assign(`/Detail#id=${value.creativeId}`)}
                    >
                      <div className="w-[116px] h-[116px]">
                        <div className="w-[100px] h-[30px] rounded-[10px] bg-[#999999] ml-[6px] opacity-40" />
                        <img
                          src={value.resources[0].uiElement.image.imageUrl}
                          alt=""
                          className="h-[110px] rounded-[8px] mt-[-27px] relative z-10"
                        />
                      </div>
                      <p className="text-[12px]">{value.resources[0].uiElement.mainTitle.title}</p>
                      <div className="absolute top-[2vw] right-[2.5vw] font-bold text-white flex items-center z-20">
                        <Icon icon="ion:play" width="10" className="text-white w-[3vw] h-[3vw]" />
                        <span className="font-bold text-[2.5vw]">
                          {value.resources[0].resourceExtInfo.playCount > 10000
                            ? `${parseInt(value.resources[0].resourceExtInfo.playCount / 10000)}万`
                            : value.resources[0].resourceExtInfo.playCount}
                        </span>
                      </div>
                      <div className="absolute bottom-[40px] right-[5px] text-[24px] z-20">
                        <Icon icon="ion:play" className="text-white" />
                      </div>
                    </div>
                  ) : (
                    <Swiper
                      direction="vertical"
                      indicator={() => null}
                      autoplay
                      loop
                      allowTouchMove={false}
                      style={{ width: '116px', height: '152px', overflow: 'hidden' }}
                    >
                      {list8.map((val, ind) => (
                        <Swiper.Item key={ind} style={{ position: 'relative', overflow: 'hidden' }}>
                          <div className="w-[116px] h-[116px]">
                            <div className="w-[100px] h-[30px] rounded-[10px] bg-[#999999] ml-[6px] opacity-40" />
                            <img
                              src={val.uiElement.image.imageUrl}
                              alt=""
                              className="h-[110px] rounded-[8px] mt-[-27px] relative z-10"
                            />
                          </div>
                          <p className="text-[12px]">{val.uiElement.mainTitle.title}</p>
                          <div className="absolute top-[1vw] right-[3.5vw] text-[24px] z-20">
                            <Icon icon="ion:infinite-outline" color="white" />
                          </div>
                        </Swiper.Item>
                      ))}
                    </Swiper>
                  )}
                </div>
              );
            })}
          </div>
        </BetterScroll>
      </div>
      {/* 新歌 */}
      <div className="mt-[10px] px-[15px]">
        <div className="flex items-center justify-between text-[18px]">
          <span>新歌新碟\数字专辑 &gt; </span>
          <Space direction="vertical">
            <>
              <Button
                onClick={() => {
                  setVisible2(true);
                }}
                className="p-[0] border-[0px] bg-[#f1f1f1]"
              >
                <MoreOutline className="rotate-90" />
              </Button>
              <Popup
                visible={visible2}
                onMaskClick={() => {
                  setVisible2(false);
                }}
                onClose={() => {
                  setVisible2(false);
                }}
              >
                <div className="py-[3vw]">
                  <div
                    className="pl-[6vw] pb-3 text-[#8d8d8d]"
                    style={{ borderBottom: '1px solid #939ba1' }}
                  >
                    新歌新碟\数字专辑
                  </div>
                  <div className="mt-3 px-[6vw]">
                    <p className="text-black mt-[4vw] text-[5vw] flex items-center">
                      <Icon icon="iconamoon:like-light" class="w-[6vw] h-[6vw] mr-[2vw]" />
                      <p className="ml-3 text-[3vw]">优先推荐</p>
                    </p>
                    <p className="text-black mt-[4vw] text-[5vw] flex items-center">
                      <Icon icon="basil:heart-off-outline" class="w-[6vw] h-[6vw] mr-[2vw]" />
                      <p className="ml-3 text-[3vw]">减少推荐</p>
                    </p>
                    <p className="text-black mt-[4vw] text-[5vw] flex items-center">
                      <Icon icon="icon-park-outline:more-two" class="w-[6vw] h-[6vw] mr-[2vw]" />
                      <p className="ml-3 text-[3vw]">更多内容</p>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setVisible2(false);
                  }}
                  className="h-[22px] w-[22px] rounded-[50%] border-[0px] bg-[#bbbbbb] flex items-center justify-center text-[20px] absolute top-[8px] right-[16px]"
                >
                  <Icon icon="ic:baseline-close" />
                </button>
              </Popup>
            </>
          </Space>
        </div>
        <BetterScroll
          wrapperStyle={{ height: '210px' }}
          contentStyle={{ display: 'flex', width: '350%' }}
          config={{ scrollX: true, scrollY: false }}
        >
          <div className="h-[210px] pt-1 flex">
            {list4.map((value, ind) => {
              return (
                <div key={ind} className="w-[300px] h-[210px] mr-[15px]">
                  {value.resources.map((item, index) => (
                    <div key={index} className="flex mt-[14px]">
                      <div>
                        <img
                          src={item.uiElement.image.imageUrl}
                          alt=""
                          className="h-[54px] rounded-[8px]"
                        />
                      </div>
                      <div className="ml-[5px]">
                        <p className="text-[14px]">{item.uiElement.mainTitle.title}</p>
                        <p className="text-[12px]">
                          {item.uiElement.subTitle ? item.uiElement.subTitle.title : ''}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </BetterScroll>
      </div>
      {/* 排行榜 */}
      <div className="mt-[10px] px-[15px]">
        <div className="flex items-center justify-between text-[18px]">
          <span>排行榜 &gt; </span>
          <Space direction="visible3">
            <>
              <Button
                onClick={() => {
                  setVisible3(true);
                }}
                className="p-[0] border-[0px] bg-[#f1f1f1]"
              >
                <MoreOutline className="rotate-90" />
              </Button>
              <Popup
                visible={visible3}
                onMaskClick={() => {
                  setVisible3(false);
                }}
                onClose={() => {
                  setVisible3(false);
                }}
              >
                <div className="py-[3vw]">
                  <div
                    className="pl-[6vw] pb-3 text-[#8d8d8d]"
                    style={{ borderBottom: '1px solid #939ba1' }}
                  >
                    排行榜
                  </div>
                  <div className="mt-3 px-[6vw]">
                    <p className="text-black mt-[4vw] text-[5vw] flex items-center">
                      <Icon icon="iconamoon:like-light" class="w-[6vw] h-[6vw] mr-[2vw]" />
                      <p className="ml-3 text-[3vw]">优先推荐</p>
                    </p>
                    <p className="text-black mt-[4vw] text-[5vw] flex items-center">
                      <Icon icon="basil:heart-off-outline" class="w-[6vw] h-[6vw] mr-[2vw]" />
                      <p className="ml-3 text-[3vw]">减少推荐</p>
                    </p>
                    <p className="text-black mt-[4vw] text-[5vw] flex items-center">
                      <Icon icon="icon-park-outline:more-two" class="w-[6vw] h-[6vw] mr-[2vw]" />
                      <p className="ml-3 text-[3vw]">更多内容</p>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setVisible3(false);
                  }}
                  className="h-[22px] w-[22px] rounded-[50%] border-[0px] bg-[#bbbbbb] flex items-center justify-center text-[20px] absolute top-[8px] right-[16px]"
                >
                  <Icon icon="ic:baseline-close" />
                </button>
              </Popup>
            </>
          </Space>
        </div>
        <BetterScroll
          wrapperStyle={{ height: '280px' }}
          contentStyle={{ display: 'flex', width: '400%' }}
          config={{ scrollX: true, scrollY: false }}
        >
          <div className="h-[280px] pt-1 flex">
            {list5.map((value, index) => {
              return (
                <div
                  key={index}
                  className="w-[300px] h-[270px] mr-[15px] px-3 py-[15px] bg-white rounded-[12px]"
                >
                  <div className="flex justify-between">
                    <div>{value.uiElement.mainTitle.title} &gt;</div>
                    <div>{value.uiElement.mainTitle.titleDesc}</div>
                  </div>
                  {value.resources.map((item, ind) => (
                    <div key={ind} className="flex mt-[14px]">
                      <div className="w-[54px] h-[54px] mr-[12px]">
                        <img
                          src={item.uiElement.image.imageUrl}
                          alt=""
                          className="w-[54px] h-[54px]"
                        />
                      </div>
                      <div className="flex items-center flex-1">
                        {ind === 0 ? (
                          <span className="text-[#c28e28]">1</span>
                        ) : ind === 1 ? (
                          <span className="text-[#818aac]">2</span>
                        ) : (
                          <span className="text-[#cd8354]">3</span>
                        )}
                        <div className="ml-[11px] ">
                          <p className="w-[150px] h-[20px] text-[14px] overflow-hidden ...">
                            {item.uiElement.mainTitle.title}
                          </p>
                          <p className="text-[12px] text-[#79838f]">
                            {item.resourceExtInfo == null
                              ? ''
                              : item.resourceExtInfo.artists[0].name}
                          </p>
                        </div>
                        {item.uiElement.labelText.text === '热门' ? (
                          <p className="text-[#ff3836]">{item.uiElement.labelText.text}</p>
                        ) : (
                          <p className="text-[#39b184]">{item.uiElement.labelText.text}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </BetterScroll>
      </div>
      {/* 热门话题 */}
      <div className="mt-[10px] px-[15px]">
        <div className="flex items-center justify-between text-[18px]">
          <span>热门话题 &gt; </span>
          <Space direction="vertical">
            <>
              <Button
                onClick={() => {
                  setVisible4(true);
                }}
                className="p-[0] border-[0px] bg-[#f1f1f1]"
              >
                <MoreOutline className="rotate-90" />
              </Button>
              <Popup
                visible={visible4}
                onMaskClick={() => {
                  setVisible4(false);
                }}
                onClose={() => {
                  setVisible4(false);
                }}
              >
                <div className="py-[3vw]">
                  <div
                    className="pl-[6vw] pb-3 text-[#8d8d8d]"
                    style={{ borderBottom: '1px solid #939ba1' }}
                  >
                    热门话题
                  </div>
                  <div className="mt-3 px-[6vw]">
                    <p className="text-black mt-[4vw] text-[5vw] flex items-center">
                      <Icon icon="iconamoon:like-light" class="w-[6vw] h-[6vw] mr-[2vw]" />
                      <p className="ml-3 text-[3vw]">优先推荐</p>
                    </p>
                    <p className="text-black mt-[4vw] text-[5vw] flex items-center">
                      <Icon icon="basil:heart-off-outline" class="w-[6vw] h-[6vw] mr-[2vw]" />
                      <p className="ml-3 text-[3vw]">减少推荐</p>
                    </p>
                    <p className="text-black mt-[4vw] text-[5vw] flex items-center">
                      <Icon icon="icon-park-outline:more-two" class="w-[6vw] h-[6vw] mr-[2vw]" />
                      <p className="ml-3 text-[3vw]">更多内容</p>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setVisible4(false);
                  }}
                  className="h-[22px] w-[22px] rounded-[50%] border-[0px] bg-[#bbbbbb] flex items-center justify-center text-[20px] absolute top-[8px] right-[16px]"
                >
                  <Icon icon="ic:baseline-close" />
                </button>
              </Popup>
            </>
          </Space>
        </div>
        <BetterScroll
          wrapperStyle={{ height: '140px' }}
          contentStyle={{ display: 'flex', width: '370%' }}
          config={{ scrollX: true, scrollY: false }}
        >
          <div className="h-[140px] pt-1 flex">
            {list6.map((value, index) => {
              return (
                <div
                  key={index}
                  className="w-[240px] h-[130px] bg-[#9c9c9c] px-[11px] py-[15px] mr-[10px] flex items-end justify-between rounded-[10px]"
                >
                  <div className="h-[100px] w-[160px]">
                    <div className="flex items-center text-[15px] text-white">
                      <Icon icon="system-uicons:speech-bubble" color="white" />
                      <div>{value.user.nickname}</div>
                    </div>
                    <div className="text-[12px] text-[#cdcdcd]">484万热度</div>
                    <div className="h-[35px] text-[12px] text-white overflow-hidden">
                      {value.user.signature}
                    </div>
                  </div>
                  <div className="w-[52px] h-[52px]">
                    <img src={value.user.avatarUrl} alt="" className="w-[52px]" />
                  </div>
                </div>
              );
            })}
          </div>
        </BetterScroll>
      </div>
      {/* 音乐日历 */}
      <div className="mt-[10px] px-[15px]">
        <div className="flex items-center justify-between text-[18px]">
          <span>音乐日历 &gt;</span>
          <Space direction="vertical">
            <>
              <Button
                onClick={() => {
                  setVisible5(true);
                }}
                className="p-[0] border-[0px] bg-[#f1f1f1]"
              >
                <MoreOutline className="rotate-90" />
              </Button>
              <Popup
                visible={visible5}
                onMaskClick={() => {
                  setVisible5(false);
                }}
                onClose={() => {
                  setVisible5(false);
                }}
              >
                <div className="py-[3vw]">
                  <div
                    className="pl-[6vw] pb-3 text-[#8d8d8d]"
                    style={{ borderBottom: '1px solid #939ba1' }}
                  >
                    音乐日历
                  </div>
                  <div className="mt-3 px-[6vw]">
                    <p className="text-black mt-[4vw] text-[5vw] flex items-center">
                      <Icon icon="iconamoon:like-light" class="w-[6vw] h-[6vw] mr-[2vw]" />
                      <p className="ml-3 text-[3vw]">优先推荐</p>
                    </p>
                    <p className="text-black mt-[4vw] text-[5vw] flex items-center">
                      <Icon icon="basil:heart-off-outline" class="w-[6vw] h-[6vw] mr-[2vw]" />
                      <p className="ml-3 text-[3vw]">减少推荐</p>
                    </p>
                    <p className="text-black mt-[4vw] text-[5vw] flex items-center">
                      <Icon icon="icon-park-outline:more-two" class="w-[6vw] h-[6vw] mr-[2vw]" />
                      <p className="ml-3 text-[3vw]">更多内容</p>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setVisible5(false);
                  }}
                  className="h-[22px] w-[22px] rounded-[50%] border-[0px] bg-[#bbbbbb] flex items-center justify-center text-[20px] absolute top-[8px] right-[16px]"
                >
                  <Icon icon="ic:baseline-close" />
                </button>
              </Popup>
            </>
          </Space>
        </div>
        <div className="bg-white p-[15px]">
          {list7.map((value, index) => {
            if (index < 2) {
              return (
                <div key={index}>
                  <div className="text-[#AAADB5]">{dayjs(Date.now()).format('MM/DD')}</div>
                  <div className="flex items-center">
                    <div className="mr-[20px]">{value.title}</div>
                    <div>
                      <img src={value.imgUrl} alt="" className="w-[56px] h-[56px] rounded-[10px]" />
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
