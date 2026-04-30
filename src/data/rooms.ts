import { Music, Tv, Camera, Gamepad2, Users, Clock, Coffee, ShieldCheck } from 'lucide-react';

export interface RoomDetailSection {
  title: string;
  description: string;
  image: string;
}

export interface Room {
  id: string;
  title: string;
  capacity: string;
  location: string;
  img: number;
  price: number;
  description: string;
  amenities: { icon: any; label: string }[];
  detailedImages: string[];
  mainImage?: string;
  details?: RoomDetailSection[];
}

export const rooms: Room[] = [
  { 
    id: 'mongkok-magnolia',
    title: '旺角 - Magnolia', 
    capacity: '2-20 人', 
    location: '旺角', 
    img: 601, 
    price: 188,
    mainImage: 'https://lh3.googleusercontent.com/sitesv/AA5AbUDIl65UVrFejscC9w51DGBbamfp0LkBloJyZjnw0P3KkQ9ncAwmg6QxbBKAn8nFdhyQ_jHpyUCz3Ox4FlZyLhGVMDp21S7oqvj426_JwST1Okpexd3FISe23JhQ1VAE6pwk6GgvpYxoEEVloYn7xo4caCJJ7TaBVoDJ_BhVNWAwBS5mEmoiPTQkqnysPoRG9hIcEn5XaBrTh29pgHPpJkRqGcwhvMS0wjRe=w1280',
    description: 'BaChino ‧ K ‧ Premium 日式簡約空間。配有 65吋 4K 高清電視及專業級音響唱K系統，房內設有 4 枝無線咪，最適合一大班朋友聚會唱K度過愉快時光。',
    amenities: [
      { icon: Music, label: '專業級唱K系統' },
      { icon: Tv, label: '65吋 4K 電視' },
      { icon: Coffee, label: '精選茶點' },
      { icon: Users, label: '2-20 人' }
    ],
    details: [
      {
        title: '專業級唱K系統',
        description: '備有過萬首流行及經典曲目，搭配專業音響設備與 4 支高品質無線麥克風，讓您與親友盡情歡唱，猶如置身迷你演唱會。',
        image: 'https://lh3.googleusercontent.com/sitesv/AA5AbUBUYvzwOjcLVceC5apQGF1dZCF7HPObGy3fsL1k-axa4VuRhrkT3O_8TsVmnjLyEjl7ArUzneKAyT8pfYtMLJu1KZrySkGqIwI6dulSIl3eWxiTkBolDOQ5io4y7dZsazjzJY3ddyVcvxGgI-skrfCjb1oA4ACmlsYoBM4YlsIIDz1jnxko5zBD-7sATSA5NRJkK-8zGo5x-U6_b_4Uk5ICCXLVbxL9ayfWbO0=w1280'
      },
      {
        title: '65吋 4K 超高清影視體驗',
        description: '寬敞的觀影空間配備特大尺寸 4K 電視，無論是看電影、追劇還是團體遊戲，都能享受最震撼的視覺震撼。',
        image: 'https://lh3.googleusercontent.com/sitesv/AA5AbUANZhIfc5e2sxtnndupvgCZ8cmVelKwFgu9qeJPqaTFySnHVyF9XPuEa_MQsOaHcGdqTu4479yuTIgPLrlWyoebiuT8yTae7fPUw2dsE9AfIdl3vnk2cUw0j7kXK8MQi-E9DsUcI1ot8n72RwYKs-E2TEJC74WteP1EdV4I2XmNGkHDWse9GLZxpbsSGu7kcb29rCXD-GAkdo1RP-hTO9dFXdhAxRq4TAftf94=w1280'
      }
    ],
    detailedImages: [
      'https://lh3.googleusercontent.com/sitesv/AA5AbUDIl65UVrFejscC9w51DGBbamfp0LkBloJyZjnw0P3KkQ9ncAwmg6QxbBKAn8nFdhyQ_jHpyUCz3Ox4FlZyLhGVMDp21S7oqvj426_JwST1Okpexd3FISe23JhQ1VAE6pwk6GgvpYxoEEVloYn7xo4caCJJ7TaBVoDJ_BhVNWAwBS5mEmoiPTQkqnysPoRG9hIcEn5XaBrTh29pgHPpJkRqGcwhvMS0wjRe=w1280',
      'https://lh3.googleusercontent.com/sitesv/AA5AbUBUYvzwOjcLVceC5apQGF1dZCF7HPObGy3fsL1k-axa4VuRhrkT3O_8TsVmnjLyEjl7ArUzneKAyT8pfYtMLJu1KZrySkGqIwI6dulSIl3eWxiTkBolDOQ5io4y7dZsazjzJY3ddyVcvxGgI-skrfCjb1oA4ACmlsYoBM4YlsIIDz1jnxko5zBD-7sATSA5NRJkK-8zGo5x-U6_b_4Uk5ICCXLVbxL9ayfWbO0=w1280',
      'https://lh3.googleusercontent.com/sitesv/AA5AbUANZhIfc5e2sxtnndupvgCZ8cmVelKwFgu9qeJPqaTFySnHVyF9XPuEa_MQsOaHcGdqTu4479yuTIgPLrlWyoebiuT8yTae7fPUw2dsE9AfIdl3vnk2cUw0j7kXK8MQi-E9DsUcI1ot8n72RwYKs-E2TEJC74WteP1EdV4I2XmNGkHDWse9GLZxpbsSGu7kcb29rCXD-GAkdo1RP-hTO9dFXdhAxRq4TAftf94=w1280',
      'https://lh3.googleusercontent.com/sitesv/AA5AbUC-rd17LOLg2yLTUvxbfKPsNZfRrBPg8RWJ6aE_R-rTGyco1lirX9wPeg1oMEVzwPiiDWrkk7moc_wKuIM7LPP78O_CqvYhNrZ63xgKyss_6zJTOVq5k_9XpvjSOUkj2xa3Jyxvsg_D535cUk-uJGoZWLs2WrCLZBp2GvkGSZ6Hxs2UHGkQQj48E403kuWozHW4CEvBgAEM6zcogNAf3_O1ANZAqRkPm2djnb0=w1280',
      'https://lh3.googleusercontent.com/sitesv/AA5AbUBPA8HUvVlVJ0datGCqXfNZ3iRSWgQw4srXIMfb8hdZnYTs5GHC1UxZrkKTCqkXLA8FsNm3DQ8ES-hjNv_IV1id02B8Asge5iANiAi8a-4rvntnV8te7MCY_R_bUSJS4aRDt_AiecyeHZX7zLbSOCGlLII7ZLdSeQFsddbR8YRMPumNb-y-sKHutoxFZEnUGLdJ7H0fyE_5MwZYl6XdUBjOyxHXHIq1tMpHvWg=w1280',
      'https://lh3.googleusercontent.com/sitesv/AA5AbUDQ3rzG8HPHZ-VhPMj4E6T1HUcvN30bwSRn8wzLvvXOI6M8WWKLXrtlsW3_G_Si74LtNEVj0HMu5h7Z4IkSrTUzHSz7o8J8rQcYnnp8yYJvP_hwAkWpD7DQ5aSEe821SxceWscqrYmtXnj-5PoCBUQuiEdo0zoGLAvbJrTnLhIAZIJZokcP6w0T9Yd4HUbF7qoEAUu9w_jIPlT3IbRdFVHFbRgtQyBUTsU9dUM=w1280',
      'https://lh3.googleusercontent.com/sitesv/AA5AbUAphJoCLUahCfa9UPmLB2bBZcylwfpaHp3YPGWVdzFPG9xndJY5HQ-BMP8qhAlgvz1dSJ0S_ACO5Ezv5L37Z9fDxo5gaYRXDk6RvC3JT0vVqPYKbde6heokK8N7YLvIUR55WhVIVtG8uuzeu-YJBJ3fdLOL0liHwrpxrvwIItEz_QzBIn22qHotqoWVsbYsQbcDn2181Vpkaogq0OBldJP-VvTDfLyLJPip4FQ=w1280'
    ]
  },
  { 
    id: 'ngau-tau-kok-camelia',
    title: '牛頭角 - Camelia', 
    capacity: '2-25 人', 
    location: '牛頭角', 
    img: 602, 
    price: 168,
    mainImage: 'https://lh3.googleusercontent.com/sitesv/AA5AbUAxROw4vO1gAgioPwCaY2qFsJv9L_wQLcXvRUNzXdI_oaZwTBrs8iYlfJccOMLmG0ASW0pKeDOpQpfWtWokA8AXkv-VsL9t2kMJsUzneLqmZ2nVQzQ0S5iAwZUesLV_7UFMJt9YfUaaYvtFiZZZur-vvOQhohwj83uHvCGMeTfQSNW9Jwql-r5j-rocZxTIiedEWZXUC2nvkN4bsC9UuYmA1PHZnX9AE8b51uU=w1280',
    description: 'Camelia 以綠意自然為主題，BaChino 精心佈置的植物空間，為您的聚會帶來清新氣息。房內設有專業影視系統。',
    amenities: [
      { icon: Music, label: '背景音樂系統' },
      { icon: Coffee, label: '特色飲品' },
      { icon: Clock, label: '24小時開放' },
      { icon: Users, label: '2-25 人' }
    ],
    details: [
      {
        title: '綠意盎然的清新氛圍',
        description: 'Camelia 採用大量自然植物裝飾，打造都市中的小森林。溫暖的木質色調搭配多樣綠植，讓您在忙碌的都市生活中找到一絲寧靜，非常適合舉辦身心靈工作坊或閨蜜聚會。',
        image: 'https://picsum.photos/seed/bachino-cam-detail-1/1200/800'
      },
      {
        title: '高品質背景音樂系統',
        description: '場內配備全屋環繞背景音樂系統，您可以輕鬆連接手機播放喜愛的清單。細膩的音質配合柔和的燈光，為您的聚會增添一份獨特的儀式感。',
        image: 'https://picsum.photos/seed/bachino-cam-detail-2/1200/800'
      }
    ],
    detailedImages: [
      'https://picsum.photos/seed/bachino-cam-1/1200/800',
      'https://picsum.photos/seed/bachino-cam-2/1200/800',
      'https://picsum.photos/seed/bachino-cam-3/1200/800'
    ]
  },
  { 
    id: 'mongkok-freesia',
    title: '旺角 - Freesia', 
    capacity: '2-18 人', 
    location: '旺角', 
    img: 603, 
    price: 228,
    mainImage: 'https://lh3.googleusercontent.com/sitesv/AA5AbUBnG2ZiOTGXzHiVgY6xxzC_CyyS6Opz2qQ-xasKO2YNdi43IKpNjYBsa7R8-Or0WiNwRHAXh51gL7BMoLzXV7NEGfp2xh-mKDL1-LycOHgIR04ydYCcRFBFlq3QK7MbJtLfw2dL2rmx1r2osP5Mkp0b_xT2Esh9A11SgWxAEPtWVfCfmxFSLmL9lp2yjc0luGNU0YgBx8bLRXc39nMjy0CXwdbkoDIIGJSOBs4=w1280',
    description: 'Freesia 暖色系寛敞空間，BaChino 品牌旗下的熱門場地。場內設有大型桌遊及派對設施，適合大型聚會。',
    amenities: [
      { icon: Music, label: '專業音響' },
      { icon: Tv, label: '雙投影幕' },
      { icon: Gamepad2, label: '大型桌遊' },
      { icon: Users, label: '2-18 人' }
    ],
    details: [
      {
        title: '極致遊戲與社交體驗',
        description: 'Freesia 備有多款大型桌遊及派對經典遊戲，寬敞的沙發區讓大家能輕鬆坐下互動。無論是激戰桌遊還是開懷大笑，這裡都是最佳場所。',
        image: 'https://picsum.photos/seed/bachino-free-detail-1/1200/800'
      },
      {
        title: '雙大型投影幕配備',
        description: '特設雙投影牆設計，適合多角度觀看。無論是公司簡報、求婚影片還是賽事直播，都能確保每一位客人都擁有絕佳視野。',
        image: 'https://picsum.photos/seed/bachino-free-detail-2/1200/800'
      }
    ],
    detailedImages: [
      'https://picsum.photos/seed/bachino-free-1/1200/800',
      'https://picsum.photos/seed/bachino-free-2/1200/800',
      'https://picsum.photos/seed/bachino-free-3/1200/800'
    ]
  },
  { 
    id: 'kwai-hing-gardenia',
    title: '葵興 - Gardenia', 
    capacity: '2-8 人', 
    location: '葵興', 
    img: 604, 
    price: 128,
    mainImage: 'https://lh3.googleusercontent.com/sitesv/AA5AbUAskH4yVY4DjUB4BieN31rZ0Pxoik7cJELF20ojqP3JSE2WBLo15m2ld_OC2uDssJZ2FbiZsHo0V03dCniHZqNMvooW_AlP0unw4_9uXurWOVHLZo-8XtB-H9D0OW5JCubVeYg71Ip-bKmnfT21walw-NIZbhw0Il6x1u1ViZK45B8qwsRwQ6jdjS_bTVZAOhzCPwV60XQGpKoLs80x-sNgWyuUagmVS8__=w1280',
    description: 'Gardenia 私密商談空間，專為小型聚會或商務會議設計。環境安靜且具備 BaChino 特色精選花茶。',
    amenities: [
      { icon: Tv, label: '會議顯示屏' },
      { icon: Coffee, label: '精選花茶' },
      { icon: ShieldCheck, label: '高度私隱' },
      { icon: Users, label: '2-8 人' }
    ],
    details: [
      {
        title: '高度私穩的精品空間',
        description: 'Gardenia 專為注重私隱的客人設計，設有隔音設施。無論是商務談判、深情對話還是小型課程，都能在不被打擾的環境中進行。',
        image: 'https://picsum.photos/seed/bachino-gar-detail-1/1200/800'
      },
      {
        title: '精品茶類服務',
        description: '我們為每位預約客人提供精選有機花茶，淡淡的清香助您放鬆心情，提升專注力，讓會議或聚會更有成效。',
        image: 'https://picsum.photos/seed/bachino-gar-detail-2/1200/800'
      }
    ],
    detailedImages: [
      'https://lh3.googleusercontent.com/sitesv/AA5AbUAskH4yVY4DjUB4BieN31rZ0Pxoik7cJELF20ojqP3JSE2WBLo15m2ld_OC2uDssJZ2FbiZsHo0V03dCniHZqNMvooW_AlP0unw4_9uXurWOVHLZo-8XtB-H9D0OW5JCubVeYg71Ip-bKmnfT21walw-NIZbhw0Il6x1u1ViZK45B8qwsRwQ6jdjS_bTVZAOhzCPwV60XQGpKoLs80x-sNgWyuUagmVS8__=w1280',
      'https://picsum.photos/seed/bachino-gar-2/1200/800',
      'https://picsum.photos/seed/bachino-gar-3/1200/800'
    ]
  },
  { 
    id: 'mongkok-flamingo',
    title: '旺角 - Flamingo', 
    capacity: '2-8 人', 
    location: '旺角', 
    img: 605, 
    price: 198,
    mainImage: 'https://lh3.googleusercontent.com/sitesv/AA5AbUDaGi8I7i_gjR8hkRae6E9ND-XU6NC1nEsvNb3LB2x0Abu7UE87-ERBhd3dM9KXF3TRTfT-Ck0P6QdO-4LmP20sR5LioL-BK5t1Cq5fCatZm2nK4ppiPG7GovJwU94KTUyHCsFjxBcUTMfPBHc9mmaIWA70U1RJq9DlLudji8K1mbVoG4rTMr6G9FzQaMt5n7SEQL6TW86ufrfuqaBA-EUG_EenHIdO8W0VglM=w1280',
    description: 'BaChino Flamingo 結合了專業級唱K系統與現代拍照空間。適合 2-8 人享受精緻聚會。',
    amenities: [
      { icon: Music, label: '專業唱K系統' },
      { icon: Camera, label: '打卡影相區' },
      { icon: Tv, label: '4K 電視' },
      { icon: Users, label: '2-8 人' }
    ],
    details: [
      {
        title: '極致少女心的打卡角落',
        description: 'Flamingo 擁有精心設計的霓虹燈飾與獨特背景牆，是為了愛拍照的您量身定做。每一處都是最佳攝影點。',
        image: 'https://picsum.photos/seed/bachino-fla-detail-1/1200/800'
      }
    ],
    detailedImages: [
      'https://lh3.googleusercontent.com/sitesv/AA5AbUDaGi8I7i_gjR8hkRae6E9ND-XU6NC1nEsvNb3LB2x0Abu7UE87-ERBhd3dM9KXF3TRTfT-Ck0P6QdO-4LmP20sR5LioL-BK5t1Cq5fCatZm2nK4ppiPG7GovJwU94KTUyHCsFjxBcUTMfPBHc9mmaIWA70U1RJq9DlLudji8K1mbVoG4rTMr6G9FzQaMt5n7SEQL6TW86ufrfuqaBA-EUG_EenHIdO8W0VglM=w1280',
      'https://picsum.photos/seed/bachino-fla-2/1200/800',
      'https://picsum.photos/seed/bachino-fla-3/1200/800'
    ]
  },
  { 
    id: 'ngau-tau-kok-begonia',
    title: '牛頭角 - Begonia', 
    capacity: '2-12 人', 
    location: '牛頭角', 
    img: 606, 
    price: 178,
    mainImage: 'https://lh3.googleusercontent.com/sitesv/AA5AbUBB9I97S-LgpUDYUSAgWqCYiao935ppGHpgTZkvKXnBTowrYlywLhisTgVgXEBWVdBHS4ArOvtSaVF60ER63oCB3fFu7l-Ikp8T8AVc7osnbaWzz7Tns2ccm2Cxm_T47Ps91gggTi29uOrcFAwhiz_id9nNjn8zvOm6Z6x8JI264u1kcWA9qJt9lHImeYB9bNznMmVwLJ-hfEgPnEXTxqkcFTP4z599DJ2y=w1280',
    description: 'Begonia 波希米亞風格空間。BaChino 特別加入復古唱片機和手工裝飾，營造溫馨聚會氣氛。',
    amenities: [
      { icon: Music, label: '復古唱片機' },
      { icon: Gamepad2, label: '經典遊戲機' },
      { icon: Coffee, label: '特色飲品' },
      { icon: Users, label: '2-12 人' }
    ],
    details: [
      {
        title: '時光倒流的懷舊格調',
        description: 'Begonia 設有復古唱片機及一系列經典唱片，您可以親自動手播放音樂，感受黑膠唱片的溫度。搭配波希米亞裝飾，氣氛一流。',
        image: 'https://picsum.photos/seed/bachino-beg-detail-1/1200/800'
      }
    ],
    detailedImages: [
      'https://lh3.googleusercontent.com/sitesv/AA5AbUBB9I97S-LgpUDYUSAgWqCYiao935ppGHpgTZkvKXnBTowrYlywLhisTgVgXEBWVdBHS4ArOvtSaVF60ER63oCB3fFu7l-Ikp8T8AVc7osnbaWzz7Tns2ccm2Cxm_T47Ps91gggTi29uOrcFAwhiz_id9nNjn8zvOm6Z6x8JI264u1kcWA9qJt9lHImeYB9bNznMmVwLJ-hfEgPnEXTxqkcFTP4z599DJ2y=w1280',
      'https://picsum.photos/seed/bachino-beg-2/1200/800',
      'https://picsum.photos/seed/bachino-beg-3/1200/800'
    ]
  },
  { 
    id: 'mongkok-jasmine',
    title: '旺角 - Jasmine', 
    capacity: '2-12 人', 
    location: '旺角', 
    img: 607, 
    price: 328,
    mainImage: 'https://lh3.googleusercontent.com/sitesv/AA5AbUCNQ8mxqga_imM2VQItNu5vAeUtq-E6gw-W_NduWrtZkB-51bw9qq5kCbx3ek0fHcW72wtgvgkkn4yG88CTG0j-iKcXqh89EcbASG6oeoiuUZfpgxcFD608zJT-wKwSvQzy2iU3FQ_XZZJb5ydlV1933leeOdSw_XoBaI2eUaxdnXth94iM_rS4MrwZF2ygQe50p_u2aPhDMEHj-3Pf6fjgOwD7g7C4Oosz=w1280',
    description: 'Jasmine 是 BaChino 最大的場地，配備專業舞台燈光、大型投影牆，專為大型 party 或企業活動而設。',
    amenities: [
      { icon: Tv, label: '大型投影牆' },
      { icon: Music, label: '專業音響' },
      { icon: Camera, label: '影視設備' },
      { icon: Users, label: '2-12 人' }
    ],
    details: [
      {
        title: '震撼的全牆投影影院',
        description: 'Jasmine 配備巨型全牆投影幕，搭配 7.1 環繞聲響，為您帶來極致的視聽享受。非常適合舉辦生日驚喜、首映會或派對。',
        image: 'https://picsum.photos/seed/bachino-jas-detail-1/1200/800'
      }
    ],
    detailedImages: [
      'https://lh3.googleusercontent.com/sitesv/AA5AbUCNQ8mxqga_imM2VQItNu5vAeUtq-E6gw-W_NduWrtZkB-51bw9qq5kCbx3ek0fHcW72wtgvgkkn4yG88CTG0j-iKcXqh89EcbASG6oeoiuUZfpgxcFD608zJT-wKwSvQzy2iU3FQ_XZZJb5ydlV1933leeOdSw_XoBaI2eUaxdnXth94iM_rS4MrwZF2ygQe50p_u2aPhDMEHj-3Pf6fjgOwD7g7C4Oosz=w1280',
      'https://picsum.photos/seed/bachino-jas-2/1200/800',
      'https://picsum.photos/seed/bachino-jas-3/1200/800'
    ]
  },
  { 
    id: 'tsuen-wan-petunia',
    title: '荃灣 - Petunia', 
    capacity: '2-30 人', 
    location: '荃灣', 
    img: 608, 
    price: 158,
    mainImage: 'https://lh3.googleusercontent.com/sitesv/AA5AbUCZl84V8kq_6JNmV3Ux41mehYAMjkGOUfUkJZrsB6FPBL4pxwBcCU3IiEigZkqEt2xGyGibhrvBtXOZifvF9FZk-KZqEkT8UEQmxLGnxszSHvCW87FkPObXOUJ2WFIM4o5Hxja63AFV8Eyl8L3X5gvSOUt71xRLjoMF0RYKVQYAPRgpIxo_DmN7St79y-aZPtehkM2xl4zo1w08yAXsaDabEFHAribGWmFFiQw=w1280',
    description: 'Petunia 多功能工作坊空間。BaChino 提供大量桌面空間及影視設備，適合不同類型的工作坊。',
    amenities: [
      { icon: Clock, label: '全日租用' },
      { icon: Coffee, label: '自助水吧' },
      { icon: Users, label: '2-30 人' },
      { icon: ShieldCheck, label: '安全監控' }
    ],
    details: [
      {
        title: '多功能專業工作坊空間',
        description: 'Petunia 提供多組大型工作枱及靈活的桌椅佈局，適合手工藝課程、藝術工作坊或團體培訓。寬敞的採光讓整體氛圍充滿創意活力。',
        image: 'https://picsum.photos/seed/bachino-pet-detail-1/1200/800'
      }
    ],
    detailedImages: [
      'https://lh3.googleusercontent.com/sitesv/AA5AbUCZl84V8kq_6JNmV3Ux41mehYAMjkGOUfUkJZrsB6FPBL4pxwBcCU3IiEigZkqEt2xGyGibhrvBtXOZifvF9FZk-KZqEkT8UEQmxLGnxszSHvCW87FkPObXOUJ2WFIM4o5Hxja63AFV8Eyl8L3X5gvSOUt71xRLjoMF0RYKVQYAPRgpIxo_DmN7St79y-aZPtehkM2xl4zo1w08yAXsaDabEFHAribGWmFFiQw=w1280',
      'https://picsum.photos/seed/bachino-pet-2/1200/800',
      'https://picsum.photos/seed/bachino-pet-3/1200/800'
    ]
  }
];

