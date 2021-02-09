import { TestBed } from '@angular/core/testing';

import { IncidenciasServiceService } from './incidencias-service.service';

describe('IncidenciasServiceService', () => {
  let service: IncidenciasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidenciasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
