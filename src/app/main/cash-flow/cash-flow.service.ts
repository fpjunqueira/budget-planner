import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entry } from './entry/entry.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CashFlowService {
  entryForm = this.fb.group({
    id: [undefined],
    description: ['', [Validators.required]],
    type: ['', [Validators.required]],
    date: ['', [Validators.required]],
    labels: this.fb.array(['']),
    settled: [false, [Validators.required]],
    amount: [0, [Validators.required]],
  });

  private entriesCollection: AngularFirestoreCollection<Entry> =
    this.afs.collection('entries');

  constructor(private afs: AngularFirestore, private fb: FormBuilder) {}

  getEntries(): Observable<Entry[]> {
    return this.entriesCollection.valueChanges();
  }

  addEntries(entry: Entry) {
    this.entriesCollection.add(entry);
  }
}
