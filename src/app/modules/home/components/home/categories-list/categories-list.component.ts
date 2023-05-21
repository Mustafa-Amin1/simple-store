import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categories = []
  selectedCategoryForm !: FormGroup;

  @Output() onSelectCategoryChange = new EventEmitter<any>();
  @Output() filteredProductsByCategory = new EventEmitter<any>();

  constructor(
    private _http: HttpService,
    private fb: FormBuilder,
    private router: Router

  ) { }

  ngOnInit(): void {

    this.selectedCategoryForm = this.fb.group({
      selectedCategory: this.fb.array([]),
    });

    this.getCategoriesData()
  }

  getCategoriesData() {
    this._http.getReq('/products/categories').subscribe(res => {
      this.categories = res
    })
  }


  filterProductsByCategory(category: any) {
    this.router.navigate(['/home'], { queryParams: { category: category.replace(' ', '-').replace("'", '') }, queryParamsHandling: 'merge' })
    this._http.getReq(`/products/category/${category}`).subscribe(res => {
      this.filteredProductsByCategory.emit(res)
    })
  }

}
