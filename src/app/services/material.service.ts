import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Material } from '../models/material.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  materialCollection: AngularFirestoreCollection<Material>;
  material: Observable<Material[]>;
  materialDoc: AngularFirestoreDocument<Material>;

  constructor(public db: AngularFirestore) {
    // this.material = this.db.collection('material').valueChanges();
    this.materialCollection = this.db.collection('material');
    this.material = this.materialCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data() as Material;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  lista() {
    return this.material;
  }

  agregar(material: Material) {
    this.materialCollection.add(material);
  }

  async obtener(id: string) {
    const resultado = this.materialCollection.doc(id);
    return resultado;
  }

  eliminar(material: Material) {
    this.materialDoc = this.db.doc(`material/${material.id}`);
    this.materialDoc.delete();
  }

  actualizar(material: Material) {
    this.materialDoc = this.db.doc(`material/${material.id}`);
    this.materialDoc.update(material);
  }
}
