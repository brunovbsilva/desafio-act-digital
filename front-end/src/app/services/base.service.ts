import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { QueryStringHelper } from '@helpers/query-string.helper';
import { lastValueFrom, Observable } from 'rxjs';
import { MessageService } from 'primeng/api';
import { ErrorResponse } from '@models/error-response';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService {
  protected url;
  private readonly http: HttpClient = inject(HttpClient);
  private readonly messageService: MessageService = inject(MessageService);

  protected constructor(url: string, controller: string) {
    this.url = `${url}/api/${controller}`;
  }

  private async ExecuteAsync<T>(request: Observable<T | ErrorResponse>): Promise<T> {
    try {
      const result = await lastValueFrom(request);
      return result as T;
    } catch (exception: unknown) {
      if (exception instanceof HttpErrorResponse) {
        exception.error.errors.forEach((value: string) => {
          this.messageService.add({
            severity: 'error',
            summary: 'API Error',
            detail: value,
            life: 2000,
          });
        });
      }
      throw exception;
    }
  }

  protected async GetAsync<T>(path: string, params?: object): Promise<T> {
    return this.ExecuteAsync<T>(
      this.http.get<T | ErrorResponse>(
        `${this.url}${path ? '/' + path : ''}${params ? '?' + QueryStringHelper.MapParams(params) : ''}`
      ),
    );
  }

  protected async PostAsync<T>(path: string, params?: object): Promise<T> {
    return this.ExecuteAsync<T>(
      this.http.post<T | ErrorResponse>(`${this.url}${path ? '/' + path : ''}`, params),
    );
  }

  protected async PatchAsync(path: string, params?: object): Promise<void> {
    return this.ExecuteAsync<void>(
      this.http.patch<void | ErrorResponse>(`${this.url}${path ? '/' + path : ''}`, params),
    );
  }

  protected async DeleteAsync(path: string, params?: object): Promise<void> {
    return this.ExecuteAsync<void>(
      this.http.delete<void | ErrorResponse>(
        `${this.url}${path ? '/' + path : ''}${params ? '?' + QueryStringHelper.MapParams(params) : ''}`
      ),
    );
  }
}
