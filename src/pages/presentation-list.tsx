import React, { useState } from "react";
import { Header } from "../components/Header";

const PresentationList = () => {
  const [expandedSections, setExpandedSections] = useState({
    "digital-products": false,
    data: true,
    "ai-ml": true,
    cloud: false,
    automation: false,
    operations: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="min-h-screen w-full bg-[#E5E5E5] font-roboto">
      <div className="max-w-[1420px] mx-auto flex flex-col gap-5 px-5 md:px-0">
        {/* Header Section */}
        <div className="bg-white rounded-t-lg h-20 flex items-center justify-between px-5 mt-5">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 36C7.43333 36 6.95867 35.808 6.576 35.424C6.192 35.0413 6 34.5667 6 34C6 33.4333 6.192 32.9587 6.576 32.576C6.95867 32.192 7.43333 32 8 32H40C40.5667 32 41.0413 32.192 41.424 32.576C41.808 32.9587 42 33.4333 42 34C42 34.5667 41.808 35.0413 41.424 35.424C41.0413 35.808 40.5667 36 40 36H8ZM8 26C7.43333 26 6.95867 25.808 6.576 25.424C6.192 25.0413 6 24.5667 6 24C6 23.4333 6.192 22.958 6.576 22.574C6.95867 22.1913 7.43333 22 8 22H40C40.5667 22 41.0413 22.1913 41.424 22.574C41.808 22.958 42 23.4333 42 24C42 24.5667 41.808 25.0413 41.424 25.424C41.0413 25.808 40.5667 26 40 26H8ZM8 16C7.43333 16 6.95867 15.8087 6.576 15.426C6.192 15.042 6 14.5667 6 14C6 13.4333 6.192 12.958 6.576 12.574C6.95867 12.1913 7.43333 12 8 12H40C40.5667 12 41.0413 12.1913 41.424 12.574C41.808 12.958 42 13.4333 42 14C42 14.5667 41.808 15.042 41.424 15.426C41.0413 15.8087 40.5667 16 40 16H8Z"
                fill="#262626"
              />
            </svg>
          </button>

          <div className="flex justify-between items-center w-[865px] flex-shrink-0 md:flex-row flex-col gap-5">
            <div className="w-[310px] h-12">
              <svg
                width="310"
                height="48"
                viewBox="0 0 310 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.8949 40.7199C19.5855 40.7199 15.658 39.0739 12.7008 36.376L9.29395 42.9971C13.3323 46.1313 18.3965 48.0001 23.8949 48.0001C29.3934 48.0001 34.4575 46.1344 38.4959 42.9971L35.089 36.376C32.1318 39.0739 28.2044 40.7199 23.8949 40.7199Z"
                  fill="#D43631"
                />
                <path
                  d="M7.24504 24C7.24504 16.1506 12.6326 9.56658 19.8961 7.76589L20.1302 7.31107L23.8945 0C10.6981 0 0 10.7454 0 24C0 29.1731 1.62952 33.9626 4.40185 37.8827L8.40018 30.1137C7.65781 28.2202 7.24812 26.1596 7.24812 24H7.24504Z"
                  fill="#0DAEAD"
                />
                <path
                  d="M23.8945 0L27.6557 7.31107L27.8898 7.76589C35.1533 9.56349 40.5409 16.1475 40.5409 24C40.5409 26.1596 40.1281 28.2202 39.3888 30.1137C38.4462 32.5239 36.9646 34.665 35.0886 36.3759L38.4955 42.997C40.3653 41.546 42.0164 39.8195 43.3871 37.8827C46.1595 33.9626 47.789 29.1731 47.789 24C47.7859 10.7454 37.0878 0 23.8945 0Z"
                  fill="#F1AF23"
                />
                <path
                  d="M27.8902 7.76589L27.6561 7.31107L23.8949 0L20.1338 7.31107L19.8997 7.76589L8.40067 30.1106L4.40234 37.8796C5.77311 39.8164 7.42419 41.5429 9.29398 42.9939L12.7009 36.3728L23.8949 14.6191L35.089 36.3728C36.965 34.6588 38.4466 32.5208 39.3892 30.1106L27.8902 7.76589Z"
                  fill="#2D323E"
                />
                <path
                  d="M58.497 33.8998H54.4648L61.8063 12.9543H66.4698L73.8214 33.8998H69.7892L64.2195 17.2498H64.0566L58.497 33.8998ZM58.6294 25.6873H69.6263V28.735H58.6294V25.6873Z"
                  fill="black"
                />
                <path
                  d="M93.4376 20.0214H89.6294C89.5208 19.3941 89.3205 18.8384 89.0286 18.3543C88.7368 17.8634 88.3736 17.4475 87.9391 17.1066C87.5047 16.7657 87.0092 16.51 86.4525 16.3396C85.9027 16.1623 85.3087 16.0737 84.6706 16.0737C83.537 16.0737 82.5323 16.36 81.6567 16.9327C80.781 17.4987 80.0954 18.3305 79.5998 19.4282C79.1043 20.5191 78.8565 21.8521 78.8565 23.4271C78.8565 25.0293 79.1043 26.3793 79.5998 27.4771C80.1022 28.568 80.7878 29.393 81.6567 29.9521C82.5323 30.5043 83.5336 30.7805 84.6604 30.7805C85.285 30.7805 85.8687 30.6987 86.4118 30.535C86.9616 30.3646 87.4538 30.1157 87.8882 29.7884C88.3295 29.4612 88.6994 29.0589 88.9981 28.5816C89.3036 28.1043 89.514 27.5589 89.6294 26.9452L93.4376 26.9657C93.295 27.9612 92.9862 28.8952 92.511 29.768C92.0426 30.6407 91.4283 31.4112 90.668 32.0793C89.9077 32.7407 89.0185 33.2589 88.0002 33.6339C86.982 34.0021 85.8518 34.1861 84.6095 34.1861C82.7767 34.1861 81.1408 33.76 79.7017 32.9077C78.2626 32.0555 77.1289 30.8248 76.3008 29.2157C75.4726 27.6066 75.0585 25.6771 75.0585 23.4271C75.0585 21.1702 75.476 19.2407 76.311 17.6384C77.1459 16.0293 78.2829 14.7987 79.722 13.9464C81.1611 13.0941 82.7903 12.668 84.6095 12.668C85.7703 12.668 86.8496 12.8316 87.8475 13.1589C88.8454 13.4862 89.7346 13.9668 90.5153 14.6009C91.2959 15.2282 91.9374 15.9987 92.4397 16.9123C92.9488 17.8191 93.2815 18.8555 93.4376 20.0214Z"
                  fill="black"
                />
                {/* Rest of the logo paths... */}
              </svg>
            </div>

            <div className="flex items-start gap-10">
              <button className="px-5 py-3 bg-[#262626] text-white rounded-lg font-medium hover:bg-[#333] transition-colors">
                FEEDBACK
              </button>
              <div className="w-12 h-12 rounded-lg bg-[#E6E6E6]" />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-[#F5F5F5] h-[60px] flex items-center justify-between px-5 rounded-b-lg border-t border-[#E5E5E5]">
          <div className="flex items-center gap-1 flex-1">
            <span className="text-[#262626] font-medium">Search</span>
            <span className="text-[#737373] pl-0.5">
              Enter a keyword. Example: Java
            </span>
          </div>

          <div className="flex items-start gap-5">
            <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.95 16.5C25.95 21 22.14 24.15 18 24.15C13.86 24.15 10.05 21 10.05 16.5H7.5C7.5 21.615 11.58 25.845 16.5 26.58V31.5H19.5V26.58C24.42 25.845 28.5 21.615 28.5 16.5M16.2 7.35C16.2 6.36 17.01 5.55 18 5.55C18.99 5.55 19.8 6.36 19.8 7.35L19.785 16.65C19.785 17.64 18.99 18.45 18 18.45C17.01 18.45 16.2 17.64 16.2 16.65M18 21C19.1935 21 20.3381 20.5259 21.182 19.682C22.0259 18.8381 22.5 17.6935 22.5 16.5V7.5C22.5 6.30653 22.0259 5.16193 21.182 4.31802C20.3381 3.47411 19.1935 3 18 3C16.8065 3 15.6619 3.47411 14.818 4.31802C13.9741 5.16193 13.5 6.30653 13.5 7.5V16.5C13.5 17.6935 13.9741 18.8381 14.818 19.682C15.6619 20.5259 16.8065 21 18 21Z"
                  fill="#262626"
                />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2502 21.0002H22.0652L21.6452 20.5952C22.5826 19.5062 23.2677 18.2234 23.6515 16.8386C24.0353 15.4539 24.1083 14.0014 23.8652 12.5852C23.1602 8.41521 19.6802 5.08521 15.4802 4.57521C14.0036 4.3884 12.5039 4.54186 11.0957 5.02384C9.6876 5.50582 8.40837 6.30353 7.35595 7.35595C6.30353 8.40837 5.50582 9.6876 5.02384 11.0957C4.54186 12.5039 4.3884 14.0036 4.57521 15.4802C5.08521 19.6802 8.41521 23.1602 12.5852 23.8652C14.0014 24.1083 15.4539 24.0353 16.8386 23.6515C18.2234 23.2677 19.5062 22.5826 20.5952 21.6452L21.0002 22.0652V23.2502L27.3752 29.6252C27.9902 30.2402 28.9952 30.2402 29.6102 29.6252C30.2252 29.0102 30.2252 28.0052 29.6102 27.3902L23.2502 21.0002ZM14.2502 21.0002C10.5152 21.0002 7.50021 17.9852 7.50021 14.2502C7.50021 10.5152 10.5152 7.50021 14.2502 7.50021C17.9852 7.50021 21.0002 10.5152 21.0002 14.2502C21.0002 17.9852 17.9852 21.0002 14.2502 21.0002Z"
                  fill="#262626"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Innovation Summit Section */}
        <section className="bg-white rounded-lg overflow-hidden">
          <h1 className="text-3xl font-medium text-[#262626] p-5 uppercase border-b border-[#E5E5E5]">
            Innovation Summit (5)
          </h1>
          <div className="bg-[#F2F2F2] p-5 text-[#262626]">
            <p className="leading-[150%]">
              Over the years, Accion Labs has grown from 10 people in a tiny
              office in Pittsburgh, USA to a globally distributed company of
              over 5000 people spread across 20 locations worldwide. But with
              this growth, came the need to connect our globally distributed
              teams, come together under one roof and recreate the creative
              energies that made us successful. The Innovation Summit is an
              annual event where we invite technology leaders, AIC development
              teams and our customers across all locations to create a microcosm
              of creativity and excitement. We talk about new technologies that
              are emerging, discuss learnings from the multitude of products and
              projects we have developed, and make plans for an exciting year
              ahead.
            </p>
          </div>
        </section>

        {/* Chart Section */}
        <section className="bg-white rounded-lg overflow-hidden">
          <h2 className="text-2xl font-medium text-[#262626] p-5 border-b border-[#E5E5E5]">
            Innovation Summit over the years
          </h2>
          <div className="bg-[#F2F2F2] p-5 flex justify-center">
            <div className="w-full max-w-[511px] h-[482px] relative">
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

                {/* Vertical grid lines */}
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

                {/* Horizontal grid lines */}
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

                {/* Bar chart */}
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

                {/* Data point labels */}
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
        </section>

        {/* Distribution Section */}
        <section className="bg-white rounded-lg overflow-hidden">
          <h2 className="text-2xl font-medium text-[#262626] p-5 border-b border-[#E5E5E5]">
            Summit Presentation Distribution across CoEs
          </h2>
          <div className="bg-[#F2F2F2] p-5 space-y-5">
            {/* Digital Products */}
            <button
              onClick={() => toggleSection("digital-products")}
              className="w-full bg-white rounded-lg p-5 flex items-center gap-3 hover:bg-gray-50 transition-colors"
            >
              <svg
                className={`w-8 h-8 transform transition-transform ${expandedSections["digital-products"] ? "rotate-180" : ""}`}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.12 11L16 17.1067L9.88 11L8 12.88L16 20.88L24 12.88L22.12 11Z"
                  fill="#262626"
                />
              </svg>
              <span className="font-medium">Digital Products (17)</span>
            </button>

            {/* Data Section */}
            <button
              onClick={() => toggleSection("data")}
              className="w-full bg-white rounded-lg p-5 flex items-center gap-3 hover:bg-gray-50 transition-colors"
            >
              <svg
                className={`w-8 h-8 transform transition-transform ${expandedSections["data"] ? "rotate-180" : ""}`}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.12 11L16 17.1067L9.88 11L8 12.88L16 20.88L24 12.88L22.12 11Z"
                  fill="#262626"
                />
              </svg>
              <span className="font-medium">Data (18)</span>
            </button>

            {expandedSections["data"] && (
              <div className="pl-8 space-y-4">
                <div className="bg-[#F2F2F2] p-5 rounded-lg">
                  <button
                    onClick={() => toggleSection("ai-ml")}
                    className="flex items-center gap-3"
                  >
                    <svg
                      className={`w-8 h-8 transform transition-transform ${expandedSections["ai-ml"] ? "rotate-180" : ""}`}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.12 11L16 17.1067L9.88 11L8 12.88L16 20.88L24 12.88L22.12 11Z"
                        fill="#262626"
                      />
                    </svg>
                    <span>AI/ML (5)</span>
                  </button>

                  {expandedSections["ai-ml"] && (
                    <div className="pl-8 space-y-4 mt-4">
                      <div className="bg-white p-5 rounded-lg flex items-center gap-3">
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.12 11L16 17.1067L9.88 11L8 12.88L16 20.88L24 12.88L22.12 11Z"
                            fill="#262626"
                          />
                        </svg>
                        <span>AI/Machine Learning (3)</span>
                      </div>
                      <div className="bg-white p-5 rounded-lg flex items-center gap-3">
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.12 11L16 17.1067L9.88 11L8 12.88L16 20.88L24 12.88L22.12 11Z"
                            fill="#262626"
                          />
                        </svg>
                        <span>Architecture & Design (1)</span>
                      </div>
                      <div className="bg-white p-5 rounded-lg flex items-center gap-3">
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.12 11L16 17.1067L9.88 11L8 12.88L16 20.88L24 12.88L22.12 11Z"
                            fill="#262626"
                          />
                        </svg>
                        <span>Data Lake & Big Data Analytics (1)</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Additional sections */}
            <button
              onClick={() => toggleSection("cloud")}
              className="w-full bg-white rounded-lg p-5 flex items-center gap-3 hover:bg-gray-50 transition-colors"
            >
              <svg
                className={`w-8 h-8 transform transition-transform ${expandedSections["cloud"] ? "rotate-180" : ""}`}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.12 11L16 17.1067L9.88 11L8 12.88L16 20.88L24 12.88L22.12 11Z"
                  fill="#262626"
                />
              </svg>
              <span className="font-medium">Cloud (15)</span>
            </button>

            <button
              onClick={() => toggleSection("automation")}
              className="w-full bg-white rounded-lg p-5 flex items-center gap-3 hover:bg-gray-50 transition-colors"
            >
              <svg
                className={`w-8 h-8 transform transition-transform ${expandedSections["automation"] ? "rotate-180" : ""}`}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.12 11L16 17.1067L9.88 11L8 12.88L16 20.88L24 12.88L22.12 11Z"
                  fill="#262626"
                />
              </svg>
              <span className="font-medium">Automation (13)</span>
            </button>

            <button
              onClick={() => toggleSection("operations")}
              className="w-full bg-white rounded-lg p-5 flex items-center gap-3 hover:bg-gray-50 transition-colors"
            >
              <svg
                className={`w-8 h-8 transform transition-transform ${expandedSections["operations"] ? "rotate-180" : ""}`}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.12 11L16 17.1067L9.88 11L8 12.88L16 20.88L24 12.88L22.12 11Z"
                  fill="#262626"
                />
              </svg>
              <span className="font-medium">
                Operations and Delivery Management (14)
              </span>
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white rounded-lg p-5 text-center text-[#262626]">
          <p>Copyright 2024 Accion Labs | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default PresentationList;
