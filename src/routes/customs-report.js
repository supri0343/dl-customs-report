module.exports = [
  {
    route: "/customs-report/customs-report-in",
    name: "customs-report-in",
    moduleId: "./modules/customs-report/customs-report-in/index",
    nav: true,
    title: "Laporan Pemasukan Barang per Dokumen Pabean",
    auth: true,
    settings: {
      group: "it-inventory",
      // permission: { "B1": 1, "BC":1, "C9": 1 },
      permission: { W1: 1 },
      iconClass: "fa fa-dashboard",
    },
  },
  {
    route: "/customs-report/customs-report-out",
    name: "customs-report-out",
    moduleId: "./modules/customs-report/customs-report-out/index",
    nav: true,
    title: "Laporan Pengeluaran Barang per Dokumen Pabean",
    auth: true,
    settings: {
      group: "it-inventory",
      // permission: { "B1": 1, "BC":1, "C9": 1 },
      permission: { W2: 1 },
      iconClass: "fa fa-dashboard",
    },
  },
  {
    route: "/customs-report/wip",
    name: "customs-report",
    moduleId: "./modules/customs-report/wip/index",
    nav: true,
    title: "Laporan Posisi Barang dalam Proses (Work In Process/WIP)",
    auth: true,
    settings: {
      group: "it-inventory",
      // permission: { "B1": 1, "BC":1, "C9": 1 },
      permission: { W3: 1 },
      iconClass: "fa fa-dashboard",
    },
  },
  {
    route: "/customs-report/fact-item-mutation-bb-central",
    name: "customs-report-item-mutation-bb-central",
    moduleId: "./modules/customs-report/fact-item-mutation-bb-central/index",
    nav: true,
    title: "Laporan Mutasi Bahan Baku & Bahan Penolong",
    auth: true,
    settings: {
      group: "it-inventory",
      // permission: { "B1": 1, "BC":1, "C9": 1 },
      permission: { W4: 1 },
      iconClass: "fa fa-dashboard",
    },
  },
  // {
  //     route: '/customs-report/fact-item-mutation-bb-unit',
  //     name: 'customs-report-item-mutation-bb-unit',
  //     moduleId: './modules/customs-report/fact-item-mutation-bb-unit/index',
  //     nav: true,
  //     title: 'Laporan Pertanggungjawaban Mutasi Bahan Baku Unit',
  //     auth: true,
  //     settings: {
  //         group: "customs-report",
  //         permission: { "B1": 1, "BC":1, "C9": 1 },
  //         iconClass: 'fa fa-dashboard'
  //     }

  // },
  // {
  //     route: '/customs-report/fact-item-mutation-bp-central',
  //     name: 'customs-report-item-mutation-bp-central',
  //     moduleId: './modules/customs-report/fact-item-mutation-bp-central/index',
  //     nav: true,
  //     title: 'Laporan Pertanggungjawaban Mutasi Bahan Baku Penolong Pusat',
  //     auth: true,
  //     settings: {
  //         group: "it-inventory",
  //         // permission: { "B1": 1, "BC":1, "C9": 1 },
  //         permission: { "W5": 1,},
  //         iconClass: 'fa fa-dashboard'
  //     }

  // },
  // {
  //     route: '/customs-report/fact-item-mutation-bp-unit',
  //     name: 'customs-report-item-mutation-bp-unit',
  //     moduleId: './modules/customs-report/fact-item-mutation-bp-unit/index',
  //     nav: true,
  //     title: 'Laporan Pertanggungjawaban Mutasi Bahan Penolong Unit',
  //     auth: true,
  //     settings: {
  //         group: "customs-report",
  //         permission: { "B1": 1, "BC":1, "C9": 1 },
  //         iconClass: 'fa fa-dashboard'
  //     }

  // },
  {
    route: "/customs-report/finished-good",
    name: "customs-report-finished-good",
    moduleId: "./modules/customs-report/finished-good/index",
    nav: true,
    title: "Laporan Mutasi Barang Jadi (Hasil Produksi)",
    auth: true,
    settings: {
      group: "it-inventory",
      // permission: { "B1": 1, "BC":1, "C9": 1 },
      permission: { W6: 1 },
      iconClass: "fa fa-dashboard",
    },
  },
  {
    route: "/customs-report/machine-mutation",
    name: "customs-report",
    moduleId: "./modules/customs-report/machine-mutation/index",
    nav: true,
    title: "Laporan Mutasi Barang Modal dan Barang Lain",
    auth: true,
    settings: {
      group: "it-inventory",
      // permission: { "B1": 1, "BC":1, "C9": 1 },
      permission: { W7: 1 },
      iconClass: "fa fa-dashboard",
    },
  },
  {
    route: "/customs-report/scrap",
    name: "customs-report-scrap",
    moduleId: "./modules/customs-report/scrap/index",
    nav: true,
    title:
      "Laporan Mutasi Barang yang Ditolak (Reject) dan Sisa Proses Produksi (Scrap/Waste)",
    auth: true,
    settings: {
      group: "it-inventory",
      // permission: { "B1": 1, "BC":1, "C9": 1 },
      permission: { W8: 1 },
      iconClass: "fa fa-dashboard",
    },
  },
  {
    route: "/customs-report/cctv",
    name: "customs-report-cctv",
    moduleId: "./modules/customs-report/cctv/index",
    nav: true,
    title: "CCTV",
    auth: true,
    settings: {
      group: "it-inventory",
      // permission: { "B1": 1, "BC":1, "C9": 1 },
      permission: { W9: 1 },
      iconClass: "fa fa-dashboard",
    },
  },
  {
    route: "/customs-report/log-histories",
    name: "customs-report-log-histories",
    moduleId: "./modules/customs-report/log-histories/index",
    nav: true,
    title: "Log History",
    auth: true,
    settings: {
      group: "it-inventory",
      // permission: { "B1": 1, "BC":1, "C9": 1 },
      permission: { W10: 1 },
      iconClass: "fa fa-dashboard",
    },
  },
];
