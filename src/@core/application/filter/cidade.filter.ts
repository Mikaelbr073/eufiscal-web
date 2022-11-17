import { BaseFilter } from "./shared/base.filter"

export type CidadeFilterProps = {
    nome?: string
}

export class CidadeFilter extends BaseFilter {
    constructor(public props: CidadeFilterProps) {
        super({})
    }

    get nome() {
        return this.props.nome;
    }

    toJSON() {
        return {
            nome: this.nome,
        }
    }
}