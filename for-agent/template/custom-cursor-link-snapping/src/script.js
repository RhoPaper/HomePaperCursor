const linkHighlight = (() => {
  const PAGE_LINKS = document.querySelectorAll('a');
  const HIGHLIGHT = document.getElementById('link-highlight');
  let isOnElement = false;
  
  // move highlighter
  const moveHighlighter = (e) => {
    if(isOnElement) return false;
    HIGHLIGHT.style.left = `${e.pageX - 15}px`;
    HIGHLIGHT.style.top = `${e.pageY - 15}px`;
  }
  document.addEventListener('mousemove', moveHighlighter);
  
  // apply styling over target
  const highlightLink = (ele) => {
    HIGHLIGHT.style.left = `${ele.offsetLeft - 12}px`;
    HIGHLIGHT.style.top = `${ele.offsetTop - 6}px`;
    HIGHLIGHT.style.width = `${ele.offsetWidth + 24}px`;
    HIGHLIGHT.style.height = `${ele.offsetHeight + 12}px`;
    isOnElement = true;
  };
  PAGE_LINKS.forEach(link => link.addEventListener('mouseenter', highlightLink.bind(null, link, false)));
  
  // default styling off target
  const unHighlightLink = () => {
    HIGHLIGHT.style.width = '30px';
    HIGHLIGHT.style.height = '30px';
    isOnElement = false;
  };
  PAGE_LINKS.forEach(link => link.addEventListener('mouseleave', unHighlightLink));
})();