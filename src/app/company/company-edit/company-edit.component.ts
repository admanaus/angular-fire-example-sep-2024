import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {Company} from "../../models/company";
import {CompanyService} from "../company.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrl: './company-edit.component.css'
})
export class CompanyEditComponent implements OnInit {

  company$: Observable<Company | undefined>;

  constructor(
    private companyService: CompanyService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      if (!this.isNew) {
        this.company$ = companyService.getCompanyObservable(this.id);
      } else {
        this.company$ = of({}) as Observable<Company>;
      }
  }

  get id(): string | null {
    return this.activatedRoute.snapshot.paramMap.get('id');
  }

  get isNew(): boolean {
    return this.id === 'new';
  }

  ngOnInit() {}

  saveCompany(company: any) {
    this.companyService.saveCompany(company)
      .then(_ => this.router.navigate(['/company/all']));
  }

  editCompany(company: any) {
    this.companyService.editCompany({
      name: 'Company Name',
      phone: '123-456-7890'
    })
      .then(_ => this.router.navigate(['/company/all']));
  }

  deleteCompany() {
    this.companyService.deleteCompany(this.id as string)
      .then(_ => this.router.navigate(['/company/all']));
  }

}
