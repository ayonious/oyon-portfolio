import { useEffect, useRef } from "react";
import { storyContent } from "../../config/storybook";

/** Offline Turnstile API for stories. No third-party scripts are loaded. */
let activeScripts = 0;
let previousApi: Window["turnstile"];

export default function NextScript({ onReady }: { onReady?: () => void }) {
  const readyCallback = useRef(onReady);
  readyCallback.current = onReady;
  useEffect(() => {
    if (activeScripts++ > 0) {
      readyCallback.current?.();
      return () => { if (--activeScripts === 0) window.turnstile = previousApi; };
    }
    previousApi = window.turnstile;
    const widgets = new Map<string, { container: HTMLElement; clear: () => void }>();
    window.turnstile = {
      render(container, options) {
        const id = crypto.randomUUID();
        const controls = document.createElement("div");
        controls.className = "flex flex-wrap gap-2 rounded-xl border border-slate-300 p-3";
        const clear = () => {
          options["expired-callback"]();
        };
        const actions: [string, () => void][] = [
          [storyContent.verification.verifyLabel, () => options.callback(storyContent.verification.token)],
          [storyContent.verification.expireLabel, clear],
          [storyContent.verification.errorLabel, options["error-callback"]],
        ];
        for (const [label, action] of actions) {
          const button = document.createElement("button");
          button.type = "button";
          button.textContent = label;
          button.className = "rounded border px-3 py-2 text-sm";
          button.addEventListener("click", action);
          controls.append(button);
        }
        container.replaceChildren(controls);
        widgets.set(id, { container, clear });
        return id;
      },
      remove(id) { widgets.get(id)?.container.replaceChildren(); widgets.delete(id); },
      reset(id) { widgets.get(id)?.clear(); },
    };
    readyCallback.current?.();
    return () => { if (--activeScripts === 0) window.turnstile = previousApi; };
  }, []);
  return null;
}
