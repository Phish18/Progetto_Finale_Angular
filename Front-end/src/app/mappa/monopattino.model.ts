export interface Position {
  lat: number;
  lon: number;
}

export class Monopattino {
  _id: string;
  qr: string;
  pos: Position;
}
