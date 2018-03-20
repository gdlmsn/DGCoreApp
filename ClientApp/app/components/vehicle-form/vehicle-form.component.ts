import { VehicleService } from '../../services/vehicle.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ErrorStateMatcherCoreModule } from '../../error-state-matcher-core/error-state-matcher-core.module';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})

export class VehicleFormComponent implements OnInit {
    makes: any[];
    models: any[];
    features: any[];
    vehicle: any = {
        features: [],
        contact: {}
    };

    //vForm: FormGroup;
    //makeId: string = '';
    //modelId: string = '';
    //featureId: string = '';
    //contactName: string = '';
    //contactPhone: number;
    //contactEmail: string = '';

    constructor(private vehicleService: VehicleService) {
       
    }

    ngOnInit() {
    
      this.vehicleService.getMakes().subscribe(makes =>
          this.makes = makes);

     this.vehicleService.getFeatures().subscribe(features =>
         this.features = features);
  }

  onMakeChange() {
      var selectedMake = this.makes.find(m => m.id == this.vehicle.makeId);
      this.models = selectedMake ? selectedMake.models : [];
      delete this.vehicle.modelId
    }

    onFeatureToggle(featureId, $event) {
        if ($event.target.checked)
            this.vehicle.features.push(featureId);
        else {
            var index = this.vehicle.features.indexOf(featureId);
            this.vehicle.features.splice(index, 1);
        }
    }


    submit() {
        this.vehicleService.create(this.vehicle)
            .subscribe(
            x => console.log(x));
        
    
    }

}
