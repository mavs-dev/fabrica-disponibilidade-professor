import { trigger, style, transition, animate, query, group, animateChild } from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('dadosProfissionaisPage <=> disponibilidadesPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'relative',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '100%' })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('200ms ease-out', style({ left: '100%' }))
                ]),
                query(':enter', [
                    animate('600ms ease-out', style({ left: '0%' }))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('* <=> disciplinasInteressePage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'relative',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '100%' })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('200ms ease-out', style({ left: '100%' }))
                ]),
                query(':enter', [
                    animate('600ms ease-out', style({ left: '0%' }))
                ])
            ]),
            query(':enter', animateChild()),
        ])
    ]);
