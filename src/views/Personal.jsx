/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';

// 我的
export default function Personal() {
  const [list, updateList] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/user/playlist?uid=271649802&cookie=MUSIC_A_T%3D1461938125538%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Fwapi%2Ffeedback%3B+HTTPOnly%3BMUSIC_R_T%3D1461938201144%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Fapi%2Ffeedback%3B+HTTPOnly%3BMUSIC_R_T%3D1461938201144%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Fneapi%2Fclientlog%3B+HTTPOnly%3BMUSIC_R_T%3D1461938201144%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Feapi%2Ffeedback%3B+HTTPOnly%3BMUSIC_SNS%3D%3B+Max-Age%3D0%3B+Expires%3DTue,+26+Sep+2023+08:04:15+GMT%3B+Path%3D%2F%3BMUSIC_A_T%3D1461938125538%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Feapi%2Ffeedback%3B+HTTPOnly%3BMUSIC_R_T%3D1461938201144%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Fweapi%2Ffeedback%3B+HTTPOnly%3BMUSIC_A_T%3D1461938125538%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Feapi%2Fclientlog%3B+HTTPOnly%3BMUSIC_R_T%3D1461938201144%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Feapi%2Fclientlog%3B+HTTPOnly%3BMUSIC_A_T%3D1461938125538%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Fweapi%2Ffeedback%3B+HTTPOnly%3BMUSIC_A_T%3D1461938125538%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Fapi%2Fclientlog%3B+HTTPOnly%3BMUSIC_A_T%3D1461938125538%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Fneapi%2Ffeedback%3B+HTTPOnly%3BMUSIC_R_T%3D1461938201144%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Fneapi%2Ffeedback%3B+HTTPOnly%3BMUSIC_R_T%3D1461938201144%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Fweapi%2Fclientlog%3B+HTTPOnly%3BMUSIC_R_T%3D1461938201144%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Fapi%2Fclientlog%3B+HTTPOnly%3BMUSIC_A_T%3D1461938125538%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Fneapi%2Fclientlog%3B+HTTPOnly%3BMUSIC_R_T%3D1461938201144%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Fwapi%2Fclientlog%3B+HTTPOnly%3BMUSIC_R_T%3D1461938201144%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Fwapi%2Ffeedback%3B+HTTPOnly%3BMUSIC_A_T%3D1461938125538%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Fapi%2Ffeedback%3B+HTTPOnly%3BMUSIC_A_T%3D1461938125538%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Fwapi%2Fclientlog%3B+HTTPOnly%3B__csrf%3D79fc2cad66d7fb084c2f1d2306fdd988%3B+Max-Age%3D1296010%3B+Expires%3DWed,+11+Oct+2023+08:04:25+GMT%3B+Path%3D%2F%3B%3BMUSIC_R_T%3D1461938201144%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Fopenapi%2Fclientlog%3B+HTTPOnly%3BMUSIC_U%3D00C5304A32D21F1B3CB4AEE8E9D36E4549E73EBDBDEE81C992A78DF5BC9F4B256E7B5F75EDDF0CD0433BA2949C169F856B8814D88AB35BBFDA18A2B7192735C65D4C995C5FCF1931669723029F53A876759115ECFFB872DBC4EAEC858E1690498CC9DFD2315C095E58F362349C184428E93E2BF548DBF4186176D694CD6308C6F764A54EFCB303C78A72CEDCBA41A30BF9D0C91A34A5A3A27298C3FF022C7EA6349B48B0FCC6536CEECE0FCEDAEA67F5499CA56EFA816D16F89A90C9B42E5C99D0E1D600A26825C15DEC5B8000D4AADC34B9A4380BEB1D0734C24678B63E58FF8E26E6D421631354B22C36FABBD0ACA4C5B27989F16AB66F55816C82A45463A1449267F57EE5F575772CF21D3DAC58A8F7F57E14FC6230963E214D044FE8D6E1F392624863AA9899FC9FDE0175A666AF498C44639FE683A211C06B9ED06942C8850973AFE97C5241EB640CD3297F6970AB511E699F20AEE60316624E57D70F9F21A1748A59E08BF96644227FF85A70CF48%3B+Max-Age%3D15552000%3B+Expires%3DSun,+24+Mar+2024+08:04:15+GMT%3B+Path%3D%2F%3B+HTTPOnly%3BMUSIC_A_T%3D1461938125538%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Fweapi%2Fclientlog%3B+HTTPOnly%3BMUSIC_A_T%3D1461938125538%3B+Max-Age%3D2147483647%3B+Expires%3DSun,+14+Oct+2091+11:18:22+GMT%3B+Path%3D%2Fopenapi%2Fclientlog%3B+HTTPOnly',
      )
      .then((res) => {
        console.log(res.data.playlist);
        updateList(res.data.playlist);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="pb-[50px]">
      <div className="w-[100%] h-[277px] bg-[gray] text-[28px]">
        <img src="" alt="" />
        <Icon
          icon="radix-icons:arrow-left"
          color="white"
          className="absolute top-[15px] left-[15px]"
        />
        <Icon icon="uim:ellipsis-v" color="white" className="absolute top-[15px] right-[15px]" />
      </div>
      <div className="w-[100%] bg-[#e0e0e0] px-[15px]">
        <div className="relative pt-[40px]">
          <div className="w-[68px] h-[68px] rounded-[50%] bg-black absolute top-[-35px] left-[50%] translate-x-[-50%]">
            <img src="" alt="" className="rounded-[50%]" />
          </div>
          <div className="text-[20px] font-black text-center">{list[0].creator.nickname}</div>
          <div>
            <span>7 关注</span>
            <span>3 粉丝</span>
            <span>Lv.8</span>
          </div>
          <div />
          <div />
        </div>
        <div />
      </div>
    </div>
  );
}
