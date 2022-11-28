import React, {useState} from 'react';
import { Cidade } from '../../@core/domain/entities/cidade';

import { Container, ContainerInputPesquisar, ListaSugestoes } from './styles';

type SearchCidadeProps = {
    children?: React.ReactNode;
    cidades: Cidade[];
    classNameContainer?: string;
    className?: string | undefined;
    onSelectedCidade: Function;
}

const SearchCidade: React.FC<SearchCidadeProps> = ({
    cidades,
    classNameContainer,
    onSelectedCidade,
    ...props
}) => {

    const [cidadeEscolhida, setCidadeEscolhida] = useState<number>(0);
    const [cidadesFiltro, setCidadesFiltro] = useState<Cidade[]>([]);
    const [isMostrarCidades, setIsMostrarCidades] = useState(false);
    const [entrada, setEntrada] = useState("");

    const onChange = (evt) => {
        const entradaUsuario: string = evt.currentTarget.value;

        setCidadesFiltro(cidades.filter(cidade => 
            cidade.nome.toLowerCase().indexOf(entradaUsuario.toLowerCase()) > -1));
            // cidade.toLowerCase().indexOf(entradaUsuario.toLowerCase()) > -1));
        
        setIsMostrarCidades(true);

        setEntrada(entradaUsuario)
        setCidadeEscolhida(0)
    }

    const onClick = (evt) => {
        setCidadesFiltro([]);
        setIsMostrarCidades(false);
        setEntrada(evt.currentTarget.innerText)
        setCidadeEscolhida(0)
        onSelectedCidade(cidades.find(cidade => cidade.nome === evt.currentTarget.innerText)?.id)
    }

    const onKeyDown = (evt) => {

        // alert('oi')
    }

    let listaCidadesComponent = null;

    if (isMostrarCidades && entrada) {
        if (cidadesFiltro.length) {
            listaCidadesComponent = (
                <ul className="suggestions">
                  {cidadesFiltro.map((suggestion, index) => {
                    let className;
      
                    // Flag the active suggestion with a class
                    if (index === cidadeEscolhida) {
                      className = "suggestion-active";
                    }
      
                    return (
                      <li className={className} key={suggestion.id} onClick={onClick}>
                        {suggestion.nome}
                      </li>
                    );
                  })}
                </ul>
              );
        }
    }

    return (
        <Container className={props.className}>
            <ContainerInputPesquisar>
                    <input
                        {...props}
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        type="text"
                        placeholder='Digite uma cidade'
                        value={entrada}
                    />
            </ContainerInputPesquisar>
            <ListaSugestoes>
                {listaCidadesComponent}
            </ListaSugestoes>
        </Container>
    );
}

export default SearchCidade;