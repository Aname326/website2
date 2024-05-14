import React, { createContext, useState, useContext } from 'react';

const StateContext = createContext();

export const StateProvider = ({children}) => {
    const [lang, setLang] = useState({
      HA: "Hearts Alight",
      About: "About",
      Events: "Events",
      Contacts: "Contacts",
      Donations: "Donations",
      April: "April"
    });
  
    const clickEng = () => {
      setLang({
        HA: "Hearts Alight",
        About: "About",
        Events: "Events",
        Contacts: "Contacts",
        Donations: "Donations",
        April: "April"
      });
    };
  
    const clickTC = () => {
      setLang({
        HA: "心燃青年團",
        About: "關於",
        Events: "活動",
        Contacts: "聯繫",
        Donations: "捐獻",
        April: "四月"
      });
    };
  
    const clickSC = () => {
      setLang({
        HA: "心燃青年团",
        About: "关于",
        Events: "活动",
        Contacts: "联系",
        Donations: "捐献",
        April: "四月"
      });
    };
  
    return (
      <StateContext.Provider value={{ lang, clickEng, clickTC, clickSC }} > {children} </StateContext.Provider>
    );
  };
  
  export const useStateContext = () => useContext(StateContext);
  
  export default StateContext;