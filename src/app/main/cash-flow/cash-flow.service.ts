import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entry } from './entry/entry.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class CashFlowService {
  private entriesCollection: AngularFirestoreCollection<Entry> =
    this.afs.collection('entries');

  constructor(private afs: AngularFirestore) {}

  getEntries(): Observable<Entry[]> {
    return this.entriesCollection.valueChanges();
  }

  addEntries(entry: Entry) {
    this.entriesCollection.add(entry);
  }
}
