import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LateralNavService {
  isColapse = signal(false);
}
