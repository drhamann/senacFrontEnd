import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-edit',
  template: `
    <p>
      users-edit works!
    </p>
  `,
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  @Input() id: string
  constructor() {
    this.id = '';
  }

  ngOnInit(): void {
  }

}
