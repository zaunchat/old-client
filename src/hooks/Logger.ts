import { createContext } from "preact";
import { useContext } from "preact/hooks";

const logger = new Logger({ state: "development" });

export const LoggerContext = createContext(logger);
export const useLogger = () => useContext(LoggerContext);