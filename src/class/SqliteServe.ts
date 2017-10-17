import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Http } from '@angular/http';

export class SqliteServe {
  
  constructor(public http: Http, private sqlite: SQLite) { 
    console.log('Hello SqlStorage Provider');
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {

        db.executeSql('create table danceMoves(name VARCHAR(32))', {})
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));


      })
      .catch(e => console.log(e));
    }
}