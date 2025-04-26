// import {
//     faCheckCircle, faCircle, faBan, faCalendarAlt, faCloudDownloadAlt, faEdit, faFilter, faPlus, faSearch,
//     faSync, faExclamationCircle, faMinusCircle, faSave, faEraser, faEyeSlash, faPlusCircle, faFileExcel,
//     faAngleRight,
//     faFile
// } from '@fortawesome/free-solid-svg-icons';
// //import { TitleService } from '../../services/title.service';
// import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
// import { faEnvelope, faEye, faFileAlt } from '@fortawesome/free-regular-svg-icons';

// export class PageBaseComponent {
//     // icons
//     public faPlus = faPlusCircle;
//     public faEdit = faEdit;
//     public faSync = faSync;
//     public faSearch = faSearch;
//     public faFilter = faFilter;
//     public faFileExcel = faFileExcel;
//     public faAngleRight = faAngleRight;
//     public faFileAlt = faFileAlt;

//     public faEye = faEye;
//     public faEyeSlash = faEyeSlash;


//     public faCloudDownloadAlt = faCloudDownloadAlt;
//     public calendarAlt = faCalendarAlt;
//     public faCircle = faCircle;
//     public faEnvelope = faEnvelope;
//     public faBan = faBan;
//     public faCheckCircle = faCheckCircle;
//     public faExclamationCircle = faExclamationCircle;
//     public faMinusCircle = faMinusCircle;
//     public faSave = faSave;
//     public faEraser = faEraser;

//     // filter
//     public hiddenFilter = true;
//     public page = 1;
//     public pageCount = 0;
//     public pageSize = 10;

//     // form
//     public form?: UntypedFormGroup;

//     protected userClaims = JSON.parse;
//     protected formSubmitAttempt: boolean = false;
//     // public idUsuarioAcesso: string;
//     // public nomeUsuarioAcesso: string;

//     constructor(
//         protected title: string,
//         protected subTitle: string,
//         //protected titleService: TitleService,
//     ) {
//         //this.userClaims = JSON.parse(sessionStorage.getItem('id_token_claims_obj'));
//         // this.idUsuarioAcesso = this.userClaims['user_name'];
//         // this.nomeUsuarioAcesso = this.userClaims['first_name'] + ' ' + this.userClaims['last_name'];
//         this.carregarTitulos(title, subTitle);
//     }

//     private carregarTitulos(title: string, subTitle: string) {
//         // this.titleService.setTitle(title);
//         // this.titleService.setSubTitle(subTitle);
//     }

//     filter() {
//         this.hiddenFilter = !this.hiddenFilter;
//     }

//     public pageChange(page: any) {
//         this.page = page;
//     }

//     // isInValid(field: string) {

//     //     if (this.form?.get(field) == undefined) {
//     //         return false;
//     //     }

//     //     // return this.form.get(field).invalid && this.formSubmitAttempt;
//     // }

//     // displayFieldCss(field: string) {
//     //     return {
//     //         'has-error': this.isInValid(field),
//     //         'has-feedback': this.isInValid(field),
//     //         'input-error': this.isInValid(field)
//     //     };
//     // }

//     validateAllFormFields(formGroup: UntypedFormGroup) {         //{1}
//         Object.keys(formGroup.controls).forEach(field => {  //{2}
//             const control = formGroup.get(field);             //{3}
//             if (control instanceof UntypedFormControl) {             //{4}
//                 control.markAsTouched({ onlySelf: true });
//             } else if (control instanceof UntypedFormGroup) {        //{5}
//                 this.validateAllFormFields(control);            //{6}
//             }
//         });
//     }

//     public buscaRapida(val: string) {
//         console.log(val);
//     }

//     public montarTituloCard(val: any) {
//         console.log(val);
//     }


// }
