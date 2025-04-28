import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users: Person[] = [{
    "givenName": "Jaymee",
    "surName": "Matusovsky",
    "email": "jmatusovsky0@nhs.uk",
    "age": 1,
    "address": "8th Floor"
  }, {
    "givenName": "El",
    "surName": "Agostini",
    "email": "eagostini1@yolasite.com",
    "age": 2,
    "address": "9th Floor"
  }, {
    "givenName": "Orland",
    "surName": "Pippin",
    "email": "opippin2@hibu.com",
    "age": 3,
    "address": "Suite 20"
  }, {
    "givenName": "Otto",
    "surName": "Lebbern",
    "email": "olebbern3@prweb.com",
    "age": 4,
    "address": "1st Floor"
  }, {
    "givenName": "Eudora",
    "surName": "Heartfield",
    "email": "eheartfield4@auda.org.au",
    "age": 5,
    "address": "Apt 1634"
  }, {
    "givenName": "Mareah",
    "surName": "Langelay",
    "email": "mlangelay5@wired.com",
    "age": 6,
    "address": "Apt 1786"
  }, {
    "givenName": "Dallon",
    "surName": "Wikey",
    "email": "dwikey6@fotki.com",
    "age": 7,
    "address": "13th Floor"
  }, {
    "givenName": "Darbie",
    "surName": "Killingworth",
    "email": "dkillingworth7@usnews.com",
    "age": 8,
    "address": "17th Floor"
  }, {
    "givenName": "Geneva",
    "surName": "Courtes",
    "email": "gcourtes8@wunderground.com",
    "age": 9,
    "address": "Suite 78"
  }, {
    "givenName": "Emmy",
    "surName": "Easthope",
    "email": "eeasthope9@opera.com",
    "age": 10,
    "address": "12th Floor"
  }, {
    "givenName": "Claudell",
    "surName": "Waddilove",
    "email": "cwaddilovea@state.gov",
    "age": 11,
    "address": "7th Floor"
  }, {
    "givenName": "Harley",
    "surName": "Spurier",
    "email": "hspurierb@sphinn.com",
    "age": 12,
    "address": "Suite 8"
  }, {
    "givenName": "Burty",
    "surName": "Bartlomiej",
    "email": "bbartlomiejc@springer.com",
    "age": 13,
    "address": "Suite 76"
  }, {
    "givenName": "Thorny",
    "surName": "Lake",
    "email": "tlaked@odnoklassniki.ru",
    "age": 14,
    "address": "2nd Floor"
  }, {
    "givenName": "Tanner",
    "surName": "Le Sieur",
    "email": "tlesieure@amazonaws.com",
    "age": 15,
    "address": "1st Floor"
  }, {
    "givenName": "Valentine",
    "surName": "Gaines",
    "email": "vgainesf@shutterfly.com",
    "age": 16,
    "address": "Room 1022"
  }, {
    "givenName": "Anallise",
    "surName": "Nockells",
    "email": "anockellsg@google.cn",
    "age": 17,
    "address": "8th Floor"
  }, {
    "givenName": "Dareen",
    "surName": "Chitham",
    "email": "dchithamh@cnbc.com",
    "age": 18,
    "address": "Suite 68"
  }, {
    "givenName": "Alida",
    "surName": "Greydon",
    "email": "agreydoni@joomla.org",
    "age": 19,
    "address": "Room 1815"
  }, {
    "givenName": "Selestina",
    "surName": "Gallihawk",
    "email": "sgallihawkj@jimdo.com",
    "age": 20,
    "address": "8th Floor"
  }]
}

