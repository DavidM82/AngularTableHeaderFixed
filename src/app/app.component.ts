import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FixedTable';
  columnDefs = [
      {headerName: 'Id', field: "id"},
      {headerName: 'Name', field: "name"},
      {headerName: "email", field: "email"}
  ];

  rowData = [
    {id: 1, name: "David", email: "david@david.com"},
    {id: 2, name: "Edward", email: "ed@edd.eddy"},
    {id: 3, name: "Francis", email: "Rand@cis.fr"}
  ]
}
