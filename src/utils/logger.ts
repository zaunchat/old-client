interface ILoggerOptions {
  state: "development" | "production";
}

class Logger {
  state: ILoggerOptions["state"];
  constructor(options: ILoggerOptions) {
    this.state = options.state;
  }
  log(...args: any[]) {
    console.log(...args);
  }
  info(...args: any[]) {
    console.log(...args);
  }
  debug(...args: any[]) {
    console.log();
  }
  error() {
    console.log();
  }
  warn() {
    console.log();
  }
}
