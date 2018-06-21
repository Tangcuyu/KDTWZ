export enum FilterType {
    Manufacturer,
    BoardType,
    None
}

export interface IFilter {
    filterName: string;
    filterType: FilterType;
    filterValues?: string [];
}

export interface IApplyFilter {
    filterType: FilterType;
    filterValue: string;
}
