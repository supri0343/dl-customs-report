import { inject } from "aurelia-framework";
import { Service } from "./service";
import { Router } from "aurelia-router";
import moment from "moment";

@inject(Router, Service)
export class List {
  constructor(router, service) {
    this.service = service;
    this.router = router;
  }

  info = { page: 1, size: 50 };

  controlOptions = {
    label: {
      length: 4,
    },
    control: {
      length: 4,
    },
  };

  Types = ["", "BC 2.6.1", "BC 3.0", "BC 4.1", "BC 2.5", "BC 2.7","BC 3.3"];

  search() {
    this.error = {};

    if (
      (!this.dateTo || this.dateTo == "Invalid Date") &&
      (!this.no || this.no == "")
    ) {
      this.error.dateTo = "Tanggal Akhir harus diisi";
      this.error.no = "No Daftar harus diisi";
    }

    if (
      (!this.dateFrom || this.dateFrom == "Invalid Date") &&
      (!this.no || this.no == "")
    ) {
      this.error.dateFrom = "Tanggal Awal harus diisi";
      this.error.no = "No Daftar harus diisi";
    }

    if (Object.getOwnPropertyNames(this.error).length === 0) {
      this.flag = true;
      this.info.page = 1;
      this.info.total = 0;
      this.searching();
    }
  }

  searching() {
    var args = {
      page: this.info.page,
      size: this.info.size,
      type: this.type ? this.type : "",
      no: this.no ? this.no : "",
      dateFrom: this.dateFrom ? moment(this.dateFrom).format("YYYY-MM-DD") : "",
      dateTo: this.dateTo ? moment(this.dateTo).format("YYYY-MM-DD") : "",
    };
    this.service
      .search(args)

      .then((result) => {
        this.row = [];
        var rowDoc = [];
        this.info.total = result.info.total;
        var index = 0;
        for (var a of result.data) {
          var bc = a.BCType.toString();
          var doc = a.BCNo;
          var bcdate = a.BCDate.toString();
          if (!this.row[bc]) {
            this.row[bc] = 1;
          } else {
            this.row[bc]++;
          }

          if (!rowDoc[doc + bc + bcdate]) {
            index++;
            //a.=index;
            rowDoc[doc + bc + bcdate] = 1;
          } else {
            rowDoc[doc + bc + bcdate]++;
          }

          if (!rowDoc[bc + bcdate]) {
            index++;
            //a.=index;
            rowDoc[bc + bcdate] = 1;
          } else {
            rowDoc[bc + bcdate]++;
          }
        }
        for (var b of result.data) {
          let bcno = result.data.find(
            (o) => o.BCType + o.BCNo + o.BCDate == b.BCType + b.BCNo + b.BCDate
          );
          if (bcno) {
            bcno.docspan = rowDoc[b.BCNo + b.BCType + b.BCDate];
          }
          let bctipe = result.data.find((o) => o.BCType == b.BCType);
          if (bctipe) {
            bctipe.rowspan = this.row[b.BCType];
          }
          let bcdates = result.data.find(
            (o) => o.BCType + o.BCDate == b.BCType + b.BCDate
          );
          //console.log(bcdates)
          if (bcdates) {
            bcdates.bcdatespan = rowDoc[b.BCType + b.BCDate];
          }
        }
        this.data = result.data;
      });
  }

  changePage(e) {
    var page = e.detail;
    this.info.page = page;
    this.searching();
  }
  reset() {
    this.type = "";
    this.dateFrom = "";
    this.dateTo = "";
    this.no = "";
    this.info.page = 1;
  }

  ExportToExcel() {
    this.error = {};

    if (
      (!this.dateTo || this.dateTo == "Invalid Date") &&
      (!this.no || this.no == "")
    ) {
      this.error.dateTo = "Tanggal Akhir harus diisi";
      this.error.no = "No Daftar harus diisi";
    }

    if (
      (!this.dateFrom || this.dateFrom == "Invalid Date") &&
      (!this.no || this.no == "")
    ) {
      this.error.dateFrom = "Tanggal Awal harus diisi";
      this.error.no = "No Daftar harus diisi";
    }

    if (Object.getOwnPropertyNames(this.error).length === 0) {
      var info = {
        type: this.type ? this.type : "",
        no: this.no ? this.no : "",
        dateFrom: this.dateFrom
          ? moment(this.dateFrom).format("YYYY-MM-DD")
          : "",
        dateTo: this.dateTo ? moment(this.dateTo).format("YYYY-MM-DD") : "",
      };
      this.service.generateExcel(info);
    }
  }
}
