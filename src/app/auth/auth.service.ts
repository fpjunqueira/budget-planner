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
  private readonly users = 'users';

  private userCollection: AngularFirestoreCollection<User> =
    this.afs.collection(this.users);

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {}

  register(user: User): Observable<void> {
    return from(
      this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
    ).pipe(
      switchMap((u: firebase.auth.UserCredential) =>
        this.userCollection.doc(u.user.uid).set({
          id: u.user.uid,
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
          phone: user.phone,
        })
      ),
      catchError((error) => throwError(() => new Error(error.message)))
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

  loginWithGoogle(): Observable<User> {
    return from(this.loginWithGoogleAccount());
  }

  async loginWithGoogleAccount(): Promise<User> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credentials: firebase.auth.UserCredential =
        await this.afAuth.signInWithPopup(provider);
      const user: User = await this.updateUserData(credentials);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateUserData(user: firebase.auth.UserCredential): Promise<User> {
    try {
      const newUser: User = {
        id: user.user.uid,
        email: user.user.email,
        firstname: user.user.displayName,
        lastname: '',
        phone: '',
      };
      await this.userCollection.doc(user.user.uid).set(newUser);
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  }
}
