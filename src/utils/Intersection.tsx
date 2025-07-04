
interface IntersectionProps {
  element: string;
  tagMenu: string;
  threshold?: number;
}

export default function Intersection({ element, tagMenu , threshold }: IntersectionProps) {
  const tagAbout = document.querySelector(element) as HTMLInputElement;
  const tagMenuAbout = document.querySelector(
    tagMenu
  ) as HTMLInputElement;

  const sliderObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tagMenuAbout.classList.remove("text-slate-500");
          tagMenuAbout.classList.add("text-slate-200");
        } else {
          tagMenuAbout.classList.add("text-slate-500");
        }
      });
    },
    { 
      threshold: threshold,
      rootMargin: "0px 0px -200px 0px"
    }
  );
  sliderObserver.observe(tagAbout);
  return <></>;
}
