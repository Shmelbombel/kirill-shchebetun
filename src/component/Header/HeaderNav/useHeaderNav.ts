import { useEffect, useState, MouseEvent } from "react";

export const useHeaderNav = () => {
  const [sectionHeights, setSectionHeights] = useState<number[]>([]);

  const getSectionHeights = () => {
    const allSection = document.body
      .querySelector("main")
      ?.querySelectorAll("section");

    if (allSection?.length) {
      const innerArr: number[] = [];
      allSection.forEach((sectionItem) => {
        innerArr.push(sectionItem.offsetHeight);
      });

      for (let i = 0; i < innerArr.length; i++) {
        for (let j = 0; j < innerArr.length; i++) {
          console.log(innerArr[j]);
        }
      }

      setSectionHeights(innerArr);
      // innerArr.reduce((sum, currentValue) => sum + currentValue, 0),
    }
  };

  useEffect(() => {
    // getSectionHeights();
    // window.addEventListener("resize", getSectionHeights);
    return () => {
      // window.removeEventListener("resize", getSectionHeights);
    };
  }, []);

  const onClick = (index: number) => {
    return (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      window.scrollTo({ top: sectionHeights[index], behavior: "smooth" });
    };
  };

  return {
    onClick,
  };
};
