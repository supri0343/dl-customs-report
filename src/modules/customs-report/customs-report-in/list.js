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

  Types = ["", "BC 2.6.2", "BC 2.3", "BC 4.0", "BC 2.7"];

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
        this.rowCount = [];
        var rowDoc = [];
        this.info.total = result.info.total;

        console.log(this.info);
        var index = 0;
        for (var a of result.data) {
          var bc = a.BCType.toString();
          var doc = a.BCNo.toString();
          var bonNo = a.BonNo.toString();
          if (!this.rowCount[bc]) {
            this.rowCount[bc] = 1;
          } else {
            this.rowCount[bc]++;
          }

          if (!rowDoc[doc + bc + bonNo]) {
            index++;
            //a.count=index;
            rowDoc[doc + bc + bonNo] = 1;
          } else {
            rowDoc[doc + bc + bonNo]++;
          }
        }
        for (var b of result.data) {
          let bcno = result.data.find(
            (o) => o.BCType + o.BCNo + o.BonNo == b.BCType + b.BCNo + b.BonNo
          );
          if (bcno) {
            bcno.docspan = rowDoc[b.BCNo + b.BCType + b.BonNo];
          }
          let bctipe = result.data.find((o) => o.BCType == b.BCType);
          if (bctipe) {
            bctipe.rowspan = this.rowCount[b.BCType];
          }
        }
        this.data = result.data;
        console.log(this.data);
      });
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

  changePage(e) {
    var page = e.detail;
    console.log(page);
    this.info.page = page;
    this.searching();
  }
  reset() {
    this.type = "";
    this.dateFrom = "";
    this.dateTo = "";

    this.info.page = 1;
  }
}
