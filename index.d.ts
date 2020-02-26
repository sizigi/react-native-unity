import { EventTarget } from "event-target-shim";
import * as React from "react";

declare class UnityManager extends EventTarget {
  /** Init with the name of the GameObject to receive all further `execCommand` calls */
  init(delegate: string): Promise<object>;

  /** Sends a a command objcet to the initialized unity delegate */
  execCommand(name: string, data: object): Promise<object>;
}

/** Place to intercept touch events and send to Unity */
export const UnityResponderView: React.FunctionComponent<{}>;

/** Singleton Unity Manager that communicates with Unity via native code */
export const Unity: UnityManager;
