import React, { useContext } from 'react';

import GoogleMapReact from 'google-map-react';

import Image from 'next/image';

import Mark from '../../../public/mark.svg'
import { Container, Marcador } from './styles';
import { PosicaoContext } from '../../context/posicao.provider';

type MapaProps = {
  handleClickMarcador: Function;
  marcadores: any[];
  marcadorIdNome: string;
  marcadorLatNome: string;
  marcadorLngNome: string;
}

const Mapa: React.FC<MapaProps> = ({
  marcadores,
  handleClickMarcador,
  marcadorIdNome,
  marcadorLatNome,
  marcadorLngNome,
}) => {

  const {
    lat,
    lng,
    zoom
  } = useContext(PosicaoContext);

  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA0pD_nuaftUHgNtZ8JaEjke--40YmOcrE' }}
        defaultCenter={{ lat, lng }}
        center={{ lat, lng }}
        defaultZoom={zoom}
      >
        {
          marcadores.map((marcador) => (
            <Marcador
              key={marcador[marcadorIdNome]}
              lat={marcador[marcadorLatNome]}
              lng={marcador[marcadorLngNome]}
              onClick={() => handleClickMarcador(marcador[marcadorIdNome])}
            >
              <Image alt="" src={Mark} />    
            </Marcador>
          ))
        }
      </GoogleMapReact>
    </Container>
  );
}

export default Mapa;