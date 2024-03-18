import { inject, bindable } from "aurelia-framework";
import { Service } from "./service";
import { Router } from "aurelia-router";
import moment from "moment";

@inject(Router, Service)
export class List {
  constructor(router, service) {
    this.service = service;
    this.router = router;
  }

  jnsbhn = " ";
  @bindable JenisBhn;

  ItemType = ["BAHAN BAKU", "BAHAN PENOLONG"];

  info = { page: 1, size: 50 };

  controlOptions = {
    label: {
      length: 4,
    },
    control: {
      length: 4,
    },
  };

  JenisBhnChanged(newvalue) {
    if (newvalue) {
      if (newvalue === "BAHAN BAKU") {
        this.jnsbhn = "BB";
      } else {
        this.jnsbhn = "BP";
      }
    }
  }

  search() {
    this.error = {};

    if (!this.dateTo || this.dateTo == "Invalid Date")
      this.error.dateTo = "Tanggal Akhir harus diisi";

    if (!this.dateFrom || this.dateFrom == "Invalid Date")
      this.error.dateFrom = "Tanggal Awal harus diisi";

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
      dateFrom: this.dateFrom ? moment(this.dateFrom).format("YYYY-MM-DD") : "",
      dateTo: this.dateTo ? moment(this.dateTo).format("YYYY-MM-DD") : "",
    };
    if (this.jnsbhn === "BB") {
      this.service.search(args).then((result) => {
        this.info.total = result.info.total;
        this.data = result.data;
      });
    } else {
      this.service.search1(args).then((result) => {
        this.info.total = result.info.total;
        this.data = result.data;
      });
    }
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
    this.data = [];
    this.info.page = 0;
  }

  ExportToExcel() {
    this.error = {};

    if (!this.dateTo || this.dateTo == "Invalid Date")
      this.error.dateTo = "Tanggal Akhir harus diisi";

    if (!this.dateFrom || this.dateFrom == "Invalid Date")
      this.error.dateFrom = "Tanggal Awal harus diisi";

    if (Object.getOwnPropertyNames(this.error).length === 0) {
      var info = {
        dateFrom: this.dateFrom
          ? moment(this.dateFrom).format("YYYY-MM-DD")
          : "",
        dateTo: this.dateTo ? moment(this.dateTo).format("YYYY-MM-DD") : "",
      };

      if (this.jnsbhn === "BB") {
        this.service.generateExcel(info);
      } else {
        this.service.generateExcel1(info);
      }
    }
  }
}
