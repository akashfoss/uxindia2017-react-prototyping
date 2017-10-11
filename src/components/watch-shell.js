import React from 'react';
import PropTypes from 'prop-types';
import { TimeTeller } from './time-teller';

const c = {
    rim: 20,
    or: 60,
    ir: 50,
    width: 312,
    height: 390
};


export class WatchShell extends React.PureComponent {

    static propTypes = {
        rimColor: PropTypes.string,
        faceColor: PropTypes.string,
        strapColor: PropTypes.string,
        buttonColor: PropTypes.string,
        wind: PropTypes.bool,
        pause: PropTypes.bool,
    };

    static defaultProps = {
        rimColor: '#555',
        faceColor: 'white',
        strapColor: '#777',
        buttonColor: '#CCC',
        wind: false,
        pause: false,
    };

    render() {
        const { children, rimColor, faceColor, strapColor, buttonColor, wind, pause } = this.props;

        return (
            <svg width={c.width + 60} height={c.height + 200}>
                <defs>
                    <clipPath id="clip">
                        <rect x={0}
                              y={0}
                              width={c.width}
                              height={c.height}
                              rx={c.ir} ry={c.ir} />
                    </clipPath>

                    <linearGradient x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'} id="strap-gradient">
                        <stop offset={'0%'} stopColor={'#000'} stopOpacity={0} />
                        <stop offset={'100%'} stopColor={'#000'} stopOpacity={0.35} />
                    </linearGradient>

                </defs>

                <g transform={'translate(30,0)'}>
                    <rect fill={strapColor}
                          x={c.width * 0.15}
                          y={0}
                          width={c.width * 0.7}
                          height={c.height + 200} />

                    <rect fill={'url(#strap-gradient)'}
                          x={c.width * 0.15}
                          y={0}
                          width={c.width * 0.7}
                          height={c.height + 200} />

                    <g transform={`translate(0, ${100})`}>
                        <rect fill={rimColor} width={c.width} height={c.height} rx={c.or} ry={c.or} />
                        <rect fill={faceColor} width={c.width - c.rim} height={c.height - c.rim}
                              x={c.rim / 2} y={c.rim / 2}
                              rx={c.ir} ry={c.ir} />

                        <g transform={`translate(${c.width - 4}, ${100})`}>
                            <rect fill={buttonColor}
                                  width={20}
                                  height={60}
                                  rx={4} ry={20} />

                            {
                                [0, 1, 2, 3, 4].map(x => {
                                    return (
                                        <rect fill={'#555'}
                                              key={x}
                                              width={5}
                                              height={2}
                                              x={13} y={10 + 10 * x}
                                              rx={0} ry={0} />
                                    );
                                })
                            }

                            <rect fill={buttonColor}
                                  width={10}
                                  height={90}
                                  x={0} y={110}
                                  rx={4} ry={16} />

                        </g>

                        <g clipPath={'url(#clip)'}>
                            <TimeTeller wind={wind} pause={pause}>
                                {
                                    (time) => children ? children({ config: c, time }) : null
                                }
                            </TimeTeller>
                        </g>
                    </g>
                </g>
            </svg>

        );
    }
}

