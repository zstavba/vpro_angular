import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserAvatarComponent } from './dashboard/components/user-avatar/user-avatar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WarehouseService } from './Services/warehouse.service';
import { InboxService } from './Services/inbox.service';
import { UserService } from './Services/user.service';
import { MeasurementsService } from './Services/measurements.service';
import { WorkOrderService } from './Services/work-order.service';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ArticleService } from './Services/article.service';
import { Article } from './dashboard/Classes/article';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryService } from './Services/country.service';
import { Country } from './dashboard/Classes/country';
import { ProductionService } from './Services/production.service';
import { BankService } from './Services/bank.service';
import { MeasurementUnits } from './dashboard/Classes/measurement-units';
import { AlternativeCiphers } from './dashboard/Classes/alternative-ciphers';
import { CustomTarrifs } from './dashboard/Classes/custom-tarrifs';
import { Sectors } from './dashboard/Classes/sectors';
import { User } from './dashboard/Classes/user';
import { UserInformation } from './dashboard/Classes/user-information';
import { ZipCode } from './dashboard/Classes/zip-code';
import { Language } from './dashboard/Classes/language';
import { Classification } from './dashboard/Classes/classification';
import { ClassificationsService } from './Services/classifications.service';
import { WarehouseCategories } from './dashboard/Classes/warehouse-categories';
import { WarehouseUnits } from './dashboard/Classes/warehouse-units';
import { WarehouseLocation } from './dashboard/Classes/warehouse-location';
import { CostCities } from './dashboard/Classes/cost-cities';
import { OrganizationalUnits } from './dashboard/Classes/organizational-units';
import { Areas } from './dashboard/Classes/areas';
import { WorkCenter } from './dashboard/Classes/work-center';
import { UpnCodes } from './dashboard/Classes/upn-codes';
import { ControlPlan } from './dashboard/Classes/control-plan';
import { ArticleBasics } from './dashboard/Classes/article-basics';
import { GroupService } from './Services/group.service';
import { SearchPipe } from './Pipes/search.pipe';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { initFlowbite } from 'flowbite';
import { Currencies } from './dashboard/Classes/currencies';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet, 
    UserAvatarComponent, 
    HttpClientModule, 
    EditorModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    WarehouseService,
    InboxService,
    UserService,
    MeasurementsService,
    MeasurementUnits,
    WorkOrderService,
    ArticleService,
    Article,
    ArticleBasics,
    CountryService,
    Country,
    ProductionService,
    BankService,
    AlternativeCiphers,
    CustomTarrifs,
    CostCities,
    Sectors,
    User,
    UserInformation,
    ZipCode,
    Language,
    Classification,
    ClassificationsService,
    WarehouseCategories,
    WarehouseUnits,
    WarehouseLocation,
    OrganizationalUnits,
    Areas,
    WorkCenter,
    UpnCodes,
    ControlPlan,
    GroupService,
    SearchPipe,
    Currencies
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit {
  title = 'vpro';

  constructor(@Inject(PLATFORM_ID) private platformId: Object){}


  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      initFlowbite();
    }
  }
}
