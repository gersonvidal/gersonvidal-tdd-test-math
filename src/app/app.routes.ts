import { Routes } from '@angular/router';
import { MeanComponent } from './mean/mean.component';
import { StandardDeviationComponent } from './standard-deviation/standard-deviation.component';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';
import { SimpsonComponent } from './simpson/simpson.component';
import { CorrelationComponent } from './correlation/correlation.component';

export const routes: Routes = [
  { path: 'mean', component: MeanComponent },
  { path: 'standard-deviation',  component: StandardDeviationComponent },
  { path: 'correlation',  component: CorrelationComponent },
  { path: 'linear-regression',  component: LinearRegressionComponent },
  { path: 'simpson',  component: SimpsonComponent }  
];
