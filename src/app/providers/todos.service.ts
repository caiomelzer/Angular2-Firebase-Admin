import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class Todos {
  exercises: FirebaseListObservable<any[]>;
  constructor(public af: AngularFire) {
    
  }

  public read(offset) {
    this.exercises = this.af.database.list('/exercises', {
      query: {
          orderByKey: true,
          limitToFirst: offset+1
        }
      }
    );
    return this.exercises;
  }

  public delete(exercise: any) {
    return this.exercises.remove(exercise.$key).then(() => {});
  }

}
