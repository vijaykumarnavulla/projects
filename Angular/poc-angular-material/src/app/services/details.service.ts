import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DetailService {

    constructor(private http: HttpClient) { }

    $showOrderDetails: BehaviorSubject<any> = new BehaviorSubject('');

    getOrderDetails(): Observable<any> {
        return this.$showOrderDetails.asObservable();
    }

    fetchDetails(details: any): void {
        this.$showOrderDetails.next(details);
    }

    getData() {
        return this.http.get('../assets/mock/orderDetails.json');
    }

}