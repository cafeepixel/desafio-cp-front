import { RefObject } from "react";

export const executeScroll = (ref:RefObject<HTMLDivElement>) => ref.current.scrollIntoView()