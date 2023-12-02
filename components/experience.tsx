"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "@/lib/hook";
import TimelineElement from "./timeline-element";

function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref}>
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          return (
            <TimelineElement key={index} item={item} />
          );
        })}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
