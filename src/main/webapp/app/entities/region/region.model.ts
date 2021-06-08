export interface IRegion {
  id?: number;
  regoinId?: number | null;
  regionName?: string | null;
}

export class Region implements IRegion {
  constructor(public id?: number, public regoinId?: number | null, public regionName?: string | null) {}
}

export function getRegionIdentifier(region: IRegion): number | undefined {
  return region.id;
}
