import React from "react";

const timelineNodes = Array.from({ length: 5 }, (_, index) => index);

const ActivityTimeline = () => {
  return (
    <section className="relative z-0 w-full px-[200px] pb-[14vh] box-border">
      <div className="relative w-full max-w-[1040px] mx-auto">
        <div className="relative z-0 w-full h-[120px]">
          <div
            className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2"
            style={{
              background:
                "linear-gradient(90deg, #FFAE00 0%, #FF8A00 50%, #FF5E00 100%)",
              boxShadow: "0 0 12px rgba(255, 140, 0, 0.35)",
            }}
          />
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center justify-between">
            {timelineNodes.map((node) => (
              <span
              
                key={node}
                className="w-[12px] h-[12px] rounded-full bg-white"
                style={{
                  boxShadow:
                    "0 0 12px rgba(255, 210, 140, 0.9), 0 0 24px rgba(255, 140, 0, 0.65)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityTimeline;
