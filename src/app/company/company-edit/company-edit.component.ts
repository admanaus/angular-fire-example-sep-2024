import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Company} from "../../models/company";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrl: './company-edit.component.css'
})
export class CompanyEditComponent implements OnInit {

  company$: Observable<Company>;

  constructor(private companyService: CompanyService) {
    this.company$ = this.companyService.getCompanyObservable();
  }

  ngOnInit() {}

  saveCompany(company: any) {
    this.companyService.saveCompany(company);
  }

  editCompany(company: any) {
    this.companyService.editCompany({phone: '123-456-7890'});
  }

  deleteCompany() {
    this.companyService.deleteCompany();
  }

}
