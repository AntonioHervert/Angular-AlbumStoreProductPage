import {Track} from './track';
export interface Album {
    name: string;
    releseDate: string;
    coverImage:string;
    tracks: Track[];
}
