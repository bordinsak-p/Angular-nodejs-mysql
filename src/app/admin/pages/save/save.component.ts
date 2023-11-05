import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { TABLE_SEARCH } from '../../constants/table-option';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {
  saveForm!: FormGroup;
  imagePreview!: any;
  file: any;


  dataWithoutImage!: any

  products: any[] = [];

  constructor(
    private fb: FormBuilder,
    private service: AdminService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.inintForm();
    this.getQueryTable();
  }

  ngOnInit(): void {
    this.onDisable()
  }

  getQueryTable() {
    const id = this.service.productId$.value

    this.service.getProductsForPrm(id).subscribe((res: any) => {
      this.imagePreview = this.service.getProductImage(res['image'])
      
      this.dataWithoutImage = {
        id: res.id,
        name: res.name,
        stock: res.stock,
        price: res.price,
        createdAt: res.createdAt,
        updatedAt: res.updatedAt,
      };

      // patch ค่าที่ไม่รวมรูปภาพ
      this.saveForm.patchValue(this.dataWithoutImage);
    });
  }

  inintForm() {
    this.saveForm = this.fb.group({
      name: [null],
      stock: [null],
      price: [null],
      image: [null],
      updatedAt: [null],
      createdAt: [null],
    });
  }

  onDisable() {
    this.saveForm.get('updatedAt')?.disable()
    this.saveForm.get('createdAt')?.disable()
  }

  getFile(fileEvent: any) {
    this.file = fileEvent;
  }


  onSave() {

  }


}
