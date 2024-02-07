import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Label } from './label-model';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  private readonly entries = 'labels';

  private entriesCollection: AngularFirestoreCollection<Label> =
    this.afs.collection(this.entries);

  constructor(private afs: AngularFirestore) {}

  getLabels(): Observable<Label[]> {
    return this.entriesCollection.valueChanges();
  }

  addLabel(label: Label): Observable<void> {
    label.id = this.afs.createId();
    return from(this.entriesCollection.doc(label.id).set(label));
  }

  deleteLabel(label: Label): Observable<void> {
    return from(this.entriesCollection.doc(label.id).delete());
  }

  updateLabel(label: Label): Observable<void> {
    return from(this.entriesCollection.doc(label.id).set(label));
  }

  loadByLabel(name: String): Observable<Label[]> {
    return null;
  }

}
