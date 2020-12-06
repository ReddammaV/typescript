import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dining } from '../core/model/dining';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  restaurantForm: FormGroup;
  submitted = false;
  allRestaurants: any;
  getRestaurants: Dining[];
  message = 'SAVE';
  restaurantIdToUpdate = null;
  data: any;
  dataemployee: any;

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.getAllRestaurants();
    this.setRestaurantForm();
  }

  setRestaurantForm() {
    this.restaurantForm = this.fb.group({
      restarentName: ['', Validators.compose([Validators.required])],
      restarentDescription: ['', Validators.compose([Validators.required])],
      areaLocation: ['', Validators.compose([Validators.required])],
      timings: ['', Validators.compose([Validators.required])],
      cuisines: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
    this.getAllRestaurants();
  }

  // convenience getter for easy access to form fields
  get f() { return this.restaurantForm.controls; }


  // getAll Restaurant
  getAllRestaurants() {
    this.apiService.getAllRestaurant().subscribe(
      (data) => {
        this.allRestaurants = data;
        this.getRestaurants = this.allRestaurants.data;
        console.log(this.getRestaurants);
      }
    )
  }

  // form Submit
  onSubmit() {
    this.submitted = true;
    if (this.restaurantForm.invalid) {
      return;
    } else {
      console.log("created");
      this.submitted = false;
      let employee = this.restaurantForm.value;
      this.createRestaurant(employee);
      this.restaurantForm.reset();
    }
  }

  // createEmployee
  createRestaurant(employee: Dining) {
    if (this.restaurantIdToUpdate == null) {
      this.apiService.createRestaurant(employee).subscribe(
        () => {
          this.submitted = true;
          this.message = "Record Saved Successfully";
          this.getAllRestaurants();
          this.restaurantIdToUpdate = null;
          this.resetForm();
        }
      )
    } else {
      employee.id = this.restaurantIdToUpdate;
      this.apiService.UpdateRestaurant(employee).subscribe(
        () => {
          this.submitted = true;
          this.message = "Record Updated Successfully";
          this.getAllRestaurants();
          this.restaurantIdToUpdate = null;
          this.resetForm();
        }
      )
    }
  }

  resetForm() {
    this.restaurantForm.reset();
    this.message = 'SAVE';
    this.submitted = false;
  }

  // editemployee
  editRestaurant(data) {
    this.apiService.getEmployeeById(data).subscribe(res => {
      this.data = res;
      this.dataemployee = this.data.data;
      console.log(this.data);
      this.message = "Update";
      this.submitted = false;
      this.restaurantIdToUpdate = this.dataemployee;
      this.restaurantForm.controls['restarentName'].setValue(this.dataemployee.restarentName);
      this.restaurantForm.controls['restarentDescription'].setValue(this.dataemployee.restarentDescription);
      this.restaurantForm.controls['areaLocation'].setValue(this.dataemployee.areaLocation);
      this.restaurantForm.controls['timings'].setValue(this.dataemployee.timings);
      this.restaurantForm.controls['cuisines'].setValue(this.dataemployee.cuisines);
      this.restaurantForm.controls['phoneNumber'].setValue(this.dataemployee.phoneNumber);
    })
  }

  deleteRestaurant(id) {
    this.apiService.deleteRestaurant(id).subscribe(
      (data) => {
        if (confirm("Are you sure to Delete")) {
          console.log("deleted");
          this.getAllRestaurants();
        }
      });
  }

}
