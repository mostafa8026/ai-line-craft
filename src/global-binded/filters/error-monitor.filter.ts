import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateErrorDto } from 'src/errors/dto/create-error.dto';
import { ErrorsService } from 'src/errors/errors.service';
import { MyLoggerService } from 'src/my-logger/my-logger.service';

@Catch(HttpException)
export class ErrorMonitorFilter implements ExceptionFilter {
  constructor(
    private readonly _errorService: ErrorsService,
    private readonly _logger: MyLoggerService,
  ) {
    this._logger.setContext(ErrorMonitorFilter.name);
  }

  async catch(exception: HttpException, host: ArgumentsHost) {
    this._logger.log(JSON.stringify(exception));
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const exceptionResponse = exception.getResponse();
    const { message } = exception;
    const error = new CreateErrorDto();
    if (exceptionResponse) {
      error.message =
        typeof exceptionResponse === 'string'
          ? exceptionResponse
          : exceptionResponse['message'] || message;
    } else {
      error.message = message;
    }
    const insertedError = await this._errorService.create(error);
    const id = insertedError.id;

    /** return errorId to the user */
    return response.status(exception.getStatus()).json({
      statusCode: exception.getStatus(),
      exception: exceptionResponse,
      message: `Internal server error. Error id: ${id}`,
      trackingId: id,
    });
  }
}
