namespace Profile {
  /**
   * @namespace Profile.Response
   * Answers in User methods.
   * Allows you to quickly navigate the structure of responses.
   */
  export namespace Response {
    /** Используется при правильном ответе */
    export interface Success {
      statusCode: number;
      message: string;
      status?: boolean;
    }
    /** Используется при не правильном ответе */
    export interface Failure {
      statusCode: number;
      message: string;
      status?: boolean;
    }

    /** Ошибочные данные - объект не найден*/
    export interface NotFound {
      statusCode: number;
      message: string | string[];
      error: string;
    }

    /** Ошибочные данные - не правильный запрос */
    export interface BadRequest {
      statusCode: number;
      message: string | string[];
      error: string;
    }
  }

  /**  */
  export interface ProfileData {
    owner: string;
    firstName: string;
    lastName: string;
    middleName: string;
    birthDate: Date;
  }
}
