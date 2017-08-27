const on = window.addEventListener;
const off = window.removeEventListener;

const scrollobserve = (options = {}, selector = '.scrollobserve') => {
  const defaults = {
    reverse: true,
    inViewClass: 'so-in',
    offViewClass: 'so-out',
    offset: 0,
    ignoreTransform: true
  };
  const config = Object.assign({}, defaults, options);
  let scrollTop = 0;
  let lastScroll = undefined;
  let observables = [];
  let frame;

  const index = () => {
    const els = document.querySelectorAll(selector);
    return observables = Array.from(els).map((el) => {
      const thisEl = el;
      let rect = {};
      if(config.ignoreTransform){
        let [offsetTop, offsetLeft] = [0, 0];
        const offsetHeight = el.offsetHeight;
        while(el){
          offsetTop += el.offsetTop;
          el =  el.offsetParent;
        }
        rect.top = offsetTop;
        rect.bottom = offsetTop + offsetHeight;
      }else{
        rect = el.getBoundingClientRect();
      }
      rect.el = thisEl;
      return rect;
    });
  };

  const update = () => {
    frame = false;
    const height = window.innerHeight;
    observables.forEach((rect) => {
      const reveal = rect.bottom > scrollTop && rect.top < (scrollTop + height) - (height * config.offset);
      if(rect.reveal !== reveal){
        rect.el.classList.toggle(config.inViewClass, reveal);
        rect.el.classList.toggle(config.offViewClass, !reveal);
      }
      rect.reveal = reveal;
    });

    if(!config.reverse){
      observables = observables.filter(rect => !rect.reveal);
    }
  };

  const check = () => {
    if(observables.length && lastScroll !== scrollTop){
      frame = frame || requestAnimationFrame(update);
    }
  };

  const onScroll = () => {
    scrollTop = window.pageYOffset;
    check();
  };

  index();
  check();
  on('scroll', onScroll);
  on('resize', index);
  on('resize', onScroll);

  return {
    observables,
    config,
    destroy: () => {
      off('scroll', onScroll);
      off('resize', index);
      off('resize', onScroll);
    }
  };
};

export default scrollobserve;
