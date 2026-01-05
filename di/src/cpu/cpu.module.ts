import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';
import { PowerService } from 'src/power/power.service';

@Module({
  imports: [PowerModule],
  providers: [CpuService],
  exports: [CpuService]
})
export class CpuModule {}
