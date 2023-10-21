/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Home from './views/Home';
import LazyComponent from '@/components/LazyComponent';
import Navigate from '@/components/Navigate';

export default function App() {
  const navList = [
    {
      to: '/Home',
      icon: <Icon icon="ri:netease-cloud-music-fill" className="text-[22px] m-auto" />,
      title: '首页',
    },
    {
      to: '/List',
      icon: <Icon icon="ep:histogram" hFlip className="text-[22px] m-auto" />,
      title: '排行榜',
    },
    {
      to: '/Personal',
      icon: <Icon icon="majesticons:music-line" className="text-[22px] m-auto" />,
      title: '我的',
    },
    {
      to: '',
      icon: <Icon icon="gridicons:user" className="text-[22px] m-auto" />,
      title: '关注',
    },
    {
      to: '',
      icon: <Icon icon="ep:histogram" hFlip className="text-[22px] m-auto" />,
      title: '社区',
    },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/List" element={<LazyComponent path="views/List" />} />
        <Route path="/Search" element={<LazyComponent path="views/Search" />} />
        <Route path="/Login" element={<LazyComponent path="views/Login" />} />
        <Route path="/Detail" element={<LazyComponent path="views/Detail" />} />
        <Route path="/Play" element={<LazyComponent path="views/Play" />} />
        <Route path="/Mv" element={<LazyComponent path="views/Mv" />} />
      </Routes>
      <div
        className="w-[100%] h-[45px] bg-white flex fixed bottom-0"
        style={
          window.location.pathname === '/Home'
            ? null
            : window.location.pathname === '/List'
            ? null
            : { display: 'none' }
        }
      >
        {navList.map(({ to, icon, title }) => (
          <NavLink
            key={to}
            style={({ isActive }) => {
              return {
                color: isActive ? '#eb4954' : '#9297a1',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                borderTop: '1px solid #f4f4f4',
              };
            }}
            to={to}
          >
            {icon}
            <div>{title}</div>
          </NavLink>
        ))}
      </div>
    </>
  );
}
