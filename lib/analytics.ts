export function track(event: string, props?: Record<string, any>) {
    // підключиш Plausible/GA за потреби
    if (process.env.NODE_ENV === "development") console.log("[analytics]", event, props);
  }
  