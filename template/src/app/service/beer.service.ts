import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { IBeer } from '../model/Beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  private beers: IBeer[] = [
    {
      id: 1,
      type: "SMALL",
      name: "Ichnusa non filtrata",
      price: 1.59
    },
    {
      id: 2,
      type: "MEDIUM",
      name: "Poretti non filtrata",
      price: 1.29,
    },
    {
      id: 3,
      type: "SMALL",
      name: "Peroni cruda",
      price: 1.50,
    },
    {
      id: 4,
      type: "MEDIUM",
      name: "Moretti",
      price: 1.10,
    },
    {
      id: 5,
      type: "MEDIUM",
      name: "Carlsberg",
      price: 0.98,
    },
    {
      id: 5,
      type: "SMALL",
      name: "Messina ai cristalli di sale",
      price: 1.70,
    },
    {
      id: 6,
      type: "SMALL",
      name: "Menabrea",
      price: 1.20,
    },
    {
      id: 7,
      type: "MEDIUM",
      name: "Ichnusa",
      price: 0.90,
    },
    {
      id: 8,
      type: "MEDIUM",
      name: "Nastro Azzurro",
      price: 0.99,
    },
    {
      id: 9,
      type: "MEDIUM",
      name: "Heineken",
      price: 1.10,
    },
    {
      id: 10,
      type: "MEDIUM",
      name: "Tuborg",
      price: 0.95,
    },
  ];
  private beers$: Observable<IBeer> = from(this.beers);
  
  constructor() { }

  getAll(): Observable<IBeer> {
    return this.beers$;
  }

  getBeer(id: number): Observable<IBeer|undefined> {
    return of(this.beers.find(function(item: IBeer): boolean {
      return item.id === id;
    }));
  }
}