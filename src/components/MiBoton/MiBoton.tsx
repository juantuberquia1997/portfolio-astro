import React from 'react'

export default function MiBoton() {

const tagAbout = document.querySelector('#about') as HTMLInputElement;
const tagMenuAbout = document.querySelector('#menu-about') as HTMLInputElement;

// console.log("tags", tagAbout, tagMenuAbout);

   const sliderObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          console.log("entry", entry.isIntersecting);
          if (entry.isIntersecting) {
            tagMenuAbout.classList.remove('text-slate-500'); 
            tagMenuAbout.classList.add('text-slate-200');
          }else{
            tagMenuAbout.classList.add('text-slate-500');
          }
        });
      },
      { threshold: 1 });

    sliderObserver.observe(tagAbout);



  return (
    <button>
      Click aquí
    </button>
  );
}
