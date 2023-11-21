import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToolsService } from '../services/tools.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrl: './emp-add-edit.component.scss'
})
export class EmpAddEditComponent {
  empForm: FormGroup;


  quality: string[] = [
    'Sharp',
    'Dull',
    'Scrap',
  ];
  sizes: string[] = [
    '28"',
    '32"',
    '36"',
    '42"',
    
  ];
  constructor(private _fb: FormBuilder, 
    private _empService: ToolsService, 
    private _dialogRef: DialogRef<EmpAddEditComponent>
    ) {
    this.empForm = this._fb.group({
      toolID: '',
      graphiteBlockID: '',
      toolQuality: '',
      toolSize: '',
      dateReceived: '',
    });
  }

  onFormSubmit(){
    if(this.empForm.valid){
      this._empService.addTool(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Tool added successfully');
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
  }
  
  }
 

