import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/api-response';

@Injectable({
    providedIn: 'root'
})
export class MapResponseService {
    public static MapResponse<D>(res: any, type: new (data: any) => D, single: boolean = false) {
        let response: any;

        if (single)
            response = new ApiResponse<D>();
        else
            response = new ApiResponse<D[]>();


        if (res.isValid) {
            if (single) {
                response.data = new type(res.data) as D;
            } else {
                response.data = res.data.map((pp: any) => new type(pp) as D);

            }
            response.totalRows = res.count;
        } else {
            response.data = [];
            response.notifications = res.notifications.map((pp: any) => new Notification(pp));
        }

        response.count = res.count;
        response.isValid = res.isValid;
        return response;
    }
}
