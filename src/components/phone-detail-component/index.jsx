
import './index.scss';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
import React from 'react';

export const PhoneDetailComponent = ({phoneData, closeModal}) => {

  const dataText = {
    'os': 'Sistema operativo',
    'size': 'Tamaño',
    'colors': 'Colores',
    'price': 'Precio',
    'memory': 'Memoria RAM',
    'camera': 'Cámara',
  }

  return <div className="containerModal">
    <div className="containerData">
      <header className="containerHeader">
        <h1>{phoneData.name || ''}</h1>
        <FontAwesomeIcon className="close" icon={faTimes} onClick={closeModal}/>
      </header>
      <main>
        <p>{phoneData.description || ''}</p>
        <table>
          <tbody>
            {
              phoneData.info.map((category, i) => 
                <tr key={i}>
                  <td>{dataText[Object.keys(category)]}</td>
                  <td>{category[Object.keys(category)] || ''}</td>
                </tr>)
            }
          </tbody>
        </table>
      </main>
    </div>
  </div>
}

PhoneDetailComponent.propTypes = {
  phoneData: PropTypes.object,
  closeModal: PropTypes.func,
};

export default PhoneDetailComponent;