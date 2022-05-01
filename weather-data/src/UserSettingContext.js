import React , {useState} from 'react';
import Settings from './Settings';

// need to have a default context else it throws error
const settingContext  = React.createContext();

function UserSettingContext() {
    const [temperature ,setTemperature] = useState("Celsius");
    const [pressure , setPressure] = useState("HectoPascal");

    return (
        // the component that provides the value
        <settingContext.Provider value={{temperature : [temperature ,  setTemperature] , 
            pressure: [pressure, setPressure]}}>
           <Settings/>
        </settingContext.Provider>
    )
}

export {settingContext , UserSettingContext };
