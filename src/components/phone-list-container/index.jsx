import './index.scss';
import {connect} from 'react-redux';
import PhoneCardComponent from '../phone-card-component';
import PropTypes from 'prop-types';
import React from 'react';
import {searchPhoneList} from '../../store/actions/index';
import Spinner from '../spinner';

export const PhoneListContainer = ({searchPhoneList, state}) => {

  const phones = state.phones && state.phones;

  if(!phones) {
    searchPhoneList();
  }

  return <div>
    <header className="headerContainer">
      <h1>GUIA MÓVILES</h1>
    </header>
    <main className="mainContainer">
      <article>
        <h1>Mejores móviles calidad-precio 2020</h1>
        <p>Elegir un buen móvil en relación calidad-precio no es tan sencillo como pueda parecer. Para realizar el ranking, nos hemos basado en los cuatro factores que debes tener en cuenta antes de elegir tu dispositivo:</p>
        <ul>
          <li>Las dimensiones es un aspecto a tener en cuenta, especialmente según el uso que vayas a darle al móvil. Sin embargo, más grande no tiene por qué significar más incomodidad o pesado.</li>
          <li>La cámara se ha convertido en una herramienta imprescindible de cualquier smartphone, y ya es posible encontrar lentes excelentes a precios muy contenidos.</li>
          <li>La pantalla es el centro de atención del móvil, y es importante asegurarse de que tiene la resolución, brillo y velocidad de respuesta necesarios.</li>
          <li>El sistema operativo; muchos fabricantes de móviles Android añaden una capa de personalización adicional, con resultados muy dispares.</li>
        </ul>
        <p>Navega por nuestro listado hasta descubrir cuál es el mejor móvil calidad precio de este año 2020.</p>
      </article>
      {
        phones ?
          <nav className="detailContainer">
            <section className="dataList">
              {
                phones.map((phone, i) => <PhoneCardComponent phoneData={phone} key={i}/>)
              }
            </section>
            <section className="pagerList">
              <p>paginación</p>
            </section>
          </nav> :
          <Spinner/>
      } 
    </main>
  </div>
}

PhoneListContainer.propTypes = {
  state: PropTypes.object,
  searchPhoneList: PropTypes.func,
}

function mapStateToProps(state) {
  return {
    state: state.search
  }
}

export default connect(
  mapStateToProps, 
  {searchPhoneList}
)(PhoneListContainer)