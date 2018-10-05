import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ListService {
	List : AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

getList():Observable<any>
{
	this.List = this.firebasedb.list('titles');
	return this.List;	
}
  addTitle(title: string)
  {
  		this.List.push({
  		title: title,
  		isChecked: false
  		});
  }

  checkOrUncheckTitle($key: string, flag: boolean)
  {
  	this.List.update($key, { isChecked: flag });
  }

  removeTitle($key: string)
  {
  	this.List.remove($key);
  }
}
