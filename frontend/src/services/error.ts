export class ServerError extends Error {
  error: string;

  constructor(error: string) {
    super(error);
    
    this.error = error;
    error = "Error Not found";
  }
}
