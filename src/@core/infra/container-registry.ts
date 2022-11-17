import { Container } from "inversify";
import { ListaCategoriaUseCase } from "../application/categoria/listar-categoria.use-case";
import { BuscarCidadePorIdUseCase } from "../application/cidade/buscar-cidade-por-id.use-case";
import { ListarCidadeUseCase } from "../application/cidade/lista-cidade.use-case";
import { BuscarDenunciaPorIdUseCase } from "../application/denuncia/buscar-denuncia-por-id.use-case";
import { ListaDenunciaUseCase } from "../application/denuncia/listar-denuncia.use-case";
import { ListaStatusUseCase } from "../application/status/listar-status.use-case";
import { CategoriaHttpGateway } from "./gateways/categoria-http.gateway";
import { CidadeHttpGateway } from "./gateways/cidade-http.gateway";
import { DenunciaHttpGateway } from "./gateways/denuncia-http.gateway";
import { http } from "./gateways/http";
import { StatusHttpGateway } from "./gateways/status-http.gateway";

export const Registry = {
    AxiosAdapter: Symbol.for("AxiosAdapter"),

    DenunciaGateway: Symbol.for("DenunciaGateway"),
    CategoriaGateway: Symbol.for("CategoriaGateway"),
    StatusGateway: Symbol.for("StatusGateway"),
    CidadeGateway: Symbol.for("CidadeGateway"),

    ListaDenunciaUseCase: Symbol.for("ListarDenunciaUseCase"),
    ListaCategoriaUseCase: Symbol.for("ListarCategoriaUseCase"),
    ListaStatusUseCase: Symbol.for("ListarStatusUseCase"),
    ListarCidadeUseCase: Symbol.for("ListarCidadeUseCase"),

    BuscarDenunciaPorId: Symbol.for("BuscarDenunciaPorId"),
    BuscarCateogriaPorId: Symbol.for("BuscarCateogriaPorId"),
    BuscarStatusPorIdUseCase: Symbol.for("BuscarStatusPorId"),
    BuscarCidadePorIdUseCase: Symbol.for("BuscarCidadePorId"),
}

export const container = new Container();

container.bind(Registry.AxiosAdapter).toConstantValue(http);

// Denuncia http
container.bind(Registry.DenunciaGateway).toDynamicValue((context) => {
    return new DenunciaHttpGateway(context.container.get(Registry.AxiosAdapter))
})

// Categoria http
container.bind(Registry.CategoriaGateway).toDynamicValue((context) => {
    return new CategoriaHttpGateway(context.container.get(Registry.AxiosAdapter))
})

// Status http
container.bind(Registry.StatusGateway).toDynamicValue((context) => {
    return new StatusHttpGateway(context.container.get(Registry.AxiosAdapter))
})

// Cidade http
container.bind(Registry.CidadeGateway).toDynamicValue((context) => {
    return new CidadeHttpGateway(context.container.get(Registry.AxiosAdapter))
})

container.bind(Registry.ListaDenunciaUseCase).toDynamicValue((context) => {
    return new ListaDenunciaUseCase(context.container.get(Registry.DenunciaGateway));
})

container.bind(Registry.ListaCategoriaUseCase).toDynamicValue((context) => {
    return new ListaCategoriaUseCase(context.container.get(Registry.CategoriaGateway));
})

container.bind(Registry.ListaStatusUseCase).toDynamicValue((context) => {
    return new ListaStatusUseCase(context.container.get(Registry.StatusGateway));
})

container.bind(Registry.ListarCidadeUseCase).toDynamicValue((context) => {
    return new ListarCidadeUseCase(context.container.get(Registry.CidadeGateway));
})

container.bind(Registry.BuscarDenunciaPorId).toDynamicValue((context) => {
    return new BuscarDenunciaPorIdUseCase(context.container.get(Registry.DenunciaGateway));
})

container.bind(Registry.BuscarCidadePorIdUseCase).toDynamicValue((context) => {
    return new BuscarCidadePorIdUseCase(context.container.get(Registry.CidadeGateway));
})