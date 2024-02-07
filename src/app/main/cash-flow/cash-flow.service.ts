import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Entry } from './entry/entry.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class CashFlowService {
  private readonly entries = 'entries';

  private entriesCollection: AngularFirestoreCollection<Entry> =
    this.afs.collection(this.entries);

  constructor(private afs: AngularFirestore) {}

  getEntries(): Observable<Entry[]> {
    return this.entriesCollection.valueChanges();
  }

  addEntry(entry: Entry): Observable<void> {
    entry.id = this.afs.createId();
    return from(this.entriesCollection.doc(entry.id).set(entry));
  }

  deleteEntry(entry: Entry): Observable<void> {
    return from(this.entriesCollection.doc(entry.id).delete());
  }

  updateEntry(entry: Entry): Observable<void> {
    return from(this.entriesCollection.doc(entry.id).set(entry));
  }

  // TODO
  // loadByMonth(name: String): Observable<Entry[]> {
  //   return
  // }

}
