import React , {useState} from 'react';
import Settings from './Settings';

// need to have a default context else it throws error
const settingContext  = React.createContext();
//{children} is a variable that equals the components/functions that your context is wrapping. <Settings/> would be {children}
function UserSettingContext({children}) {
    const [temperature ,setTemperature] = useState("Celsius");

    return (
        // the component that provides the value
        <settingContext.Provider value={{temperatureArray : [temperature ,  setTemperature] }}>
           {children}
        </settingContext.Provider>
    )
}

export {settingContext , UserSettingContext };
