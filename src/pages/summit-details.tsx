import React, { useState } from "react";
import { Header } from "../components/Header";
import { MenuIcon } from "../components/icons/MenuIcon";
import { ExpandIcon } from "../components/icons/ExpandIcon";

const SummitDetails: React.FC = () => {
  const [dataExpanded, setDataExpanded] = useState(false);
  const [aiExpanded, setAiExpanded] = useState(false);

  return (
    <div className="w-full min-h-screen font-roboto bg-[#E5E5E5] px-0 md:px-5 lg:px-0">
      <div className="w-full h-20 rounded-t-lg flex items-center justify-between p-4 md:p-5 max-w-[1420px] mx-auto mt-5 bg-white">
        <MenuIcon className="w-12 h-12 flex-shrink-0" />
        <div className="flex w-full max-w-[865px] justify-between items-center flex-col md:flex-row gap-5 md:gap-0">
          <img
            src="/accion-logo.svg"
            alt="Accion Labs Logo"
            className="w-[310px] h-12 flex-shrink-0"
          />
          <div className="flex items-start gap-10 md:gap-10">
            <button className="text-white text-base font-medium leading-6 tracking-[0.15px] px-5 py-3 rounded-lg bg-[#262626]">
              FEEDBACK
            </button>
            <div className="w-12 h-12 rounded-lg bg-[#E6E6E6]" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1420px] mx-auto h-[60px] flex items-center justify-between p-4 md:p-5 rounded-b-lg border-t border-[#E5E5E5] bg-[#F5F5F5]">
        <div className="flex items-center gap-[5px] flex-1">
          <span className="text-[#262626] text-base font-medium leading-6 tracking-[0.15px]">
            Search
          </span>
          <span className="text-[#737373] text-base font-normal leading-6 tracking-[0.15px] pl-[2px]">
            Enter a keyword. Example: Java
          </span>
        </div>
        <div className="flex items-start gap-5">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-9 h-9" viewBox="0 0 36 36" fill="none">
              <path
                d="M25.95 16.5C25.95 21 22.14 24.15 18 24.15C13.86 24.15 10.05 21 10.05 16.5H7.5C7.5 21.615 11.58 25.845 16.5 26.58V31.5H19.5V26.58C24.42 25.845 28.5 21.615 28.5 16.5M16.2 7.35C16.2 6.36 17.01 5.55 18 5.55C18.99 5.55 19.8 6.36 19.8 7.35L19.785 16.65C19.785 17.64 18.99 18.45 18 18.45C17.01 18.45 16.2 17.64 16.2 16.65M18 21C19.1935 21 20.3381 20.5259 21.182 19.682C22.0259 18.8381 22.5 17.6935 22.5 16.5V7.5C22.5 6.30653 22.0259 5.16193 21.182 4.31802C20.3381 3.47411 19.1935 3 18 3C16.8065 3 15.6619 3.47411 14.818 4.31802C13.9741 5.16193 13.5 6.30653 13.5 7.5V16.5C13.5 17.6935 13.9741 18.8381 14.818 19.682C15.6619 20.5259 16.8065 21 18 21Z"
                fill="#262626"
              />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-9 h-9" viewBox="0 0 36 36" fill="none">
              <path
                d="M23.2502 21.0002H22.0652L21.6452 20.5952C22.5826 19.5062 23.2677 18.2234 23.6515 16.8386C24.0353 15.4539 24.1083 14.0014 23.8652 12.5852C23.1602 8.41521 19.6802 5.08521 15.4802 4.57521C14.0036 4.3884 12.5039 4.54186 11.0957 5.02384C9.6876 5.50582 8.40837 6.30353 7.35595 7.35595C6.30353 8.40837 5.50582 9.6876 5.02384 11.0957C4.54186 12.5039 4.3884 14.0036 4.57521 15.4802C5.08521 19.6802 8.41521 23.1602 12.5852 23.8652C14.0014 24.1083 15.4539 24.0353 16.8386 23.6515C18.2234 23.2677 19.5062 22.5826 20.5952 21.6452L21.0002 22.0652V23.2502L27.3752 29.6252C27.9902 30.2402 28.9952 30.2402 29.6102 29.6252C30.2252 29.0102 30.2252 28.0052 29.6102 27.3902L23.2502 21.0002ZM14.2502 21.0002C10.5152 21.0002 7.50021 17.9852 7.50021 14.2502C7.50021 10.5152 10.5152 7.50021 14.2502 7.50021C17.9852 7.50021 21.0002 10.5152 21.0002 14.2502C21.0002 17.9852 17.9852 21.0002 14.2502 21.0002Z"
                fill="#262626"
              />
            </svg>
          </button>
        </div>
      </div>

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
