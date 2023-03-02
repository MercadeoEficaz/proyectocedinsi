import { TestBed } from '@angular/core/testing';

import { InformacioncuerpoService } from './informacioncuerpo.service';

describe('InformacioncuerpoService', () => {
  let service: InformacioncuerpoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformacioncuerpoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
