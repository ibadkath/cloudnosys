'use client';
import { Component } from "react";
import { scrollWithLenis } from "@/components/SmoothScroll";

export default class ScrollToBlogsOnFlag extends Component {
  componentDidMount() {
    if (sessionStorage.getItem("scrollToBlogs") !== "1") return;
    sessionStorage.removeItem("scrollToBlogs");

    scrollWithLenis(0, true);

    requestAnimationFrame(() => {
      const el = document.getElementById("blogs");
      if (!el) return;
      scrollWithLenis(el);
    });
  }

  render() {
    return null;
  }
}
