import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const toastOpenCloseAnimation = trigger('toasAnimation', [
  state(
    'static',
    style({
      top: '{{distTop}}',
      right: '{{distRight}}',
      bottom: '{{distBottom}}',
      left: '{{distLeft}}',
    }),
    {
      params: {
        distTop: '20px',
        distRight: '20px',
        distLeft: '20px',
        distBottom: '20px',
      },
    }
  ),
  state(
    'start',
    style({
      top: '{{distTop}}',
      right: '{{distRight}}',
      bottom: '{{distBottom}}',
      left: '{{distLeft}}',
    }),
    {
      params: {
        distTop: '20px',
        distRight: '20px',
        distLeft: '20px',
        distBottom: '20px',
      },
    }
  ),
  state(
    'open',
    style({
      top: '{{distTop}}',
      right: '{{distRight}}',
      bottom: '{{distBottom}}',
      left: '{{distLeft}}',
    }),
    {
      params: {
        distTop: '20px',
        distRight: '20px',
        distLeft: '20px',
        distBottom: '20px',
      },
    }
  ),
  state('close', style({})),

  transition('start => open', animate('{{openAnimationTime}}ms')),

  transition(
    'open <=> close',
    animate(
      '{{keyframeTime}}ms',
      keyframes([
        style({ transform: 'scale(1)', offset: 0 }),
        style({ transform: 'scale(1.05)', offset: 0.2 }),
        style({ transform: 'scale(1)', offset: 1 }),
      ])
    )
  ),
]);
