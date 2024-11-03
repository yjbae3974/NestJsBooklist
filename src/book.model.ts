export interface BookDto {
    id: string;
    title: string;
    arthor: string;
    createdDt?: Date;
    updatedDt?: Date;
    isAvailable: boolean;
}