import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

export class Item {
    body: string;
}

@Injectable()
export class ItemService {
    items: FirebaseListObservable<Item[]> = null; 
    userId: string;

    constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
        this.afAuth.authState.subscribe(user => {
            if(user) this.userId = user.uid
        })
    }

    getItemslist(): FirebaseListObservable<Item[]> {
        if (!this.userId) return;
        this.items = this.db.list('items/${this.userId}');
        return this.items
    }
}