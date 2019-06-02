import {TestBed, inject} from '@angular/core/testing';
const Web3 = require('web3');

import {Web3Service} from './web3.service';

import metacoin_artifacts from '../../../build/contracts/MetaCoin.json';
import { async } from 'q';
import { SharedModule } from '../shared/shared.module';

declare let window: any;

describe('Web3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      providers: [Web3Service]
    });
  });

  it('should be created', inject([Web3Service], (service: Web3Service) => {
    expect(service).toBeTruthy();
  }));
 
 
});
