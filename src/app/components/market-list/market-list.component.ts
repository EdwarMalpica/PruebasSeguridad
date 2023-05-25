import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { ConexionService } from 'src/app/services/conexion.service';
@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.css'],
})
export class MarketListComponent implements AfterViewInit {
  myCarouselElement = document.querySelector('#myCarousel');
  @ViewChild('carouselAnalitycs', { static: false })
  myCarouselElementRef: ElementRef;

  products:any[];

  constructor(private _api:ConexionService){
    this.loadProducts();
  }

  ngAfterViewInit(): void {
    const carouse = new bootstrap.Carousel(
      this.myCarouselElementRef?.nativeElement,
      {
        interval: 2000,
        touch: false,
      }
    );
  }

  loadProducts(){
    try {
      this._api.getProducts().subscribe((res:any)=>{
        console.log(res);

        this.products = res;
      } )
    } catch (error) {
      console.log(error);

    }
  }
}
