export class Index {
  configureRouter(config, router) {
    config.map([
      {
        route: ["", "list"],
        moduleId: "./list",
        name: "list",
        nav: true,
        title:
          "List: Laporan Mutasi Barang yang Ditolak (Reject) dan Sisa Proses Produksi (Scrap/Waste)",
      },
    ]);
    this.router = router;
  }
}
