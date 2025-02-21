import { Component } from '@angular/core';
import { OperationService } from './services/operation.service';
import { map, filter, reduce, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private operationService: OperationService) {}

  ngOnInit(): void {
    this.operationService.getData().subscribe((data) => {
      const obsData = from(data);

      // Double emitted values
      obsData
        .pipe(map((num) => num * 2))
        .subscribe((doubleVal) => console.log('Double:', doubleVal));

      // Filter emitted values
      obsData
        .pipe(filter((num) => num % 2 === 0))
        .subscribe((evenVal) => console.log('Even:', evenVal));

      // Sum of all value
      const sum = obsData.pipe(reduce((acc, val) => acc + val, 0));
      sum.subscribe((total) => {
        console.log('Sum of all values:', total);
      });
    });
  }
}
