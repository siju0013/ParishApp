import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-parish-members-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './parish-members-form.html',
  styleUrls: ['./parish-members-form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParishMembersForm implements OnInit {
  activeTab: 'general' | 'birth' | 'communion' | 'confirmation' | 'org' = 'general';

  form: FormGroup;

  organizations = [
    { id: 'youth', name: 'Youth Group' },
    { id: 'choir', name: 'Choir' },
    { id: 'ccm', name: 'Charity Committee' },
  ];

  posts = [
    { id: 'member', name: 'Member' },
    { id: 'secretary', name: 'Secretary' },
    { id: 'president', name: 'President' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      general: this.fb.group({
        firstName: ['', [Validators.required, Validators.maxLength(50)]],
        middleName: ['', Validators.maxLength(50)],
        lastName: ['', [Validators.required, Validators.maxLength(50)]],
        houseName: ['', Validators.maxLength(100)],
        dateOfBirth: ['', Validators.required],
        unit: ['', Validators.maxLength(50)],
        occupation: ['', Validators.maxLength(100)],
      }),
      birth: this.fb.group({
        birthPlace: ['', Validators.maxLength(150)],
        baptismDate: [''],
        godFatherName: ['', Validators.maxLength(100)],
        godMotherName: ['', Validators.maxLength(100)],
        baptismParish: ['', Validators.maxLength(150)],
        priestName: ['', Validators.maxLength(100)],
      }),
      communion: this.fb.group({
        communionDate: [''],
        communionParish: ['', Validators.maxLength(150)],
        communionPlace: ['', Validators.maxLength(150)],
        communionHasGodParent: [false],
        communionGodParentName: ['', Validators.maxLength(100)],
        communionPriestIncharge: ['', Validators.maxLength(100)],
      }),
      confirmation: this.fb.group({
        confirmationDate: [''],
        confirmationParish: ['', Validators.maxLength(150)],
        confirmationPlace: ['', Validators.maxLength(150)],
        confirmationHasGodParent: [false],
        confirmationGodParentName: ['', Validators.maxLength(100)],
        confirmationBishopOrPriest: ['', Validators.maxLength(100)],
      }),
      organizationPosts: this.fb.array([
        this.createOrgPostRow()
      ])
    });
  }

  ngOnInit(): void {
   
  }

  // convenience getters
  get general() { return this.form.get('general') as FormGroup; }
  get birth() { return this.form.get('birth') as FormGroup; }
  get communion() { return this.form.get('communion') as FormGroup; }
  get confirmation() { return this.form.get('confirmation') as FormGroup; }
  get organizationPosts() { return this.form.get('organizationPosts') as FormArray; }

  createOrgPostRow(): FormGroup {
    return this.fb.group({
      organization: ['', Validators.required],
      post: ['', Validators.required],
      fromDate: [''],
      toDate: ['']
    });
  }

  addOrgRow() {
    this.organizationPosts.push(this.createOrgPostRow());
  }

  removeOrgRow(index: number) {
    if (this.organizationPosts.length > 1) {
      this.organizationPosts.removeAt(index);
    }
  }

  // Tab navigation
  setTab(tab: 'general' | 'birth' | 'communion' | 'confirmation' | 'org') {
    this.activeTab = tab;
  }

  // Per-tab submit handlers
  onSubmitGeneral() {
    if (this.general.valid) {
      console.log('General submitted', this.general.value);
    } else {
      this.markControlAndChildrenTouched(this.general);
    }
  }

  onSubmitBirth() {
    if (this.birth.valid) {
      console.log('Birth submitted', this.birth.value);
    } else {
      this.markControlAndChildrenTouched(this.birth);
    }
  }

  onSubmitCommunion() {
    if (this.communion.valid) {
      console.log('Communion submitted', this.communion.value);
    } else {
      this.markControlAndChildrenTouched(this.communion);
    }
  }

  onSubmitConfirmation() {
    if (this.confirmation.valid) {
      console.log('Confirmation submitted', this.confirmation.value);
    } else {
      this.markControlAndChildrenTouched(this.confirmation);
    }
  }

  onSubmitOrganization() {
    if (this.organizationPosts.valid) {
      console.log('Organization Posts submitted', this.organizationPosts.value);
    } else {
      this.markControlAndChildrenTouched(this.organizationPosts);
    }
  }

  // Unified recursive helper that accepts AbstractControl and handles FormGroup / FormArray / FormControl
  private markControlAndChildrenTouched(control: AbstractControl): void {
    control.markAsTouched();

    // If control is a FormGroup -> iterate its controls
    if (control instanceof FormGroup) {
      const group = control as FormGroup;
      Object.values(group.controls).forEach(child => this.markControlAndChildrenTouched(child));
      return;
    }

    // If control is a FormArray -> iterate its controls
    if (control instanceof FormArray) {
      const arr = control as FormArray;
      arr.controls.forEach((child: any) => this.markControlAndChildrenTouched(child));
      return;
    }

    // If it's a FormControl, we've already marked it touched above.
  }

  submitAll() {
    if (this.form.valid) {
      console.log('Full form:', this.form.value);
    } else {
      // mark all sections
      this.markControlAndChildrenTouched(this.general);
      this.markControlAndChildrenTouched(this.birth);
      this.markControlAndChildrenTouched(this.communion);
      this.markControlAndChildrenTouched(this.confirmation);
      this.markControlAndChildrenTouched(this.organizationPosts);

      // navigate to first invalid tab
      if (this.general.invalid) this.activeTab = 'general';
      else if (this.birth.invalid) this.activeTab = 'birth';
      else if (this.communion.invalid) this.activeTab = 'communion';
      else if (this.confirmation.invalid) this.activeTab = 'confirmation';
      else if (this.organizationPosts.invalid) this.activeTab = 'org';
    }
  }
}
