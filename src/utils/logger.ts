interface ILoggerOptions {
  state: "development" | "production";
}

interface IDefaultOptions {
  title: string;
  custom_color?: string;
  with_title?: boolean;
}

interface IInfoOptions extends IDefaultOptions {}
interface IErrorOptions extends IDefaultOptions {}
interface IDebugOptions extends IDefaultOptions {}
interface IWarnOptions extends IDefaultOptions {}

class Logger {
  state: ILoggerOptions["state"];
  constructor(options: ILoggerOptions) {
    this.state = options.state;
  }
  log(...args: any[]) {
    console.log(...args);
  }
  info(message: string, options?: IInfoOptions) {
    console.log(`${options?.title ? `[${options.title}]` : `[INFO]`}: ${message}`);
  }
  debug(message: string, options?: IDebugOptions) {
    console.log(`${options?.title ? `[${options.with_title ? "DEBUG:" : ""}${options.title}]` : `[DEBUG]`}: ${message}`);
  }
  error(message: string, options?: IErrorOptions) {
    console.log(`${options?.title ? `[${options.with_title ? "ERROR:" : ""}${options.title}]` : `[ERROR]`}: ${message}`);
  }
  warn(message: string, options?: IWarnOptions) {
    console.log(`${options?.title ? `[${options.with_title ? "WARN:" : ""}${options.title}]` : `[WARN]`}: ${message}`);
  }
}
