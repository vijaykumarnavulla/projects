import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm:FormGroup;
constructor(private fb:FormBuilder){
    this.profileForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',[Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-Z]*')]],
      address:this.fb.group({
        street:[''],
        city:[''],
        state:[''],
        zip:['']
      }),
      comp:this.fb.array([])
    });
    
      this.addNewCompany();  }



get formData () { return this.profileForm.get('comp') }


addNewCompany() {
  let control = <FormArray>this.profileForm.controls.comp;
  let obj = [{"name":"vkn"},{"state":"value"}];
  
  let arr = [];

  for(let i = 0 ; i < 3 ; i++){
    let obj = {};
    obj['company'] = i;
    obj['tempar'] = i;
    arr.push(obj);
  }

  for(let i = 0 ; i < arr.length ; i++){
    control.push(
      this.fb.group({
        company: [arr[i].company,Validators.required],
        tempar:[arr[i].tempar,[Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-Z]*')]]
      })
    );
  }
 



  // control.push(
  //   this.fb.group({
  //     company: ['123'],
  //     tempar:['',Validators.required]
  //   })
  // );
}

addNewProject(control){
  control.push(
    this.fb.group({
      company: ['arr[i].company',Validators.required],
      tempar:['arr[i].tempar',[Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-Z]*')]]
    })
  );
  this.profileForm.setControl('comp',this.fb.array(control || []));
}


deleteProject(control,index){
  control.removeAt(index);
}

get aliases() {
  return this.profileForm.get('aliases');
}

updateProfile() {

 let ctrl:any =  this.profileForm.controls['comp']
  ctrl.controls[0].patchValue({
    company: 'sadfas',
    tempar:'asfa'
  });

  // let control = this.profileForm.controls.comp;

  // // control.patchValue({})
  // control[0].patchValue({
  //   company: 'sadfas',
  //   tempar:'asfa'
  // });
}

addAlias() {
  // this.aliases.push(this.fb.control(''));
}

onSubmit(){
  console.warn(this.profileForm.value);
}

onGetReferecControl(index,name,error=null):any{
 let controls:any= this.profileForm.controls.comp;
return controls.controls[index].controls[name][error];
}

reset(){
  this.profileForm.markAsPristine();
this.profileForm.markAsUntouched();
}

}
