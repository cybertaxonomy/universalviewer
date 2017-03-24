import {MetricType} from "./MetricType";

export class Metric {

    constructor(public type: MetricType, public minWidth: number, public maxWidth: number) {

    }
}