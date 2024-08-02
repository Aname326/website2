import React, { createContext, useState, useContext } from 'react';

const StateContext = createContext();

export const StateProvider = ({children}) => {
    const [lang, setLang] = useState({
      About: "About",
      AdminLogin: "Admin Login",
      Adult: "Number of Adults:",
      April: "April",
      August: "August",
      Children: "Number of Children (Under 14):",
      Contacts: "Contacts",
      CoreStatement: "Core Statement",
      CoreStatementVerse: "John 13:34-35 - 'I give you a new commandment, that you love one another. Just as I have loved you, you also should love one another. By this everyone will know that you are my disciples, if you have love for one another.'",
      December: "December",
      Dietary: "Notes for Dietary Requirements:",
      Donations: "Donations",
      Events: "Events",
      EventsPoster: "Events Poster",
      EventsReg: "Events Registration",
      February: "February",
      HA: "Hearts Alight",
      Intro: "Introduction",
      Introduction: "Hearts Alight is a fellowship of young people from Auckland Chinese Catholic Community, united by bonds of faith and love. Through sharing an identity of Children of God, we hope to make Hearts Alight a home for all, fostering a strong brotherhood and sisterhood that brings life-giving joy and hope into the community while supporting each person from within. With the steadfast warmth and light that is rooted in our Catholic faith, we hope to set all hearts alight with a flame of love, from the inside out.",
      January: "January",
      John: "John",
      July: "July",
      June: "June",
      Login: "Login",
      March: "March",
      Matthew: "Matthew",
      Mission: "Mission",
      MissionVerse: "Matthew 28:19 - 'Go therefore and make disciples of all nations, baptising them in the name of the Father and of the Son and of the Holy Spirit.'",
      November: "November",
      October: "October",
      Password: "Password",
      RegName: "Register under This Name:",
      September: "September",
      Submit: "Submit",
      Vision: "Vision",
      VisionVerse: "Matthew 5:13-14 - 'To be the Salt and Light of the world.'"
    });
  
    const clickEng = () => {
      setLang({
        About: "About",
        AdminLogin: "Admin Login",
        Adult: "Number of Adults:",
        April: "April",
        August: "August",
        Children: "Number of Children (Under 14):",
        Contacts: "Contacts",
        CoreStatement: "Core Statement",
        CoreStatementVerse: "John 13:34-35 - 'I give you a new commandment, that you love one another. Just as I have loved you, you also should love one another. By this everyone will know that you are my disciples, if you have love for one another.'",
        December: "December",
        Dietary: "Notes for Dietary Requirements:",
        Donations: "Donations",
        Events: "Events",
        EventsPoster: "Events Poster",
        EventsReg: "Events Registration",
        February: "February",
        HA: "Hearts Alight",
        Intro: "Introduction",
        Introduction: "Hearts Alight is a fellowship of young people from Auckland Chinese Catholic Community, united by bonds of faith and love. Through sharing an identity of Children of God, we hope to make Hearts Alight a home for all, fostering a strong brotherhood and sisterhood that brings life-giving joy and hope into the community while supporting each person from within. With the steadfast warmth and light that is rooted in our Catholic faith, we hope to set all hearts alight with a flame of love, from the inside out.",
        January: "January",
        John: "John",
        July: "July",
        June: "June",
        Login: "Login",
        March: "March",
        Matthew: "Matthew",
        Mission: "Mission",
        MissionVerse: "Matthew 28:19 - 'Go therefore and make disciples of all nations, baptising them in the name of the Father and of the Son and of the Holy Spirit.'",
        November: "November",
        October: "October",
        Password: "Password",
        RegName: "Register under This Name:",
        September: "September",
        Submit: "Submit",
        Vision: "Vision",
        VisionVerse: "Matthew 5:13-14 - 'To be the Salt and Light of the world.'"
      });
    };
  
    const clickTC = () => {
      setLang({
        About: "關於",
        AdminLogin: "登入管理",
        Adult: "大人人數:",
        April: "四月",
        August: "八月",
        Children: "小童人數 (14歲以下):",
        Contacts: "聯繫",
        CoreStatement: "核心價值",
        CoreStatementVerse: "若望 13:34-35 - '我給你們一條新命令: 你們該彼此相愛; 如同我愛了你們, 你們也該照樣彼此相愛。如果你們之間彼此相親相愛, 世人因此就可認出你們是我的門徒。'",
        December: "十二月",
        Dietary: "特殊飲食需求:",
        Donations: "捐獻",
        Events: "活動",
        EventsPoster: "活動海報",
        EventsReg: "活動報名",
        February: "二月",
        HA: "心燃青年團",
        Intro: "介紹",
        Introduction: "「心燃」是奥克蘭天主教團體的青年團。我們因着擁有同一信仰的聯結而聚在一起。我们都共享作為天主子女的身份, 我们也希望能在教会大家庭裏讓所有的兄弟姐妹感受到聖神充分的喜樂與希望, 再將這份喜訊傳揚出去。願讓所有來到我們這裏的人都能認識天父, 從裏到外地感受到愛, 被熾熱的愛火點燃大家的心。",
        January: "一月",
        John: "若望",
        July: "七月",
        June: "六月",
        Login: "登入",
        March: "三月",
        Matthew: "瑪竇",
        Mission: "使命",
        MissionVerse: "瑪竇 28:19 - '所以你們要去使萬民成為門徒, 因父及子及聖神之名給他們授洗'",
        November: "十一月",
        October: "十月",
        Password: "密碼",
        RegName: "用這名字報名:",
        September: "九月",
        Submit: "提交",
        Vision: "願景",
        VisionVerse: "瑪竇 5:13-14 - '你們是地上的鹽, 世界的光'"
      });
    };
  
    const clickSC = () => {
      setLang({
        About: "关于",
        AdminLogin: "登入管理",
        Adult: "大人人数:",
        April: "四月",
        August: "八月",
        Children: "小童人数 (14岁以下):",
        Contacts: "联系",
        CoreStatement: "核心价值",
        CoreStatementVerse: "若望 13:34-35 - '我给你们一条新命令: 你们该彼此相爱; 如同我爱了你们, 你们也该照样彼此相爱。35如果你们之间彼此相亲相爱, 世人因此就可认出你们是我的门徒。'",
        December: "十二月",
        Dietary: "特殊饮食需求:",
        Donations: "捐献",
        Events: "活动",
        EventsPoster: "活动海报",
        EventsReg: "活动报名",
        February: "二月",
        HA: "心燃青年团",
        Intro: "介绍",
        Introduction: "「心燃」是奥克兰天主教团体的青年团。我们因着拥有同一信仰的联结而聚在一起。我们都共享作为天主子女的身份, 我们也希望能在教会大家庭里让所有的兄弟姐妹感受到圣神充分的喜乐与希望, 再将这份喜讯传扬出去。愿让所有来到我们这里的人都能认识天父, 从里到外地感受到爱, 被炽热的爱火点燃大家的心。",
        January: "一月",
        John: "若望",
        July: "七月",
        June: "六月",
        Login: "登入",
        March: "三月",
        Matthew: "玛窦",
        Mission: "使命",
        MissionVerse: "玛窦 28:19 - '所以你们要去使万民成为门徒, 因父及子及圣神之名给他们授洗'",
        November: "十一月",
        October: "十月",
        Password: "密码",
        RegName: "用这名字报名:",
        September: "九月",
        Submit: "提交",
        Vision: "愿景",
        VisionVerse: "玛窦 5:13-14 - '地上的盐, 世界的光'"
      });
    };
  
    return (
      <StateContext.Provider value={{ lang, clickEng, clickTC, clickSC }} > {children} </StateContext.Provider>
    );
  };
  
  export const useStateContext = () => useContext(StateContext);
  
  export default StateContext;