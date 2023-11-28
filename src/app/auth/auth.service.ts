import { Injectable } from '@angular/core';
import {
  Observable,
  catchError,
  from,
  map,
  of,
  switchMap,
  throwError,
} from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userCollection: AngularFirestoreCollection<User> =
    this.afs.collection('users');

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {}

  register(user: User): Observable<void> {
    return from(
      this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
    ).pipe(
      switchMap((u: firebase.auth.UserCredential) =>
        this.userCollection.doc(u.user.uid).set({ ...user, id: u.user.uid })
      ),
      catchError((error) =>
        throwError(() => new Error('Error on adding user', error))
      )
    );
  }

  login(email: string, password: string): Observable<User> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password)).pipe(
      switchMap((u: firebase.auth.UserCredential) =>
        this.userCollection.doc<User>(u.user.uid).valueChanges()
      ),
      catchError((error) =>
        throwError(() => new Error('Invalid credentials', error))
      )
    );
  }

  logout() {
    this.afAuth.signOut();
  }

  getUser(): Observable<User> {
    return this.afAuth.authState.pipe(
      switchMap((user) =>
        user ? this.userCollection.doc<User>(user.uid).valueChanges() : of(null)
      )
    );
  }

  authenticated(): Observable<boolean> {
    return this.afAuth.authState.pipe(map((user) => (user ? true : false)));
  }
}
