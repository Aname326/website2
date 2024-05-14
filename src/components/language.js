import React, { createContext, useState, useContext } from 'react';

const StateContext = createContext();

export const StateProvider = ({children}) => {
    const [lang, setLang] = useState({
      About: "About",
      AdminLogin: "Admin Login",
      April: "April",
      August: "August",
      Contacts: "Contacts",
      December: "December",
      Donations: "Donations",
      Events: "Events",
      EventsPoster: "Events Poster",
      EventsReg: "Events Registration",
      February: "February",
      HA: "Hearts Alight",
      Login: "Login",
      March: "March",
      January: "January",
      July: "July",
      June: "June",
      November: "November",
      October: "October",
      Password: "Password",
      September: "September",
    });
  
    const clickEng = () => {
      setLang({
        About: "About",
        AdminLogin: "Admin Login",
        April: "April",
        August: "August",
        Contacts: "Contacts",
        December: "December",
        Donations: "Donations",
        Events: "Events",
        EventsPoster: "Events Poster",
        EventsReg: "Events Registration",
        February: "February",
        HA: "Hearts Alight",
        Login: "Login",
        March: "March",
        January: "January",
        July: "July",
        June: "June",
        November: "November",
        October: "October",
        Password: "Password",
        September: "September",
      });
    };
  
    const clickTC = () => {
      setLang({
        About: "關於",
        AdminLogin: "登入管理",
        April: "四月",
        August: "八月",
        Contacts: "聯繫",
        December: "十二月",
        Donations: "捐獻",
        Events: "活動",
        EventsPoster: "活動海報",
        EventsReg: "活動報名",
        February: "二月",
        HA: "心燃青年團",
        Login: "登入",
        March: "三月",
        January: "一月",
        July: "七月",
        June: "六月",
        November: "十一月",
        October: "十月",
        Password: "密碼",
        September: "九月"
      });
    };
  
    const clickSC = () => {
      setLang({
        About: "关于",
        AdminLogin: "登入管理",
        April: "四月",
        August: "八月",
        Contacts: "联系",
        December: "十二月",
        Donations: "捐献",
        Events: "活动",
        EventsPoster: "活动海报",
        EventsReg: "活动报名",
        February: "二月",
        HA: "心燃青年团",
        Login: "登入",
        March: "三月",
        January: "一月",
        July: "七月",
        June: "六月",
        November: "十一月",
        October: "十月",
        Password: "密码",
        September: "九月"
      });
    };
  
    return (
      <StateContext.Provider value={{ lang, clickEng, clickTC, clickSC }} > {children} </StateContext.Provider>
    );
  };
  
  export const useStateContext = () => useContext(StateContext);
  
  export default StateContext;