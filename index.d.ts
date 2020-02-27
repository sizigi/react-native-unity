import { EventTarget } from "event-target-shim";
import * as React from "react-native";

declare class UnityManager extends EventTarget {
  /** Init with the name of the GameObject to receive all further `execCommand` calls */
  init(delegate: string): Promise<object>;

  /** Sends a a command objcet to the initialized unity delegate */
  execCommand(name: string, data: object): Promise<object>;
}

/** Place to intercept touch events and send to Unity */
export class UnityResponderView extends React.View {}

/** Singleton Unity Manager that communicates with Unity via native code */
export const Unity: UnityManager;
