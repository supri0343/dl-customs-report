import { inject } from 'aurelia-framework';
import { Service } from "./service";
import { Router } from 'aurelia-router';
import moment from 'moment';

@inject(Router, Service)
export class List {
  constructor(router, service) {
        this.service = service;
        this.router = router;
    }
    info = { page: 1,size:50};
    search(){
        this.info.page = 1;
        this.searching();
    }
    controlOptions = {
        label: {
            length: 4
        },
        control: {
            length: 4
        }
    };
    
    searching() {
    var args = {
            page: this.info.page,
            size: this.info.size,
            dateFrom : this.dateFrom ? moment(this.dateFrom).format("YYYY-MM-DD") : "",
            dateTo : this.dateTo ? moment(this.dateTo).format("YYYY-MM-DD") : ""
        }
        this.service.search(args)
     
            .then(result => {
                this.rowCount=[];
                var index=0; 
                for(var a of result.data){
                    var type = a.ClassificationCode.toString();
                    if(!this.rowCount[type]){
                        this.rowCount[type]=1;
                    }else{
                        this.rowCount[type]++;
                    }
                }
                for(var b of result.data){
                    let clastype = result.data.find(o=> o.ClassificationCode == b.ClassificationCode);
                    if(clastype){
                        clastype.rowspan=this.rowCount[b.ClassificationCode]
                    }
                }
               this.data=result.data;     
               
            });
            
    }
    changePage(e) {
        var page = e.detail;
        this.info.page = page;
        this.searching();
    }
      reset() {
      
        this.dateFrom = "";
        this.dateTo = "";
    }

    ExportToExcel() {
        this.error = {};

        if (!this.dateTo || this.dateTo == "Invalid Date")
            this.error.dateTo = "Tanggal Akhir harus diisi";

        if (!this.dateFrom || this.dateFrom == "Invalid Date")
            this.error.dateFrom = "Tanggal Awal harus diisi";


        if (Object.getOwnPropertyNames(this.error).length === 0) {
            var info = {
                dateFrom : this.dateFrom ? moment(this.dateFrom).format("YYYY-MM-DD") : "",
                dateTo : this.dateTo ? moment(this.dateTo).format("YYYY-MM-DD") : ""
            }
            this.service.generateExcel(info);
        }
    }
}