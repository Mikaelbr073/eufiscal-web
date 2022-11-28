import React, {useState} from 'react';

import { Container, ContainerInputPesquisar, ListaSugestoes } from './styles';

type AutocompleteProps = {
    children?: React.ReactNode;
    cidades: string[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({
    cidades
}) => {

    const [cidadeEscolhida, setCidadeEscolhida] = useState<number>(0);
    const [cidadesFiltro, setCidadesFiltro] = useState<string[]>([]);
    const [isMostrarCidades, setIsMostrarCidades] = useState(false);
    const [entrada, setEntrada] = useState("");

    const onChange = (evt) => {
        const entradaUsuario: string = evt.currentTarget.value;

        setCidadesFiltro(cidades.filter(cidade => 
            cidade.toLowerCase().indexOf(entradaUsuario.toLowerCase()) > -1));
        
        setIsMostrarCidades(true);

        setEntrada(entradaUsuario)
        setCidadeEscolhida(0)
    }

    const onClick = (evt) => {
        setCidadesFiltro([]);
        setIsMostrarCidades(false);
        setEntrada(evt.currentTarget.innerText)
        setCidadeEscolhida(0)
    }

    const onKeyDown = (evt) => {

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
                      <li className={className} key={suggestion} onClick={onClick}>
                        {suggestion}
                      </li>
                    );
                  })}
                </ul>
              );
        }
    }

    return (
        <Container>
            <ContainerInputPesquisar>
                    <input
                        onClick={onClick}
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        type="text"
                        placeholder='Digite uma cidade'
                        value={entrada}
                    />
                <button>P</button>
            </ContainerInputPesquisar>
            <ListaSugestoes>
                {listaCidadesComponent}
            </ListaSugestoes>
        </Container>
    );
}

export default Autocomplete;