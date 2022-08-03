import chalk from "chalk";

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

export class Logger {
  state: ILoggerOptions["state"];
  constructor(options: ILoggerOptions) {
    this.state = options.state;
  }
  log(...args: any[]) {
    console.log(...args);
  }
  info(message: string, options?: IInfoOptions) {
    console.log(
      chalk.white`${
        options?.title
          ? `[${options.with_title ? "INFO:" : ""}${options.title}]`
          : `[INFO]`
      }:` + ` ${message}`
    );
  }
  debug(message: string, options?: IDebugOptions) {
    if (this.state == "production") return;
    console.log(
      chalk.magenta`${
        options?.title
          ? `[${options.with_title ? "DEBUG:" : ""}${options.title.toUpperCase()}]`
          : `[DEBUG]`
      }` + `: ${message}`
    );
  }
  error(message: string, options?: IErrorOptions) {
    console.log(
      chalk.red`${
        options?.title
          ? `[${options.with_title ? "ERROR:" : ""}${options.title.toUpperCase()}]`
          : `[ERROR]`
      }`+`: ${message}`
    );
  }
  warn(message: string, options?: IWarnOptions) {
    console.log(
      chalk.yellow`${
        options?.title
          ? `[${options.with_title ? "WARN:" : ""}${options.title.toUpperCase()}]`
          : `[WARN]`
      }`+`: ${message}`
    );
  }
}
