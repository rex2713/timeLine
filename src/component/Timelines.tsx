import { datebookList } from "../utils/datebookReact"
import type { datebookType } from "../utils/datebookReact"
import { useState, useRef, useEffect } from "react"
import "../scss/timeLine.scss"

interface StageGroup {
  stage: string;
  data: Omit<datebookType, 'stage'>[];
}

const Timelines: React.FC = () => {
  let currentYear = ""
  let currentStage = ""
  const cardWidth = 313
  const scrollRef = useRef<HTMLDivElement>(null)
  const timeLineRef = useRef<HTMLDivElement>(null)
  const [scrollValue, setScrollValue] = useState<number>(cardWidth * 2 - 1)
  const [currentCardYear, setCurrentCardYear] = useState("")
  //反轉json順序
  const timeLineData = Object.values(datebookList).reverse()
  //處理月份資料格式
  timeLineData.map((item) => {
    return (item.month = item.month?.padStart(2, "0"))
  })
  
  //處理stage分組
  const timeStageGroup = timeLineData.reduce(
    (group: StageGroup[], item: datebookType) => {
      const { stage, ...rest } = item
      const found = group.find((item: StageGroup) => item.stage === stage)
      if (found) {
        found.data.push(rest)
      } else {
        group.push({ stage: stage, data: [rest] })
      }
      return group
    },
    []
  )
  //處理點擊跳轉
  const handleClick = (timeIndex: number) => {
    if (timeIndex < 2) {
      scrollRef.current?.scrollTo({
        left: 0,
        behavior: "smooth",
      })
    } else {
      scrollRef.current?.scrollTo({
        left: (timeIndex - 1) * cardWidth + 1,
        behavior: "smooth",
      })
    }
  }
  //取得當前scroll位置
  const handleScroll = () => {
    //處理卡片資料滾動
    const scrollElement = scrollRef.current
    const timeLineElement = timeLineRef.current
    if (scrollElement) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollElement
      //判斷是否已到底部
      if (scrollLeft + clientWidth >= scrollWidth) {
        setScrollValue(scrollWidth + cardWidth - 1)
      } else {
        //判斷起始距離
        scrollLeft < cardWidth
          ? setScrollValue(cardWidth * 2)
          : setScrollValue(scrollLeft + cardWidth)
      }
    }
    //處理timeLine滾動
    if (scrollElement && timeLineElement) {
      const cardIndex = Math.floor(
        (scrollElement.scrollLeft + cardWidth) / cardWidth
      )
      const timeLineChildren = Array.from(
        timeLineElement.children
      ) as HTMLElement[]
      const timeLineCenterElement = timeLineChildren[cardIndex] as HTMLElement
      const offset =
        timeLineCenterElement.offsetLeft +
        timeLineCenterElement.clientWidth / 2 -
        timeLineElement.clientWidth / 2
      timeLineElement.scrollTo({
        left: offset,
        behavior: "smooth",
      })
    }
  }
  //封裝跟蹤scroll值動態加入css
  const addCssWithScroll = (timeIndex: number, stage: string, type: string) => {
    let cssString
    if (type === "dot") {
      if (stage === timeStageGroup[0].stage) {
        cssString = `border-[#f79005] border-[1px] !bg-white`
      } else if (stage === timeStageGroup[1].stage) {
        cssString = `border-[#458ecc] border-[1px] !bg-white`
      } else if (stage === timeStageGroup[2].stage) {
        cssString = `border-[#521f7e] border-[1px] !bg-white`
      }
    } else {
      if (stage === timeStageGroup[0].stage) {
        if (type === "stage" || type === "yearDot") {
          cssString = `!bg-[#f79005]`
        } else {
          cssString = `!text-[#f79005]`
        }
      } else if (stage === timeStageGroup[1].stage) {
        if (type === "stage" || type === "yearDot") {
          cssString = `!bg-[#458ecc]`
        } else {
          cssString = `!text-[#458ecc]`
        }
      } else if (stage === timeStageGroup[2].stage) {
        if (type === "stage" || type === "yearDot") {
          cssString = `!bg-[#521f7e]`
        } else {
          cssString = `!text-[#521f7e]`
        }
      }
    }
    return scrollValue / cardWidth > timeIndex && cssString
  }
  useEffect(() => {
    const scrollElement = scrollRef.current
    if (scrollElement) scrollElement.addEventListener("scroll", handleScroll)
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])
  useEffect(() => {
    const currentCardIndex = Math.floor(scrollValue / cardWidth)
    setCurrentCardYear(timeLineData[currentCardIndex].year)
  }, [scrollValue])
  return (
    <div>
      {/* 時間軸 */}
      <div
        ref={timeLineRef}
        className="flex text-white timeLine items-center overflow-x-scroll"
      >
        {timeLineData.map((item, timeIndex) => {
          if (item.stage !== currentStage) {
            currentStage = item.stage
            currentYear = item.year
            return (
              // tag+year+eventDot
              <div key={timeIndex} className="flex items-center">
                <span
                  className={`stage ${addCssWithScroll(timeIndex, currentStage, "stage")}`}
                  onClick={() => {
                    handleClick(timeIndex)
                  }}
                >
                  {item.stage}
                </span>
                <div className="flex yearContainer relative flex-col">
                  <p
                    className={`year ${addCssWithScroll(timeIndex, currentStage, "year")}`}
                  >
                    {item.year}
                  </p>
                  <span
                    onClick={() => {
                      handleClick(timeIndex)
                    }}
                    className={`yearDot ${addCssWithScroll(timeIndex, currentStage, "yearDot")}`}
                  ></span>
                  <span
                    className={`line ${addCssWithScroll(timeIndex, currentStage, "yearDot")}`}
                  ></span>
                </div>
                {/* 清除第一階段的eventDot */}
                {item.year !== "2014" && (
                  <span
                    onClick={() => {
                      handleClick(timeIndex)
                    }}
                    className={`eventDot ${addCssWithScroll(timeIndex, currentStage, "dot")}`}
                  ></span>
                )}
              </div>
            )
          } else if (item.stage === currentStage && item.year !== currentYear) {
            currentYear = item.year
            return (
              // year+eventDot
              <div className="flex items-center" key={timeIndex}>
                <div className="flex flex-col items-center yearContainer">
                  <p
                    className={`year ${addCssWithScroll(timeIndex, currentStage, "year")}`}
                  >
                    {item.year}
                  </p>
                  <span
                    onClick={() => {
                      handleClick(timeIndex)
                    }}
                    className={`yearDot ${addCssWithScroll(timeIndex, currentStage, "yearDot")}`}
                  ></span>
                  <span
                    className={`line ${addCssWithScroll(timeIndex, currentStage, "yearDot")}`}
                  ></span>
                </div>
                {/* 清除第一階段的eventDot */}
                {item.year !== "2017" && (
                  <span
                    key={timeIndex}
                    onClick={() => {
                      handleClick(timeIndex)
                    }}
                    className={`eventDot ${addCssWithScroll(timeIndex, currentStage, "dot")}`}
                  ></span>
                )}
              </div>
            )
          } else if (item.stage === currentStage && item.year === currentYear) {
            return (
              // eventDot
              <div
                key={timeIndex}
                className={`dotContainer flex ${currentCardYear === item.year ? "pl-[23px]" : "pl-[8px]"}`}
              >
                <span
                  onClick={() => {
                    handleClick(timeIndex)
                  }}
                  className={`eventDot ${addCssWithScroll(timeIndex, currentStage, "dot")}`}
                ></span>
                <span
                  className={`line ${addCssWithScroll(timeIndex, currentStage, "yearDot")}`}
                ></span>
                {/* 判斷此stage的最後一個dot加上線段 */}
                {item.stage !== timeLineData[timeIndex + 1]?.stage && (
                  <div
                    className={` ${currentCardYear === item.year ? "pr-[23px]" : "pr-[8px]"}`}
                  >
                    <span
                      className={`line ${addCssWithScroll(timeIndex, currentStage, "yearDot")}`}
                    ></span>
                  </div>
                )}
              </div>
            )
          }
        })}
      </div>
      <div>
        {/* 卡片 */}
        <div ref={scrollRef} className="flex overflow-x-auto">
          {timeLineData.map((item, cardIndex) => {
            return (
              <div
                key={cardIndex + item.title}
                className={`cardContainer flex flex-col gap-[17.5px] ${cardIndex % 2 === 0 ? "bg-[rgb(244,244,244)]" : "bg-white"} ${cardIndex === 0 && "hidden"}`}
              >
                <div
                  className={`flex gap-[17.5px] transition-all duration-300 ${addCssWithScroll(cardIndex - 1, item.stage, "year")}`}
                >
                  <time
                    className="flex flex-col items-center"
                    dateTime={item.year + "-" + item.month}
                  >
                    <span className="text-[2.625rem]">{item.month}</span>
                    <span className="text-xs">{item.year}</span>
                  </time>
                  <h3 className="mt-2.5 font-medium">{item.title}</h3>
                </div>
                {/* {item.image && (
                  <img
                    className="object-cover h-[137px]"
                    src={item.image?.src}
                    alt={item.title}
                  />
                )} */}
                {item.content && (
                  <p className="leading-[1.75] tracking-[1.44px]">
                    {item.content}
                  </p>
                )}
                {item.url && (
                  <a
                    className="text-[rgb(247,144,5)] leading-[1.75] tracking-[1.44px] underline"
                    href={item.url.link}
                  >
                    {item.url.title}
                  </a>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Timelines
