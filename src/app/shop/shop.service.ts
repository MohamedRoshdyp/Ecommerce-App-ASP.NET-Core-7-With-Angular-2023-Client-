import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pipe } from 'rxjs';
import { ICategory } from '../shared/Models/Category';
import { IPagniation } from '../shared/Models/Pagniation';
import { IProducts } from '../shared/Models/Products';
import { ShopParams } from '../shared/Models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseURl = "https://localhost:44386/api/";

  constructor(private http: HttpClient) { }

  getProduct(shopParams: ShopParams) {
    let params = new HttpParams();
    if (shopParams.categoryId !== 0) {
      params = params.append('categoryId', shopParams.categoryId.toString());
    }
    if (shopParams.search) {
      params = params.append('search', shopParams.search);
    }
    params = params.append('sort', shopParams.sort);

    params = params.append('pageNumber', shopParams.pageNumber.toString());
    params = params.append('pageSize', shopParams.pageSize.toString());
    return this.http.get<IPagniation>(this.baseURl + 'Products/get-all-products', { observe: 'response', params })
      .pipe(
        map(response => {
          return response.body;
        })
      )
  }
  getCategory() {
    return this.http.get<ICategory[]>(this.baseURl + 'Categories/get-all-categories')
  }
  getProdut(id: number) {
    return this.http.get<IProducts>(this.baseURl + 'Products/get-product-by-id/' + id);
  }
}
