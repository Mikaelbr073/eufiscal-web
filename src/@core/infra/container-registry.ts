import { Container } from "inversify";
import { BuscarDenunciaPorIdUseCase } from "../application/denuncia/buscar-denuncia-por-id.use-case";
import { ListaDenunciaUseCase } from "../application/denuncia/listar-denuncia.use-case";
import { DenunciaHttpGateway } from "./gateways/denuncia-http.gateway";
import { http } from "./gateways/http";

export const Registry = {
    AxiosAdapter: Symbol.for("AxiosAdapter"),

    DenunciaGateway: Symbol.for("DenunciaGateway"),

    ListaDenunciaUseCase: Symbol.for("ListarDenunciaUseCase"),

    BuscarDenunciaPorId: Symbol.for("BuscarDenunciaPorId"),
}

export const container = new Container();

container.bind(Registry.AxiosAdapter).toConstantValue(http);

container.bind(Registry.DenunciaGateway).toDynamicValue((context) => {
    return new DenunciaHttpGateway(context.container.get(Registry.AxiosAdapter))
})

container.bind(Registry.ListaDenunciaUseCase).toDynamicValue((context) => {
    return new ListaDenunciaUseCase(context.container.get(Registry.DenunciaGateway));
})

container.bind(Registry.BuscarDenunciaPorId).toDynamicValue((context) => {
    return new BuscarDenunciaPorIdUseCase(context.container.get(Registry.DenunciaGateway));
})