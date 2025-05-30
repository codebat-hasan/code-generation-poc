import React, { useState } from "react";
import { Header } from "../components/Header";
import { ExpandIcon } from "../components/icons/ExpandIcon";

const SummitDetails: React.FC = () => {
  const [dataExpanded, setDataExpanded] = useState(false);
  const [aiExpanded, setAiExpanded] = useState(false);

  return (
    <div className="w-full min-h-screen font-roboto bg-[#E5E5E5] px-0 md:px-5 lg:px-0">
      <Header userImageUrl="/user-avatar.png" />
      <div className="max-w-[1420px] mx-auto flex flex-col gap-5 pb-5">
        <div className="flex flex-col">
          <h1 className="w-full text-[#262626] text-[30px] font-medium leading-[123.5%] tracking-[0.25px] uppercase p-5 rounded-t-lg border-b border-[#E5E5E5] bg-white md:text-2xl">
            Innovation Summit (5)
          </h1>
          <div className="w-full text-[#262626] text-base font-normal leading-[150%] tracking-[0.15px] p-5 rounded-b-lg bg-[#F2F2F2]">
            Over the years, Accion Labs has grown from 10 people in a tiny
            office in Pittsburgh, USA to a globally distributed company of over
            5000 people spread across 20 locations worldwide. But with this
            growth, came the need to connect our globally distributed teams,
            come together under one roof and recreate the creative energies that
            made us successful. The Innovation Summit is an annual event where
            we invite technology leaders, AIC development teams and our
            customers across all locations to create a microcosm of creativity
            and excitement. We talk about new technologies that are emerging,
            discuss learnings from the multitude of products and projects we
            have developed, and make plans for an exciting year ahead.
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="w-full text-[#262626] text-2xl font-medium leading-[133.4%] p-5 rounded-t-lg border-b border-[#E5E5E5] bg-white">
            Innovation Summit over the years
          </h2>
          <div className="flex flex-col items-center gap-5 p-5 rounded-b-lg bg-[#F2F2F2]">
            <div className="w-full max-w-[511px] h-[482px] md:h-[300px] relative">
              {/* Chart SVG implementation */}
              <svg className="w-full h-full" viewBox="0 0 511 482">
                <defs>
                  <pattern
                    id="grid"
                    width="1"
                    height="1"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 1 0 L 0 0 0 1"
                      fill="none"
                      stroke="#B3B3B3"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="511" height="482" fill="url(#grid)" />
                <line
                  x1="80"
                  y1="6"
                  x2="80"
                  y2="307"
                  stroke="#B3B3B3"
                  strokeWidth="1"
                />
                <line
                  x1="166"
                  y1="6"
                  x2="166"
                  y2="308"
                  stroke="#B3B3B3"
                  strokeWidth="1"
                />
                <line
                  x1="252"
                  y1="6"
                  x2="252"
                  y2="308"
                  stroke="#B3B3B3"
                  strokeWidth="1"
                />
                <line
                  x1="338"
                  y1="6"
                  x2="338"
                  y2="308"
                  stroke="#B3B3B3"
                  strokeWidth="1"
                />
                <line
                  x1="424"
                  y1="6"
                  x2="424"
                  y2="308"
                  stroke="#B3B3B3"
                  strokeWidth="1"
                />
                <line
                  x1="510"
                  y1="6"
                  x2="510"
                  y2="308"
                  stroke="#B3B3B3"
                  strokeWidth="1"
                />
                <line
                  x1="80"
                  y1="6"
                  x2="511"
                  y2="6"
                  stroke="#B3B3B3"
                  strokeWidth="1"
                />
                <line
                  x1="80"
                  y1="56"
                  x2="511"
                  y2="56"
                  stroke="#B3B3B3"
                  strokeWidth="1"
                />
                <line
                  x1="80"
                  y1="106"
                  x2="511"
                  y2="106"
                  stroke="#B3B3B3"
                  strokeWidth="1"
                />
                <line
                  x1="80"
                  y1="156"
                  x2="511"
                  y2="156"
                  stroke="#B3B3B3"
                  strokeWidth="1"
                />
                <line
                  x1="80"
                  y1="206"
                  x2="511"
                  y2="206"
                  stroke="#B3B3B3"
                  strokeWidth="1"
                />
                <line
                  x1="80"
                  y1="256"
                  x2="511"
                  y2="256"
                  stroke="#B3B3B3"
                  strokeWidth="1"
                />
                <line
                  x1="80"
                  y1="307"
                  x2="511"
                  y2="307"
                  stroke="#B3B3B3"
                  strokeWidth="1"
                />

                {/* Bars */}
                <rect x="82" y="111" width="83" height="196" fill="#67B7DC" />
                <rect x="168" y="143" width="83" height="164" fill="#67B7DC" />
                <rect x="254" y="167" width="83" height="140" fill="#67B7DC" />
                <rect x="340" y="190" width="83" height="117" fill="#67B7DC" />
                <rect x="426" y="206" width="83" height="101" fill="#67B7DC" />

                {/* Y-axis labels */}
                <text
                  x="88"
                  y="299"
                  fontFamily="Roboto"
                  fontSize="14"
                  fill="#000"
                >
                  0
                </text>
                <text
                  x="88"
                  y="253"
                  fontFamily="Roboto"
                  fontSize="14"
                  fill="#000"
                >
                  5
                </text>
                <text
                  x="80"
                  y="202"
                  fontFamily="Roboto"
                  fontSize="14"
                  fill="#000"
                >
                  10
                </text>
                <text
                  x="80"
                  y="153"
                  fontFamily="Roboto"
                  fontSize="14"
                  fill="#000"
                >
                  15
                </text>
                <text
                  x="80"
                  y="102"
                  fontFamily="Roboto"
                  fontSize="14"
                  fill="#000"
                >
                  20
                </text>
                <text
                  x="80"
                  y="54"
                  fontFamily="Roboto"
                  fontSize="14"
                  fill="#000"
                >
                  25
                </text>
                <text
                  x="80"
                  y="6"
                  fontFamily="Roboto"
                  fontSize="14"
                  fill="#000"
                >
                  30
                </text>

                {/* Bar values */}
                <text
                  x="144"
                  y="93"
                  fontFamily="Roboto"
                  fontSize="14"
                  fill="#000"
                >
                  19
                </text>
                <text
                  x="230"
                  y="125"
                  fontFamily="Roboto"
                  fontSize="14"
                  fill="#000"
                >
                  16
                </text>
                <text
                  x="313"
                  y="149"
                  fontFamily="Roboto"
                  fontSize="14"
                  fill="#000"
                >
                  14
                </text>
                <text
                  x="402"
                  y="172"
                  fontFamily="Roboto"
                  fontSize="14"
                  fill="#000"
                >
                  12
                </text>
                <text
                  x="488"
                  y="188"
                  fontFamily="Roboto"
                  fontSize="14"
                  fill="#000"
                >
                  10
                </text>

                {/* Axis titles */}
                <text
                  x="232"
                  y="466"
                  fontFamily="Roboto"
                  fontSize="14"
                  fontWeight="500"
                  fill="#000"
                >
                  Innovation Summits
                </text>
                <text
                  x="18"
                  y="68"
                  fontFamily="Roboto"
                  fontSize="14"
                  fontWeight="500"
                  fill="#000"
                  transform="rotate(-90 18 68)"
                >
                  Summit Presentation Count
                </text>

                {/* X-axis labels */}
                <text
                  x="0"
                  y="0"
                  fontFamily="Roboto"
                  fontSize="14"
                  fill="#000"
                  transform="rotate(-45 0 0) translate(0 320)"
                >
                  Kuala Lumpur Summit 2024
                </text>
                <text
                  x="123"
                  y="0"
                  fontFamily="Roboto"
                  fontSize="14"
                  fill="#000"
                  transform="rotate(-45 123 0) translate(123 320)"
                >
                  Dubai Summit 2023
                </text>
                <text
                  x="217"
                  y="0"
                  fontFamily="Roboto"
                  fontSize="14"
                  fill="#000"
                  transform="rotate(-45 217 0) translate(217 320)"
                >
                  Goa Summit 2022
                </text>
                <text
                  x="303"
                  y="0"
                  fontFamily="Roboto"
                  fontSize="14"
                  fill="#000"
                  transform="rotate(-45 303 0) translate(303 320)"
                >
                  Goa Summit 2019
                </text>
                <text
                  x="397"
                  y="0"
                  fontFamily="Roboto"
                  fontSize="14"
                  fill="#000"
                  transform="rotate(-45 397 0) translate(397 320)"
                >
                  Goa Summit 2018
                </text>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="w-full text-[#262626] text-2xl font-medium leading-[133.4%] p-5 rounded-t-lg border-b border-[#E5E5E5] bg-white">
            Summit Presentation Distribution across CoEs
          </h2>
          <div className="flex flex-col items-center gap-5 p-5 rounded-b-lg bg-[#F2F2F2]">
            {/* Expandable sections */}
            <button className="flex items-center gap-3 w-full p-[10px] rounded-lg bg-white hover:bg-gray-50">
              <ExpandIcon expanded={false} />
              <span className="text-[#262626] text-base font-medium leading-6 tracking-[0.15px]">
                Digital Products (17)
              </span>
            </button>

            <div className="w-full flex flex-col gap-2">
              <button
                className="flex items-center gap-3 w-full p-[10px] rounded-lg bg-white hover:bg-gray-50"
                onClick={() => setDataExpanded(!dataExpanded)}
              >
                <ExpandIcon expanded={dataExpanded} />
                <span className="text-[#262626] text-base font-medium leading-6 tracking-[0.15px]">
                  Data (18)
                </span>
              </button>
              {dataExpanded && (
                <div className="w-full flex flex-col gap-2 pl-5">
                  <button
                    className="flex items-center gap-3 w-full p-[10px] rounded-lg bg-white hover:bg-gray-50"
                    onClick={() => setAiExpanded(!aiExpanded)}
                  >
                    <ExpandIcon expanded={aiExpanded} />
                    <span className="text-[#262626] text-base font-medium leading-6 tracking-[0.15px]">
                      AI/ML (5)
                    </span>
                  </button>
                  {aiExpanded && (
                    <div className="flex flex-col w-full gap-2 pl-5">
                      <button className="flex items-center gap-3 w-full p-[10px] rounded-lg bg-white hover:bg-gray-50">
                        <ExpandIcon expanded={false} />
                        <span>AI/Machine Learning (3)</span>
                      </button>
                      <button className="flex items-center gap-3 w-full p-[10px] rounded-lg bg-white hover:bg-gray-50">
                        <ExpandIcon expanded={false} />
                        <span>Architecture &amp; Design (1)</span>
                      </button>
                      <button className="flex items-center gap-3 w-full p-[10px] rounded-lg bg-white hover:bg-gray-50">
                        <ExpandIcon expanded={false} />
                        <span>Data Lake &amp; Big Data Analytics (1)</span>
                      </button>
                      <button className="flex items-center gap-3 w-full p-[10px] rounded-lg bg-white hover:bg-gray-50">
                        <ExpandIcon expanded={false} />
                        <span>NLP, Voice UI &amp; Chat Bots (0)</span>
                      </button>
                    </div>
                  )}
                  {[
                    "Big Data & Realtime Analysis (2)",
                    "Data Architecture (3)",
                    "Data Ops (3)",
                    "Google Cloud Platform (GCP) (3)",
                    "Microsoft Data Solutions (2)",
                    "Cloud (15)",
                    "Automation (13)",
                    "Operations and Delivery Management (14)",
                  ].map((item) => (
                    <button
                      key={item}
                      className="flex items-center gap-3 w-full p-[10px] rounded-lg bg-white hover:bg-gray-50"
                    >
                      <ExpandIcon expanded={false} />
                      <span className="text-[#262626] text-base font-medium leading-6 tracking-[0.15px]">
                        {item}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <footer className="w-full text-[#262626] text-center text-base font-normal leading-[150%] tracking-[0.15px] p-5 rounded-lg bg-white">
          Copyright 2024 Accion Labs | All Rights Reserved
        </footer>
      </div>
    </div>
  );
};

export default SummitDetails;
