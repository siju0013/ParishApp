import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activities-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './activities-form.html',
  styleUrl: './activities-form.scss'
})
export class ActivitiesForm {
  postForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.postForm = this.fb.group({
      file: [null, Validators.required],
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(150)]],
      postingDate: ['', Validators.required],
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.postForm.patchValue({ file });
    }
  }

  onSubmit() {
    if (this.postForm.valid) {
      console.log('Form Value:', this.postForm.value);
      // Handle form submission logic here
    }
  }
}
