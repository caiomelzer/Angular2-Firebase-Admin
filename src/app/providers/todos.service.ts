import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs';

import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class Todos {
  exercises: FirebaseListObservable<any[]>;
  exercise: FirebaseObjectObservable<any>;
  constructor(public af: AngularFire) {
    this.exercises = this.af.database.list('/exercises');
  }

  public read(key) {
    this.exercise = this.af.database.object('/exercises/'+key);
    this.exercise.subscribe(item => {return item});
    return this.exercise;
  }

  public delete(exercise: any) {
    return this.exercises.remove(exercise.$key).then(() => {});
  }

  public create(exercise: any){
    this.exercises.push(exercise);
  }

}
