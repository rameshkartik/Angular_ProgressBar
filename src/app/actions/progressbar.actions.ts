import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { PageInfo } from './../models/progressbar.model'


export const ADD_PAGE = 'ADD_PAGE';
export const GET_PAGE = 'GET_PAGE';

export class AddPage implements Action {
    readonly type = ADD_PAGE;
        constructor(public payload: PageInfo) {}
}

export class GetPage implements Action {
    readonly type = GET_PAGE;
        constructor(public payload:PageInfo) {}
}

export type Actions = AddPage|GetPage;

