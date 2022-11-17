import { BaseFilter } from "./shared/base.filter"

export type DenunciaFilterProps = {
    cidadeId?: number | null
    categoriaId?: number | null
    status?: string | null
}

export class DenunciaFilter extends BaseFilter {
    constructor(public props: DenunciaFilterProps) {
        super({})
    }

    get cidadeId() {
        return this.props.cidadeId;
    }

    get categoriaId() {
        return this.props.categoriaId;
    }

    get status() {
        return this.props.status;
    }

    toJSON() {
        return {
            cidadeId: this.cidadeId,
            categoriaId: this.categoriaId,
            status: this.status
        }
    }
}