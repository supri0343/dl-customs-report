import { inject, Lazy } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { RestService } from '../../../utils/rest-service';

// const serviceUri = 'customs-reports/wip';
const serviceUri = 'wip';

export class Service extends RestService {
    constructor(http, aggregator, config, endpoint) {
        // super(http, aggregator, config, "customs-report");
        super(http, aggregator, config, "it-inventory");
    }

    search(info) {
        let endpoint = `${serviceUri}`;
        console.log(info)
        return super.list(endpoint, info);
    }

    generateExcel(info) {
        console.log(info);
        let endpoint = `${serviceUri}/download?date=${info.date}`;
        return super.getXls(endpoint);
    }
}