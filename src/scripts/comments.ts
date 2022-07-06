window.addEventListener("load", () => {
  const container = document.querySelector("[data-references]");

  if (container) {
    const comment = {
      container: container.querySelector("[data-comment]"),
      name: container.querySelector("[data-current-comment-name]"),
      job: container.querySelector("[data-current-comment-job]"),
      picture: container.querySelector("[data-current-comment-picture]"),
      text: container.querySelector("[data-current-comment-text]"),
    };
    const buttons = container.querySelectorAll<HTMLElement>(
      "[data-customer-name]",
    );

    let loop;

    const setLoop = (index = 0) => {
      loop = setInterval(() => {
        index++;
        if (index == buttons.length) {
          index = 0;
        }
        updateComment(buttons, buttons[index]);
      }, 10000);
    };
    setLoop();
    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        updateComment(buttons, button);
        clearInterval(loop);
      });
    });
    const updateComment = (buttons, button) => {
      const items = document.querySelectorAll("[data-comment] > *");
      updateCommentIndicator({ buttons, button });
      containerContentTransition(items);
      setTimeout(() => {
        setCommentContent(button.dataset);
      }, 200);
    };

    const updateCommentIndicator = ({ buttons, button }) => {
      buttons.forEach((item) => {
        item.classList.remove("bg-primary-500");
        item.classList.add("bg-gray-300");
      });
      button.classList.remove("bg-gray-300");
      button.classList.add("bg-primary-500");
    };

    const setCommentContent = (dataset) => {
      comment.name.textContent = dataset.customerName;
      comment.job.textContent = dataset.customerJob;
      comment.picture.src = dataset.customerPicture;
      comment.text.textContent = dataset.customerComment;
    };

    const containerContentTransition = (items) => {
      items.forEach((i) => {
        i.classList.add("opacity-0");
        i.classList.add("-ml-16");
        setTimeout(() => {
          i.classList.remove("-ml-16");
          i.classList.add("ml-16");
        }, 200);
        setTimeout(() => {
          i.classList.remove("opacity-0");
          i.classList.remove("ml-16");
        }, 500);
      });
    };
  }
});

export {};
