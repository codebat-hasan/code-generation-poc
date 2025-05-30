import React from "react";
import { Header } from "../components/Header";
import { ContentCard } from "../components/ContentCard";

const ViewPresentationPage: React.FC = () => {
  return (
    <div className="flex pb-5 flex-col overflow-hidden items-stretch bg-[#E5E5E5]">
      <Header userImageUrl="/user-avatar.png" />
      <div className="self-center w-full max-w-[1420px] px-5">
        <div className="w-full">
          <div className="text-[#262626] w-full rounded-t-lg border-b border-[#E5E5E5] px-5 py-5 gap-3 font-roboto text-[30px] font-medium uppercase tracking-[0.25px] leading-none bg-white">
            A New Enterprise Digital Stack - A Convergence of Platforms
          </div>

          <div className="w-full">
            <div className="relative w-full">
              <div className="z-0 flex min-h-[420px] w-full bg-[#262626]" />
              <div className="absolute z-0 flex min-h-[420px] w-[769px] max-w-full left-1/2 bottom-0 transform -translate-x-1/2 h-[420px] bg-[#CCC]" />
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/37c87193e6d446d1a52b9092b7ea3b38/1d6ac5c461ebc0f42f60b0f64039aa2919307a99?placeholderIfAbsent=true"
              alt="Divider"
              className="w-full object-contain"
            />

            <div className="rounded-b-lg bg-[#F2F2F2] flex w-full px-5 py-5 items-start gap-[30px] font-roboto text-base font-medium tracking-[0.15px] justify-start">
              <div className="min-w-[240px] w-[991px]">
                <div className="w-full text-[#525252]">
                  In AI/ML | AI/Machine Learning | Technology
                </div>
                <div className="mt-3 w-full text-[#262626]">
                  <div className="flex w-full items-start gap-2 justify-start flex-wrap">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/37c87193e6d446d1a52b9092b7ea3b38/c663d15a4a038a0d5edd671b18199946adab5150?placeholderIfAbsent=true"
                      alt="Author"
                      className="w-6 h-6 object-contain flex-shrink-0"
                    />
                    <div className="text-[#262626] flex-1">Nitin Agarwal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 w-full font-roboto">
          <div className="text-[#262626] w-full rounded-t-lg border-b border-[#E5E5E5] px-5 py-5 gap-3 text-2xl font-medium leading-none bg-white">
            Overview
          </div>
          <div className="rounded-b-lg w-full px-5 py-5 font-normal tracking-[0.15px] bg-[#F2F2F2]">
            <div className="text-[#595959] text-sm leading-none">
              Theme: Digital Acceleration through Multi-Platform Architecture
              and Solutions
            </div>
            <div className="text-[#262626] text-base leading-6 mt-3">
              This presentation discusses the convergence of multiple technology
              platforms that enterprises need to orchestrate in today's digital
              world, akin to a symphony. The lines between building vs buying
              software are blurring, with companies across industries becoming
              software/digital companies themselves by leveraging platforms like
              Salesforce, Microsoft Azure, etc.
            </div>
          </div>
        </div>

        {/* Related Presentations Section */}
        <div className="mt-5 w-full font-roboto">
          <div className="text-[#262626] w-full rounded-t-lg border-b border-[#E5E5E5] px-5 py-5 gap-3 text-2xl font-medium leading-none bg-white">
            Related Presentations in same CoE
          </div>
          <div className="items-center rounded-b-lg flex w-full px-5 py-5 flex-col justify-start bg-[#F2F2F2]">
            <div className="flex w-full items-start gap-5 tracking-[0.15px] justify-start flex-wrap">
              <ContentCard
                title="Drones & UAVs - Application Areas"
                description="This content discusses the various applications of drones and UAVs in different industries such as..."
                metadata="Content Type: Summit Presentation | CoE: AI/ML | Technology: AI/Machine Learning | Industry: Technology"
                thumbnailUrl="https://cdn.builder.io/api/v1/image/assets/37c87193e6d446d1a52b9092b7ea3b38/2696b666999e9d5f61e2ff607f707731c02d4529?placeholderIfAbsent=true"
                iconUrl="https://cdn.builder.io/api/v1/image/assets/37c87193e6d446d1a52b9092b7ea3b38/96f038dcd8a26acbf133beadc538274952570936?placeholderIfAbsent=true"
                author="Admin"
                date="May 22, 2024"
              />

              <ContentCard
                title="AI And Machine Learning Overview"
                description="AI and machine learning are transforming industries by using data to create models and make decisions..."
                metadata="Content Type: Summit Presentation | CoE: AI/ML | Technology: AI/Machine Learning | Industry: Technology"
                thumbnailUrl="https://cdn.builder.io/api/v1/image/assets/37c87193e6d446d1a52b9092b7ea3b38/38ad55091180b2402c269597ea5942560c6c116b?placeholderIfAbsent=true"
                iconUrl="https://cdn.builder.io/api/v1/image/assets/37c87193e6d446d1a52b9092b7ea3b38/d7dda78b9c14abf37f780f1d58fe49f5902b757e?placeholderIfAbsent=true"
                author="Admin"
                date="May 24, 2024"
              />

              <ContentCard
                title="Using AI To Personalize Your Apps"
                description="Using AI to personalize apps for front desk sales agents and increase performance though training an..."
                metadata="Content Type: Summit Presentation | CoE: AI/ML | Technology: AI/Machine Learning | Industry: Technology"
                thumbnailUrl="https://cdn.builder.io/api/v1/image/assets/37c87193e6d446d1a52b9092b7ea3b38/e2452079368d02e18d62d30abc65e7196efa4d29?placeholderIfAbsent=true"
                iconUrl="https://cdn.builder.io/api/v1/image/assets/37c87193e6d446d1a52b9092b7ea3b38/d64fb0e93ff46c477ade4a7c81eba3ee15cbdcba?placeholderIfAbsent=true"
                author="Admin"
                date="February 27, 2024"
              />
            </div>
            <button className="text-[#262626] self-stretch rounded border border-[#262626] mt-5 px-[10px] py-1 text-[15px] font-medium tracking-[0.46px] leading-[26px]">
              More Summit Presentations
            </button>
          </div>
        </div>

        {/* Related Case Studies Section */}
        <div className="mt-5 w-full font-roboto">
          <div className="text-[#262626] w-full rounded-t-lg border-b border-[#E5E5E5] px-5 py-5 gap-3 text-2xl font-medium leading-none bg-white">
            Related Case Studies in same CoE
          </div>
          <div className="items-center rounded-b-lg flex w-full px-5 py-5 flex-col justify-start bg-[#F2F2F2]">
            <div className="flex w-full items-start gap-5 tracking-[0.15px] justify-start flex-wrap">
              <ContentCard
                title="E-Commerce Retail Analytics Platform"
                description="A case study on the implementation of a data analytics and AI/ML solution for a retail company, focusing on..."
                metadata="Content Type: Case Study | CoE: AI/ML | Technology: Data Lake & Big Data Analytics | Industry: Retail & Supply Chain"
                thumbnailUrl="https://cdn.builder.io/api/v1/image/assets/37c87193e6d446d1a52b9092b7ea3b38/810c631a8006e43b6a529568ce2db92fb8fc99e5?placeholderIfAbsent=true"
                iconUrl="https://cdn.builder.io/api/v1/image/assets/37c87193e6d446d1a52b9092b7ea3b38/344f50acae5e75b2e8df2a7ddf5a1718380ea1b2?placeholderIfAbsent=true"
                author="Sandeep N S"
                date="February 15, 2022"
              />

              <ContentCard
                title="UPMC: Medical Image Diagnostics Assistance..."
                description="UPMC Medical Image Diagnostics Assistance System (MIDAS) was engineered for a large multi million dolla..."
                metadata="Content Type: Case Study | CoE: AI/ML | Technology: AI/Machine Learning | Industry: Technology"
                thumbnailUrl="https://cdn.builder.io/api/v1/image/assets/37c87193e6d446d1a52b9092b7ea3b38/5e93abb1b54ef426d3596cee1f4a6b65b3590619?placeholderIfAbsent=true"
                iconUrl="https://cdn.builder.io/api/v1/image/assets/37c87193e6d446d1a52b9092b7ea3b38/e0a18f0d072d433de0be8e9054abe8adf60ef417?placeholderIfAbsent=true"
                author="Sandeep N S"
                date="February 15, 2022"
              />
            </div>
            <button className="text-[#262626] self-stretch rounded border border-[#262626] mt-5 px-[10px] py-1 text-[15px] font-medium tracking-[0.46px] leading-[26px]">
              More Case Studies
            </button>
          </div>
        </div>

        <div className="text-[#262626] self-stretch w-full rounded-lg mt-5 px-5 py-5 gap-[10px] font-roboto text-base font-normal text-center tracking-[0.15px] bg-white">
          Copyright 2024 Accion Labs | All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default ViewPresentationPage;
