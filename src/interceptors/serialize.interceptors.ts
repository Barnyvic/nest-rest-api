import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { map } from 'rxjs';
import { Observable } from 'rxjs';

interface ClassContructor {
  // eslint-disable-next-line @typescript-eslint/ban-types
  new (...args: any[]): {};
}

// decorator function
export function Serialize(dto: ClassContructor) {
  return UseInterceptors(new SerializeInterceptors(dto));
}

export class SerializeInterceptors implements NestInterceptor {
  constructor(private dto: any) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // Run something before a request is handled

    return next.handle().pipe(
      // Run something before the response is sent out
      map((data: any) => {
        return plainToClass(this.dto, data, {
          excludeExtraneousValues: true, // this excludes values not included in the User dto
        });
      }),
    );
  }
}
