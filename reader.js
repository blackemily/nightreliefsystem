document.addEventListener("DOMContentLoaded",function(){
  var path=window.location.pathname.split("/").pop()||"index.html";
  document.querySelectorAll('a[href="chapter-21.html"]').forEach(function(a){a.remove();});
  document.querySelectorAll(".toc-link").forEach(function(a){a.classList.toggle("active",a.getAttribute("href")===path);});
  document.querySelectorAll('.toc-link[href="chapter-20.html"]').forEach(function(a){a.innerHTML="<span>20</span>Safety, a Practical Sleep Plan, and an Informed Decision";});
  document.querySelectorAll('.mobile-links a[href="chapter-20.html"]').forEach(function(a){a.textContent="20 · Safety, a Practical Sleep Plan, and an Informed Decision";});
  document.querySelectorAll('.chapter-card[href="chapter-20.html"] strong').forEach(function(a){a.textContent="Safety, a Practical Sleep Plan, and an Informed Decision";});
  document.querySelectorAll('.chapter-card[href="chapter-20.html"] small').forEach(function(a){a.textContent="A careful safety review, a two-week routine, and an informed decision about supplements.";});
  document.querySelectorAll(".mobile-links a").forEach(function(a){a.addEventListener("click",function(){var d=a.closest("details");if(d)d.open=false;});});
});