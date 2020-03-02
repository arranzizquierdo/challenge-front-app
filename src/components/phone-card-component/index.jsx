import './index.scss';
import PhoneDetailComponent from '../phone-detail-component';
import PropTypes from 'prop-types';
import React from 'react';


export const PhoneCardComponent = ({phoneData}) => {
  const [showModalDetail, setShowModalDetail] = React.useState(false);
  const [selectedPhone, setSelectedPhone] = React.useState(null);

  return <div className="phoneCard">
    <h2 className="detailTitle">{phoneData.name}</h2>
    <div className="dataDetail">
      <img src='' alt={phoneData.name}/>
      <button className="buttonDetail" onClick={() => {
        setSelectedPhone(phoneData)
        setShowModalDetail(true);
      }
      }>Ver detalles</button>
    </div>
    {
      showModalDetail && selectedPhone ?
        <PhoneDetailComponent phoneData={selectedPhone} closeModal={() => setShowModalDetail(false)}/> :
        null
    }
  </div>
}

PhoneCardComponent.propTypes = {
  phoneData: PropTypes.object,
};

export default PhoneCardComponent;