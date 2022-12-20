import { TestBed } from '@angular/core/testing';

import { CartWievService } from './cart-wiev.service';

describe('CartWievService', () => {
  let service: CartWievService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartWievService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
