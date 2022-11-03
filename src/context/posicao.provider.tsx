import { createContext } from "react";

export type PosicaoContextType = {
    ciddadeId: number;
    cidade: string;
    estado: string;
    lat: number;
    lng: number;
    zoom: number;
    atualizarPosicao: (posicao: {
        ciddadeId: number;
        cidade: string;
        estado: string;
        lat: number;
        lng: number;
        zoom: number;
    }) => void;
}

const defaultContext: PosicaoContextType = {
    ciddadeId: 0,
    cidade: "",
    estado: "",
    lat: 0,
    lng: 0,
    zoom: 15,
    atualizarPosicao: () => {},
}

export const PosicaoContext = createContext(defaultContext);

export const PosicaoProvider = ({ children }) => {

    // Posicao padrão
    const ciddadeId = 0;
    const cidade = "Lajedo";
    const estado = "Pernambuco";
    const lat = -8.657914;
    const lng = -36.329336;
    const zoom =  15;

    const atualizarPosicao = (posicao: {
        ciddadeId: number;
        cidade: string;
        estado: string;
        lat: number;
        lng: number;
        zoom: number;
    }) => {
        const ciddadeId = posicao.ciddadeId;
        const cidade = posicao.cidade;
        const estado = posicao.estado;
        const lat = posicao.lat;
        const lng = posicao.lng;
        const zoom =  posicao.zoom;
    
    }

    return (
        <PosicaoContext.Provider
            value={{
                cidade,
                ciddadeId,
                estado,
                lat,
                lng,
                zoom,
                atualizarPosicao
            }}
        >
            {children}
        </PosicaoContext.Provider>
    )
}