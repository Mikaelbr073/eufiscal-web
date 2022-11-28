import { BaseFilter } from "./shared/base.filter"

export type DenunciaFilterProps = {
    cidadeID?: number | null
    categoriaID?: number | null
    statusID?: number | null
}

export class DenunciaFilter extends BaseFilter {
    constructor(public props: DenunciaFilterProps) {
        super({})
    }

    get cidadeID() {
        return this.props.cidadeID;
    }

    get categoriaID() {
        return this.props.categoriaID;
    }

    get statusID() {
        return this.props.statusID;
    }

    toJSON() {
        return {
            cidadeID: this.cidadeID,
            categoriaID: this.categoriaID,
            statusID: this.statusID
        }
    }
}