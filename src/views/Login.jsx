/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import storejs from 'storejs';
import { Icon } from '@iconify/react';
import { createLoginQrKey, createLoginQrimg, checkLoginQr } from '../service';

// 扫码登陆
export default function Login() {
  // console.log('rerender');
  const navigate = useNavigate();
  const unitey = useRef('');
  const timer = useRef(null);
  // const [qr, setQr] = useState("");
  const qr = useRef('');
  const [status, setStatus] = useState();
  const checkScanStatus = () => {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      checkLoginQr({ key: unitey.current })
        .then((res) => {
          // console.log(res);
          setStatus(res.data.code);
          if ([800, 803].includes(res.data.code)) clearInterval(timer);
          if (res.data.code === 803) {
            storejs.set('cookie', res.data.cookie);
            navigate('/index');
          }
        })
        .catch((err) => {
          clearInterval(timer);
        });
    }, 2000);
  };
  useEffect(() => {
    createLoginQrKey()
      .then((res) => (unitey.current = res.data.data.unikey))
      .then((key) => createLoginQrimg({ key, qrimg: true }))
      // .then((res) => setQr(res.data.data.qrimg))
      .then((res) => (qr.current = res.data.data.qrimg))
      .then(() => checkScanStatus())
      .catch((err) => {
        // console.log(err);
      });
    return () => clearInterval(timer.current);
  }, []);

  return (
    <div>
      <div className="w-[334px] h-[71px] m-auto flex justify-between items-center text-[16px] text-[#696969]">
        <Icon
          icon="ant-design:left-outlined"
          onClick={() => {
            window.location.assign('/Home');
          }}
          className="text-black"
        />
        <p>游客登陆</p>
      </div>
      <div className="w-[142px] mt-[26px] mb-[34px] mx-auto">
        <img
          src="https://admirable-jalebi-ce44af.netlify.app/static/logo.fill.svg"
          alt=""
          className="w-[100%]"
        />
      </div>
      <div className="w-[150px] mx-auto">
        {[800, 801].includes(status) ? (
          <div>
            {status === 800 ? <div className="mask" /> : null}
            <img src={qr.current} alt="" className="w-[150px]" />
          </div>
        ) : null}
        {status === 802 ? (
          <img src="https://admirable-jalebi-ce44af.netlify.app/static/queding.png" alt="" />
        ) : null}
      </div>
      <div className="text-center mt-[38px]">
        使用 <span className="text-[#2c6aa1]">网易云音乐APP</span> 扫码登录
      </div>
      <div className="fixed bottom-0">
        <img
          src="https://admirable-jalebi-ce44af.netlify.app/static/bg-login.png"
          alt=""
          className="h-[200px]"
        />
      </div>
    </div>
  );
}
