import React from "react"
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";

type ExperienceElementProps = {
  // theme: string
  item: {
      date: string
      icon: React.ReactNode
      title: string
      location: string
      description: string
  }
}

export default function TimelineElement({ item }: ExperienceElementProps ) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="vertical-timeline-element">
    <VerticalTimelineElement
      visible={inView}
      contentStyle={{
        background: "#f3f4f6",
        boxShadow: "none",
        border: "1px solid rgba(0,0,0,0.5)",
        textAlign: "left",
        padding: "1.3rem 2rem",
        color: "white"
      }}
      contentArrowStyle={{
        borderRight: "0.4rem solid #383F49",
      }}
      date={item.date}
      icon={item.icon}
      iconStyle={{
        background: "white",
        fontSize: "1.5rem",
      }}
    >
      <h3 className="font-semibold capitalize text-gray-900">{item.title}</h3>
      <p className="font-normal !mt-0 text-gray-900">{item.location}</p>
      <p className="!mt-1 !font-normal text-gray-700">
        {item.description}
      </p>
    </VerticalTimelineElement>
  </div>
  );
}