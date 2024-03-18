export class Index {
  configureRouter(config, router) {
    config.map([
      {
        route: ["", "list"],
        moduleId: "./list",
        name: "list",
        nav: true,
        title: "List: Laporan Posisi Barang dalam Proses (Work In Process/WIP)",
      },
    ]);
    this.router = router;
  }
}
