import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Work } from '@mui/icons-material'

export default function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2009 - 2013"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Osbourn Park High School, Manassas, Virginia
                    </h3>
                    <p> Advanced Studies High School Diploma</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2014 - 2019"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Northern Virginia Community College, Annandale, Virginia
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        Associate's Degree
                    </h4>

                    <p> Liberal Arts</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2016 - 2021"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">
                        HR Expert - Target
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Manassas, VA
                    </h4>
                    <p>Developed the backend infrastructure for 3 projects.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2021 - 2022"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Talent Acquisition Coordinator - Robert Half
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Mclean, VA
                    </h4>
                    <p>
                        Helped the team launch 2 major features by working both in the front
                        end and back end.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2022"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">
                        HR Generalist - LanceSoft
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Herndon, VA
                    </h4>
                    <p>
                        Helped the team launch 2 major features by working both in the front
                        end and back end.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2022 - 2023"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">
                        General Assembly, Remote
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        Bootcamp Certificate
                    </h4>

                    <p> Software Engineering Immersive</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
