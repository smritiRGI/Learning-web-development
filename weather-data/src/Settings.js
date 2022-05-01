import React , {useContext, useState} from 'react';
import { Modal } from 'react-bootstrap';
import {settingContext} from './UserSettingContext.js';
import {FiSettings} from 'react-icons/fi';
import './Settings.css';

function Settings() {

      const [show ,  setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const {temperature  , pressure } = useContext(settingContext);
      
      return (
               <>
                    <FiSettings onClick={handleShow} />
                               <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                         <Modal.Title>User Settings</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                         <label className='temperature'> Temperature
                                              Celsius <input type="checkbox" /> Fahrenheit
                                         </label>
                                         <label className='pressure'> Pressure
                                              <input type="checkbox" />
                                         </label>
                                    </Modal.Body>
                               </Modal>
               </>
             
      )
}

export default Settings;