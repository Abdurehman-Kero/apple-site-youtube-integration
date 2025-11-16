import $ from "jquery";
import React, { useEffect } from "react"; 
const AccordionHandler = () => {
  useEffect(() => {
    $(function () {
      function attachToggle() {
        if ($(window).width() <= 768) {
          $(".footer-links-wrapper h3")
            .off("click")
            .on("click", function () {
              $(this).next("ul").slideToggle();
              $(this).toggleClass("iconRotator");
            });

          $(".footer-links-wrapper ul").hide();
          $(".footer-links-wrapper h3").removeClass("iconRotator");
        } else {
          $(".footer-links-wrapper ul").show();
          $(".footer-links-wrapper h3").off("click");
          $(".footer-links-wrapper h3").removeClass("iconRotator");
        }
      }

      attachToggle();
      $(window).resize(function () {
        attachToggle();
      });
    });
  }, []);

  return null;
};

export default AccordionHandler;
