import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { AccionEnum } from 'src/app/enums/accion.enum';

import Swal from 'sweetalert2';
import { MaterialService } from '../../services/material.service';
import { Material } from '../../models/material.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-material-administrar',
  templateUrl: './material-administrar.component.html',
  styleUrls: ['./material-administrar.component.css'],
})
export class MaterialAdministrarComponent implements OnInit {
  public formulario: FormGroup;
  private _identificador: string;
  accion: AccionEnum;
  public accionEnum = AccionEnum;
  titulo: string;
  obs: Observable<any>;

  constructor(
    private _form: FormBuilder,
    private _router: ActivatedRoute,
    private _routerLink: Router,
    public materialService: MaterialService // private _location: Location
  ) {
    this.formulario = this._form.group({
      nombre: [null, [Validators.required]],
      descripcion: [null],
      categoria_id: [null, [Validators.required]],
      unidad_medida_id: [null, [Validators.required]],
      proveedor: [null, [Validators.required]],
    });

    this._identificador = this._router.snapshot.params.id;
    this.accion =
      this._identificador !== undefined
        ? this.accionEnum.Editar
        : this.accionEnum.Nuevo;

    this.titulo = this.accion === this.accionEnum.Editar ? 'Editar' : 'Nuevo';
  }

  async ngOnInit() {
    if (this.accion === this.accionEnum.Editar) {
      await this.obtener();
    }
  }

  async obtener() {
    const resultado = this.materialService.obtener(this._identificador);
    this.obs = (
      await this.materialService.obtener(this._identificador)
    ).snapshotChanges();
    this.obs
      .pipe(map(({ payload }) => ({ ...payload.data(), id: payload.id })))
      .subscribe((res) => this.formulario.patchValue(res));
  }

  guardar() {
    if (this.formulario.invalid) {
      return;
    }

    if (this.accion === this.accionEnum.Editar) {
      this.actualizar();
    } else {
      this.insertar();
    }
  }

  insertar() {
    this.materialService.agregar(this.formulario.value);

    this.atras();
  }

  actualizar() {
    const FORMULARIO = this.formulario.value;

    FORMULARIO.id = this._identificador;
    this.materialService.actualizar(FORMULARIO);

    this.atras();
  }

  atras() {
    this._routerLink.navigateByUrl('/');
  }
}
