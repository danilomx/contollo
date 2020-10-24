import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-material-listar',
  templateUrl: './material-listar.component.html',
})
export class MaterialListarComponent implements OnInit {
  columns: string[] = ['nombre', 'descripcion', 'accion'];

  // public ELEMENT_DATA: any = [
  //   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  //   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  //   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  //   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  //   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  //   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  //   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  //   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  //   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  // ];

  listaMaterial: any = [];

  // public dataSource = this.ELEMENT_DATA;

  constructor(
    private _router: Router,
    public materialService: MaterialService
  ) {
    this.materialService.lista().subscribe((materialData) => {
      this.listaMaterial = materialData;
    });
  }

  nuevo() {
    this._router.navigateByUrl('/material/administrar/nuevo');
  }

  eliminar(event, material) {
    this.materialService.eliminar(material);
  }

  editar(event, material) {
    this._router.navigateByUrl(`/material/administrar/editar/${material.id}`);
    // this.materialService.eliminar(material);
  }

  ngOnInit(): void {}
}
