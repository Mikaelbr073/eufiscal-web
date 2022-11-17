import { createContext, useState, Dispatch, SetStateAction } from "react";
import { Denuncia } from "../@core/domain/entities/denuncia";

export type PosicaoContextType = {
    cidadeId: number | null;
    cidade: string;
    estado: string;
    lat: number;
    lng: number;
    zoom: number;
    denuncias: Denuncia[];
    setDenuncias: Function;
    setLat: Function;
    setLng: Function;
    setCidadeId: Function;
}

const defaultContext: PosicaoContextType = {
    cidadeId: 0,
    cidade: "",
    estado: "",
    lat: 0,
    lng: 0,
    zoom: 15,
    denuncias: [],
    setDenuncias: Function,
    setLat: Function,
    setLng: Function,
    setCidadeId: Function,
}

export const PosicaoContext = createContext<PosicaoContextType>(defaultContext);

export const PosicaoProvider = ({ children }) => {

    const [denuncias, setDenuncias] = useState<Denuncia[]>([])
    const [cidadeId, setCidadeId] = useState<number | null>(null)
    const [cidade, setCidade] = useState<string>("Caruaru")
    const [estado, setEstado] = useState<string>("Pernambuco")
    const [lat, setLat] = useState<number>(-8.284547)
    const [lng, setLng] = useState<number>(-35.969863)
    const [zoom, setZoom] = useState<number>(15)

    return (
        <PosicaoContext.Provider
            value={{
                cidadeId,
                cidade,
                estado,
                lat,
                lng,
                zoom,
                denuncias,
                setDenuncias,
                setLat,
                setLng,
                setCidadeId
            }}
        >
            {children}
        </PosicaoContext.Provider>
    )
}
