import './index.scss';
import PropTypes from 'prop-types';
import React from 'react';


export const PhoneCardComponent = ({phoneData}) => {

  return <div className="phoneCard">
    <h2 className="detailTitle">{phoneData.name}</h2>
    <div className="dataDetail">
      <img src='' alt=''/>
      <button className="buttonDetail">Ver detalles</button>
    </div>
  </div>
}

PhoneCardComponent.propTypes = {
  phoneData: PropTypes.object,
};

export default PhoneCardComponent;