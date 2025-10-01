import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { EstudianteInput } from `../model/estudianteInput`;

@Injectable({
    providedIn: `root`,
})
export class EstudianteService {
    constructor (private https: HttpClient) {}

    getEstudiantes () {
        return this.https
        .get<any>(``)

