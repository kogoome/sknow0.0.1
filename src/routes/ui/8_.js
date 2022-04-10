import Popper from '@popperjs/core/dist/umd/popper.js'

export function tooltip(node, options) {
  const button = node
  const tooltipComponent = options.content

  let popperInstance, componentInstance;

  button.addEventListener('mouseover', show);
  button.addEventListener('mouseout', hide);

  function show() {
    componentInstance = new tooltipComponent({
      target: document.body,
      props: { row: options.row, column: options.column }
    })

    tooltip = document.querySelector('#tooltip');
    tooltip.setAttribute('data-show', '');

    popperInstance = Popper.createPopper(button, tooltip, {
      placement: "right",
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });;
  }

  function hide() {
    tooltip = document.querySelector('#tooltip');
    tooltip.removeAttribute('data-show');

    if (popperInstance) {
      popperInstance.destroy();
      popperInstance = null;
    }

    componentInstance.$destroy()
  }

  return {
    destroy() {
      button.removeEventListener('mouseover', show);
      button.removeEventListener('mouseout', hide);
    }
  };
}