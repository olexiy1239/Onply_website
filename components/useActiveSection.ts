"use client";

import {useEffect, useState} from "react";

export function useActiveSection(
  ids: string[],
  options: IntersectionObserverInit = {}
) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // беремо ту, що найближча до верхньої межі та справді видима
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top - b.boundingClientRect.top));

        if (visible[0]) {
          const id = (visible[0].target as HTMLElement).id;
          setActiveId(id);
        } else {
          // якщо жодна не перетинається — знайдемо останню секцію, що проскролена вище, але ще близько
          let fallback: string | null = null;
          for (const el of sections) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= (options.rootMargin ? 0 : 96)) {
              fallback = el.id;
            }
          }
          if (fallback) setActiveId(fallback);
        }
      },
      {
        // робимо “зону активації” трохи нижче шапки
        root: null,
        rootMargin: "-30% 0px -60% 0px", // верхня третина екрана
        threshold: [0, 0.25, 0.5, 0.75, 1],
        ...options
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [ids, options.rootMargin]);

  return activeId;
}
