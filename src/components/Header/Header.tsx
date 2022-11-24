import React, { useContext, useState } from 'react';
import Image from 'next/image';
import LogoEuFiscal from '../../../public/LOREMIPSUM.svg'

import { Container, ContainerFiltro, Logo, Menu, MenuMobile } from './styles';
import SearchCidade from '../SearchCidade';
import { Cidade } from '../../@core/domain/entities/cidade';
import { ListaDenunciaUseCase } from '../../@core/application/denuncia/listar-denuncia.use-case';
import { DenunciaFilter } from '../../@core/application/filter/denuncia.filter';
import { container, Registry } from '../../@core/infra/container-registry';
import { BuscarCidadePorIdUseCase } from '../../@core/application/cidade/buscar-cidade-por-id.use-case';
import { Categoria } from '../../@core/domain/entities/categoria';
import { Status } from '../../@core/domain/entities/status';
import { AuthContext } from '../../context/auth.provider';
import { PosicaoContext } from '../../context/posicao.provider';
import Select from '../Select';

type HeaderProps = {
  categorias: Categoria[]
  status: Status[]
  cidades: Cidade[]
  setCategoriaIdSelecionada: Function;
  setStatusSelecionada: Function;
  isAuthorization: boolean
}

const Header: React.FC<HeaderProps> = ({
  cidades,
  categorias,
  status,
  setCategoriaIdSelecionada,
  setStatusSelecionada,
  isAuthorization
}) => {
  
  const { isAuthenticated, usuario, signOut } = useContext(AuthContext);

  const [menuShow, setMenuShow] = useState<boolean>(false);

  const {
    setDenuncias,
    setLat,
    setLng,
    setCidadeId
} = useContext(PosicaoContext);

  const onSelectedCidade = async (cidadeId: number) => {
    const listarDenunciaUseCase = container.get<ListaDenunciaUseCase>(Registry.ListaDenunciaUseCase);
    const denuncias = await listarDenunciaUseCase.execute(new DenunciaFilter({ cidadeId }));
    setDenuncias(denuncias)

    const buscarCidadePorIdUseCase = container.get<BuscarCidadePorIdUseCase>(Registry.BuscarCidadePorIdUseCase);
    const cidade = await buscarCidadePorIdUseCase.execute(cidadeId);

    setCidadeId(cidadeId)
    setLat(cidade.lat)
    setLng(cidade.lng)
  }

  return (
    <Container>
      <Logo>
        <Image alt='EuFiscal logo' src={LogoEuFiscal} />
      </Logo>
      {menuShow && (
        <MenuMobile>
          <div>
            <SearchCidade
              classNameContainer='buscar'
              cidades={cidades}
              onSelectedCidade={onSelectedCidade}
            />
          </div>
          <div>
            <Select
              onChange={(evt) => setCategoriaIdSelecionada(evt.target.value !== "" ? Number(evt.target.value) : null)}
              optionDefaultName="Todas Categorias"
              items={categorias}
              optionKeyName="id"
              optionValueName="id"
              optionName="nome"
            />
            <Select
              onChange={(evt) => setStatusSelecionada(evt.target.value !== "" ? evt.target.value : null)}
              optionDefaultName="Todos status"
              items={status}
              optionKeyName="id"
              optionValueName="id"
              optionName="nome"
            />
            {(isAuthorization) && (
              <button
                onClick={() => signOut()}
                onChange={signOut}
                className='header__button'
              >
                sair
              </button>
            )}
          </div>
        </MenuMobile>
      )}
      <Menu>
        <SearchCidade
          classNameContainer='buscar'
          cidades={cidades}
          onSelectedCidade={onSelectedCidade}
        />
        <ContainerFiltro>
          <Select
            onChange={(evt) => setCategoriaIdSelecionada(evt.target.value !== "" ? Number(evt.target.value) : null)}
            optionDefaultName="Todas Categorias"
            items={categorias}
            optionKeyName="id"
            optionValueName="id"
            optionName="nome"
          />
          <Select
            onChange={(evt) => setStatusSelecionada(evt.target.value !== "" ? evt.target.value : null)}
            optionDefaultName="Todos status"
            items={status}
            optionKeyName="id"
            optionValueName="id"
            optionName="nome"
          />
          {(isAuthorization) && (
            <button
              onClick={() => signOut()}
              onChange={signOut}
              className='header__button'
            >
              sair
            </button>
          )}
        </ContainerFiltro>
      </Menu>
    </Container>
  );
}

export default Header;