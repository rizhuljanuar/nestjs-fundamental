import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(public powerService: PowerService) {}

  compute(a: number, b: number): number {
    console.log('Drawing ten watts of power from power service');
    this.powerService.supplyPower(10);
    return a + b;
  }
}
