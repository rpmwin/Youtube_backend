class ApiResponse {
  constructor( message = "Success", data , StatusCode ) {
    this.StatusCode = StatusCode;
    this.message = message;
    this.data = data;
    this.success = StatusCode < 400;
  } 
}