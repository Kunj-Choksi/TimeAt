import { Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';
import { formatDate } from "@angular/common";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    @ViewChild('indiaTime') indiaTime: ElementRef;
    @ViewChild('canadaTime') canadaTime: ElementRef;
    @ViewChild('stLouisTime') stLouisTime: ElementRef;
    time = new Date();
    constructor(private zone: NgZone, private renderer: Renderer2) {
        this.zone.runOutsideAngular(() => {
            setInterval(() => {
                let indiaDateTime = formatDate(new Date(), 'dd MMM, yyyy hh:mm:ss a', "en-US", "+530");
                this.renderer.setProperty(this.indiaTime.nativeElement, "textContent", indiaDateTime);

                let CanadaDateTime = formatDate(new Date(), 'dd MMM, yyyy hh:mm:ss a', "en-US", "GMT-4");
                this.renderer.setProperty(this.canadaTime.nativeElement, "textContent", CanadaDateTime);

                let stLouisDateTime = formatDate(new Date(), 'dd MMM, yyyy hh:mm:ss a', "en-US", "GMT-5");
                this.renderer.setProperty(this.stLouisTime.nativeElement, "textContent", stLouisDateTime);
            }, 1000)
        })
    }
}

