/**
 * Created by Acring on 2017/10/17.
 */

import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
@Component({
    selector: 'app-error-page',
    templateUrl: 'error-page.component.html',
    styleUrls: []
})

export class ErrorPageComponent implements OnInit{
    constructor(private route: ActivatedRoute){

    }
    errorMessage = '未知错误';
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            console.log(params);
            if (this.route.snapshot.queryParams['error']) {
                this.errorMessage = this.route.snapshot.queryParams['errorMessage'];
            }
        });
    }
}
