import { AxiosInstance } from "axios";
import { Cidade } from "../../domain/entities/cidade";
import { GoogleMapsGateway } from "../../domain/gateways/google-maps.gateway";

export class GoogleMapsHttpGateway implements GoogleMapsGateway {
    constructor(private http: AxiosInstance) {}
    
    buscarNomeCidadePorLatLng(lat: number, lng: number): Promise<string | null> {
        return this.http.get(`/geocode/json?latlng=${lat},${lng}&sensor=false&key=${process.env.GOOGLE_MAPS_KEY}`).then(res => {
            return res.data.results[0].address_components[2].long_name;
        })
    }
}
