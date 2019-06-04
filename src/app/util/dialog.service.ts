import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../shared/components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }
  
  openDialog(title: string, description: string, type: string) {
    
    let icon = (type == 'danger') ? 'error' : 'info'
    let color = (type == 'danger') ? 'warn' : 'primary'
    
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { title: title, description: description, type: type, icon: icon, color: color }
  });
  
}
}