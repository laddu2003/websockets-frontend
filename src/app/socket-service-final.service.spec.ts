import { TestBed } from '@angular/core/testing';

import { SocketServiceFinalService } from './socket-service-final.service';

describe('SocketServiceFinalService', () => {
  let service: SocketServiceFinalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketServiceFinalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
