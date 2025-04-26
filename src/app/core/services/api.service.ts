// import { Inject, Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';
// import { HttpHeaders, HttpClient } from '@angular/common/http';


// @Injectable()
// export class ApiService {
//     private endPoint: string;
//     //apiUrl = 'http://localhost:5001/api'
//     private obToken: Observable<HttpHeaders>;

//     constructor(@Inject('ENV') private env, private http: HttpClient, private auth: AuthService) {
//         this.endPoint = this.env.apiUrl;
//         this.obToken = new Observable(observer => {
//             this.auth.getToken().then(token => {
//                 let headers = new HttpHeaders(
//                     {
//                         'Authorization': 'Bearer ' + token,
//                         'Content-type': 'application/json',
//                         'Access-Control-Allow-Origin': '*'
//                     });

//                 observer.next(headers);
//                 observer.complete();
//             });
//         });
//     }

//     public set EndPoint(end_point: string) {
//         this.endPoint = end_point;
//     }

//     public get EndPoint() {
//         return this.endPoint;
//     }

//     public get(url, scopped = true): Observable<any> {
//         return new Observable<any>(observer => {
//             let endpoint = this.endPoint;
//             if (!scopped) {
//                 endpoint = '';
//             }
//             this.obToken.subscribe(header => {
//                 console.log(header);
//                 this.http.get(endpoint + url, { headers: header })
//                     .pipe(
//                         catchError((err) => {
//                             console.log(err);
//                             observer.error(err);
//                             throw err;
//                         }),
//                         map(response => {
//                             return response;
//                         })
//                     ).subscribe(response => {
//                         observer.next(response);
//                         observer.complete();
//                     });
//             });
//         });
//     }

//     public getReport(url: string): Observable<any> {
//         return new Observable<any>(observer => {
//             this.obToken.subscribe(header => {
//                 this.http.get(this.endPoint + url, { headers: header })
//                     .subscribe(response => {
//                         observer.next(response);
//                         observer.complete();
//                     });
//             });
//         });
//     }

//     public getWithParams(url: string, params: any): Observable<any> {
//         return new Observable<any>(observer => {
//             this.obToken.subscribe(header => {
//                 console.log(header);
//                 this.http.get(this.endPoint + url, { headers: header, params: params })
//                     .pipe(
//                         catchError((err) => {
//                             observer.error(err);
//                             throw err;
//                         }),
//                         map(response => {
//                             return response;
//                         })
//                     ).subscribe(response => {
//                         observer.next(response);
//                         observer.complete();
//                     });
//             });
//         });
//     }

//     public post(url: string, data: any, options = {}): Observable<any> {
//         return new Observable<any>(observer => {
//             this.obToken.subscribe(header => {
//                 options['headers'] = header;
//                 console.log(header);
//                 this.http.post(this.endPoint + url, data, options).pipe(
//                     catchError((err) => {
//                         observer.error(err);
//                         throw err;
//                     }),
//                     map(response => {
//                         return response;
//                     })
//                 ).subscribe(response => {
//                     observer.next(response);
//                     observer.complete();
//                 });
//             });
//         });
//     }

//     public file(url: string, fileExtension: any): Observable<any> {
//         return new Observable<any>(observer => {
//             this.obToken.subscribe(header => {
//                 this.http.get(this.endPoint + url, { responseType: 'blob', observe: 'response', headers: header })
//                     .pipe(
//                         map((res: any) => {
//                             return new Blob([res.body], { type: fileExtension });
//                         })
//                     ).subscribe(response => {
//                         observer.next(response);
//                         observer.complete();
//                     });
//             });
//         });
//     }

//     public put(url: string, data: any): Observable<any> {
//         return new Observable<any>(observer => {
//             this.obToken.subscribe(header => {
//                 console.log(header);
//                 this.http.put(this.endPoint + url, data, { headers: header })
//                     .pipe(
//                         catchError(err => {
//                             return err;
//                         }),
//                         map(response => {
//                             return response;
//                         })
//                     ).subscribe(response => {
//                         observer.next(response);
//                         observer.complete();
//                     });
//             });
//         });
//     }

//     public delete(url: string): Observable<any> {
//         return new Observable<any>(observer => {
//             this.obToken.subscribe(header => {
//                 this.http.delete(this.endPoint + url, { headers: header })
//                     .pipe(
//                         catchError((err) => {
//                             observer.error(err);
//                             throw err;
//                         }),
//                         map((response: any) => {
//                             return response;
//                         })
//                     ).subscribe(response => {
//                         observer.next(response);
//                         observer.complete();
//                     });
//             });
//         });
//     }
// }
