import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers : [ListService]
})
export class ListComponent implements OnInit {
ListArray: any[];
lists : string[];

 ngOnInit() {
 	this.listService.getList()
 	  .subscribe( item=> {
 	    this.ListArray = [];
 	     item.forEach(element => {
 	       var x = element.payload.toJSON();
 	        x["$key"] = element.key;
 	         this.ListArray.push(x);
 			})

 			//sort array isChecked false ->true
 			this.ListArray.sort((a,b) => {
 			return a.isChecked - b.isChecked;
 			})
 		});
  }

  constructor( private listService: ListService) 
  	{
  		this.lists = ['Go to Gym', 'Make Drawing', 'Learn Angular', 'Read Novel'];
  	} 

AddList(list)
{
	this.listService.addTitle(list.value);
	list.value = null;
}

alterCheck($key: string,isChecked)
{
	this.listService.checkOrUncheckTitle($key,!isChecked);
}

onDelete($key : string)
{
	this.listService.removeTitle($key);
}
}
