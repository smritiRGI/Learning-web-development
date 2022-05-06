import React , {useContext, useState} from 'react';
import { Modal ,Form, Stack} from 'react-bootstrap';
import {settingContext} from './UserSettingContext.js';
import {FiSettings } from 'react-icons/fi';
import { IconContext } from "react-icons";
import './Settings.css';

function Settings() {

      const [show ,  setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const {temperatureArray  , pressureArray } = useContext(settingContext);
      const [temperatureUnit , setTemperature] = temperatureArray;
      
      return (
               <>
                   <div className="icon" >
                    <IconContext.Provider value={{size:"1.5em"}}>
                    <FiSettings onClick={handleShow} />
                     </IconContext.Provider>
                    </div>
                               <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                         <Modal.Title>User Settings</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                         <Stack gap={3}>
                                             <Form.Select value={temperatureUnit} onChange={(event)=>setTemperature(event.target.value)}>
                                                  <option value="Celsius">Celsius &deg; C</option>
                                                  <option value="Fahrenheit">Fahrenheit &deg; F</option>
                                             </Form.Select>
                                        </Stack>
                                    </Modal.Body>
                               </Modal>
               </>
             
      )
}

export default Settings;