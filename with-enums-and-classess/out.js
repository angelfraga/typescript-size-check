export var ExceptionTypes;
(function (ExceptionTypes) {
  ExceptionTypes['error'] = 'error';
  ExceptionTypes['info'] = 'info';
  ExceptionTypes['warn'] = 'warn';
})(ExceptionTypes || (ExceptionTypes = {}));
export class Exception extends Error {}
export class ErrorException extends Exception {
  constructor() {
    super(...arguments);
    this.type = ExceptionTypes.error;
  }
}
export class InfoException extends Exception {
  constructor() {
    super(...arguments);
    this.type = ExceptionTypes.info;
  }
}
export class WarningException extends Exception {
  constructor() {
    super(...arguments);
    this.type = ExceptionTypes.warn;
  }
}
export class NoOpenWorkspaceException extends ErrorException {
  constructor() {
    super('No workspace opened.');
  }
}
export class OpenCompanionFileException extends ErrorException {
  constructor() {
    super('Failed to open companion file.');
  }
}
export class ShowCompanionFileException extends ErrorException {
  constructor() {
    super('Failed to show companion file.');
  }
}
export class FindCompanionFileException extends InfoException {
  constructor() {
    super('No companions files found.');
  }
}
export class ActiveDocumentException extends ErrorException {
  constructor() {
    super('No active document found.');
  }
}
export class PickCompanionFileException extends ErrorException {
  constructor() {
    super('Failed to pick companion file.');
  }
}
export class SelectCompanionFileException extends InfoException {
  constructor() {
    super('No companion file selected.');
  }
}
