export interface GoogleMapsGateway {
    buscarNomeCidadePorLatLng(lat: number, lng: number): Promise<string | null>;
}